<script setup lang="ts">
import { TwitterFeed } from '@/models/twitter/twitterFeed';

const props = defineProps<{
  feed: TwitterFeed
}>()
const feedName = props.feed.name;

function toggleState() {
  props.feed.ToggleState();
}
</script>

<template lang="">
    <div class="block bg-white border border-gray-200 rounded-lg shadow text-clip overflow-hidden card-min-max-h-sized" @click="toggleState()">
        <div class="flex flex-row flex-nowrap card-min-max-h card-min-max-w">
          <img class="flex-none card-min-max-h-sized card-min-max-w-sized" src="@/assets/TwitterX.svg">
          <p class="flex-none align-middle pt-4">{{feedName}}</p>
        </div> 
    </div>
</template>

<style lang="css" scoped>

</style>