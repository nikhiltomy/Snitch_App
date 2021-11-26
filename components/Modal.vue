<template>
   <div class="vs-modal-container">
       <div class="vs-modal-body">
            <h2 class="vs-modal__title">ENTER YOUR EMAIL AND GET</h2>
            <p class="vs-modal__subtitle">10% OFF</p>
            <p class="vs-modal__subtitle--down">with order of $25 or vs-more</p>

             <div class="vs-modal__input-wrapper"> 
                 <form>
                 <input class="vs-modal__input" type="email" @input="printt"   placeholder="Enter your email id"/>
                 <button class="vs-modal__input-button"  type="submit">SUBMIT</button>
                 </form>
             </div>
             <p><a href="#" @click="$emit('closeModal')">No thanks I prefer Privacy</a></p>
       </div>
   </div>
</template>

<script>
export default {
 name:'Modal',
 
 emits: ['closeModal'],

 data(){
     return{
         emailInput: '' , 
     };
 } ,

 methods: {
     printt(e){
         console.log(e.target.value);
     } ,
 },

 computed: {
     
 }

}
</script>

<style >
    .vs-modal-container{
        width: 60vw; 
        background-color: #2b2f3e;
        min-height: 20vw ;
        position: fixed;
        top:30%;
        left:50%;
        justify-content: center;
        margin: auto -25vw; 
        z-index: 40;
    }


    .vs-modal-body{
        display: grid;
        place-items: center;
    }
    .vs-modal-body > * {
        margin: 0px;
    } 
    .vs-modal__title{
        padding:10px 0px;
        font-size: 1.2rem;
    }

    .vs-modal__subtitle{
        padding:5px;
        font-size: 5rem;
    }

    .vs-modal__subtitle--down{
        font-size: 0.9rem;
    }

    .vs-modal__input{
        border:none ; 
    }

    .vs-modal__input-button{
        border:none ; 
    }

    .vs-modal__input-wrapper{
        padding: 5px; 
    }

</style>