<template lang="">
  <div>
    <div id="container" v-if="searchbarActive==false">
      <div>
        <div class="list" v-on:click="isActive = true">
          <span class="sf-icon color-white size-xs">
            <svg
              class="sf-icon-path"
              viewBox="0 0 24 24"
              preserveAspectRatio="none"
            >
              <path
                d="M2 3h20v3.636H2zM2 17.545h20v3.636H2zM2 10.273h12.727v3.636H2z"
                fill="var(--icon-color)"
              />
            </svg>
          </span>
        </div>
      </div>
      <div>
        <img
          src="https://res.cloudinary.com/dafnqo9go/image/upload/v1635403702/snitch/logo.png"
          alt=""
        />
      </div>
      <div>
        <div class="icons hidden-desktop"  @click="handleAccountClick">
          <span class="sf-icon color-white size-sm">
            <svg
              class="sf-icon-path"
              viewBox="0 0 24 24"
              preserveAspectRatio="none"
            >
              <path
                d="M20.667 21.024a.978.978 0 01-.977.976H4.977A.98.98 0 014 21.024c0-4.58 3.73-8.292 8.333-8.292s8.333 3.712 8.333 8.292zm-8.334-7.317c-4.06 0-7.352 3.276-7.352 7.317 0-.002 14.71 0 14.71 0-.005-4.041-3.296-7.317-7.358-7.317zm0-1.95c-2.707 0-4.901-2.185-4.901-4.879C7.432 4.184 9.626 2 12.333 2c2.708 0 4.902 2.184 4.902 4.878s-2.194 4.878-4.902 4.878zm0-.976c2.166 0 3.922-1.748 3.922-3.903 0-2.155-1.756-3.902-3.922-3.902-2.165 0-3.921 1.747-3.921 3.902 0 2.155 1.756 3.902 3.921 3.902z"
                fill="var(--icon-color)"
              />
            </svg>
          </span>
        </div>
        <div class="icons" @click="searchbarActive=true">
          <span class="sf-icon color-white size-sm">
            <svg
              class="sf-icon-path"
              viewBox="0 0 24 24"
              preserveAspectRatio="none"
            >
              <path
                d="M21.668 20.108l-3.59-3.562c2.803-3.588 2.508-8.698-.713-11.917A8.948 8.948 0 0010.998 2c-2.41 0-4.671.934-6.368 2.629A8.937 8.937 0 002 10.992c0 2.408.934 4.669 2.63 6.364a8.948 8.948 0 006.368 2.628 8.893 8.893 0 005.532-1.916l3.565 3.612c.22.221.492.32.786.32.295 0 .566-.123.787-.32.443-.417.443-1.13 0-1.572zm-3.884-9.116a6.723 6.723 0 01-1.992 4.792 6.777 6.777 0 01-4.794 1.99 6.773 6.773 0 01-4.795-1.99 6.769 6.769 0 01-1.991-4.792c0-1.818.712-3.514 1.991-4.791a6.777 6.777 0 014.795-1.99c1.819 0 3.516.711 4.794 1.99a6.729 6.729 0 011.992 4.791z"
                fill="var(--icon-color)"
              />
            </svg>
          </span>
        </div>
        
        <div class="icons" @click="toggleCartSidebar">
          <span class="sf-icon color-white size-sm">
            <svg
              class="sf-icon-path"
              viewBox="0 0 24 24"
              preserveAspectRatio="none"
            >
              <path
                d="M5.21602 10.7781C5.15525 11.0027 5.16536 11.1843 5.2323 11.3176L5.21602 10.7781ZM5.21602 10.7781C5.27661 10.5541 5.40553 10.2963 5.60276 10.0206M5.21602 10.7781L5.60276 10.0206M5.60276 10.0206L7.05524 7.99014M5.60276 10.0206L7.05524 7.99014M7.05524 7.99014H8.53621L6.42279 11.7745C6.11281 11.7695 5.85211 11.7245 5.65108 11.6474C5.43734 11.5655 5.29917 11.4508 5.2323 11.3176L7.05524 7.99014ZM6.67908 12.5614H17.321V18.6798C17.321 18.7553 17.2612 18.8137 17.1908 18.8137H14.3905V13.758C14.3905 13.5096 14.1925 13.3061 13.9442 13.3061H10.254C10.0057 13.3061 9.80771 13.5096 9.80771 13.758V18.8143L6.80939 18.8137H6.80937C6.73877 18.8137 6.67851 18.7551 6.67851 18.6792L6.67908 12.5614ZM18.7678 11.3176L18.8572 11.3625L18.7678 11.3176C18.7009 11.4508 18.5628 11.5655 18.349 11.6475C18.1358 11.7293 17.8553 11.775 17.5201 11.775H17.4299L15.3157 7.99072H16.9443L18.3973 10.0212L18.3973 10.0212C18.5945 10.2966 18.7235 10.5543 18.7841 10.7781C18.8448 11.0027 18.8347 11.1843 18.7678 11.3176ZM19.0263 9.56002L17.6364 7.61814V5.3203C17.6364 4.81296 17.2322 4.4 16.729 4.4H7.27097C6.76777 4.4 6.36356 4.81296 6.36356 5.3203V7.61754L4.9737 9.56003C4.97369 9.56004 4.97368 9.56005 4.97367 9.56006C4.45214 10.2884 4.28666 10.9765 4.47509 11.5198C4.6581 12.0474 5.16129 12.4013 5.90186 12.5182V18.6797C5.90186 19.187 6.30606 19.6 6.80926 19.6H17.1901C17.6933 19.6 18.0975 19.187 18.0975 18.6797L18.0981 12.5177C18.8387 12.401 19.3419 12.0473 19.5249 11.5197C19.7134 10.9765 19.5479 10.2884 19.0263 9.56005C19.0263 9.56004 19.0263 9.56003 19.0263 9.56002ZM7.14018 5.3203C7.14018 5.24468 7.20019 5.18575 7.27104 5.18575H16.7291C16.7995 5.18575 16.86 5.24485 16.86 5.3203V7.20492H7.14021L7.14018 5.3203ZM10.0243 7.99072L9.01761 11.775H7.31494L9.42916 7.99072H10.0243ZM9.82215 11.775L10.8289 7.99072H11.538V11.775H9.82215ZM12.3145 7.99072H13.0236L14.0303 11.775H12.3145L12.3145 7.99072ZM14.8349 11.775L13.8282 7.99072H14.424L16.5382 11.775H14.8349ZM13.6139 18.8137H10.5843V14.0919H13.6139V18.8137Z"
                fill="var(--icon-color)"
              />
            </svg>
          </span>
        </div>
        <div class="icons" @click="toggleCartSidebar">
          <span class="sf-icon color-white size-sm">
            <svg
              class="sf-icon-path"
              viewBox="0 0 24 24"
              preserveAspectRatio="none"
            >
              <path
                d="M12.014 2c3.413 0 6.19 2.645 6.19 5.895 0 2.204-1.273 4.132-3.124 5.125 3.76 1.157 6.537 4.297 6.884 8.209.116.991-1.851 1.047-1.909.11-.405-3.912-3.934-6.887-8.041-6.887-4.166 0-7.637 2.975-8.042 6.887-.116.937-2.083.881-1.967-.11.405-3.857 3.182-7.052 6.884-8.21-1.852-.99-3.124-2.92-3.124-5.124C5.765 4.645 8.6 2 12.014 2zm0 1.873c-2.372 0-4.282 1.818-4.282 4.022 0 2.259 1.91 4.078 4.282 4.078 2.314 0 4.222-1.818 4.222-4.078 0-2.204-1.909-4.022-4.223-4.022z"
                fill="var(--icon-color)"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>





  <TheSearch :searchbarActive="searchbarActive" @closeSearch="searchbarActive=false"></TheSearch>



    <div class="sidenav" v-if="isActive == true">
      <div class="close-btn" v-on:click="isActive = false">
        <span class="sf-icon color-black size-xs">
          <svg
            class="sf-icon-path"
            viewBox="0 0 24 24"
            preserveAspectRatio="none"
          >
            <path
              d="M21.261 2.22a.748.748 0 00-1.057 0l-8.464 8.463-8.463-8.464a.748.748 0 10-1.058 1.058l8.464 8.463-8.464 8.464a.748.748 0 101.058 1.057l8.463-8.463 8.464 8.463a.748.748 0 101.057-1.057l-8.463-8.464 8.463-8.463a.748.748 0 000-1.058z"
              fill="var(--icon-color)"
            />
          </svg>
        </span>
      </div>
      <TheDropdown></TheDropdown>
  
      <a class="navContent" href="#about">SNITCH PLUS</a>
      <a class="navContent" href="#services">SNITCH LUXE</a>
      <a class="navContent" href="#clients">BULK ORDER</a>
      <a class="navContent" href="#contact">Place Return/Exchange <br> Request</a>
      <a class="navContent" href="#contact">Track Order</a>
      <a class="navContent" href="#contact">DOWNLOAD APP</a>
      <a class="navContent" href="#login">Log in</a>
      
      <SfList class="dislay_footerimage">
        <SfListItem v-for="item in social" :key="item" >
      
        <SfImage class="footer__social-image"  :key="item" :src="'/icons/'+item+'.svg'" :alt="item" width="32" height="32" />
       
      </SfListItem>
      </SfList>
    </div>
  </div>
