<template>
    <p>รายการสินค้า</p>
    <div class="grid md:grid-cols-4 lg:grid-cols-6 gap-1 overflow-y-auto h-[90vh]">
        <div v-for="product in products" :key="product.id" class=" p-2 h-[100%] border">
            <img :src="product.images[0]" alt="product image">
            <p class="font-bold"> ${{ product.price }}</p>
            <p>{{ product.title }}</p>
            <hr>
            <button @click="addProduct(product)"
                class=" p-1 bg-blue-500 text-white hover:bg-blue-200 active:text-black">add
                to
                cast</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useProductStore } from '@/stores/product';

const products = ref<Products[]>([])
const productStore = useProductStore()

const addProduct = (product: Products) => productStore.addProductCast({
    id: product.id,
    name: product.title,
    price: product.price,
    image: product.images[0],
    qty: 1
})

onMounted(async () => {
    await productStore.getProducts()
    products.value = productStore.productLists
})

</script>

<style scoped></style>