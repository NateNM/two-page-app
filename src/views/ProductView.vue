<template>
  <div class="product-details">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="8">
          <v-card class="product-card">
            <v-img
              :src="item.url"  
              height="300px"
              object-fit="cover"
              alt="Find a picture to use becuase there isn't a item image url"
            ></v-img>
            <v-card-title class="text-h5">{{ item.name }}</v-card-title>
            <v-card-subtitle class="mb-4">{{ item.category }}</v-card-subtitle>
            <v-card-text>{{ item.description }}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';
import { type Product, useDataStore } from '../stores/DataStore';

const route = useRoute();
const dataStore = useDataStore();

const productId: string = route.params.id as string;

const item: Product = dataStore.getProduct(productId)

</script>

<style>

</style>
