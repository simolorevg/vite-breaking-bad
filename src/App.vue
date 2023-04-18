<script>
import AppCard from './components/AppCard.vue';
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppCardSelect from './components/AppCardSelect.vue';
export default {
  components: {
    AppCard,
    AppHeader,
    AppCardSelect
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
  },
  methods: {
    cardFilter() {
      axios.get("https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0", {
        params: {
          archetype: 
        }
      }).then((resp) => {
        this.cardArray = resp.data.data;
      })
      console.log(this.cardArray.archetype);
    }
  }
}
</script>

<template>
  <AppHeader />
  <AppCardSelect @filter="cardFilter()" />
  <div class="container-fluid mt-4">
    <div class="ms-card-container">
      <div class="row row-cols-3 g-4">
        <div class="col" v-for="(card, index) in cardArray" :key="index">
          <AppCard :image="card.card_images[0].image_url" :text="card.name" :species="card.type" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.ms-card-container {
  width: 70%;
  margin: 0 auto;
}
</style>