</template>

<script>
import { SfFooter, SfList, SfImage, SfMenuItem } from '@storefront-ui/vue';
import TheSearch from "~/components/TheSearch.vue";
import TheDropdown from "~/components/TheDropdown.vue";
import useUiState from "~/composables/useUiState";
import { useCart, useWishlist, useUser, cartGetters, useCategory } from '@vue-storefront/shopify';
import { computed, ref } from '@vue/composition-api';
export default {
  components: {
    TheDropdown,
    TheSearch,
    SfFooter,
    SfList,
    SfImage
  },
  setup() {
   
    const {
      toggleCartSidebar,
      toggleWishlistSidebar,
      toggleLoginModal,
    } = useUiState();

  const { isAuthenticated, load: loadUser } = useUser();



const accountIcon = computed(() => isAuthenticated.value ? 'profile_fill' : 'profile');
  const handleAccountClick = async () => {
      if (isAuthenticated.value) {
        return root.$router.push('/my-account');
      }

      toggleLoginModal();
    };
    return {
      toggleCartSidebar,
      toggleWishlistSidebar,
      handleAccountClick,
      accountIcon,
      
    };
  },
  data() {
    return {
      isActive: false,
      searchbarActive:false,
      social: ['google','facebook','twitter', 'pinterest','youtube'],
    };
  },
};
</script>
<style scoped>
.drpactive {
  display: block !important;
}
.close-btn {
  float: right;
  display: block;
  padding: 20px 0px;
}
.navContent{
  border: 1px solid #F5F5F5 !important;
  padding-top: 15px !important;
  scroll-padding-bottom: 15px;
}
.footer__social-image{
  margin-top: 50px;
 border:1px solid #F5F5F5;
 padding: 5px;
}
/* .dropdown-btn {
  display: block;
  font-size: 1.5rem;
  text-transform: capitalize;
  padding: 1rem 1.5rem;
  color: var(--clr-grey-5);
  transition: var(--transition);
} */
.icons {
  float: left;
  padding: 25px 6px;
}
.list {
  width: 200px;
  height: 100px;
  text-align: center;
  padding-top: 25px;
  padding-left: 40px !important;
}
#container {
  display: flex; /* establish flex container */
  flex-direction: row; /* default value; can be omitted */
  flex-wrap: nowrap; /* default value; can be omitted */
  justify-content: space-between; /* switched from default (flex-start, see below) */
  background-color: black;
  height: 150px;
}
#container > div {
  width: 210px;
  height: 100px;
  text-align: center;
  padding-top: 25px;
}

