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
          <v-card variant="tonal" class="item-card" height="200px" width="300px">
            <v-card-title>{{ item.name }}</v-card-title>
            <v-card-text>
              <p>{{ item.description }}</p>
              </v-card-text>
            <v-card-actions>
              <router-link :to="{ name: 'Product', params: { id: item.id }}">
                <v-btn color="primary">View Details</v-btn>
            </router-link>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useDataStore } from "../stores/DataStore"

const dataStore = useDataStore()
dataStore.fetchData()


</script>

<style scoped>

</style>
