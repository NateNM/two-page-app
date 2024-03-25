<template>
  <main>
    <div v-if="dataStore.isLoading">Loading...</div>
    <div v-else>
      <v-row>
        <v-col
          v-for="item in dataStore.items"
          :key="item.id"
          cols="12"
          sm="6"
          md="6"
        >
          <DashboardItem :item="item"/>
        </v-col>
      </v-row>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useDataStore } from "../stores/DataStore"
import DashboardItem from "../components/DashboardItem.vue"

const dataStore = useDataStore()
dataStore.fetchData()


</script>

<style scoped>

</style>
