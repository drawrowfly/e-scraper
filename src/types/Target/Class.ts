export type TargetTypes = 'product' | 'location' | 'reviews';

export interface TargetConstructor {
    type?: TargetTypes;
    number: number;
    offset: number;
    keyword?: string;
    productId?: string;
    storeId?: number;
    sponsoredProducts?: number;
}
