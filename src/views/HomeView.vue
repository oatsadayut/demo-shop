<script setup lang="ts">
import NavbarComponent from '@/components/NavbarComponent.vue';
import ProductListComponent from '@/components/ProductListComponent.vue';
import ProductCastListComponent from '@/components/ProductCastListComponent.vue';
</script>

<template>
  <NavbarComponent />
  <main>
    <div class="grid grid-cols-12 gap-4">
      <div class="max-sm:col-span-12 col-span-9">
        <ProductListComponent />
      </div>
      <div class=" max-sm:hidden col-span-3">
        <ProductCastListComponent />
      </div>
    </div>
  </main>
</template>
