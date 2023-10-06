import type { IFeedStoreState, IFeedActions } from "@/models/feed";
import type { IContentModel } from "@/models/iconentmodel";
import { defineStore} from "pinia";





export function getFeedStore<T extends IContentModel>(name: string, userId: string, contentService: IFeedService<T>) {
    return defineStore(name, {
        state: (): IFeedStoreState<T> => ({
            userId: userId,
            content: new Array<T>(),
            state: false
        }),
        getters: {

        },
        actions: {
        async loadState() {
                const data = await contentService.loadState(userId).then(c => c);
                this.content = data;
                this.state = true;
        },

        async refeshState(){
               await this.loadState()
        },

        async unloadState() {
            this.state = false;
            this.content = new Array();
        }

        } as IFeedActions<T>
    })
}

