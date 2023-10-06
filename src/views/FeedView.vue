
<script setup lang="ts">
import TwitterPost from '@/components/TwitterPost.vue';
import { useAppState } from '@/composables/appStore';
import { TwitterTweet } from '@/models/twitter/twitterTweet';

    const appState = useAppState();

</script>

<template>
    <div class="grid grid-row gap-1">
        <div v-for="(content, index) in appState.getContent" :key="index+'-content'" class="block bg-white border border-gray-200 rounded-lg shadow text-clip overflow-auto">
            <TwitterPost :post="(content as TwitterTweet)"/>
        </div>
    </div>
    
    
</template>



<style lang="">
    
</style>