import { computed, onMounted, ref } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

interface ProductCast {
  id: number;
  name: string;
  image: string;
  price: number;
  qty: number;
}

export const useProductStore = defineStore("product", () => {
  const productLists = ref<Products[]>([]);
  const productSelected = ref<ProductCast[]>([]);
  const productSumPrice = ref<number>(0);

  const getProducts = async () => {
    const getData = await axios.get<Products[]>(
      "https://api.escuelajs.co/api/v1/products"
    );
    const resp = await getData.data;
    productLists.value = resp;
  };

  const addProductCast = (product: ProductCast) => {
    if (productSelected.value.length > 0) {
      productSumPrice.value += product.qty * product.price;
      const item = productSelected.value.find((e) => e.id == product.id);
      if (item) {
        item.qty += 1;
      } else {
        productSelected.value.push(product);
      }
    } else {
      productSumPrice.value = product.qty * product.price;
      productSelected.value.push(product);
    }
  };

  const removeProduct = (idx: number) => {
    productSelected.value.splice(idx, 1);
    console.log(productSelected.value);
  };

  return {
    productLists,
    productSelected,
    productSumPrice,
    getProducts,
    addProductCast,
    removeProduct,
  };
});
