import type { IContentModel } from "@/models/iconentmodel";

export interface ITwitterAttachment {
    media_keys: string[];
}
export interface ITwitterTweet extends IContentModel {
    id: string;
    text: string;
    created_at: Date;
    author_id: string;
    retweets_count: number;
    comment_count: number;
    likes_count: number;
    attachments?: ITwitterAttachment[];
}

export class TwitterTweet implements ITwitterTweet {
    //readonly type: FeedType = FeedType.Twitter;
    id: string;
    text: string;
    created_at: Date;
    author_id: string;
    retweets_count: number;
    comment_count: number;
    likes_count: number;
    attachments: ITwitterAttachment[];

    constructor(_id: string, _text: string, _created_at: Date, _author_id: string, _retweets_count: number, _comment_count: number, _likes_count: number, _attachments: ITwitterAttachment[]) {
        this.id = _id;
        this.text = _text;
        this.created_at = _created_at;
        this.author_id = _author_id;
        this.retweets_count = _retweets_count;
        this.comment_count = _comment_count;
        this.likes_count = _likes_count;
        this.attachments = _attachments;
    }
    
}