<template>
    <div>
        <p>ตะกร้าสินค้า</p>
        <hr>
        <div class=" border p-1 overflow-auto h-[50vh]">
            <div v-for="(p, idx) in productStore.productSelected" class=" mb-1">
                <span class=" font-bold">{{ p.name }} </span>
                <span class=" text-red-400 cursor-pointer" @click="productStore.removeProduct(idx)">ยกเลิก</span>
                <br>
                <span>จำนวน : {{ p.qty }} ราคาต่อหน่วย : {{ p.price }} ราคา : {{ p.price * p.qty }}</span>
                <hr>
            </div>
            <hr>
        </div>
        <p>ราคาทั้งหมด : {{ productStore.productSumPrice }}</p>

    </div>
</template>

<script setup lang="ts">
import { watch } from 'vue';
import { useProductStore } from '@/stores/product';
const productStore = useProductStore()
</script>

<style scoped></style>