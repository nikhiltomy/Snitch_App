<template lang="">
    <div>
           <SfProductCard
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
              @click:add-to-cart="HandleAddTocart({ product, quantity:1 })"
            />
    </div>
</template>
<script>
import {
  SfProductCard, 
} from '@storefront-ui/vue';
export default {
    setup(){
      
    }
}
</script>
<style lang="">
    
</style>