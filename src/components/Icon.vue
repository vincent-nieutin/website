<script setup>
const props = defineProps({
    url: String
})
</script>

<template>
    <div class="icon">
        <img class="icon-image" :src="url"/>
    </div>
</template>

<style lang="scss" scoped>
.icon-image {
    width: 24px;
    height: 24px;

    stroke-width: 10px;
    stroke: white;
    fill: white;
}

.icon {
    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    left: -65px;

    width: 48px;
    height: 48px;

    border-radius: 50%;
    background-color: var(--main-color);
}
</style>