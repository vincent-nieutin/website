<script setup>
const props = defineProps({
    item: Object
})

// Date
const dateRegion = 'fr-FR'
let itemDate = ''
let dates = props.item.dates

function getFormatedDate(date, format = { month: 'long', year: 'numeric' }) {
    let newDate = date.toLocaleString(dateRegion, format)
    return newDate.charAt(0).toUpperCase() + newDate.slice(1);
}

if (!!dates) {
    Object.keys(dates).forEach((key, index) => {
        let startDate = new Date(dates[key].start)
        let endDate = !!dates[key].end ? new Date(dates[key].end) : ''

        if (!startDate && !endDate) {
            itemDate = ''
        } else if (startDate == endDate) {
            itemDate = itemDate.concat(getFormatedDate(startDate, { month: 'long', year: 'numeric' }))
        } else if (endDate == '') {
            itemDate = itemDate.concat(
                getFormatedDate(startDate, { month: 'long', year: 'numeric' }),
                " - ",
                "Aujourd'hui"
            )
        } else if (startDate.getYear() == endDate.getYear()) {
            itemDate = itemDate.concat(
                getFormatedDate(startDate, { month: 'long' }),
                " - ",
                getFormatedDate(endDate, { month: 'long' }),
                " ",
                getFormatedDate(startDate, { year: 'numeric' })
            )
        } else {
            itemDate = itemDate.concat(
                getFormatedDate(startDate),
                " - ",
                getFormatedDate(endDate)
            )
        }

        if (Object.keys(dates).length - 1 != index) itemDate = itemDate.concat(', ')
    })
}

</script>

<template>
    <div class="item">
        <div class="item-header" v-if="!!item.title || (!!item.company && !!item.location)">
            <div class="title" v-if="!!item.title">{{ item.title }}</div>
            <div class="location" v-if="!!item.company && !!item.location">{{ item.company }}, {{ item.location }}</div>
        </div>

        <div class="item-date" v-if="!!itemDate">
            {{ itemDate }}
        </div>

        <div class="item-description" v-if="item.description.length > 0">
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
    color: var(--main-color);
    font-size: 22px;
    font-weight: bold;
    // width: max-content;
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

    margin-bottom: 20px;
}
</style>