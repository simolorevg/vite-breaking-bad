<script>
export default {
    name: "AppCard"
}
</script>
<template>
    <div class="text-center">
        <img :src="image" alt="">
        <p>{{ text }}</p>
    </div>
</template>
<style lang="scss">
@use "../style/general.scss" as *;
</style>