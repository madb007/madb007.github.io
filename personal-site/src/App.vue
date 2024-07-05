
<template>
  <nav class="bg-gray-800 text-white p-4 shadow-md">
    <div class="mx-auto flex justify-center items-center">
      <router-link to="/" class="px-4 py-2 hover:text-blue-300">Home</router-link>
      <span class="text-gray-500 mx-2">|</span>
      <!-- <router-link to="/about" class="px-4 py-2 hover:text-blue-300">About</router-link>
      <span class="text-gray-500 mx-2">|</span> -->
      <router-link to="/projects" class="px-4 py-2 hover:text-blue-300">Projects</router-link>
    </div>
  </nav>
  <main class="flex-grow">
      <router-view/>
    </main>
</template>

<script>



export default {
  name: 'App',
  mounted() {
    document.title = 'Bhuvan Madala';
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
