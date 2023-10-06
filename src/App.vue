<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div>
      <nav>
        <RouterLink to="/">Home</RouterLink>
      </nav>
    </div>
  </header>
  <main class="h-full w-full">
    <RouterView />
  </main>
</template>

<style>
#app {
  width: 100vw;
  height: 100vh;
}
.row {
  display: flex;
  flex-direction: row;
}
</style>
