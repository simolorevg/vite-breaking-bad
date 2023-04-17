<script>
import AppCard from './components/AppCard.vue';
import axios from 'axios';
import { cardStore } from './cardStore';
export default {
  components: {
    AppCard
  },
  data() {
    return {
      cardStore
    }
  },
  mounted() {
    axios.get(cardStore.apiURL).then((resp) => {
      this.cardStore.cardsArray = resp.data.data;
    })
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
