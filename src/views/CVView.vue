<script setup>
import { reactive } from 'vue'
import Item from '../components/CV/Item.vue'
</script>

<template>
  <div class="cv">
    <!-- Proffession experience -->
    <Item v-for="(item, index) in $i18n.messages[$i18n.locale]['professional-experiences']" :item="item" />
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