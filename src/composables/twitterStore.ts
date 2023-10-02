import { TwitterTweet, type ITwitterTweet } from "@/models/twitter/twitterTweet";
import { getFeedStore} from "./ifeedstore";
import type { IFeedStoreDefinition } from "@/models/feed";


class TwitterService implements IFeedService<ITwitterTweet> {
    async loadState(): Promise<ITwitterTweet[]> {
        return [
            new TwitterTweet("1","someText", new Date(Date.now()),"1" )
        ]
    }
    refeshState(): Promise<ITwitterTweet[]> {
        throw new Error("Method not implemented.");
    }

}
export interface TwitterStoreDefinition extends IFeedStoreDefinition<ITwitterTweet>{}
export function useTwitterStore(name: string): TwitterStoreDefinition {return getFeedStore<ITwitterTweet>(name, new TwitterService()) } 


