import type { IFeed, IFeedActions, IFeedGetters, IFeedStoreState } from "@/models/feed";
import { useTwitterStore, type TwitterStoreDefinition, } from "@/composables/twitterStore";
import { FeedType } from "../feedType";
import type { ITwitterTweet } from "./twitterTweet";
import type { Store } from "pinia";


interface TwitterStore extends Store<string, IFeedStoreState<ITwitterTweet>, IFeedGetters<ITwitterTweet>, IFeedActions<ITwitterTweet>>{}
export class TwitterFeed implements IFeed {
    readonly name: string;
    readonly type = FeedType.Twitter;
    readonly userId: string;
    private _state: boolean;
    store: TwitterStoreDefinition;

    constructor(name: string, userId: string) {
        this.name = name;
        this.userId = userId;
        this._state = false;
        this.store = useTwitterStore(name, userId);
    }
    public get state(): boolean {
        return this._state;
    }
    public set state(value: boolean) {
        this._state = value;
    }

    public ToggleState(): void{
        this._state = !this._state;
        if(this._state)
        {
            this.store().loadState();
        } else {
            this.store().unloadState();
        }
    }

}