<script>
import AppCard from './components/AppCard.vue';
import axios from 'axios';
export default {
  components: {
    AppCard
  },
  data() {
    return {
    }
  },
  mounted() {
  }
}
</script>

<template>
  <h1>Lorem</h1>
  <div class="container-fluid">
    <AppCard />
  </div>
</template>

<style lang="scss">
@use "./style/general.scss" as *;
</style>
