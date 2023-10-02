<script setup lang="ts">
import { TwitterFeed } from '@/models/twitter/twitterFeed';

const props = defineProps<{
  feed: TwitterFeed
}>()
const feedStore = props.feed.store();

</script>

<template lang="">
    <div>
        
    </div>
</template>

<style lang="">
    
</style>