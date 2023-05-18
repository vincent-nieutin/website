<script setup>
import { reactive } from 'vue'
import Item from '@/components/CV/Item.vue'
import Icon from '@/components/Icon.vue'
import briefcaseSVG from '@icons/briefcase.svg'
</script>

<template>
  <div class="cv-wrapper">
    <div class="cv">
      <div v-for="(key, index) in Object.keys($i18n.messages[$i18n.locale])">
        <div class="category-header">
          <Icon v-if="!!$i18n.messages[$i18n.locale][key].icon" :url="$i18n.messages[$i18n.locale][key].icon" />
          <div class="category-title">{{ $i18n.messages[$i18n.locale][key].title.toUpperCase() }}</div>
        </div>
        <Item v-for="(item, index) in $i18n.messages[$i18n.locale][key].content" :item="item" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.category-title {
  width: 100%;

  font-weight: bold;
  font-size: 25px;
}

.category-header {
  display: flex;
  align-items: center;

  margin: 10px 0 20px 0;
}

.cv {
  display: flex;
  flex-direction: column;
  justify-content: center;

  &>* {
    margin: 10px 0;
  }

}

.cv-wrapper {
  
  width: 100%;
  padding: 0 10%;
  margin: 0 auto;
}
</style>