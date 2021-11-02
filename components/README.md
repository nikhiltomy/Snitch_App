Put here theme-specific components to override default ones



  <!--SideBar-->
    <aside class="sidebar" v-bind:class="{ showSidebar: isActive }">
      <div class="sidebar-header">
        <!-- <img
          src="https://res.cloudinary.com/dafnqo9go/image/upload/v1635403702/snitch/logo.png"
          class="logo"
          alt=""
        /> -->
        <div @click="isActive = !isActive" class="close-btn">
          <span class="sf-icon color-black size-lg">
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
      <!-- links -->
      <ul class="links">
        <li>
          <a href="index.html">home</a>
        </li>
        <li>
          <a href="about.html">about</a>
        </li>
        <button class="dropdown-btn">
          Dropdown
          <div style="float: right;
  padding-right: 8px;">
            <span class="sf-icon color-black size-lg">
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
          </div>
        </button>
        <li>
          <a href="projects.html">projects</a>
        </li>
        <li>
          <a href="contact.html">contact</a>
        </li>
      </ul>
      <!-- social media -->
      <ul class="social-icons">
        <li>
          <a href="https://www.twitter.com">
            <i class="fab fa-facebook"></i>
          </a>
        </li>
        <li>
          <a href="https://www.twitter.com">
            <i class="fab fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href="https://www.twitter.com">
            <i class="fab fa-behance"></i>
          </a>
        </li>
        <li>
          <a href="https://www.twitter.com">
            <i class="fab fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a href="https://www.twitter.com">
            <i class="fab fa-sketch"></i>
          </a>
        </li>
      </ul>
    </aside>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
    };
  },
};
</script>
<style scoped>
.dropdown-btn {
  display: block;
  font-size: 1.5rem;
  text-transform: capitalize;
  padding: 1rem 1.5rem;
  color: var(--clr-grey-5);
  transition: var(--transition);
}
.icons {
  float: left;
  padding: 25px 12px;
}
.list {
  width: 200px;
  float: right;
  height: 100px;
  text-align: center;
  padding-top: 25px;
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
  width: 450px;
  height: 100px;
  border: 2px dashed red;
  text-align: center;
  padding-top: 25px;
}

/*sidebar styles

/*
=============== 
Fonts
===============
*/
@import url("https://fonts.googleapis.com/css?family=Open+Sans|Roboto:400,700&display=swap");

/*
=============== 
Variables
===============
*/

:root {
  /* dark shades of primary color*/
  --clr-primary-1: hsl(205, 86%, 17%);
  --clr-primary-2: hsl(205, 77%, 27%);
  --clr-primary-3: hsl(205, 72%, 37%);
  --clr-primary-4: hsl(205, 63%, 48%);
  /* primary/main color */
  --clr-primary-5: hsl(205, 78%, 60%);
  /* lighter shades of primary color */
  --clr-primary-6: hsl(205, 89%, 70%);
  --clr-primary-7: hsl(205, 90%, 76%);
  --clr-primary-8: hsl(205, 86%, 81%);
  --clr-primary-9: hsl(205, 90%, 88%);
  --clr-primary-10: hsl(205, 100%, 96%);
  /* darkest grey - used for headings */
  --clr-grey-1: hsl(209, 61%, 16%);
  --clr-grey-2: hsl(211, 39%, 23%);
  --clr-grey-3: hsl(209, 34%, 30%);
  --clr-grey-4: hsl(209, 28%, 39%);
  /* grey used for paragraphs */
  --clr-grey-5: hsl(210, 22%, 49%);
  --clr-grey-6: hsl(209, 23%, 60%);
  --clr-grey-7: hsl(211, 27%, 70%);
  --clr-grey-8: hsl(210, 31%, 80%);
  --clr-grey-9: hsl(212, 33%, 89%);
  --clr-grey-10: hsl(210, 36%, 96%);
  --clr-white: #fff;
  --clr-red-dark: hsl(360, 67%, 44%);
  --clr-red-light: hsl(360, 71%, 66%);
  --clr-green-dark: hsl(125, 67%, 44%);
  --clr-green-light: hsl(125, 71%, 66%);
  --clr-black: #222;
  --ff-primary: "Roboto", sans-serif;
  --ff-secondary: "Open Sans", sans-serif;
  --transition: all 0.3s linear;
  --spacing: 0.1rem;
  --radius: 0.25rem;
  --light-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  --dark-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  --max-width: 1170px;
  --fixed-width: 620px;
}
/*
=============== 
Global Styles
===============
*/

*,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: var(--ff-secondary);
  background: var(--clr-grey-10);
  color: var(--clr-grey-1);
  line-height: 1.5;
  font-size: 0.875rem;
}
ul {
  list-style-type: none;
}
a {
  text-decoration: none;
}
h1,
h2,
h3,
h4 {
  letter-spacing: var(--spacing);
  text-transform: capitalize;
  line-height: 1.25;
  margin-bottom: 0.75rem;
  font-family: var(--ff-primary);
}
h1 {
  font-size: 3rem;
}
h2 {
  font-size: 2rem;
}
h3 {
  font-size: 1.25rem;
}
h4 {
  font-size: 0.875rem;
}
p {
  margin-bottom: 1.25rem;
  color: var(--clr-grey-5);
}
@media screen and (min-width: 800px) {
  h1 {
    font-size: 4rem;
  }
  h2 {
    font-size: 2.5rem;
  }
  h3 {
    font-size: 1.75rem;
  }
  h4 {
    font-size: 1rem;
  }
  body {
    font-size: 1rem;
  }
  h1,
  h2,
  h3,
  h4 {
    line-height: 1;
  }
}
/*  global classes */

/* section */
.section {
  padding: 5rem 0;
}

.section-center {
  width: 90vw;
  margin: 0 auto;
  max-width: 1170px;
}
@media screen and (min-width: 992px) {
  .section-center {
    width: 95vw;
  }
}
main {
  min-height: 100vh;
  display: grid;
  place-items: center;
}

/*
=============== 
Sidebar
===============
*/

@keyframes bounce {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}

.sidebar-header {
  display: flex;
  justify-content: end;
  align-items: right;
  padding: 1rem 1.5rem;
  padding-top: 50px;
}

.close-btn:hover {
  color: var(--clr-red-light);
  transform: rotate(360deg);
}
.logo {
  justify-self: center;
  height: 100px;
}

.links a {
  display: block;
  font-size: 1.5rem;
  text-transform: capitalize;
  padding: 1rem 1.5rem;
  color: var(--clr-grey-5);
  transition: var(--transition);
}
.links a:hover {
  background: var(--clr-primary-8);
  color: var(--clr-primary-5);
  padding-left: 1.75rem;
}
.social-icons {
  justify-self: center;
  display: flex;
  padding-bottom: 2rem;
}
.social-icons a {
  font-size: 1.5rem;
  margin: 0 0.5rem;
  color: var(--clr-primary-5);
  transition: var(--transition);
}
.social-icons a:hover {
  color: var(--clr-primary-1);
}

.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: grey;
  z-index: 1;
  display: grid;
  grid-template-rows: auto 1fr auto;
  row-gap: 1rem;
  box-shadow: var(--clr-red-dark);
  transition: var(--transition);
  transform: translate(-100%);
}
.showSidebar {
  transform: translate(0);
}
@media screen and (min-width: 676px) {
  .sidebar {
    width: 400px;
  }
}
</style>



//////////////

 <button class="dropdown-btn" @click="dropdownActive = !dropdownActive">
        Dropdown
        <span class="sf-icon color-black size-xs" style="float:right">
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
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div>
      <a href="#contact">Search</a>
    </div>
  </div>
