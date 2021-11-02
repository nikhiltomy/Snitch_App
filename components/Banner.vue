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
      :image="images.link"
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
          link: "https://res.cloudinary.com/auki-digital-solutions/image/upload/v1635309983/NewV/Luxe_3_1_1600x.png",
        },
        {
          link: "https://res.cloudinary.com/auki-digital-solutions/image/upload/v1635309983/NewV/IMG-7719_1600x.png",
        },
        {
          link: "https://res.cloudinary.com/auki-digital-solutions/image/upload/v1635309983/NewV/Snitch-Plus2_1600x.png",
        },
      ],
    };
  },
};
</script>
<style  scoped>
.displaygrid {
  display: grid;
  grid-row-gap: 70px;
}
</style>