import { defineStore } from "pinia";
import type {IFeed} from "@/models/feed"
import { TwitterFeed } from "@/models/twitter/twitterFeed";
import type { IContentModel } from "@/models/iconentmodel";

interface AppState {
    feeds: Array<IFeed>
    users: Array<IUser>
}

export const useAppState = defineStore('appState', {
    state: (): AppState => ({
        feeds: [
            new TwitterFeed("Twitter", '0987654321'),
            // new TwitterFeed("Facebook", '0'),
            // new TwitterFeed("Instagram", '1'),
        ],
        users: [
            {
              id: '0987654321',
              name: "Chuck Norris",
              userName: "chucknorris",
              profile_image: "https://pbs.twimg.com/profile_images/1407346896/89_400x400.jpg"
            }
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
