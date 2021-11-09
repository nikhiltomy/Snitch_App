import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1e56c01e = () => interopDefault(import('..\\pages\\Category.vue' /* webpackChunkName: "pages/Category" */))
const _0e4edb7c = () => interopDefault(import('..\\pages\\Checkout.vue' /* webpackChunkName: "" */))
const _41333a7b = () => interopDefault(import('..\\pages\\Checkout\\Billing.vue' /* webpackChunkName: "" */))
const _403ae6f4 = () => interopDefault(import('..\\pages\\Checkout\\Payment.vue' /* webpackChunkName: "" */))
const _24ee4b5e = () => interopDefault(import('..\\pages\\Checkout\\Shipping.vue' /* webpackChunkName: "" */))
const _0e7c1705 = () => interopDefault(import('..\\pages\\Checkout\\ThankYou.vue' /* webpackChunkName: "" */))
const _5c1dec66 = () => interopDefault(import('..\\pages\\Checkout.vue' /* webpackChunkName: "pages/Checkout" */))
const _0ce879e5 = () => interopDefault(import('..\\pages\\Checkout\\Billing.vue' /* webpackChunkName: "pages/Checkout/Billing" */))
const _a8d06820 = () => interopDefault(import('..\\pages\\Checkout\\Payment.vue' /* webpackChunkName: "pages/Checkout/Payment" */))
const _603e0d98 = () => interopDefault(import('..\\pages\\Checkout\\Shipping.vue' /* webpackChunkName: "pages/Checkout/Shipping" */))
const _8d22764a = () => interopDefault(import('..\\pages\\Checkout\\ThankYou.vue' /* webpackChunkName: "pages/Checkout/ThankYou" */))
const _79eaa824 = () => interopDefault(import('..\\pages\\ContactUs.vue' /* webpackChunkName: "pages/ContactUs" */))
const _43b10d95 = () => interopDefault(import('..\\pages\\Home.vue' /* webpackChunkName: "" */))
const _469db902 = () => interopDefault(import('..\\pages\\Home.vue' /* webpackChunkName: "pages/Home" */))
const _62b9e671 = () => interopDefault(import('..\\pages\\MyAccount.vue' /* webpackChunkName: "pages/MyAccount" */))
const _a8c928e0 = () => interopDefault(import('..\\pages\\MyAccount\\AdressBook.vue' /* webpackChunkName: "pages/MyAccount/AdressBook" */))
const _1391b7d8 = () => interopDefault(import('..\\pages\\MyAccount\\BillingDetails.vue' /* webpackChunkName: "pages/MyAccount/BillingDetails" */))
const _685d0d96 = () => interopDefault(import('..\\pages\\MyAccount\\LoyaltyCard.vue' /* webpackChunkName: "pages/MyAccount/LoyaltyCard" */))
const _0a3b8356 = () => interopDefault(import('..\\pages\\MyAccount\\MyNewsletter.vue' /* webpackChunkName: "pages/MyAccount/MyNewsletter" */))
const _503a7548 = () => interopDefault(import('..\\pages\\MyAccount\\MyProfile.vue' /* webpackChunkName: "pages/MyAccount/MyProfile" */))
const _1f65a6ce = () => interopDefault(import('..\\pages\\MyAccount\\MyReviews.vue' /* webpackChunkName: "pages/MyAccount/MyReviews" */))
const _34feb692 = () => interopDefault(import('..\\pages\\MyAccount\\OrderHistory.vue' /* webpackChunkName: "pages/MyAccount/OrderHistory" */))
const _0e80aaf3 = () => interopDefault(import('..\\pages\\MyAccount\\ShippingDetails.vue' /* webpackChunkName: "pages/MyAccount/ShippingDetails" */))
const _0c774102 = () => interopDefault(import('..\\pages\\Product.vue' /* webpackChunkName: "pages/Product" */))
const _18fa1ec4 = () => interopDefault(import('..\\pages\\ResetPassword.vue' /* webpackChunkName: "" */))
const _1d39dfcc = () => interopDefault(import('..\\pages\\ResetPassword.vue' /* webpackChunkName: "pages/ResetPassword" */))
const _12b24bca = () => interopDefault(import('..\\pages\\MyAccount.vue' /* webpackChunkName: "" */))
const _28ce35a9 = () => interopDefault(import('..\\pages\\Product.vue' /* webpackChunkName: "" */))
const _5ef0a198 = () => interopDefault(import('..\\pages\\Category.vue' /* webpackChunkName: "" */))

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
    component: _1e56c01e,
    name: "Category___en"
  }, {
    path: "/checkout",
    component: _0e4edb7c,
    name: "checkout___en",
    children: [{
      path: "billing",
      component: _41333a7b,
      name: "billing___en"
    }, {
      path: "payment",
      component: _403ae6f4,
      name: "payment___en"
    }, {
      path: "shipping",
      component: _24ee4b5e,
      name: "shipping___en"
    }, {
      path: "thank-you",
      component: _0e7c1705,
      name: "thank-you___en"
    }]
  }, {
    path: "/Checkout",
    component: _5c1dec66,
    name: "Checkout___en",
    children: [{
      path: "Billing",
      component: _0ce879e5,
      name: "Checkout-Billing___en"
    }, {
      path: "Payment",
      component: _a8d06820,
      name: "Checkout-Payment___en"
    }, {
      path: "Shipping",
      component: _603e0d98,
      name: "Checkout-Shipping___en"
    }, {
      path: "ThankYou",
      component: _8d22764a,
      name: "Checkout-ThankYou___en"
    }]
  }, {
    path: "/ContactUs",
    component: _79eaa824,
    name: "ContactUs___en"
  }, {
    path: "/de",
    component: _43b10d95,
    name: "home___de"
  }, {
    path: "/Home",
    component: _469db902,
    name: "Home___en"
  }, {
    path: "/MyAccount",
    component: _62b9e671,
    name: "MyAccount___en",
    children: [{
      path: "AdressBook",
      component: _a8c928e0,
      name: "MyAccount-AdressBook___en"
    }, {
      path: "BillingDetails",
      component: _1391b7d8,
      name: "MyAccount-BillingDetails___en"
    }, {
      path: "LoyaltyCard",
      component: _685d0d96,
      name: "MyAccount-LoyaltyCard___en"
    }, {
      path: "MyNewsletter",
      component: _0a3b8356,
      name: "MyAccount-MyNewsletter___en"
    }, {
      path: "MyProfile",
      component: _503a7548,
      name: "MyAccount-MyProfile___en"
    }, {
      path: "MyReviews",
      component: _1f65a6ce,
      name: "MyAccount-MyReviews___en"
    }, {
      path: "OrderHistory",
      component: _34feb692,
      name: "MyAccount-OrderHistory___en"
    }, {
      path: "ShippingDetails",
      component: _0e80aaf3,
      name: "MyAccount-ShippingDetails___en"
    }]
  }, {
    path: "/Product",
    component: _0c774102,
    name: "Product___en"
  }, {
    path: "/reset-password",
    component: _18fa1ec4,
    name: "reset-password___en"
  }, {
    path: "/ResetPassword",
    component: _1d39dfcc,
    name: "ResetPassword___en"
  }, {
    path: "/de/Category",
    component: _1e56c01e,
    name: "Category___de"
  }, {
    path: "/de/checkout",
    component: _0e4edb7c,
    name: "checkout___de",
    children: [{
      path: "billing",
      component: _41333a7b,
      name: "billing___de"
    }, {
      path: "payment",
      component: _403ae6f4,
      name: "payment___de"
    }, {
      path: "shipping",
      component: _24ee4b5e,
      name: "shipping___de"
    }, {
      path: "thank-you",
      component: _0e7c1705,
      name: "thank-you___de"
    }]
  }, {
    path: "/de/Checkout",
    component: _5c1dec66,
    name: "Checkout___de",
    children: [{
      path: "Billing",
      component: _0ce879e5,
      name: "Checkout-Billing___de"
    }, {
      path: "Payment",
      component: _a8d06820,
      name: "Checkout-Payment___de"
    }, {
      path: "Shipping",
      component: _603e0d98,
      name: "Checkout-Shipping___de"
    }, {
      path: "ThankYou",
      component: _8d22764a,
      name: "Checkout-ThankYou___de"
    }]
  }, {
    path: "/de/ContactUs",
    component: _79eaa824,
    name: "ContactUs___de"
  }, {
    path: "/de/Home",
    component: _469db902,
    name: "Home___de"
  }, {
    path: "/de/MyAccount",
    component: _62b9e671,
    name: "MyAccount___de",
    children: [{
      path: "AdressBook",
      component: _a8c928e0,
      name: "MyAccount-AdressBook___de"
    }, {
      path: "BillingDetails",
      component: _1391b7d8,
      name: "MyAccount-BillingDetails___de"
    }, {
      path: "LoyaltyCard",
      component: _685d0d96,
      name: "MyAccount-LoyaltyCard___de"
    }, {
      path: "MyNewsletter",
      component: _0a3b8356,
      name: "MyAccount-MyNewsletter___de"
    }, {
      path: "MyProfile",
      component: _503a7548,
      name: "MyAccount-MyProfile___de"
    }, {
      path: "MyReviews",
      component: _1f65a6ce,
      name: "MyAccount-MyReviews___de"
    }, {
      path: "OrderHistory",
      component: _34feb692,
      name: "MyAccount-OrderHistory___de"
    }, {
      path: "ShippingDetails",
      component: _0e80aaf3,
      name: "MyAccount-ShippingDetails___de"
    }]
  }, {
    path: "/de/Product",
    component: _0c774102,
    name: "Product___de"
  }, {
    path: "/de/reset-password",
    component: _18fa1ec4,
    name: "reset-password___de"
  }, {
    path: "/de/ResetPassword",
    component: _1d39dfcc,
    name: "ResetPassword___de"
  }, {
    path: "/de/my-account/:pageName?",
    component: _12b24bca,
    name: "my-account___de"
  }, {
    path: "/de/p/:id/:slug",
    component: _28ce35a9,
    name: "product___de"
  }, {
    path: "/de/c/:slug_1/:slug_2?/:slug_3?/:slug_4?/:slug_5?",
    component: _5ef0a198,
    name: "category___de"
  }, {
    path: "/my-account/:pageName?",
    component: _12b24bca,
    name: "my-account___en"
  }, {
    path: "/p/:id/:slug",
    component: _28ce35a9,
    name: "product___en"
  }, {
    path: "/c/:slug_1/:slug_2?/:slug_3?/:slug_4?/:slug_5?",
    component: _5ef0a198,
    name: "category___en"
  }, {
    path: "/",
    component: _43b10d95,
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
