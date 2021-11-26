<template>
  <div id="home">
    <div class="image_process">
      <img
        src="https://res.cloudinary.com/auki-digital-solutions/image/upload/v1635776527/NewV/BUY_3_GET_FLAT_15_OFF_Use_code_BUY3_1897_x_300_px_1600x.jpg"
        alt=""
        style="max-width:100%"
      />
    </div>
    <CarouselBanner></CarouselBanner>

    <Productgrid1  
          :products="categoriesNew.products"
          :loading="productsLoading"
           linktext="new-arrivals"
           htitle="WHATS NEW" />

    <Banner></Banner>

    <Productgrid1  
          :products="categoriesMostLiked.products"
          :loading="productsLoading"
           linktext="most-loved"
           htitle="MOST LOVED 🖤" />

    <Modal v-if="showModal" @closeModal="closeModal"/>
 
    <CardContainer :categoriesList="categoriesList"></CardContainer>

    <LazyHydrate when-visible>
      <RelatedProducts
        :products="products"
        :loading="productsLoading"
        title="Match it with"
      />
    </LazyHydrate>

    <lower-banner></lower-banner>
  </div>
</template>
<script type="module">
import {
  SfHero,
  SfBanner,
  SfCallToAction,
  SfSection,
  SfCarousel,
  SfImage,
  SfBannerGrid,
  SfHeading,
  SfArrow,
  SfButton,
} from "@storefront-ui/vue";
import Productgrid1 from "~/components/Productgrid1.vue";
import CarouselBanner from "~/components/CarouselBanner.vue";
import Banner from "~/components/Banner.vue";
import LowerBanner from "~/components/LowerBanner.vue";
import RelatedProducts from "~/components/RelatedProducts.vue";
import RelatedProducts1 from "~/components/RelatedProducts1.vue";
import { useProduct, useCart, productGetters } from "@vue-storefront/shopify";
import { computed } from "@vue/composition-api";
import { onSSR } from "@vue-storefront/core";
import MobileStoreBanner from "~/components/MobileStoreBanner.vue";
import LazyHydrate from "vue-lazy-hydration";
import CardContainer from "~/components/CardContainer.vue";
import { useCategory } from "@vue-storefront/shopify";
import Modal from '~/components/Modal.vue';

