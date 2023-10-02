import { defineStore } from "pinia";
import type {IFeed} from "@/models/feed"
import { TwitterFeed } from "@/models/twitter/twitterFeed";
import type { IContentModel } from "@/models/iconentmodel";


interface AppState {
    feeds: Array<IFeed>
}

export const useAppState = defineStore('appState', {
    state: (): AppState => ({
        feeds: [
            new TwitterFeed("Twitter"),
            new TwitterFeed("Facebook"),
            new TwitterFeed("Instagram"),
        ]
    }),
    getters: {
      getActiveFeeds: (state) => state.feeds.filter(x => x.state).filter(x => x.store().state),  
      getContent() : IContentModel[] {
        return this.getActiveFeeds.map(x => x.store().content).flat(1);
      }
    },
    actions: {
    },
})
