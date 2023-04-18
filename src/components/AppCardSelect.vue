<script>
export default {
    name: 'AppCardSelect',
    emits: ['filter']
}
</script>
<template>
    <div class="d-flex justify-content-end">
        <select name="status" id="status" class="form-select w-25">
            <option value="">All</option>
            <option value="Alien">Alien</option>
            <option value="Ancient-Gear">Ancient Gear</option>
            <option value="Ally-of-Justice">Ally of Justice</option>
        </select>
        <button class="btn btn-success" @click="$emit('filter')">Cerca</button>
    </div>
</template>
<style lang="scss" scoped>
@use '../style/general.scss' as *;
</style>