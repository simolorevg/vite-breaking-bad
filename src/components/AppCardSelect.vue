<script>
import { store } from '../store';
export default {
    name: 'AppCardSelect',
    emits: ["filter"],
    data() {
        return {
            store,
            archiArray: ['Alien', 'Ally of Justice', 'Ancient Gear']
        }
    }
}
</script>
<template>
    <div class="d-flex justify-content-end">
        <select name="status" id="status" class="form-select w-25" v-model="store.filterArchitype">
            <option value="">All</option>
            <option v-for="architecture in archiArray" :value="architecture">{{ architecture }}</option>
        </select>
        <button class="btn btn-success" @click="$emit('filter')">Cerca</button>
    </div>
</template>
<style lang="scss" scoped>
@use '../style/general.scss' as *;
</style>