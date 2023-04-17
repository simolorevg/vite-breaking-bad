<script>
import AppCard from './components/AppCard.vue';
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
export default {
  components: {
    AppCard,
    AppHeader
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
  <AppHeader />
  <div class="container-fluid mt-4">
    <div class="ms-card-container">
      <div class="row row-cols-4 g-4">
        <div class="col" v-for="(card, index) in cardArray" :key="index">
          <AppCard :image="card.card_images[0].image_url" :text="card.name" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.ms-card-container {
  background-color: #966F33;
  width: 70%;
  margin: 0 auto;
}
</style>