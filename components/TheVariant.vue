<template lang="">
    
       <div>
       <img  v-for="image in variants" :key="image.id" @click="changeImage(e)"  :src="image.src"  style="border-radius: 14px;text-align: center;width:12%;paddimg-left:20px">
     
       </div>
</template>
<script>
export default {
     name:'TheVariant' ,
   props: ['variants'],
   mounted() {
       console.log(this.variants);
   },
}
</script>
<style lang="">
    
</style>