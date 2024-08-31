<template>
    <div>
        <p>ตะกร้าสินค้า</p>
        <hr>
        <div class=" border p-1 overflow-auto h-[50vh]">
            <div v-for="p in productStore.productCastList" class=" mb-1">
                <span class=" font-bold">{{ p.name }}</span>
                <br>
                <span>จำนวน : {{ p.qty }} ราคาต่อหน่วย : {{ p.price }} ราคา : {{ p.price * p.qty }}</span>
                <hr>
            </div>
            <hr>
        </div>
        <p>ราคาทั้งหมด : {{ productStore.productCastSumPrice }}</p>

    </div>
</template>

<script setup lang="ts">
import { useProductStore } from '@/stores/product';
const productStore = useProductStore()
</script>

<style scoped></style>