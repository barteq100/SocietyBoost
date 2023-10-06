<script setup lang="ts">
import FeedStateControl from '@/components/FeedStateControl.vue'
import FeedView from '@/views/FeedView.vue'
import { ref } from 'vue'
const baseWidth = "4rem";
var isControlOpen = ref(false)
var toggleSign = ref('>>')
var controlWidth = ref("4rem")

function toggle() {
  isControlOpen.value = !isControlOpen.value
  controlWidth.value = isControlOpen.value ? '10rem' : baseWidth
  toggleSign.value = isControlOpen.value ? '<<' : '>>'
}

</script>
<template>
  <div class="grid grid-flow-col auto-cols-max justify-start h-full w-full gap-1">
    <div class="overflow-y-hidden overflow-x-hidden duration-1000 h-full active">
        <button class="block bg-white border border-gray-200 rounded-lg shadow text-clip overflow-hidden card-min-max-h-sized w-full mb-1" @click="toggle">
          <div class="flex flex-row flex-nowrap">
            <p class="flex-none card-min-max-h-sized card-min-max-w-sized text-lg align-middle pt-4">{{ toggleSign }}</p>
            <p class="flex-none card-min-max-h-sized card-min-max-w-sized text-lg align-middle pt-4 left-0">Feeds</p>
          </div>
        </button>
        <FeedStateControl />
    </div>
      <FeedView />
  </div>

</template>

<style lang="css">

.active {
  width: v-bind(controlWidth);
}

.card-min-max-h-sized {
  height: 4rem;
  min-height: 4rem;
  max-height: 4rem;
 }

 .card-min-max-w-sized {
  width: 4rem;
  min-width: 4rem;
  max-width: 4rem;
 }

</style>
