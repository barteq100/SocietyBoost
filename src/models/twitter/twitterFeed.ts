import type { IFeed } from "@/models/feed";
import { useTwitterStore, type TwitterStoreDefinition, } from "@/composables/twitterStore";



export class TwitterFeed implements IFeed {
    name: string;
    state: boolean;
    store: TwitterStoreDefinition;

    constructor(name: string) {
        this.name = name;
        this.state = false;
        this.store = useTwitterStore(name);
    }

}