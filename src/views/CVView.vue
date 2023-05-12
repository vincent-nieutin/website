<script setup>
import { reactive } from 'vue'
import Item from '../components/CV/Item.vue'
</script>

<template>
  <div class="cv">
    {{ $t('professional-experiences.openfly.title') }}
    <Item v-for="item in items" :item="item" />
  </div>
</template>

<style lang="scss">
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