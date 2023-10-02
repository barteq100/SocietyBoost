<script setup lang="ts">
import { useAppState } from '@/composables/appStore';
import type { IFeed } from '@/models/feed';
import { ref, watch, type Ref } from 'vue';

const appState = useAppState();
const feeds = appState.feeds;
feeds.forEach(feed => {
    watch(feed, () => {
        const feedStore = feed.store();
        if(!!feed.state) {
            console.log("Load State");
            feedStore.loadState();
        } else {
            console.log("Unload State");
            feedStore.unloadState();
        }
    })
});

</script>

<template lang="">
    <div v-for="feed: IFeed in feeds">
        <input type="checkbox" :name="feed.name" :id="feed.name" v-model="feed.state">
        <label :for="feed.name">{{feed.name}}</label>
    </div>
</template>

<style lang="">
    
</style>