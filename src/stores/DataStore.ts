import { defineStore } from 'pinia'

export interface Product {
  id: string
  name: string
  description: string
  features: string
  price: string
  keywords: string
  url: string
  category: string
  subcategory: string
}

export const useDataStore = defineStore("dataStore", {
  state: () => ({
    items: [] as Product[],
    isLoading: false,
  }),
  getters: {

  }, 
  actions: {
    async fetchData() {
      this.isLoading = true;
      try {
        const response = await fetch('https://raw.githubusercontent.com/GoogleChromeLabs/sample-pie-shop/master/src/data/products.json');
        const data = await response.json();
        console.log(data)
        this.items = data.products.data.items;
        
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        this.isLoading = false;
      }
    },
  }
});
