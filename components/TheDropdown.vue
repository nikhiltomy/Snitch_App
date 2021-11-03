<template>
    <div>
        <button class="dropdown-btn" @click="dropdownActive = !dropdownActive">
        SHOP
        <span class="sf-icon color-black size-xs" style="float:right;border-left:1px solid #F5F5F5;padding-left:5px">
          <svg
            class="sf-icon-path"
            viewBox="0 0 24 24"
            preserveAspectRatio="none"
          >
            <path
              d="M2 8.364L3.6 7l8.4 7.254L20.4 7 22 8.364 12 17z"
              fill="var(--icon-color)"
            />
          </svg>
        </span>
      </button>

      <div
        class="dropdown-container"
        v-bind:class="{ drpactive: dropdownActive }"
      >
        
        <TheInnerDropdown v-for="cat in categoriesNav" :key="cat.id" :cat="cat"></TheInnerDropdown>
       
      </div>
    </div>
</template>
<script>
import TheInnerDropdown from '~/components/TheInnerDropdown.vue'
import { useCategory } from "@vue-storefront/shopify";
import { onSSR } from "@vue-storefront/core";
export default {
  components:{
    TheInnerDropdown
  },
   setup() {
    const { categories: categoriesNav, search: searchNav } = useCategory(
      "all-categories"
    );

    

    onSSR(async () => {
      await searchNav({ slug: "" });
     
     
    });
    return {
      categoriesNav,
    };
  },
    data() {
        return {
            dropdownActive: false,
        }
    },
    mounted(){
      console.log(this.categoriesNav)
    }
}
</script>
<style scoped>
.drpactive {
  display: block !important;
}
/*sample

/* Fixed sidenav, full height */
.sidenav {
  height: 100%;
  width: 280px;
  position: fixed;
  z-index: 1;
  top: 25px;
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
  font-weight: 600;
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
  background-color: #ffffff;
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
</style>