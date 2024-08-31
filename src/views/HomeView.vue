<script setup lang="ts">
import Navbar from '@/components/Navbar.vue';
import ProductList from '@/components/ProductList.vue';
import ProductCastList from '@/components/ProductSelected.vue';
</script>

<template>
  <Navbar />
  <main>
    <div class="grid grid-cols-12 gap-4">
      <div class="max-sm:col-span-12 col-span-9">
        <ProductList />
      </div>
      <div class=" max-sm:hidden col-span-3">
        <ProductCastList />
      </div>
    </div>
  </main>
</template>
