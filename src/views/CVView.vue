<script setup>
import { reactive } from 'vue'
import Item from '../components/CV/Item.vue'

const items = [
  {
    type: 'professional-experience',
    title: 'Développeur Full Stack',
    company: 'OpenFly',
    location: 'Guipavas',
    startDate: '2021-10',
    endDate: null,
    description: [
      "Maintenance et développement du site et de l'application de l'entreprise",
      "Utilisation de GitLab, Laravel, VueJS, MySQL"
    ]
  },
  {
    type: 'professional-experience',
    title: 'Stage cybersécurité',
    company: 'Harvest',
    location: 'Paris',
    startDate: '2018-05',
    endDate: '2018-08',
    description: [
      "Proof of Concept sur l'intégration d'un Hardware Security Module aux applications de l'entreprise afin de renforcer leur sécurité",
      "Élaboration d'un système serveur/client et chiffrement des données échangées",
      "Présentation du POC aux associés directeurs de l'entreprise"
    ]
  }
]

</script>

<template>
  <div class="cv">
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