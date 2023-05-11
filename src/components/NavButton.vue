<script setup>
import { RouterLink } from 'vue-router';
const props = defineProps({
    to: String
})
</script>

<template>
    <RouterLink class="nav-button" :to='"/" + to'>
        <slot />
    </RouterLink>
</template>

<style lang="scss">
.nav-button {
    /* width: min-content; */
    padding: 5px 10px;
    margin: 0 10px;

    border-radius: 10px;

    font-size: 3vw;

    &:hover {
        cursor: pointer;
        background-color: rgb(75, 75, 75);
        color: rgb(0, 95, 197);
    }

    &:active {
        cursor: pointer;
        background-color: rgb(49, 49, 49);
    }
}
</style>