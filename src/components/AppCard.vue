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
    <div class="text-center">
        <img :src="image" alt="">
        <p>{{ text }}</p>
        <p>{{ species }}</p>
    </div>
</template>
<style lang="scss">
@use "../style/general.scss" as *;
</style>