<script setup>
import NavButton from './NavButton.vue'
</script>

<template>
    <div class="nav">
        <NavButton to="">Home</NavButton>
        <NavButton to="cv">C.V.</NavButton>
        <div>{{  }}</div>
    </div>
</template>

<style lang="scss">
.nav {
    display: flex;
    justify-content: center;

    width: 100%;
}
</style>