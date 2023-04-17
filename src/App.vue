<script>
import AppCard from './components/AppCard.vue';
import axios from 'axios';
export default {
  components: {
    AppCard
  },
  data() {
    return {
      cardArray: []
    }
  },
  mounted() {
    axios
      .get("https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0")
      .then((resp) => {
        this.cardArray = resp.data.data;
      })
  }
}
</script>

<template>
  <h1>Lorem</h1>
  <div class="container-fluid" v-for="(card, index) in cardArray" :key="index">
  </div>
</template>

<style lang="scss">
@use "./style/general.scss" as *;
</style>
