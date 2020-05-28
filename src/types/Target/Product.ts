export interface SearchResponse {
    items: Items;
    metaData: MetaDataEntity[];
    facet_list?: FacetListEntity[] | null;
    sort_options: SortOptions;
    buckets?: BucketsEntity[] | null;
    experiments_viewed: ExperimentsViewedOrSponsored;
    suggestions?: string[] | null;
    sponsored: ExperimentsViewedOrSponsored;
}
export interface Items {
    Item: ItemEntity[];
}
export interface ItemEntity {
    esrb_rating?: string | null;
    subscribable: boolean;
    package_dimensions?: PackageDimensions | null;
    title: string;
    tcin: string;
    type: string;
    dpci?: string | null;
    upc?: string | null;
    url: string;
    description?: string | null;
    representative_child_part_number: string;
    merch_sub_class: string;
    merch_class: string;
    merch_class_id: string;
    brand: string;
    product_brand: ProductBrand;
    images?: ImagesEntityOrImages[] | null;
    item_street_date?: string | null;
    average_rating: number;
    total_reviews: number;
    top_reviews?: TopReviewsEntity[] | null;
    total_review_count: number;
    secondary_ratings_averages_order?: string[] | null;
    secondary_ratings_averages?: SecondaryRatingsAverages | null;
    ratings_only_review_count: number;
    rating_distribution?: RatingDistributionEntity[] | null;
    overall_rating_range: number;
    bullet_description?: string[] | null;
    soft_bullets?: SoftBullets | null;
    eligibility_rules?: EligibilityRules | null;
    price: Price;
    promotions?: PromotionsEntity[] | null;
    esp_item?: EspItem | null;
    packaging?: Packaging | null;
    sales_classification_nodes?: SalesClassificationNodesEntity[] | null;
    avail_ratio?: string | null;
    variation_attributes?: VariationAttributes | null;
    child_items?: ChildItemsEntity[] | null;
    product_delivery_method?: string | null;
}

