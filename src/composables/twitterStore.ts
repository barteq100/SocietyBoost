import { TwitterTweet, type ITwitterTweet } from "@/models/twitter/twitterTweet";
import { getFeedStore} from "./ifeedstore";
import type { IFeedStoreDefinition } from "@/models/feed";
import { chuckPosts } from "@/models/twitter/twitterPostsFakeData";


class TwitterService implements IFeedService<ITwitterTweet> {

    async loadState(userId: string): Promise<ITwitterTweet[]> {
        if(userId == '0987654321') return chuckPosts;
        return [
            new TwitterTweet("1","someText", new Date(Date.now()),"1",33, 320, 2800 )
        ]
    }
    refeshState(): Promise<ITwitterTweet[]> {
        throw new Error("Method not implemented.");
    }
}

export interface TwitterStoreDefinition extends IFeedStoreDefinition<ITwitterTweet>{}
export function useTwitterStore(name: string, userId: string): TwitterStoreDefinition {return getFeedStore<ITwitterTweet>(name, userId, new TwitterService()) } 

export function getTwitterService(): TwitterService {
    return new TwitterService();
};
