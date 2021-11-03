<template lang="">
  <div>
    <h2>MOST LOVED 🖤</h2>
    <div class="container">
      <Pcard
        v-for="(product, i) in products"
        :key="productGetters.getId(product)"
        :title="productGetters.getName(product)"
        :image="productGetters.getCoverImage(product)"
        :regular-price="
          $n(productGetters.getPrice(product).regular, 'currency')
        "
        :special-price="
          productGetters.getPrice(product).special &&
            $n(productGetters.getPrice(product).special, 'currency')
        "
        :link="
          localePath(
            `/p/${productGetters.getId(product)}/${productGetters.getSlug(
              product
            )}`
          )
        "
      ></Pcard>
    </div>
  </div>
</template>
<script>
import {
  productGetters,
  useFacet,
  facetGetters,
} from "@vue-storefront/shopify";

import { computed, onMounted } from "@vue/composition-api";
import { onSSR } from "@vue-storefront/core";
import Pcard from '~/components/Pcard.vue';
export default {
  components: {
   Pcard,
  },
  setup() {
    const { result, search, loading } = useFacet();
    const products = computed(() => facetGetters.getProducts(result.value));

    onSSR(async () => {
      await search({
        categorySlug: "most-loved",
        itemsPerPage: 8,
      });
    });

    onMounted(() => {
      console.log(result);
    });

    return {
      products,
      loading,
      productGetters,
    };
  },
};
</script>
<style scoped>
.container {
  display: grid;
  grid-template-columns: 300px 300px 300px 300px;
  grid-gap: 10px;
  padding: 10px;
}
h2 {
  text-align: center;
  margin: 70px 0px;
}
</style>
