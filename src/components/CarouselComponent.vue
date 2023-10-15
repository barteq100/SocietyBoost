<script setup lang="ts">
import { getInstagramService } from '@/composables/instagramStore'
import type { IInstagramMedia } from '@/models/instagram/instagramMedia'
import { ref, watch } from 'vue'

const props = defineProps<{
  media: IInstagramMedia
}>()

const images = ref(new Array<string>())
const currentImage = ref(0)
const instagramService = getInstagramService()
fetchImages(props.media)

function next() {
  currentImage.value = (currentImage.value + 1) % images.value.length;
}

function prev() {
  currentImage.value = (currentImage.value - 1) % images.value.length;
}

async function fetchImages(media: IInstagramMedia) {
  await instagramService.getCarouselItems(media.id).then((x) => {
    images.value = x.map((x) => x.media_url)
  })
}

watch(currentImage, (value) => {
  setTimeout(() => {
    next()
  }, 5000)
})
</script>

<template>
  <div class="relative carousel">
    <img v-for="(image, index) in images" :src="image" key="image" />
    <div class="absolute inset-x-0 bottom-0">
      <span v-for="(image, index) in images" :class="{ active: currentImage === index }"></span>
    </div>
    <button class="absolute inset-y-0 left-0 w-16" @click="prev"><img class="object-cover w-24 z-10" src="@/assets/left.svg"/></button>
    <button class="absolute inset-y-0 right-0 w-16" @click="next">Next</button>
  </div>
</template>

<style lang="scss" scoped>
.carousel {
  padding-left: 25%;
  width: 28rem;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.carousel img {
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
}

.carousel caption {
  padding: 10px;
  font-size: 12px;
}

</style>
