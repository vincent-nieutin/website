<script setup>
import { reactive } from 'vue'
import Item from '../components/CV/Item.vue'
</script>

<template>
  <div class="cv">
    <div v-for="(key, index) in Object.keys($i18n.messages[$i18n.locale])">
      <div class="category-title">{{ $i18n.messages[$i18n.locale][key].title.toUpperCase() }}</div>
      <Item v-for="(item, index) in $i18n.messages[$i18n.locale][key].content" :item="item" />
    </div>
  </div>
</template>

<style lang="scss">
.category-title {
  width: 100%;

  margin: 20px 0 20px 0;

  font-weight: bold;
  font-size: 25px;
}

.cv {
  display: flex;
  flex-direction: column;
  justify-content: center;

  &>* {
    margin: 20px 0;
  }

  width: 100%;
  padding: 0 100px;
}
</style>