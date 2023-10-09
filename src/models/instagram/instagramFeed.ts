import { useInstagramStore, type InstagramStoreDefinition } from "@/composables/instagramStore";
import type { IFeed, IFeedActions, IFeedGetters, IFeedStoreState } from "../feed";
import { FeedType } from "../feedType";
import type { IInstagramMedia } from "./instagramMedia";
import type { Store } from "pinia";

export class InstagramFeed implements IFeed {
    readonly name: string;
    readonly type = FeedType.Instagram;
    readonly userId: string;
    private _state: boolean;
   
    store: InstagramStoreDefinition;

    constructor(name: string, userId: string) {
        this.name = name;
        this.userId = userId;
        this._state = false;
        this.store = useInstagramStore(name, userId);
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