export interface TargetProductSearch {
    search_recommendations: SearchRecommendations;
    search_response: SearchResponse;
}
interface SearchRecommendations {
    query: string;
}
interface PackageDimensions {
    weight: string;
    weight_unit_of_measure: string;
    width: string;
    depth: string;
    height: string;
    dimension_unit_of_measure: string;
}
interface ProductBrand {
    facet_id: string;
    brand: string;
}
interface ImagesEntityOrImages {
    base_url: string;
    primary: string;
    alternate_urls?: string[] | null;
    content_labels?: ContentLabelsEntity[] | null;
}
interface ContentLabelsEntity {
    image_url: string;
}
interface TopReviewsEntity {
    user_nickname: string;
    rating: number;
    rating_range: number;
    review_text: string;
    title?: string | null;
}
interface SecondaryRatingsAverages {
    Value?: ValueOrPerformance1OrFunctionalityOrQualityOrSoundQualityOrGameplayOrLastingAppealOrGraphics | null;
    performance_1?: ValueOrPerformance1OrFunctionalityOrQualityOrSoundQualityOrGameplayOrLastingAppealOrGraphics1 | null;
    functionality?: ValueOrPerformance1OrFunctionalityOrQualityOrSoundQualityOrGameplayOrLastingAppealOrGraphics2 | null;
    Quality?: ValueOrPerformance1OrFunctionalityOrQualityOrSoundQualityOrGameplayOrLastingAppealOrGraphics3 | null;
    SoundQuality?: ValueOrPerformance1OrFunctionalityOrQualityOrSoundQualityOrGameplayOrLastingAppealOrGraphics4 | null;
    gameplay?: ValueOrPerformance1OrFunctionalityOrQualityOrSoundQualityOrGameplayOrLastingAppealOrGraphics5 | null;
    lastingAppeal?: ValueOrPerformance1OrFunctionalityOrQualityOrSoundQualityOrGameplayOrLastingAppealOrGraphics6 | null;
    Graphics?: ValueOrPerformance1OrFunctionalityOrQualityOrSoundQualityOrGameplayOrLastingAppealOrGraphics7 | null;
}
interface ValueOrPerformance1OrFunctionalityOrQualityOrSoundQualityOrGameplayOrLastingAppealOrGraphics {
    Id: string;
    AverageRating: number;
    Label: string;
    ValueRange: number;
    DisplayType: string;
}
interface ValueOrPerformance1OrFunctionalityOrQualityOrSoundQualityOrGameplayOrLastingAppealOrGraphics1 {
    Id: string;
    AverageRating: number;
    Label: string;
    ValueRange: number;
    DisplayType: string;
}
interface ValueOrPerformance1OrFunctionalityOrQualityOrSoundQualityOrGameplayOrLastingAppealOrGraphics2 {
    Id: string;
    AverageRating: number;
    Label: string;
    ValueRange: number;
    DisplayType: string;
}
interface ValueOrPerformance1OrFunctionalityOrQualityOrSoundQualityOrGameplayOrLastingAppealOrGraphics3 {
    Id: string;
    AverageRating: number;
    Label: string;
    ValueRange: number;
    DisplayType: string;
}
interface ValueOrPerformance1OrFunctionalityOrQualityOrSoundQualityOrGameplayOrLastingAppealOrGraphics4 {
    Id: string;
    AverageRating: number;
    Label: string;
    ValueRange: number;
    DisplayType: string;
}
interface ValueOrPerformance1OrFunctionalityOrQualityOrSoundQualityOrGameplayOrLastingAppealOrGraphics5 {
    Id: string;
    AverageRating: number;
    Label: string;
    ValueRange: number;
    DisplayType: string;
}
interface ValueOrPerformance1OrFunctionalityOrQualityOrSoundQualityOrGameplayOrLastingAppealOrGraphics6 {
    Id: string;
    AverageRating: number;
    Label: string;
    ValueRange: number;
    DisplayType: string;
}
interface ValueOrPerformance1OrFunctionalityOrQualityOrSoundQualityOrGameplayOrLastingAppealOrGraphics7 {
    Id: string;
    AverageRating: number;
    Label: string;
    ValueRange: number;
    DisplayType: string;
}
interface RatingDistributionEntity {
    Count: number;
    RatingValue: number;
}
interface SoftBullets {
    title: string;
    bullets?: string[] | null;
}
interface EligibilityRules {
    inventory_notification_to_guest_excluded: InventoryNotificationToGuestExcludedOrHoldOrRushOrShipToGuestOrShipToStoreOrScheduledDelivery;
    hold: InventoryNotificationToGuestExcludedOrHoldOrRushOrShipToGuestOrShipToStoreOrScheduledDelivery;
    rush?: InventoryNotificationToGuestExcludedOrHoldOrRushOrShipToGuestOrShipToStoreOrScheduledDelivery1 | null;
    ship_to_guest: InventoryNotificationToGuestExcludedOrHoldOrRushOrShipToGuestOrShipToStoreOrScheduledDelivery;
    ship_to_store?: InventoryNotificationToGuestExcludedOrHoldOrRushOrShipToGuestOrShipToStoreOrScheduledDelivery2 | null;
    scheduled_delivery?: InventoryNotificationToGuestExcludedOrHoldOrRushOrShipToGuestOrShipToStoreOrScheduledDelivery3 | null;
}
interface InventoryNotificationToGuestExcludedOrHoldOrRushOrShipToGuestOrShipToStoreOrScheduledDelivery {
    is_active: boolean;
}
interface InventoryNotificationToGuestExcludedOrHoldOrRushOrShipToGuestOrShipToStoreOrScheduledDelivery1 {
    is_active: boolean;
}
interface InventoryNotificationToGuestExcludedOrHoldOrRushOrShipToGuestOrShipToStoreOrScheduledDelivery2 {
    is_active: boolean;
}
interface InventoryNotificationToGuestExcludedOrHoldOrRushOrShipToGuestOrShipToStoreOrScheduledDelivery3 {
    is_active: boolean;
}
interface Price {
    tcin: string;
    formatted_current_price: string;
    formatted_current_price_type: string;
    is_current_price_range: boolean;
    current_retail?: number | null;
    current_retail_min?: number | null;
    current_retail_max?: number | null;
    reg_retail_min?: number | null;
    reg_retail_max?: number | null;
}
interface PromotionsEntity {
    promotion_id: string;
    applied_location_id: number;
    start_date: string;
    end_date: string;
    visibility: number;
    time_based: boolean;
    channel: string;
    plp_message?: string | null;
    pdp_message: string;
    subscription_type: string;
    legal_disclaimer_text: string;
    site_wide: boolean;
    global_subscription_flag: boolean;
    threshold_type: string;
    threshold_value: number;
    promotion_class: string;
    promotion_url?: string | null;
}
interface EspItem {
    tcin: string;
    esp_group_id: string;
    maximum_qualifying_price: number;
    minimum_qualifying_price: number;
    product_description: ProductDescription;
    enrichment: Enrichment;
    price: Price1;
}
interface ProductDescription {
    title: string;
    bullet_descriptions?: string[] | null;
}
interface Enrichment {
    images: Images;
}
interface Images {
    primary_image_url: string;
}
interface Price1 {
    tcin: string;
    formatted_current_price: string;
    formatted_current_price_type: string;
    is_current_price_range: boolean;
    current_retail: number;
}
interface Packaging {
    is_retail_ticketed: boolean;
}
interface SalesClassificationNodesEntity {
    node_id: string;
}
interface VariationAttributes {
    giftcard_denominations?: string[] | null;
    giftcard_delivery?: string[] | null;
}
interface ChildItemsEntity {
    tcin: string;
    images: ImagesEntityOrImages1;
    package_dimensions: PackageDimensions1;
    eligibility_rules?: EligibilityRules1 | null;
    prepaid_segment: PrepaidSegment;
}
interface ImagesEntityOrImages1 {
    base_url: string;
    primary: string;
    content_labels?: ContentLabelsEntity[] | null;
}
interface PackageDimensions1 {
    weight: string;
    weight_unit_of_measure: string;
    width: string;
    depth: string;
    height: string;
    dimension_unit_of_measure: string;
}
interface EligibilityRules1 {
    ship_to_store: InventoryNotificationToGuestExcludedOrHoldOrRushOrShipToGuestOrShipToStoreOrScheduledDelivery;
}
interface PrepaidSegment {
    denomination_option_code: string;
}
interface MetaDataEntity {
    name: string;
    value: number;
}
interface FacetListEntity {
    displayName: string;
    name: string;
    id: number;
    type: string;
    expand: boolean;
    details?: DetailsEntity[] | null;
}
interface DetailsEntity {
    display_name: string;
    value: string;
    descriptor: boolean;
    url: string;
    facetId?: string | null;
    facetCanonical?: string | null;
}
interface SortOptions {
    relevance: string;
    Featured: string;
    PriceLow: string;
    PriceHigh: string;
    RatingHigh: string;
    bestselling: string;
    newest: string;
}
interface BucketsEntity {
    items: Items1;
    metaData: MetaDataEntity1[];
}
interface Items1 {
    Item: ItemEntity1[];
}
interface ItemEntity1 {
    subscribable: boolean;
    package_dimensions?: PackageDimensions2 | null;
    title: string;
    tcin: string;
    type: string;
    url: string;
    description?: string | null;
    representative_child_part_number: string;
    merch_sub_class: string;
    merch_class: string;
    merch_class_id: string;
    images?: ImagesEntityOrImages[] | null;
    average_rating: number;
    total_reviews: number;
    total_review_count: number;
    ratings_only_review_count: number;
    rating_distribution?: RatingDistributionEntity[] | null;
    overall_rating_range: number;
    product_vendors?: ProductVendorsEntity[] | null;
    fulfillment?: Fulfillment | null;
    soft_bullets?: SoftBullets1 | null;
    price: Price2;
    sales_classification_nodes?: SalesClassificationNodesEntity[] | null;
    esrb_rating?: string | null;
    dpci?: string | null;
    upc?: string | null;
    brand?: string | null;
    product_brand?: ProductBrand1 | null;
    item_street_date?: string | null;
    top_reviews?: TopReviewsEntity[] | null;
    secondary_ratings_averages_order?: string[] | null;
    secondary_ratings_averages?: SecondaryRatingsAverages1 | null;
    bullet_description?: string[] | null;
    eligibility_rules?: EligibilityRules2 | null;
    promotions?: PromotionsEntity[] | null;
    esp_item?: EspItem1 | null;
    packaging?: Packaging1 | null;
    prepaid_segment?: PrepaidSegment1 | null;
    product_delivery_method?: string | null;
    avail_ratio?: string | null;
    variation_attributes?: VariationAttributes1 | null;
    child_items?: ChildItemsEntity1[] | null;
    ribbons?: string[] | null;
    swatches?: Swatches | null;
    promotion_call_out_message?: string | null;
}
interface PackageDimensions2 {
    weight: string;
    weight_unit_of_measure: string;
    width: string;
    depth: string;
    height: string;
    dimension_unit_of_measure: string;
}
interface ProductVendorsEntity {
    id: string;
    vendor_name: string;
    uri: string;
}
interface Fulfillment {
    is_marketplace: boolean;
}
interface SoftBullets1 {
    title: string;
    bullets?: string[] | null;
}
interface Price2 {
    tcin: string;
    formatted_current_price: string;
    formatted_current_price_type: string;
    is_current_price_range: boolean;
    current_retail?: number | null;
    current_retail_min?: number | null;
    current_retail_max?: number | null;
    reg_retail_min?: number | null;
    reg_retail_max?: number | null;
    formatted_comparison_price?: string | null;
    formatted_comparison_price_type?: string | null;
}
interface ProductBrand1 {
    facet_id: string;
    brand: string;
}
interface SecondaryRatingsAverages1 {
    Value?: ValueOrPerformance1OrFunctionalityOrQualityOrSoundQualityOrGameplayOrLastingAppealOrGraphics8 | null;
    Quality?: ValueOrPerformance1OrFunctionalityOrQualityOrSoundQualityOrGameplayOrLastingAppealOrGraphics9 | null;
    SoundQuality?: ValueOrPerformance1OrFunctionalityOrQualityOrSoundQualityOrGameplayOrLastingAppealOrGraphics10 | null;
    gameplay?: ValueOrPerformance1OrFunctionalityOrQualityOrSoundQualityOrGameplayOrLastingAppealOrGraphics11 | null;
    lastingAppeal?: ValueOrPerformance1OrFunctionalityOrQualityOrSoundQualityOrGameplayOrLastingAppealOrGraphics12 | null;
    Graphics?: ValueOrPerformance1OrFunctionalityOrQualityOrSoundQualityOrGameplayOrLastingAppealOrGraphics13 | null;
}
interface ValueOrPerformance1OrFunctionalityOrQualityOrSoundQualityOrGameplayOrLastingAppealOrGraphics8 {
    Id: string;
    AverageRating: number;
    Label: string;
    ValueRange: number;
    DisplayType: string;
}
interface ValueOrPerformance1OrFunctionalityOrQualityOrSoundQualityOrGameplayOrLastingAppealOrGraphics9 {
    Id: string;
    AverageRating: number;
    Label: string;
    ValueRange: number;
    DisplayType: string;
}
interface ValueOrPerformance1OrFunctionalityOrQualityOrSoundQualityOrGameplayOrLastingAppealOrGraphics10 {
    Id: string;
    AverageRating: number;
    Label: string;
    ValueRange: number;
    DisplayType: string;
}
interface ValueOrPerformance1OrFunctionalityOrQualityOrSoundQualityOrGameplayOrLastingAppealOrGraphics11 {
    Id: string;
    AverageRating: number;
    Label: string;
    ValueRange: number;
    DisplayType: string;
}
interface ValueOrPerformance1OrFunctionalityOrQualityOrSoundQualityOrGameplayOrLastingAppealOrGraphics12 {
    Id: string;
    AverageRating: number;
    Label: string;
    ValueRange: number;
    DisplayType: string;
}
interface ValueOrPerformance1OrFunctionalityOrQualityOrSoundQualityOrGameplayOrLastingAppealOrGraphics13 {
    Id: string;
    AverageRating: number;
    Label: string;
    ValueRange: number;
    DisplayType: string;
}
interface EligibilityRules2 {
    hold?: InventoryNotificationToGuestExcludedOrHoldOrRushOrShipToGuestOrShipToStoreOrScheduledDelivery4 | null;
    ship_to_store?: InventoryNotificationToGuestExcludedOrHoldOrRushOrShipToGuestOrShipToStoreOrScheduledDelivery5 | null;
}
interface InventoryNotificationToGuestExcludedOrHoldOrRushOrShipToGuestOrShipToStoreOrScheduledDelivery4 {
    is_active: boolean;
}
interface InventoryNotificationToGuestExcludedOrHoldOrRushOrShipToGuestOrShipToStoreOrScheduledDelivery5 {
    is_active: boolean;
}
interface EspItem1 {
    tcin: string;
    esp_group_id: string;
    maximum_qualifying_price: number;
    minimum_qualifying_price: number;
    product_description: ProductDescription;
    enrichment: Enrichment;
    price: Price1;
}
interface Packaging1 {
    is_retail_ticketed: boolean;
}
interface PrepaidSegment1 {
    denomination_option_code: string;
}
interface VariationAttributes1 {
    color?: string[] | null;
}
interface ChildItemsEntity1 {
    tcin: string;
    images: ImagesEntityOrImages;
    package_dimensions: PackageDimensions1;
    eligibility_rules?: EligibilityRules3 | null;
}
interface EligibilityRules3 {
    inventory_notification_to_guest_excluded: InventoryNotificationToGuestExcludedOrHoldOrRushOrShipToGuestOrShipToStoreOrScheduledDelivery;
    hold: InventoryNotificationToGuestExcludedOrHoldOrRushOrShipToGuestOrShipToStoreOrScheduledDelivery;
    rush?: InventoryNotificationToGuestExcludedOrHoldOrRushOrShipToGuestOrShipToStoreOrScheduledDelivery6 | null;
    ship_to_guest: InventoryNotificationToGuestExcludedOrHoldOrRushOrShipToGuestOrShipToStoreOrScheduledDelivery;
    ship_to_store: InventoryNotificationToGuestExcludedOrHoldOrRushOrShipToGuestOrShipToStoreOrScheduledDelivery;
    scheduled_delivery?: InventoryNotificationToGuestExcludedOrHoldOrRushOrShipToGuestOrShipToStoreOrScheduledDelivery3 | null;
}
interface InventoryNotificationToGuestExcludedOrHoldOrRushOrShipToGuestOrShipToStoreOrScheduledDelivery6 {
    is_active: boolean;
}
interface Swatches {
    color?: ColorEntity[] | null;
}
interface ColorEntity {
    color: string;
    partNumber: string;
    img_url: string;
}
interface MetaDataEntity1 {
    name: string;
    value: string;
}
interface ExperimentsViewedOrSponsored {}
