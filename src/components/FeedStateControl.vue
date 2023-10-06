<script setup lang="ts">
import { useAppState } from '@/composables/appStore'
import {watch} from 'vue'

const appState = useAppState()
const feeds = appState.feeds
feeds.forEach((feed) => {
  watch(feed, () => {
    const feedStore = feed.store()
    if (!!feed.state) {
      console.log(`Load State for store: ${feed.name} `)
      feedStore.loadState()
    } else {
      console.log(`Unload State for store: ${feed.name}`)
      feedStore.unloadState()
    }
  })
})
</script>

<template lang="">
  <div class="grid grid-row-auto gap-1">
        <component v-for="feed: IFeed in feeds" :is="`${feed.type}FeedComponent`" :feed="feed"></component>
  </div>
</template>

<style lang="scss" scoped>
 .grid-auto {
   grid: 60px 1fr / 60px calc(100% - 60px);
    .TwitterFeedComponent {
      grid-column: 1;
      overflow: hidden;
      display: grid;
      grid: repeat(8, 60px) / 100%;
    }
 }
</style>
