<script>
export default {
    name: "AppCard",
    props: {
        text: String,
        image: String,
        species: String
    }
}
</script>
<template>
    <div class="text-center card-container">
        <div class="img-card">
            <img :src="image" alt="">
        </div>
        <div class="text-card">
            <p>{{ text }}</p>
            <p>{{ species }}</p>
        </div>
    </div>
</template>
<style lang="scss">
@use "../style/general.scss" as *;

.card-container {
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    background-color: rgb(255, 145, 0);

    .text-card {
        width: 100%;
        height: 30%;
        color: white;
    }

    .img-card {
        flex-grow: 1;
    }
}
</style>