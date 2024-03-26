<template>
  <main>
    <div v-if="dataStore.isLoading">Loading...</div>
    <div v-else>
      <!-- Items from Json data -->
      <v-row>
        <v-col
          v-for="item in dataStore.pageData" :key="item.id" cols="12" sm="6" md="6">
          <DashboardItem :item="item"/>
        </v-col>
      </v-row>

      <!-- Pagination Controls -->
      <v-row justify="center">
        <v-btn v-if="dataStore.page > 1"  @click="dataStore.previousPage">Previous</v-btn>
        <span></span>
        <v-btn v-if="dataStore.page < dataStore.maxPage" @click="dataStore.nextPage">Next</v-btn>
      </v-row>

    </div>
  </main>
</template>

<script setup lang="ts">
import { useDataStore } from "../stores/DataStore"
import DashboardItem from "../components/DashboardItem.vue"

const dataStore = useDataStore()


</script>

<style scoped>

</style>
