import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1914d340 = () => interopDefault(import('..\\pages\\Category.vue' /* webpackChunkName: "pages/Category" */))
const _00959df8 = () => interopDefault(import('..\\pages\\Checkout.vue' /* webpackChunkName: "" */))
const _3abdc0f7 = () => interopDefault(import('..\\pages\\Checkout\\Billing.vue' /* webpackChunkName: "" */))
const _4d25d9fc = () => interopDefault(import('..\\pages\\Checkout\\Payment.vue' /* webpackChunkName: "" */))
const _5cb49462 = () => interopDefault(import('..\\pages\\Checkout\\Shipping.vue' /* webpackChunkName: "" */))
const _46426009 = () => interopDefault(import('..\\pages\\Checkout\\ThankYou.vue' /* webpackChunkName: "" */))
const _56dbff88 = () => interopDefault(import('..\\pages\\Checkout.vue' /* webpackChunkName: "pages/Checkout" */))
const _2d10cd03 = () => interopDefault(import('..\\pages\\Checkout\\Billing.vue' /* webpackChunkName: "pages/Checkout/Billing" */))
const _687fc1e4 = () => interopDefault(import('..\\pages\\Checkout\\Payment.vue' /* webpackChunkName: "pages/Checkout/Payment" */))
const _9679ec54 = () => interopDefault(import('..\\pages\\Checkout\\Shipping.vue' /* webpackChunkName: "pages/Checkout/Shipping" */))
const _c35e5506 = () => interopDefault(import('..\\pages\\Checkout\\ThankYou.vue' /* webpackChunkName: "pages/Checkout/ThankYou" */))
const _200efd0c = () => interopDefault(import('..\\pages\\ContactUs.vue' /* webpackChunkName: "pages/ContactUs" */))
const _a05723de = () => interopDefault(import('..\\pages\\Home.vue' /* webpackChunkName: "" */))
const _632a17a1 = () => interopDefault(import('..\\pages\\Home.vue' /* webpackChunkName: "pages/Home" */))
const _808390e2 = () => interopDefault(import('..\\pages\\MyAccount.vue' /* webpackChunkName: "pages/MyAccount" */))
const _0b08ffae = () => interopDefault(import('..\\pages\\MyAccount\\AdressBook.vue' /* webpackChunkName: "pages/MyAccount/AdressBook" */))
const _1bbc0cf6 = () => interopDefault(import('..\\pages\\MyAccount\\BillingDetails.vue' /* webpackChunkName: "pages/MyAccount/BillingDetails" */))
const _5a1668d7 = () => interopDefault(import('..\\pages\\MyAccount\\LoyaltyCard.vue' /* webpackChunkName: "pages/MyAccount/LoyaltyCard" */))
const _449487f4 = () => interopDefault(import('..\\pages\\MyAccount\\MyNewsletter.vue' /* webpackChunkName: "pages/MyAccount/MyNewsletter" */))
const _0c83357e = () => interopDefault(import('..\\pages\\MyAccount\\MyProfile.vue' /* webpackChunkName: "pages/MyAccount/MyProfile" */))
const _540616f0 = () => interopDefault(import('..\\pages\\MyAccount\\MyReviews.vue' /* webpackChunkName: "pages/MyAccount/MyReviews" */))
const _1fd9a955 = () => interopDefault(import('..\\pages\\MyAccount\\OrderHistory.vue' /* webpackChunkName: "pages/MyAccount/OrderHistory" */))
const _0ba0f995 = () => interopDefault(import('..\\pages\\MyAccount\\ShippingDetails.vue' /* webpackChunkName: "pages/MyAccount/ShippingDetails" */))
const _a1733fc6 = () => interopDefault(import('..\\pages\\Product.vue' /* webpackChunkName: "pages/Product" */))
const _fb94ec70 = () => interopDefault(import('..\\pages\\ResetPassword.vue' /* webpackChunkName: "" */))
const _b904bb90 = () => interopDefault(import('..\\pages\\ResetPassword.vue' /* webpackChunkName: "pages/ResetPassword" */))
const _4d38671f = () => interopDefault(import('..\\pages\\MyAccount.vue' /* webpackChunkName: "" */))
const _51a733ad = () => interopDefault(import('..\\pages\\Product.vue' /* webpackChunkName: "" */))
const _7a631ca0 = () => interopDefault(import('..\\pages\\Category.vue' /* webpackChunkName: "" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/Category",
    component: _1914d340,
    name: "Category___en"
  }, {
    path: "/checkout",
    component: _00959df8,
    name: "checkout___en",
    children: [{
      path: "billing",
      component: _3abdc0f7,
      name: "billing___en"
    }, {
      path: "payment",
      component: _4d25d9fc,
      name: "payment___en"
    }, {
      path: "shipping",
      component: _5cb49462,
      name: "shipping___en"
    }, {
      path: "thank-you",
      component: _46426009,
      name: "thank-you___en"
    }]
  }, {
    path: "/Checkout",
    component: _56dbff88,
    name: "Checkout___en",
    children: [{
      path: "Billing",
      component: _2d10cd03,
      name: "Checkout-Billing___en"
    }, {
      path: "Payment",
      component: _687fc1e4,
      name: "Checkout-Payment___en"
    }, {
      path: "Shipping",
      component: _9679ec54,
      name: "Checkout-Shipping___en"
    }, {
      path: "ThankYou",
      component: _c35e5506,
      name: "Checkout-ThankYou___en"
    }]
  }, {
    path: "/ContactUs",
    component: _200efd0c,
    name: "ContactUs___en"
  }, {
    path: "/de",
    component: _a05723de,
    name: "home___de"
  }, {
    path: "/Home",
    component: _632a17a1,
    name: "Home___en"
  }, {
    path: "/MyAccount",
    component: _808390e2,
    name: "MyAccount___en",
    children: [{
      path: "AdressBook",
      component: _0b08ffae,
      name: "MyAccount-AdressBook___en"
    }, {
      path: "BillingDetails",
      component: _1bbc0cf6,
      name: "MyAccount-BillingDetails___en"
    }, {
      path: "LoyaltyCard",
      component: _5a1668d7,
      name: "MyAccount-LoyaltyCard___en"
    }, {
      path: "MyNewsletter",
      component: _449487f4,
      name: "MyAccount-MyNewsletter___en"
    }, {
      path: "MyProfile",
      component: _0c83357e,
      name: "MyAccount-MyProfile___en"
    }, {
      path: "MyReviews",
      component: _540616f0,
      name: "MyAccount-MyReviews___en"
    }, {
      path: "OrderHistory",
      component: _1fd9a955,
      name: "MyAccount-OrderHistory___en"
    }, {
      path: "ShippingDetails",
      component: _0ba0f995,
      name: "MyAccount-ShippingDetails___en"
    }]
  }, {
    path: "/Product",
    component: _a1733fc6,
    name: "Product___en"
  }, {
    path: "/reset-password",
    component: _fb94ec70,
    name: "reset-password___en"
  }, {
    path: "/ResetPassword",
    component: _b904bb90,
    name: "ResetPassword___en"
  }, {
    path: "/de/Category",
    component: _1914d340,
    name: "Category___de"
  }, {
    path: "/de/checkout",
    component: _00959df8,
    name: "checkout___de",
    children: [{
      path: "billing",
      component: _3abdc0f7,
      name: "billing___de"
    }, {
      path: "payment",
      component: _4d25d9fc,
      name: "payment___de"
    }, {
      path: "shipping",
      component: _5cb49462,
      name: "shipping___de"
    }, {
      path: "thank-you",
      component: _46426009,
      name: "thank-you___de"
    }]
  }, {
    path: "/de/Checkout",
    component: _56dbff88,
    name: "Checkout___de",
    children: [{
      path: "Billing",
      component: _2d10cd03,
      name: "Checkout-Billing___de"
    }, {
      path: "Payment",
      component: _687fc1e4,
      name: "Checkout-Payment___de"
    }, {
      path: "Shipping",
      component: _9679ec54,
      name: "Checkout-Shipping___de"
    }, {
      path: "ThankYou",
      component: _c35e5506,
      name: "Checkout-ThankYou___de"
    }]
  }, {
    path: "/de/ContactUs",
    component: _200efd0c,
    name: "ContactUs___de"
  }, {
    path: "/de/Home",
    component: _632a17a1,
    name: "Home___de"
  }, {
    path: "/de/MyAccount",
    component: _808390e2,
    name: "MyAccount___de",
    children: [{
      path: "AdressBook",
      component: _0b08ffae,
      name: "MyAccount-AdressBook___de"
    }, {
      path: "BillingDetails",
      component: _1bbc0cf6,
      name: "MyAccount-BillingDetails___de"
    }, {
      path: "LoyaltyCard",
      component: _5a1668d7,
      name: "MyAccount-LoyaltyCard___de"
    }, {
      path: "MyNewsletter",
      component: _449487f4,
      name: "MyAccount-MyNewsletter___de"
    }, {
      path: "MyProfile",
      component: _0c83357e,
      name: "MyAccount-MyProfile___de"
    }, {
      path: "MyReviews",
      component: _540616f0,
      name: "MyAccount-MyReviews___de"
    }, {
      path: "OrderHistory",
      component: _1fd9a955,
      name: "MyAccount-OrderHistory___de"
    }, {
      path: "ShippingDetails",
      component: _0ba0f995,
      name: "MyAccount-ShippingDetails___de"
    }]
  }, {
    path: "/de/Product",
    component: _a1733fc6,
    name: "Product___de"
  }, {
    path: "/de/reset-password",
    component: _fb94ec70,
    name: "reset-password___de"
  }, {
    path: "/de/ResetPassword",
    component: _b904bb90,
    name: "ResetPassword___de"
  }, {
    path: "/de/my-account/:pageName?",
    component: _4d38671f,
    name: "my-account___de"
  }, {
    path: "/de/p/:id/:slug",
    component: _51a733ad,
    name: "product___de"
  }, {
    path: "/de/c/:slug_1/:slug_2?/:slug_3?/:slug_4?/:slug_5?",
    component: _7a631ca0,
    name: "category___de"
  }, {
    path: "/my-account/:pageName?",
    component: _4d38671f,
    name: "my-account___en"
  }, {
    path: "/p/:id/:slug",
    component: _51a733ad,
    name: "product___en"
  }, {
    path: "/c/:slug_1/:slug_2?/:slug_3?/:slug_4?/:slug_5?",
    component: _7a631ca0,
    name: "category___en"
  }, {
    path: "/",
    component: _a05723de,
    name: "home___en"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
