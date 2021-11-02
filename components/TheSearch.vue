<template lang="">
<div class="search-container" v-if="searchbarActive==true">
  <div class="search">
    <div class="icons left">
          <span class="sf-icon color-black size-xs">
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

    <input class="left" type="search" name="" value="" size="150" placeholder = 'search'>

    <div class="close-btn left" @click="$emit('closeSearch')">
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
  </div>
  </div>
</template>
<script>
export default {
  props:['searchbarActive'],
  data() {
    return {
      
    }
  },
};
</script>
<style scoped>
.search-container{
 background-color:#ffffff;
  height: 150px;
}
.search {
 padding: 65px;
}
input{
    max-width: 100%;
    padding: 8px 10px;
    border-radius: 0;
    border: 1px solid #ffffff;
}
.left {
  float: left;
  padding: 10px;
  
}
</style>
