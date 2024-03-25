<template>
    <div>
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
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import  { type Product }  from "../stores/DataStore"

const props = defineProps<{
    item: Product
}>()

const task = ref<Product>(props.item)


</script>