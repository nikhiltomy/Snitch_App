<template>
  <div class="grid-container">
    <a :href="localePath(`/c/${list.handle}`)">
      <div class="item" :style="{ backgroundImage: `url(${list.image.src})` }">
        <span class="title">{{ list.title }}</span>
      </div></a
    >
  </div>
</template>
<script>
export default {
  props: ["list"],
};
</script>
<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: 290px 290px 290px 290px;
  grid-gap: 10px;

  padding: 10px;
}

.grid-container > div {
  text-align: center;
  padding: 20px 0;
  font-size: 30px;
}

.item {
  width: 290px;
  height: 315px;
  vertical-align: middle;
  background-size: cover;
}
.discover {
  background-color: #f3f4f9;
}
h1 {
  text-align: center;
}
.title {
  color: #fff;
  font-weight: bold;
  font-family: sans-serif;
  font-size: 18px;
  vertical-align: bottom;
  position: relative;
  top: 86%;
  /* left: 45%; */
  -webkit-font-smoothing: antialiased;
  -webkit-text-size-adjust: 100%;
  text-rendering: optimizeSpeed;
}

@media only screen and (max-width: 500px) {
 .item {
  width: 140px;
  height: 145px;
  vertical-align: middle;
  background-size: cover;
}
.grid-container {
  display: grid;
  grid-template-columns: 120px 120px;
  grid-gap: 10px;

  padding: 10px;
}
}
</style>
