<template>
  <div class="displaygrid">
    <SfBanner
      v-for="images in imagesArray"
      :key="images.id"
      title=""
      subtitle=""
      description=""
      buttonText=""
      link=""
      background=""
      :image="images.image"
   
    />
  </div>
</template>
<script>
import { SfBanner } from "@storefront-ui/vue";

export default {
  name: "Banner",
  components: { SfBanner },
  setup() {},

  data() {
    return {
      imagesArray: [
        {
          image:"https://res.cloudinary.com/auki-digital-solutions/image/upload/v1635844308/NewV/new/123.png",
          
        },
        
        {
          image:"https://res.cloudinary.com/auki-digital-solutions/image/upload/v1635844308/NewV/new/456.png",
          
          
        },
      ],
    };
  },
};
</script>
<style lang="scss"  scoped>
.displaygrid {
  display: grid;
  grid-template-rows: auto auto;
  grid-row-gap: 60px;
}
.sf-banner{
  min-height: var(--banner-height, 30rem);
}

@media only screen and (max-width: 600px){
.sf-banner{
  background-size:contain;
   background-position: center
  
  }
  .displaygrid {
   display:flex;
   flex-direction: column;
  }
  .sf-banner{
  min-height: var(--banner-height, 7rem);
}
}
@media only screen and (min-width:700px) and (max-width:800px)
{
.sf-banner{
  background-size:cover;
   background-position: center
  
  }
  .displaygrid {
   display:flex;
   flex-direction: column;
  }
  .sf-banner{
  min-height: var(--banner-height, 15rem);
}
}
</style>