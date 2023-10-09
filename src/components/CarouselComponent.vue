<script setup lang="ts">
    import { getInstagramService } from '@/composables/instagramStore';
    import type { IInstagramMedia } from '@/models/instagram/instagramMedia';
    import { ref, watch } from 'vue';

    const props = defineProps<{
    media: IInstagramMedia
    }>();

    const images = ref(new Array<string>())
    const currentImage = ref(0);
    const instagramService = getInstagramService();
    fetchImages(props.media);

    function next() {
        currentImage.value++;
        if (currentImage.value >= images.value.length) {
            currentImage.value = 0;
        }
    }

    function prev() {
        currentImage.value--;
        if (currentImage.value < 0) {
            currentImage.value= images.value.length - 1;
        }
    }

    async function fetchImages(media: IInstagramMedia) {
    await instagramService.getCarouselItems(media.id).then(x => {
            images.value = x.map(x => x.media_url);
        })
    }

    watch(currentImage, (value) => {
        setTimeout(() => { next();}, 5000);
    });
</script>


<template>
    <div class="carousel">
      <img v-for="(image, index) in images" :src="image" :key="image" />
      <button @click="prev">Previous</button>
      <button @click="next">Next</button>
      <div class="indicators">
        <span v-for="image in images" :class="{ active: currentImage === index }"></span>
      </div>
    </div>
  </template>
  

<style lang="scss" scoped>
    .carousel {
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
    }

    .carousel img {
        max-width: 100%;
        max-height: 100%;
        object-fit: cover;
        border-radius: 5px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        border: 1px solid #ccc;
    }

    .carousel caption {
        padding: 10px;
        font-size: 12px;
    }
</style>