import fetch from 'node-fetch';
import { URLSearchParams } from 'url';

import { entryValidator } from '../helpers';

import { TargetConstructor, TargetProductSearch, TargetProductReviews, Output } from '../types';

export class Target {
    private number: number;

    private tcin: string;

    private offset: number;

    private keyword: string;

    private storeId: number;

    private sponsoredProducts: number;

    constructor({ number, offset = 0, keyword = '', storeId = 3991, sponsoredProducts = 1, productId = '' }: TargetConstructor) {
        this.number = number;
        this.offset = offset;
        this.keyword = keyword;
        this.storeId = storeId;
        this.sponsoredProducts = sponsoredProducts;
        this.tcin = productId;
    }

    /**
     * Target product scraper
     */
    public async product(): Promise<Output> {
        /**
         * Validate input values
         */
        entryValidator({
            keyword: { value: this.keyword, condition: '', required: true },
            storeId: { value: this.storeId, condition: 0, required: true },
            number: { value: this.number, condition: 90, required: false },
            offset: { value: this.offset, condition: 0, required: false },
            sponsoredProducts: { value: this.sponsoredProducts, condition: 0, required: false },
        });

        const query = new URLSearchParams({
            channel: 'web',
            count: `${this.number}`,
            default_purchasability_filter: 'false',
            facet_recovery: 'false',
            fulfillment_test_mode: 'grocery_opu_team_member_test',
            isDLP: 'false',
            keyword: this.keyword,
            offset: `${this.offset}`,
            pageId: `/s/${this.keyword}`,
            pricing_store_id: `${this.storeId}`,
            include_sponsored_search_v2: `${this.sponsoredProducts}`,
            platform: 'desktop',
            key: 'eb2551e4accc14f38cc42d32fbc2b2ea',
        });

        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
            },
        };

        const result = await fetch(`https://redsky.target.com/v2/plp/search/?${query}`, options);
        const json: TargetProductSearch = await result.json();

        try {
            return {
                total: json.search_response.metaData[5].value,
                has_more: !(this.offset + this.number > json.search_response.metaData[5].value),
                next: this.offset + this.number > json.search_response.metaData[5].value ? 0 : this.offset + this.number,
                output: json.search_response.items.Item,
            };
        } catch (error) {
            return {
                total: 0,
                has_more: false,
                next: 0,
                output: [],
            };
        }
    }

    /**
     * Target product review scraper
     */
    public async reviews(): Promise<Output> {
        /**
         * Validate input values
         */
        entryValidator({
            tcin: { value: this.tcin, condition: '', required: true },
            number: { value: this.number, condition: 50, required: false },
            offset: { value: this.offset, condition: 0, required: false },
        });

        const query = new URLSearchParams({
            sort: 'time_desc',
            filter: '',
            count: `${this.number}`,
            offset: `${this.offset}`,
            key: 'eb2551e4accc14f38cc42d32fbc2b2ea',
        });

        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
            },
        };

        const result = await fetch(`https://redsky.target.com/groot-domain-api/v1/reviews/${this.tcin}/?${query}`, options);
        const json: TargetProductReviews = await result.json();

        try {
            return {
                total: json.totalResults,
                has_more: !(this.offset + this.number > json.totalResults),
                next: this.offset + this.number > json.totalResults ? 0 : this.offset + this.number,
                output: json.result,
            };
        } catch (error) {
            return {
                total: 0,
                has_more: false,
                next: 0,
                output: [],
            };
        }
    }
}
