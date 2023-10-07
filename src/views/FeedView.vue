
<script setup lang="ts">
import TwitterPost from '@/components/TwitterPost.vue';
import { useAppState } from '@/composables/appStore';
import { TwitterTweet } from '@/models/twitter/twitterTweet';

    const appState = useAppState();

</script>

<template>
    <div class="grid grid-row gap-1">
        <TwitterPost v-for="(content, index) in appState.getContent" :post="(content as TwitterTweet)"/>
    </div>
    
    
</template>



<style lang="">
    
</style>