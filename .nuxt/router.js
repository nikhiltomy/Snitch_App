import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7b76e0de = () => interopDefault(import('..\\pages\\Category.vue' /* webpackChunkName: "pages/Category" */))
const _6b7c3554 = () => interopDefault(import('..\\pages\\Checkout.vue' /* webpackChunkName: "" */))
const _05b53c53 = () => interopDefault(import('..\\pages\\Checkout\\Billing.vue' /* webpackChunkName: "" */))
const _b736e344 = () => interopDefault(import('..\\pages\\Checkout\\Payment.vue' /* webpackChunkName: "" */))
const _1ea6f6f4 = () => interopDefault(import('..\\pages\\Checkout\\Shipping.vue' /* webpackChunkName: "" */))
const _4b8b5fa6 = () => interopDefault(import('..\\pages\\Checkout\\ThankYou.vue' /* webpackChunkName: "" */))
const _8d83e5b4 = () => interopDefault(import('..\\pages\\Checkout.vue' /* webpackChunkName: "pages/Checkout" */))
const _4dfd9db6 = () => interopDefault(import('..\\pages\\Checkout\\Billing.vue' /* webpackChunkName: "pages/Checkout/Billing" */))
const _77b08330 = () => interopDefault(import('..\\pages\\Checkout\\Payment.vue' /* webpackChunkName: "pages/Checkout/Payment" */))
const _f241ac18 = () => interopDefault(import('..\\pages\\Checkout\\Shipping.vue' /* webpackChunkName: "pages/Checkout/Shipping" */))
const _706cf59b = () => interopDefault(import('..\\pages\\Checkout\\ThankYou.vue' /* webpackChunkName: "pages/Checkout/ThankYou" */))
const _09eea32e = () => interopDefault(import('..\\pages\\ContactUs.vue' /* webpackChunkName: "pages/ContactUs" */))
const _4ef5d926 = () => interopDefault(import('..\\pages\\Home.vue' /* webpackChunkName: "" */))
const _8b00b782 = () => interopDefault(import('..\\pages\\Home.vue' /* webpackChunkName: "pages/Home" */))
const _acc4449e = () => interopDefault(import('..\\pages\\MyAccount.vue' /* webpackChunkName: "pages/MyAccount" */))
const _7bf2fa60 = () => interopDefault(import('..\\pages\\MyAccount\\AdressBook.vue' /* webpackChunkName: "pages/MyAccount/AdressBook" */))
const _441f2f18 = () => interopDefault(import('..\\pages\\MyAccount\\BillingDetails.vue' /* webpackChunkName: "pages/MyAccount/BillingDetails" */))
const _fa6d6c16 = () => interopDefault(import('..\\pages\\MyAccount\\LoyaltyCard.vue' /* webpackChunkName: "pages/MyAccount/LoyaltyCard" */))
const _323dca96 = () => interopDefault(import('..\\pages\\MyAccount\\MyNewsletter.vue' /* webpackChunkName: "pages/MyAccount/MyNewsletter" */))
const _6fd073c8 = () => interopDefault(import('..\\pages\\MyAccount\\MyProfile.vue' /* webpackChunkName: "pages/MyAccount/MyProfile" */))
const _0f9aa78e = () => interopDefault(import('..\\pages\\MyAccount\\MyReviews.vue' /* webpackChunkName: "pages/MyAccount/MyReviews" */))
const _0d82ebf7 = () => interopDefault(import('..\\pages\\MyAccount\\OrderHistory.vue' /* webpackChunkName: "pages/MyAccount/OrderHistory" */))
const _20bbc89a = () => interopDefault(import('..\\pages\\MyAccount\\ShippingDetails.vue' /* webpackChunkName: "pages/MyAccount/ShippingDetails" */))
const _4885b282 = () => interopDefault(import('..\\pages\\Product.vue' /* webpackChunkName: "pages/Product" */))
const _3fd32bec = () => interopDefault(import('..\\pages\\ResetPassword.vue' /* webpackChunkName: "" */))
const _aa0d314c = () => interopDefault(import('..\\pages\\ResetPassword.vue' /* webpackChunkName: "pages/ResetPassword" */))
const _3f24bb43 = () => interopDefault(import('..\\pages\\MyAccount.vue' /* webpackChunkName: "" */))
const _762240d1 = () => interopDefault(import('..\\pages\\Product.vue' /* webpackChunkName: "" */))
const _2db5090c = () => interopDefault(import('..\\pages\\Category.vue' /* webpackChunkName: "" */))

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
    component: _7b76e0de,
    name: "Category___en"
  }, {
    path: "/checkout",
    component: _6b7c3554,
    name: "checkout___en",
    children: [{
      path: "billing",
      component: _05b53c53,
      name: "billing___en"
    }, {
      path: "payment",
      component: _b736e344,
      name: "payment___en"
    }, {
      path: "shipping",
      component: _1ea6f6f4,
      name: "shipping___en"
    }, {
      path: "thank-you",
      component: _4b8b5fa6,
      name: "thank-you___en"
    }]
  }, {
    path: "/Checkout",
    component: _8d83e5b4,
    name: "Checkout___en",
    children: [{
      path: "Billing",
      component: _4dfd9db6,
      name: "Checkout-Billing___en"
    }, {
      path: "Payment",
      component: _77b08330,
      name: "Checkout-Payment___en"
    }, {
      path: "Shipping",
      component: _f241ac18,
      name: "Checkout-Shipping___en"
    }, {
      path: "ThankYou",
      component: _706cf59b,
      name: "Checkout-ThankYou___en"
    }]
  }, {
    path: "/ContactUs",
    component: _09eea32e,
    name: "ContactUs___en"
  }, {
    path: "/de",
    component: _4ef5d926,
    name: "home___de"
  }, {
    path: "/Home",
    component: _8b00b782,
    name: "Home___en"
  }, {
    path: "/MyAccount",
    component: _acc4449e,
    name: "MyAccount___en",
    children: [{
      path: "AdressBook",
      component: _7bf2fa60,
      name: "MyAccount-AdressBook___en"
    }, {
      path: "BillingDetails",
      component: _441f2f18,
      name: "MyAccount-BillingDetails___en"
    }, {
      path: "LoyaltyCard",
      component: _fa6d6c16,
      name: "MyAccount-LoyaltyCard___en"
    }, {
      path: "MyNewsletter",
      component: _323dca96,
      name: "MyAccount-MyNewsletter___en"
    }, {
      path: "MyProfile",
      component: _6fd073c8,
      name: "MyAccount-MyProfile___en"
    }, {
      path: "MyReviews",
      component: _0f9aa78e,
      name: "MyAccount-MyReviews___en"
    }, {
      path: "OrderHistory",
      component: _0d82ebf7,
      name: "MyAccount-OrderHistory___en"
    }, {
      path: "ShippingDetails",
      component: _20bbc89a,
      name: "MyAccount-ShippingDetails___en"
    }]
  }, {
    path: "/Product",
    component: _4885b282,
    name: "Product___en"
  }, {
    path: "/reset-password",
    component: _3fd32bec,
    name: "reset-password___en"
  }, {
    path: "/ResetPassword",
    component: _aa0d314c,
    name: "ResetPassword___en"
  }, {
    path: "/de/Category",
    component: _7b76e0de,
    name: "Category___de"
  }, {
    path: "/de/checkout",
    component: _6b7c3554,
    name: "checkout___de",
    children: [{
      path: "billing",
      component: _05b53c53,
      name: "billing___de"
    }, {
      path: "payment",
      component: _b736e344,
      name: "payment___de"
    }, {
      path: "shipping",
      component: _1ea6f6f4,
      name: "shipping___de"
    }, {
      path: "thank-you",
      component: _4b8b5fa6,
      name: "thank-you___de"
    }]
  }, {
    path: "/de/Checkout",
    component: _8d83e5b4,
    name: "Checkout___de",
    children: [{
      path: "Billing",
      component: _4dfd9db6,
      name: "Checkout-Billing___de"
    }, {
      path: "Payment",
      component: _77b08330,
      name: "Checkout-Payment___de"
    }, {
      path: "Shipping",
      component: _f241ac18,
      name: "Checkout-Shipping___de"
    }, {
      path: "ThankYou",
      component: _706cf59b,
      name: "Checkout-ThankYou___de"
    }]
  }, {
    path: "/de/ContactUs",
    component: _09eea32e,
    name: "ContactUs___de"
  }, {
    path: "/de/Home",
    component: _8b00b782,
    name: "Home___de"
  }, {
    path: "/de/MyAccount",
    component: _acc4449e,
    name: "MyAccount___de",
    children: [{
      path: "AdressBook",
      component: _7bf2fa60,
      name: "MyAccount-AdressBook___de"
    }, {
      path: "BillingDetails",
      component: _441f2f18,
      name: "MyAccount-BillingDetails___de"
    }, {
      path: "LoyaltyCard",
      component: _fa6d6c16,
      name: "MyAccount-LoyaltyCard___de"
    }, {
      path: "MyNewsletter",
      component: _323dca96,
      name: "MyAccount-MyNewsletter___de"
    }, {
      path: "MyProfile",
      component: _6fd073c8,
      name: "MyAccount-MyProfile___de"
    }, {
      path: "MyReviews",
      component: _0f9aa78e,
      name: "MyAccount-MyReviews___de"
    }, {
      path: "OrderHistory",
      component: _0d82ebf7,
      name: "MyAccount-OrderHistory___de"
    }, {
      path: "ShippingDetails",
      component: _20bbc89a,
      name: "MyAccount-ShippingDetails___de"
    }]
  }, {
    path: "/de/Product",
    component: _4885b282,
    name: "Product___de"
  }, {
    path: "/de/reset-password",
    component: _3fd32bec,
    name: "reset-password___de"
  }, {
    path: "/de/ResetPassword",
    component: _aa0d314c,
    name: "ResetPassword___de"
  }, {
    path: "/de/my-account/:pageName?",
    component: _3f24bb43,
    name: "my-account___de"
  }, {
    path: "/de/p/:id/:slug",
    component: _762240d1,
    name: "product___de"
  }, {
    path: "/de/c/:slug_1/:slug_2?/:slug_3?/:slug_4?/:slug_5?",
    component: _2db5090c,
    name: "category___de"
  }, {
    path: "/my-account/:pageName?",
    component: _3f24bb43,
    name: "my-account___en"
  }, {
    path: "/p/:id/:slug",
    component: _762240d1,
    name: "product___en"
  }, {
    path: "/c/:slug_1/:slug_2?/:slug_3?/:slug_4?/:slug_5?",
    component: _2db5090c,
    name: "category___en"
  }, {
    path: "/",
    component: _4ef5d926,
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