/*sample

/* Fixed sidenav, full height */
.sidenav {
  height: 100%;
  width: 280px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #ffffff;
  overflow-x: hidden;
  padding-top: 40px;
  padding-right: 20px;
}

/* Style the sidenav links and the dropdown button */
.sidenav a,
.dropdown-btn {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 17px;
  color: #262626;
  display: block;
  font-weight: 500;
  border: none;
  background: none;
  width: 100%;
  text-align: left;
  cursor: pointer;
  outline: none;
}

/* On mouse-over */
.sidenav a:hover,
.dropdown-btn:hover {
  color: #f1f1f1;
}

/* Main content */
.main {
  margin-left: 200px; /* Same as the width of the sidenav */
  font-size: 20px; /* Increased text to enable scrolling */
  padding: 0px 10px;
}

/* Add an active class to the active dropdown button */
.active {
  background-color: green;
  color: white;
}

/* Dropdown container (hidden by default). Optional: add a lighter background color and some left padding to change the design of the dropdown content */
.dropdown-container {
  display: none;
  background-color: #262626;
  padding-left: 8px;
}

/* Optional: Style the caret down icon */
.fa-caret-down {
  float: right;
  padding-right: 8px;
}

/* Some media queries for responsiveness */
@media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 15px;
  }
  .sidenav a {
    font-size: 18px;
  }
}
@media (max-width:480px)  {

#container > div {
  width: 115px;
  height: 100px;
  text-align: center;
  padding-top: 25px;
}
.icons {
  float: left;
  padding: 25px 2px;
}
.hidden-desktop{
  display: none;
}
.list {
  width: 200px;
  height: 100px;
  float:left;
  text-align: center;
  padding-top: 25px;
 padding-left: 15px;
}
}
</style>
