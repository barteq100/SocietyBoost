<script setup lang="ts">
import { useAppState } from '@/composables/appStore'

const appState = useAppState()
const feeds = appState.feeds
// feeds.forEach((feed) => {
//   watch(feed, () => {
//     const feedStore = feed.store()
//     if (!!feed.state) {
//       console.log(`Load State for store: ${feed.name} `)
//       feedStore.loadState()
//     } else {
//       console.log(`Unload State for store: ${feed.name}`)
//       feedStore.unloadState()
//     }
//   })
// })
</script>

<template lang="">
  <div class="grid grid-row-auto gap-1">
        <component v-for="feed: IFeed in feeds" :is="`${feed.type}FeedComponent`" :feed="feed"></component>
  </div>
</template>

<style lang="scss" scoped>
</style>
