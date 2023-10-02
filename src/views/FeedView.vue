
<script setup lang="ts">
import { useAppState } from '@/composables/appStore';
import { ref, watch, type WatchStopHandle} from 'vue';

    const appState = useAppState();

</script>

<template>
    <div v-for="(content, index) in appState.getContent" :key="index+'-content'">
        {{ content.type }} : 
        {{ content.text }}
    </div>
</template>



<style lang="">
    
</style>