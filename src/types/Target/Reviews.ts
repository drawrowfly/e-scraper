export interface TargetProductReviews {
    hasErrors: boolean;
    offset: number;
    totalResults: number;
    limit: number;
    duration: number;
    result: ResultEntity[];
}
export interface ResultEntity {
    Id: string;
    ProductId: string;
    Rating: number;
    RatingRange: number;
    Title?: string | null;
    ReviewText: string;
    IsRecommended?: boolean | null;
    SecondaryRatingsOrder?: (string | null)[] | null;
    SecondaryRatings: SecondaryRatings;
    BadgesOrder?: (string | null)[] | null;
    ClientResponses?: (ClientResponsesEntity | null)[] | null;
    Photos?: (PhotosEntity | null)[] | null;
    AuthorId: string;
    UserNickname: string;
    UserLocation?: null;
    Badges: Badges;
    IsSyndicated: boolean;
    SourceClient: string;
    IsRatingsOnly: boolean;
    TotalFeedbackCount: number;
    TotalPositiveFeedbackCount: number;
    TotalNegativeFeedbackCount: number;
    TotalClientResponseCount: number;
    SubmissionTime: string;
}

interface SecondaryRatings {
    Quality?: QualityOrValue | null;
    Value?: QualityOrValue1 | null;
}
interface QualityOrValue {
    Id: string;
    Value: number;
    Label: string;
    ValueRange: number;
    DisplayType: string;
}
interface QualityOrValue1 {
    Id: string;
    Value: number;
    Label: string;
    ValueRange: number;
    DisplayType: string;
}
interface ClientResponsesEntity {
    Department: string;
    Response: string;
    ResponseSource: string;
    Date: string;
}
interface PhotosEntity {
    Sizes: Sizes;
}
interface Sizes {
    normal: NormalOrThumbnail;
    thumbnail: NormalOrThumbnail;
}
interface NormalOrThumbnail {
    Id: string;
    Url: string;
}
interface Badges {
    verifiedPurchaser?: VerifiedPurchaser | null;
}
interface VerifiedPurchaser {
    Id: string;
    ContentType: string;
    BadgeType: string;
}
