<template lang="">
  <div class="discover">
    <h2>DISCOVER CATEGORIES</h2>
    <Cards
      style="display:inline-block;padding-bottom:20px"
      v-for="list in categoriesList"
      :key="list.handle"
      :list="list"
    ></Cards>
  </div>
</template>
<script>
import Cards from "~/components/Cards.vue";
export default {
  props: ["categoriesList"],
  components: {
    Cards,
  },
};
</script>
<style scoped>
h2 {
  text-align: center;
  padding:70px 0px 60px;
}
.discover {
  background-color: #f3f4f9;
  margin: 0% 1% 0% 1%;
  text-align: center;
 
}

@media only screen and (max-width: 768px) {

.discover {
  background-color: #f3f4f9;
  padding: 0% 0% 0% 0%;
  text-align: center;
 
}

}
</style>

