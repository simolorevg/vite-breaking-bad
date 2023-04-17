import { reactive } from 'vue';
export const cardStore = reactive({
    cardsArray: [],
    apiURL: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0"
})