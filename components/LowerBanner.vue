<template>
  <div style="">
    <slot>
  <section class="display--inline">
 <div>
  <div  class="imagesction--bgcolor wrapper" style="padding-top:10px;padding-bottom:10px;display:inline-block;">
  <img   alt="" src="https://res.cloudinary.com/auki-digital-solutions/image/upload/v1635742005/NewV/a.png" style="max-width: 64%;">

  </div>
    <p style="" class="font--tag_p">Made In India</p>
 </div>
 <div>
  <div  class="imagesction--bgcolor wrapper" style="padding-top:20px;padding-bottom:20px;display:inline-block;">
  <img  alt="" src="https://res.cloudinary.com/auki-digital-solutions/image/upload/v1635742005/NewV/b.png" style="max-width: 64%;">
  </div>
  <p  class="font--tag_p">Free Shipping Accross India</p>
  </div>
  <div style="">
  <div class="imagesction--bgcolor wrapper" style="padding-top:10px;padding-bottom:10px;display:inline-block;">
  <img alt="" src="https://res.cloudinary.com/auki-digital-solutions/image/upload/v1635742005/NewV/c.png" style="max-width: 64%;">
    </div>
  <p  class="font--tag_p">10 Days Hassle Free Returns & <br/> Exchange</p> 
  </div>
  <div>
    <div class="imagesction--bgcolor wrapper" style="padding-top:20px;padding-bottom:20px;display:inline-block;">
  <img alt="" src="https://res.cloudinary.com/auki-digital-solutions/image/upload/v1635742005/NewV/d.png" style="max-width: 64%;">
    </div>
  <p  class="font--tag_p">Premium Quality</p> 
  </div>
   
  </section>
 
    </slot>
  </div>
</template>
<script>

export default {
  components: {
  },
};
</script>
<style lang="scss" scoped>

.display--inline{
  background-color: #f5f4f4;
  display: flex;
  justify-content:space-around;
  text-align: center;
  padding-top: 39px;
  padding-bottom: 30px;
  margin-top: 30px;
  
}
.imagesction--bgcolor{
  background-color:rgb(255, 255, 255);
  width: 83px;
  border-radius: 50%;
  padding-top: 10px;
 padding-bottom: 10px;

}
.wrapper:hover{
  
  background-color:black;
}
div >img:hover {
   filter: brightness(10) invert(10);  
 
}
.width_section{
  width: 20%;
}
/* div >img:hover {
  background-color:aqua;
  color: #f5f4f4;
} */
.font--tag_p{
  line-height: 1.5;
  font-size:16px;
  font-weight:400;
  line-height: 24px;
}
@media only screen and (min-width:700px) and (max-width:800px){
  .display--inline{
    display: block;
  }
  .font--tag_p{
    font-size: 14px;
  }
}
@media only screen and (max-width: 600px){
  .display--inline{
    display: block;
  }
  .font--tag_p{
    font-size: 14px;
  }
}

</style>