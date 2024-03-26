import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

interface IDataStore {
  items: Product[],
  isLoading: boolean,
  page: number,
  itemsPerPage: number
}

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

//Define dataStore
export const useDataStore = defineStore("dataStore", () => {
  const state = ref<IDataStore>({
    items: [] as Product[],
    isLoading: false,
    page: 1,
    itemsPerPage: 10
  });

  // Fetch data
  const fetchData = async () => {
    state.value.isLoading = true;
    try {
      const response = await fetch('https://raw.githubusercontent.com/GoogleChromeLabs/sample-pie-shop/master/src/data/products.json');
      const data = await response.json();
      console.log(data)
      state.value.items = data.products.data.items;
      
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      state.value.isLoading = false;
    }
  };

  const pageData = computed(() => {
    const offset = (state.value.page - 1) * state.value.itemsPerPage
    return state.value.items.slice(offset, offset + state.value.itemsPerPage)
  })

  // Get product by Id
  const getProduct = (productId:string):Product => {
    const product = state.value.items.find(item => item.id === productId)

    if (!product) {
      throw new Error("Product is not found");
    }
    return product
  };

  // Max number of pages
  const maxPage = computed(() => Math.ceil(state.value.items.length/state.value.itemsPerPage))

  // Next page 
  const nextPage = () => {
    if (state.value.page < maxPage.value) {
      state.value.page++
    }
  }
  // Previous page
  const previousPage = () => {
    if (state.value.page > 1) {
      state.value.page--
    }
  }

  
  fetchData()

  return {
    state,
    isLoading: computed(() => state.value.isLoading),
    page: computed(() => state.value.page),
    getProduct,
    nextPage,
    previousPage,
    maxPage, 
    pageData
  }
  });
