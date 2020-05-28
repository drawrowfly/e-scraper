/* eslint-disable no-throw-literal */
import { eStores } from './core';

import { config } from './constant';

import { EntryOptions, ScrapingType, Output } from './types';

const eScraper = async ({ number = 30, offset = 0, keyword, storeId, sponsoredProducts, store, productId }: EntryOptions, type: ScrapingType): Promise<Output> => {
    if (!eStores[store]) {
        throw `Unsupported store. Supported stores: ${config.supportedStores}`;
    }
    const scraper = new eStores[store]({ number, offset, keyword, storeId, sponsoredProducts, productId });

    const result = await scraper[type]();

    return result;
};

export const product = async (options: EntryOptions) => eScraper(options, 'product');
export const reviews = async (options: EntryOptions) => eScraper(options, 'reviews');
