import { MediaType } from "../mediaContent";
import type { ITwitterTweet } from "./twitterTweet";

enum TwitterMediaType {
    GIF = "animated_gif", 
    PHOTO = "photo", 
    VIDEO = "video"
}
interface ITwitterMediaObject {
    media_key: string;
    type: TwitterMediaType;
    url: string;
}
interface ITwitterIncludes {
    media: ITwitterMediaObject[]
}

interface ITwitterTweetResponse {
    data: ITwitterTweet[];
    includes: ITwitterIncludes[];
}

export function ToMediaType(twitterMediaType: TwitterMediaType): MediaType {
    switch (twitterMediaType) {
        case TwitterMediaType.VIDEO:
            return MediaType.VIDEO
        case TwitterMediaType.PHOTO:
            return MediaType.IMAGE;
        case TwitterMediaType.GIF:
            return MediaType.GIF
        default:
            return MediaType.IMAGE
    }
}