export default {
  name: "Home",
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  setup() {
    const { categories: categoriesList, search: searchList } = useCategory(
      "all-categories"
    );
    const {
      categories: categoriesMostLiked,
      search: searchMostLiked,
    } = useCategory("most-loved");

    const { categories: categoriesNew, search: searchNew } = useCategory(
      "new-arrivals"
    );

    const {
      products: relatedProducts,
      search: productsSearch,
      loading: productsLoading,
    } = useProduct("relatedProducts");
    const { cart, load: loadCart, addItem: addToCart, isInCart } = useCart();

    onSSR(async () => {
      await searchList({ slug: "" });
      await searchMostLiked({ slug: "most-loved" });
      await searchNew({ slug: "new-arrivals" });
      await productsSearch({ limit: 8 });
      await loadCart();
    });
    return {
      products: computed(() =>
        productGetters.getFiltered(relatedProducts.value, { master: true })
      ),
      getChkId: computed(() => cart.value.id),
      productsLoading,
      productGetters,
      addToCart,
      isInCart,
      categoriesList,
      categoriesMostLiked,
      categoriesNew,
    };
  },
  components: {
    SfHero,
    RelatedProducts,
    RelatedProducts1,
    SfBanner,
    SfCallToAction,
    SfSection,
    SfCarousel,
    SfImage,
    SfBannerGrid,
    SfHeading,
    SfArrow,
    SfButton,
    MobileStoreBanner,
    LazyHydrate,
    CardContainer,
    CarouselBanner,
    LowerBanner,
    Banner,
    Productgrid1,
    Modal , 
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  data() {
    return {
      heroes: [
        {
          title: "Colorful summer dresses are already in store",
          subtitle: "SUMMER COLLECTION 2021",
          buttonText: "Learn more",
          background: "#eceff1",
          image: {
            mobile:
              "https://cdn.shopify.com/s/files/1/0407/1902/4288/files/bannerB_328x224.jpg",
            desktop:
              "https://cdn.shopify.com/s/files/1/0407/1902/4288/files/bannerB_1240x400.jpg",
          },
          link: "/c/women/women-clothing-shirts",
        },
        {
          title: "Colorful summer dresses are already in store",
          subtitle: "SUMMER COLLECTION 2021",
          buttonText: "Learn more",
          background: "#fce4ec",
          image: {
            mobile:
              "https://cdn.shopify.com/s/files/1/0407/1902/4288/files/bannerH_328x224.jpg",
            desktop:
              "https://cdn.shopify.com/s/files/1/0407/1902/4288/files/bannerH_1240x400.jpg",
          },
          link: "/c/women/women-clothing-dresses",
        },
        {
          title: "Colorful summer dresses are already in store",
          subtitle: "SUMMER COLLECTION 2021",
          buttonText: "Learn more",
          background: "#efebe9",
          image: {
            mobile:
              "https://cdn.shopify.com/s/files/1/0407/1902/4288/files/bannerA_328x224.jpg",
            desktop:
              "https://cdn.shopify.com/s/files/1/0407/1902/4288/files/bannerA_1240x400.jpg",
          },
          link: "/c/women/women-shoes-sandals",
          className:
            "sf-hero-item--position-bg-top-left sf-hero-item--align-right",
        },
      ],
      banners: [
        {
          slot: "banner-A",
          subtitle: "Dresses",
          title: "Cocktail & Party",
          description:
            "Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses from all your favorite brands.",
          buttonText: "Shop now",
          image: {
            mobile:
              "https://cdn.shopify.com/s/files/1/0407/1902/4288/files/bannerB_328x343.jpg",
            desktop:
              "https://cdn.shopify.com/s/files/1/0407/1902/4288/files/bannerF_332x840.jpg",
          },
          class: "sf-banner--slim desktop-only",
          link: "/c/women/women-clothing-skirts",
        },
        {
          slot: "banner-B",
          subtitle: "Dresses",
          title: "Linen Dresses",
          description:
            "Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses from all your favorite brands.",
          buttonText: "Shop now",
          image: {
            mobile:
              "https://cdn.shopify.com/s/files/1/0407/1902/4288/files/bannerE_328x343.jpg",
            desktop:
              "https://cdn.shopify.com/s/files/1/0407/1902/4288/files/bannerE_496x840.jpg",
          },
          class: "sf-banner--slim banner-central desktop-only",
          link: "/c/women/women-clothing-dresses",
        },
        {
          slot: "banner-C",
          subtitle: "T-Shirts",
          title: "The Office Life",
          image: {
            mobile:
              "https://cdn.shopify.com/s/files/1/0407/1902/4288/files/bannerC_328x343.jpg",
            desktop:
              "https://cdn.shopify.com/s/files/1/0407/1902/4288/files/bannerC_332x400.jpg",
          },
          class: "sf-banner--slim banner__tshirt",
          link: "/c/women/women-clothing-shirts",
        },
        {
          slot: "banner-D",
          subtitle: "Summer Sandals",
          title: "Eco Sandals",
          image: {
            mobile:
              "https://cdn.shopify.com/s/files/1/0407/1902/4288/files/bannerG_328x343.jpg",
            desktop:
              "https://cdn.shopify.com/s/files/1/0407/1902/4288/files/bannerG_332x400.jpg",
          },
          class: "sf-banner--slim",
          link: "/c/women/women-shoes-sandals",
        },
      ],
      showModal : false , 
    };
  },
  methods: {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    toggleWishlist(index) {
      this.products[index].isInWishlist = !this.products[index].isInWishlist;
    },

    closeModal(){
        this.showModal = false;
    },

    modalPopup(){
      console.log('pop up modal activated');
      this.showModal = true; 

      this.klaviyo();
    },

   async klaviyo(){
      console.log('Inside klaviyo');

      var a='U5m47x';
      
      if(window.klaviyoModulesObject&&(window.klaviyoModulesObject.companyId!=a||!window.klaviyoModulesObject.serverSideRendered)){console.warn('Cannot load klaviyo.js for different accounts on the same site. Skipping account "'+a+'". Active account is "'+window.klaviyoModulesObject.companyId+'"');return;};window._learnq=window._learnq||[];window.__klKey=window.__klKey||a;if(!window.klaviyoModulesObject){window._learnq.push(['account',a]);Object.defineProperty(window,'klaviyoModulesObject',{value:{companyId:a,loadTime:new Date(),loadedModules:{},loadedCss:{},serverSideRendered:true},enumerable:false});}var b={};function c(a){if(b[a])return;var c=document.createElement('script');c.type='text/javascript';c.async=true;c.src=a;document.head.appendChild(c);b[a]=true;}function d(a){var b=document.createElement('link');b.rel='stylesheet';b.href=a;document.head.appendChild(b);}function e(){var a=document.createElement('script');return 'noModule' in a;}function f(){try{new Function('import("")');return true;}catch(a){return false;}}var g=JSON.parse('{"static": {"js": ["https://static.klaviyo.com/onsite/js/fender_analytics.089eeb6786e293f1277f.js", "https://static.klaviyo.com/onsite/js/sharedUtils.67132abb8affde132c27.js", "https://static.klaviyo.com/onsite/js/static.efce0f8069ce0de75c2b.js"]}, "signup_forms": {"js": ["https://static.klaviyo.com/onsite/js/sharedUtils.67132abb8affde132c27.js", "https://static.klaviyo.com/onsite/js/sentry.3770b81f534eb4a7afe1.js", "https://static.klaviyo.com/onsite/js/vendors~signup_forms.8e849fcaf612cbc219e8.js", "https://static.klaviyo.com/onsite/js/signup_forms.fc98122d513f7482438a.js"]}}');if(e()||f())g=JSON.parse('{"static": {"js": ["https://static.klaviyo.com/onsite/js/fender_analytics.727f1b3efa048665bfdb.js", "https://static.klaviyo.com/onsite/js/sharedUtils.8640e1606247ed0a18ac.js", "https://static.klaviyo.com/onsite/js/static.ec58c6a230322abc39fd.js"]}, "signup_forms": {"js": ["https://static.klaviyo.com/onsite/js/sharedUtils.8640e1606247ed0a18ac.js", "https://static.klaviyo.com/onsite/js/sentry.3770b81f534eb4a7afe1.js", "https://static.klaviyo.com/onsite/js/vendors~signup_forms.0492ef2f712d8784c21d.js", "https://static.klaviyo.com/onsite/js/signup_forms.dd3b5f54dc1fd59a5e87.js"]}}');for(var h in g)if(g.hasOwnProperty(h)){var i=g[h];for(var j=0;j<i.js.length;j+=1)if(!window.klaviyoModulesObject.loadedModules[i.js[j]]){c(i.js[j]);window.klaviyoModulesObject.loadedModules[i.js[j]]=new Date().toISOString();}if(i.css)if(!window.klaviyoModulesObject.loadedCss[i.css]){d(i.css);window.klaviyoModulesObject.loadedCss[i.css]=new Date().toISOString();}}

    },

  },
  mounted() {
    console.log(this.categoriesMostLiked);
    setTimeout( this.modalPopup , 5000);
  },
};
</script>

<style lang="scss">
.sf-hero__control--left,
.sf-hero__control--right {
  display: none;
}
.article-meta h4 a {
  color: #111111;
  font-weight: 600;
  font-size: 20px;
}
.article-meta {
  margin-top: 10px;
}
.article-item__meta-item:not(:last-child)::after {
  display: inline-block;
  content: "";
  width: 5px;
  height: 5px;
  margin: -1px 10px 0 10px;
  border-radius: 100%;
  background: rgba(0, 0, 0, 0.4);
  vertical-align: middle;
}
#home {
  box-sizing: border-box;
  padding: 0 var(--spacer-sm);
  @include for-desktop {
    width: 100%;
    padding: 0;
    margin: 0 auto;
  }
}

