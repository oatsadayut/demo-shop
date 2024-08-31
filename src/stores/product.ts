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
  const productCastList = ref<ProductCast[]>([]);
  const productCastSumPrice = ref<number>(0);

  const getProducts = async () => {
    const getData = await axios.get<Products[]>(
      "https://api.escuelajs.co/api/v1/products"
    );
    const resp = await getData.data;
    productLists.value = resp;
  };

  const addProductCast = (product: ProductCast) => {
    if (productCastList.value.length > 0) {
      productCastSumPrice.value += product.qty * product.price;
      const item = productCastList.value.find((e) => e.id == product.id);
      if (item) {
        item.qty += 1;
      } else {
        productCastList.value.push(product);
      }

    } else {
      productCastSumPrice.value = product.qty * product.price;
      productCastList.value.push(product);
    }
  };
  
  const delectProduct = () => {};

  return {
    productLists,
    productCastList,
    productCastSumPrice,
    getProducts,
    addProductCast,
  };
});
