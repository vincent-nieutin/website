<script setup>
const props = defineProps({
    item: Object
})

// Date
const dateFormat = { month: 'long', year: 'numeric' }
const dateRegion = 'fr-FR'
let startDate = new Date(props.item.startDate)
let endDate = !!props.item.endDate ? new Date(props.item.endDate) : ''
let itemDate = ''

if (startDate == endDate) {
    itemDate = startDate.toLocaleString(dateRegion, { month: 'long', year: 'numeric' })
} else if (endDate == '') {
    itemDate = startDate.toLocaleString(dateRegion, { month: 'long', year: 'numeric' })
        .concat(" - ")
        .concat("Aujourd'hui")
} else if (startDate.getYear() == endDate.getYear()) {
    itemDate = startDate.toLocaleString(dateRegion, { month: 'long' }).concat(
        " - ",
        endDate.toLocaleString(dateRegion, { month: 'long' }),
        " ",
        startDate.toLocaleString(dateRegion, { year: 'numeric' })
    )
} else {
    itemDate = startDate.toLocaleString(dateRegion, dateFormat)
        .concat(" - ")
        .concat(!endDate ? "Aujourd'hui" : endDate.toLocaleString(dateRegion, dateFormat))
}

// props.item.startDate = new Date(props.item.startDate).toLocaleString('fr-FR', dateFormat)
// props.item.endDate = !props.item.endDate ? "Aujourd'hui" : new Date(props.item.endDate).toLocaleString('fr-FR', dateFormat)
</script>

<template>
    <div class="item">
        <div class="item-header">
            <div class="title">{{ item.title }}</div>
            <div class="location">{{ item.company }}, {{ item.location }}</div>
        </div>

        <div class="item-date">
            {{ itemDate }}
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

    margin-bottom: 30px;
}
</style>