 <template lang="" >
    <div class="gridWrapper">
     <h2> {{ htitle }}</h2>
      <div class="grid__container">
      <!-- <div class="product-grid"> -->
        <PrCard1 v-for="(list, i) in productArray"
          :key="i"
            :title="list.handle"
           :image1="list.images[0].src"
           :image2="list.images[1].src"
           :price="list.variants[0].price"
           :link="localePath(`/p/${list.id}/${list.handle}`)"
          />
        <!-- </div> -->
        
    </div>
    <div class="shop_btn">
  <SfLink class="color-secondary sf-button " :aria-disabled="false"  :link="localePath(`/c/${linktext}`)">
    View all
  </SfLink>
</div>
  </div>

</template>
<script> 
import PrCard1 from  '~/components/ProductCard1.vue';
import {
  SfLink,
} from '@storefront-ui/vue';
export default {
   
  props: {
    title: String,
    products: Array,
    loading: Boolean ,
    htitle: String , 
    linktext: String, 
  },

  name : 'Productgrid1' ,

  components:{
    PrCard1 ,
    SfLink
  },

  computed: {
     productArray(){
      
       return this.products ;
     }
  } ,

    mounted(){
   console.log('grid' ,this.products);
    console.log( );
     
  },


};
</script>

<style scoped>
.shop_btn{
 align-items: center;
 padding:50px
}
h2 {
  text-align: center;
  margin: 70px 0px;
}
 .gridWrapper{
  display:grid;
  place-items: center;
  margin:30px auto; 
 }

  .grid__container{  
        display: grid;
        margin:  auto ;
        width: 100%;
        grid-template-columns: 1fr 1fr ;
        /* border: 1px dashed black; */
        column-gap: 16px;
        row-gap: 20px;
    }

@media screen and (min-width: 768px) {

 }



@media screen and (min-width: 992px) {
        .gridWrapper{
  display:grid;
  place-items: center;
  padding:0px 20px; 
 }


.grid__container{  
display: grid;
margin:  0px 4px;
width: 100%;
grid-template-columns: 1fr 1fr 1fr 1fr ;
/* border: 1px dashed black; */
column-gap: 22px;
row-gap: 28px;
}

}

</style> 