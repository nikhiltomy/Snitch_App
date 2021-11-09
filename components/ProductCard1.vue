<template>
 <a :href="link">
   <div  class="card-container">
       <div class="prImage" id="image1" href="#"  :style="{ backgroundImage: `url(${image1})` }" alt="" />
       <div class="prImage" id="image2" href="#"  :style="{ backgroundImage: `url(${image2})` }" alt="" hidden/>
       <p  class="card__title">{{ title }}</p>
       <p class="card__price">Rs {{ price }}</p>
   </div>
 </a>
</template>


<script>
import {
  SfLink,
  SfPrice
} from '@storefront-ui/vue';
import { productGetters } from '@vue-storefront/shopify';

export default {
    name:'PrCard1' ,
     props: ['title','price','image1','image2', 'link'] , 

 setup() {
    return { productGetters };
  },
  components: {
     
    SfLink,
    SfPrice
  },
 

  mounted(){ 
    console.log("imgurl" ,this.title); 
  },

  data(){
      return{
          
      }
  },

  computed: {
    getUrl(){
      return 
    }
  }
}


</script>

<style scoped>
    .card-container{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        
    }

    .card-container > #image1 {
      display: block;
    }

    .card-container > #image2 {
      display: none;
    }

    .card-container:hover > #image1 {
      display: none;
    }

  .card-container:hover > #image2 {
      display: block;
    }
    

  .prImage{
      width:100%;
      height:244px; 
      background-size:cover ;
      background-repeat:no-repeat ;
  }

 .card__title{
   font-size: 12px;
   height:30px;
  
 }

.card__price{
  font-size: 12px;
}


  @media screen and (min-width:768px) {
      .prImage{
      width:100%;
      height:530px; 
  }
   .card__title{
   font-size: 12px;
   margin: 5px;
   padding: 0px;
    padding-top: 50px;
 }

 .card__price{
  font-size: 12px;
  margin:0px;
  padding: 0px;
}


  }

   @media screen and (min-width:992px) {
      .prImage{
      width:100%;
      height:420px; 
  }

  .card__title{
   font-size: 16px;
   margin: 5px;
   padding: 0px;
  padding-top: 50px;
 }

 .card__price{
  font-size: 16px;
  margin:0px;
  padding: 0px;
}

  }

 


</style>