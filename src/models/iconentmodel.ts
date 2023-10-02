import type { FeedType } from "./feedType";

export interface IContentModel{
    readonly type: FeedType;
    text: string;
    created_at: Date;
}