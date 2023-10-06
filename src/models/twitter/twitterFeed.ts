import type { IFeed } from "@/models/feed";
import { useTwitterStore, type TwitterStoreDefinition, } from "@/composables/twitterStore";
import { FeedType } from "../feedType";



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
    }

}