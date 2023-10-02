import type { IContentModel } from "@/models/iconentmodel";
import { FeedType } from "../feedType";

export interface ITwitterTweet extends IContentModel {
    id: string;
    text: string;
    created_at: Date;
    author_id: string;
}

export class TwitterTweet implements ITwitterTweet {
    readonly type: FeedType = FeedType.Twitter;
    id: string;
    text: string;
    created_at: Date;
    author_id: string;
    

    constructor(_id: string, _text: string, _created_at: Date, _author_id: string) {
        this.id = _id;
        this.text = _text;
        this.created_at = _created_at;
        this.author_id = _author_id;
    }
    
}