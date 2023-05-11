<script setup>
const props = defineProps({
    item: Object
})

// Date
props.item.startDate = new Date(props.item.startDate)
props.item.endDate = !!props.item.endDate ? '' : new Date(props.item.endDate)
const dateFormat = { month: 'long', year: 'numeric' }
</script>

<template>
    <div class="item">
        <div class="item-header">
            <div class="title">{{ item.title }}</div>
            <div class="location">{{ item.company }}, {{ item.location }}</div>
        </div>

        <div class="item-date">
            {{ item.startDate.toLocaleString('en-US', dateFormat) }} - {{ item.endDate.toLocaleString('en-US', dateFormat)
                ?? "Aujourd'hui" }}
        </div>

        <div class="item-description">
            <ul>
                <li class="description-element" v-for="element in item.description">
                    {{ element }}
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.description-element {
    list-style-position: outside;
    // text-indent: -1em;
    // padding-left: 1em;
}

.item-date {
    font-size: 18px;
}

.location {
    font-size: 18px;
    font-weight: bold;
}

.title {
    color: rgb(55, 94, 223);
    font-size: 22px;
    font-weight: bold;
}

.item-header {
    display: flex;
    justify-content: center;
    align-items: center;

    &>*:first-child {
        border-right: 3px solid white;
        padding-right: 10px;
    }

    &>*:last-child {
        padding-left: 10px;
    }
}

.item {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
</style>