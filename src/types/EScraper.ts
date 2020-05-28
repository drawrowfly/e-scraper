import { ItemEntity, ResultEntity } from '.';

export type Stores = 'Target';

export type ScrapingType = 'product' | 'reviews' | 'location';

export interface EntryOptions {
    store: Stores;
    productId?: string;
    keyword?: string;
    number?: number;
    offset?: number;
    storeId?: number;
    sponsoredProducts?: number;
}

export interface Output {
    total: number;
    has_more: boolean;
    next: number;
    output: ItemEntity[] | ResultEntity[];
}
