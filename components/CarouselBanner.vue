<template>
<div>
  <SfHero class="hero">
      <SfHeroItem
        v-for="(hero, i) in heroes"
        :key="i"
        :image="hero.image"
        :class="hero.className"
      />
    </SfHero>
</div>
</template>
<script>
import { SfHero } from "@storefront-ui/vue";
export default {
     components: { SfHero },
      name: "CarouselBanner",
     data() {
       return {
         heroes: [
        {
          image: {
            mobile:
              "https://res.cloudinary.com/auki-digital-solutions/image/upload/v1635767491/NewV/Diwali_banner_new_1_1944x.png",
            desktop:
              "https://res.cloudinary.com/auki-digital-solutions/image/upload/v1635767491/NewV/Diwali_banner_new_1_1944x.png",
          },
          link: "",
        },
        {
          image: {
            mobile:
              "https://res.cloudinary.com/auki-digital-solutions/image/upload/v1635489425/NewV/4_1944x.jpg",
            desktop:
              "https://res.cloudinary.com/auki-digital-solutions/image/upload/v1635489425/NewV/4_1944x.jpg",
          },
          link: "",
        },
        {
          title: "Colorful summer dresses are already in store",
          subtitle: "SUMMER COLLECTION 2021",
          buttonText: "Learn more",
          background: "#efebe9",
          image: {
            mobile:
              "https://res.cloudinary.com/auki-digital-solutions/image/upload/v1635767492/NewV/Diwali_banner_new_3_1944x.png",
            desktop:
              "https://res.cloudinary.com/auki-digital-solutions/image/upload/v1635767492/NewV/Diwali_banner_new_3_1944x.png",
          },
          link: "/c/women/women-shoes-sandals",
          className:
            "sf-hero-item--position-bg-top-left sf-hero-item--align-right",
        },
      ],
       }
      
     },
    
}
</script>
<style lang="scss">
   .sf-hero__control--left{
     display: none;
   }
   .sf-hero__control--right{
     display: none;
   }
   .sf-hero__bullets{
     display: none;
   }
   .img_mobile{
     text-align: center;
   }
   @media only screen and (min-width:700px) and (max-width:800px){
       .sf-hero-item__wrapper{
         min-height: 27.625rem;
         background-size:cover;
      }

    
   }
   @include for-desktop {
      .sf-hero-item__wrapper{
         min-height: 53.625rem;
         background-size:contain;
      }

     .img_mobile{
       max-width: 100%;
      height: auto;
     } 
   }
   @media only screen and (min-width:700px){
   .sf-hero-item__wrapper{
     width: 344px;
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
    
</style>