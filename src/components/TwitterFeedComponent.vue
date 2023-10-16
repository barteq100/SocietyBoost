<script setup lang="ts">
import { TwitterFeed } from '@/models/twitter/twitterFeed';
import TwitterIcon from './icons/TwitterIcon.vue';
const props = defineProps<{
  feed: TwitterFeed
}>()
const feedName = props.feed.name;

function toggleState() {
  props.feed.ToggleState();
}
</script>

<template>
    <div class="block bg-white border border-gray-200 rounded-lg shadow text-clip overflow-hidden card-min-max-h-sized" @click="toggleState()">
        <div class="flex flex-row flex-nowrap card-min-max-h card-min-max-w">
          <TwitterIcon class="flex-none card-min-max-h-sized card-min-max-w-sized"/>
          <p class="flex-none align-middle pt-4">{{feedName}}</p>
        </div> 
    </div>
</template>

<style lang="css" scoped>

</style>