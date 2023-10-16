<script setup lang="ts">
import InstagramPost from '@/components/InstagramPost.vue'
import TwitterPost from '@/components/TwitterPost.vue'
import { useAppState } from '@/composables/appStore'
import type { IFeed } from '@/models/feed'
import { FeedType } from '@/models/feedType'
import { InstagramFeed } from '@/models/instagram/instagramFeed'
import { type IInstagramMedia } from '@/models/instagram/instagramMedia'
import { TwitterFeed } from '@/models/twitter/twitterFeed'
import { TwitterTweet } from '@/models/twitter/twitterTweet'
import { ref, watch } from 'vue'

const appState = useAppState()
const feeds = appState.getActiveFeeds
const feedsByType = ref({
  twitterFeeds: new Array<TwitterFeed>(),
  instagramFeeds: new Array<InstagramFeed>()
})
watch(feeds, () => {
  feedsByType.value = {
    twitterFeeds: new Array<TwitterFeed>(),
    instagramFeeds: new Array<InstagramFeed>()
  }
  feeds.reduce((prevValue, currentValue) => {
    if (currentValue.type === FeedType.Twitter)
      feedsByType.value.twitterFeeds.push(currentValue as TwitterFeed)
    else if (currentValue.type === FeedType.Instagram)
      feedsByType.value.instagramFeeds.push(currentValue as InstagramFeed)
    return feedsByType
  }, feedsByType)
})

function GetContent(feed: IFeed) {
  const store = feed.store();
  return store.content;
}
</script>

<template>
  <div class="flex flex-col flex-nowrap gap-1 max-w-half" v-for="(feed, fi) in appState.getActiveFeeds" :key="'af-'+fi">
      <div v-if="feed.type === FeedType.Instagram" :key="'f-'+fi">
        <InstagramPost v-for="(content, ci) in GetContent(feed)" :key="'f-'+fi+'c-'+ci" :post="(content as IInstagramMedia)" />
      </div>
      <div v-if="feed.type === FeedType.Twitter" :key="'f-'+fi">
        <TwitterPost   v-for="(content, ci) in GetContent(feed)" :key="'f-'+fi+'c-'+ci" :post="(content as TwitterTweet)" />
      </div>
  </div>
</template>

<style lang="scss">
.max-w-half {
  max-width: 50vw;
  min-width: 50vw;
}
</style>