.hero {
  margin: var(--spacer-xl) auto var(--spacer-lg);
  --hero-item-background-position: center;
  ::v-deep .sf-link:hover {
    color: var(--c-white);
  }
  @include for-desktop {
    margin: var(--spacer-xl) auto var(--spacer-2xl);
  }
  .sf-hero-item {
    &:nth-child(even) {
      --hero-item-background-position: left;
      @include for-mobile {
        --hero-item-background-position: 30%;
        --hero-item-wrapper-text-align: right;
        --hero-item-subtitle-width: 100%;
        --hero-item-title-width: 100%;
        --hero-item-wrapper-padding: var(--spacer-sm) var(--spacer-sm)
          var(--spacer-sm) var(--spacer-2xl);
      }
    }
  }
}

::v-deep .sf-hero__controls {
  --hero-controls-display: none;
}

.banner-grid {
  --banner-container-width: 50%;
  margin: var(--spacer-xl) 0;
  ::v-deep .sf-link:hover {
    color: var(--c-white);
  }
  @include for-desktop {
    margin: var(--spacer-2xl) 0;
    ::v-deep .sf-link {
      --button-width: auto;
    }
  }
}

.banner {
  &__tshirt {
    background-position: left;
  }
  &-central {
    @include for-desktop {
      --banner-container-flex: 0 0 70%;
    }
  }
}

.similar-products {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: var(--spacer-2xs);
  --heading-padding: 0;
  border-bottom: 1px var(--c-light) solid;
  @include for-desktop {
    border-bottom: 0;
    justify-content: center;
    padding-bottom: 0;
  }
}

.call-to-action {
  background-position: right;
  margin: var(--spacer-xs) 0;
  @include for-desktop {
    margin: var(--spacer-xl) 0 var(--spacer-2xl) 0;
  }
}

.carousel {
  margin: 0 calc(var(--spacer-sm) * -1) 0 0;
  @include for-desktop {
    margin: 0;
  }
  &__item {
    margin: 1.375rem 0 2.5rem 0;
    @include for-desktop {
      margin: var(--spacer-xl) 0 var(--spacer-xl) 0;
    }
    &__product {
      --product-card-add-button-transform: translate3d(0, 30%, 0);
    }
  }
}
/// v style
.image_process {
  height: 160px;
}
@media only screen and (max-width: 600px) {
  .image_process {
    height: 20px;
  }
}
</style>
