<template lang="">
  <div>
    <h2>MOST LOVED 🖤</h2>
    <div class="container">
      <SfProductCard
        imageWidth="100%"
        imageHeight="auto"
        data-cy="category-product-card"
        v-for="(product, i) in products"
        :key="productGetters.getId(product)"
        :style="{ '--index': i }"
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
        class="products__product-card"
        @click:wishlist="addItemToWishlist({ product })"
        @click:add-to-cart="HandleAddTocart({ product, quantity: 1 })"
      />
    </div>
  </div>
</template>
<script>
import {
  productGetters,
  useFacet,
  facetGetters,
} from "@vue-storefront/shopify";
import { SfProductCard } from "@storefront-ui/vue";
import { computed, onMounted } from "@vue/composition-api";
import { onSSR } from "@vue-storefront/core";
export default {
  components: {
    SfProductCard,
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
