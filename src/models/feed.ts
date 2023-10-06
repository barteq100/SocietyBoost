import type { StoreDefinition} from "pinia";
import type { IContentModel } from "./iconentmodel";
import type { FeedType } from "./feedType";

export interface IFeedStoreState<T extends IContentModel> {
    userId: string;
    content: Array<T>,
    state: boolean
}
export interface IFeedActions<T extends IContentModel> extends IFeedStoreState<T> {
    loadState(): Promise<void>;
    refeshState(): Promise<void>;
    unloadState(): Promise<void>;
}
export declare interface IFeedStoreDefinition<T extends IContentModel> extends StoreDefinition<string, IFeedStoreState<T>, {}, IFeedActions<T>>{}

export interface IFeed {
    readonly name: string;
    readonly type: FeedType;
    state: boolean;
    store: IFeedStoreDefinition<IContentModel>
}