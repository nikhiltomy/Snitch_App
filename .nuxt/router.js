import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6d8151be = () => interopDefault(import('..\\pages\\Category.vue' /* webpackChunkName: "pages/Category" */))
const _59c9cdd5 = () => interopDefault(import('..\\pages\\Checkout.vue' /* webpackChunkName: "" */))
const _a1327858 = () => interopDefault(import('..\\pages\\Checkout\\Billing.vue' /* webpackChunkName: "" */))
const _4e1615df = () => interopDefault(import('..\\pages\\Checkout\\Payment.vue' /* webpackChunkName: "" */))
const _7d2bed25 = () => interopDefault(import('..\\pages\\Checkout\\Shipping.vue' /* webpackChunkName: "" */))
const _66b9b8cc = () => interopDefault(import('..\\pages\\Checkout\\ThankYou.vue' /* webpackChunkName: "" */))
const _07068369 = () => interopDefault(import('..\\pages\\Checkout.vue' /* webpackChunkName: "pages/Checkout" */))
const _55961642 = () => interopDefault(import('..\\pages\\Checkout\\Billing.vue' /* webpackChunkName: "pages/Checkout/Billing" */))
const _17752f66 = () => interopDefault(import('..\\pages\\Checkout\\Payment.vue' /* webpackChunkName: "pages/Checkout/Payment" */))
const _c6322f12 = () => interopDefault(import('..\\pages\\Checkout\\Shipping.vue' /* webpackChunkName: "pages/Checkout/Shipping" */))
const _f31697c4 = () => interopDefault(import('..\\pages\\Checkout\\ThankYou.vue' /* webpackChunkName: "pages/Checkout/ThankYou" */))
const _7534f54b = () => interopDefault(import('..\\pages\\ContactUs.vue' /* webpackChunkName: "pages/ContactUs" */))
const _0cad146e = () => interopDefault(import('..\\pages\\Home.vue' /* webpackChunkName: "" */))
const _3fa897fc = () => interopDefault(import('..\\pages\\Home.vue' /* webpackChunkName: "pages/Home" */))
const _14e42fce = () => interopDefault(import('..\\pages\\MyAccount.vue' /* webpackChunkName: "pages/MyAccount" */))
const _7139916d = () => interopDefault(import('..\\pages\\MyAccount\\AdressBook.vue' /* webpackChunkName: "pages/MyAccount/AdressBook" */))
const _2080b196 = () => interopDefault(import('..\\pages\\MyAccount\\BillingDetails.vue' /* webpackChunkName: "pages/MyAccount/BillingDetails" */))
const _8c0fe210 = () => interopDefault(import('..\\pages\\MyAccount\\LoyaltyCard.vue' /* webpackChunkName: "pages/MyAccount/LoyaltyCard" */))
const _3e30b41a = () => interopDefault(import('..\\pages\\MyAccount\\MyNewsletter.vue' /* webpackChunkName: "pages/MyAccount/MyNewsletter" */))
const _7b29efdf = () => interopDefault(import('..\\pages\\MyAccount\\MyProfile.vue' /* webpackChunkName: "pages/MyAccount/MyProfile" */))
const _7aa65d5e = () => interopDefault(import('..\\pages\\MyAccount\\MyReviews.vue' /* webpackChunkName: "pages/MyAccount/MyReviews" */))
const _87a67158 = () => interopDefault(import('..\\pages\\MyAccount\\OrderHistory.vue' /* webpackChunkName: "pages/MyAccount/OrderHistory" */))
const _8fdeb194 = () => interopDefault(import('..\\pages\\MyAccount\\ShippingDetails.vue' /* webpackChunkName: "pages/MyAccount/ShippingDetails" */))
const _648947c8 = () => interopDefault(import('..\\pages\\Product.vue' /* webpackChunkName: "pages/Product" */))
const _7665bc0b = () => interopDefault(import('..\\pages\\ResetPassword.vue' /* webpackChunkName: "" */))
const _ef413a12 = () => interopDefault(import('..\\pages\\ResetPassword.vue' /* webpackChunkName: "pages/ResetPassword" */))
const _1a8a32e2 = () => interopDefault(import('..\\pages\\MyAccount.vue' /* webpackChunkName: "" */))
const _1d21d7a0 = () => interopDefault(import('..\\pages\\Product.vue' /* webpackChunkName: "" */))
const _1c02a18d = () => interopDefault(import('..\\pages\\Category.vue' /* webpackChunkName: "" */))

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
    component: _6d8151be,
    name: "Category___en"
  }, {
    path: "/checkout",
    component: _59c9cdd5,
    name: "checkout___en",
    children: [{
      path: "billing",
      component: _a1327858,
      name: "billing___en"
    }, {
      path: "payment",
      component: _4e1615df,
      name: "payment___en"
    }, {
      path: "shipping",
      component: _7d2bed25,
      name: "shipping___en"
    }, {
      path: "thank-you",
      component: _66b9b8cc,
      name: "thank-you___en"
    }]
  }, {
    path: "/Checkout",
    component: _07068369,
    name: "Checkout___en",
    children: [{
      path: "Billing",
      component: _55961642,
      name: "Checkout-Billing___en"
    }, {
      path: "Payment",
      component: _17752f66,
      name: "Checkout-Payment___en"
    }, {
      path: "Shipping",
      component: _c6322f12,
      name: "Checkout-Shipping___en"
    }, {
      path: "ThankYou",
      component: _f31697c4,
      name: "Checkout-ThankYou___en"
    }]
  }, {
    path: "/ContactUs",
    component: _7534f54b,
    name: "ContactUs___en"
  }, {
    path: "/de",
    component: _0cad146e,
    name: "home___de"
  }, {
    path: "/Home",
    component: _3fa897fc,
    name: "Home___en"
  }, {
    path: "/MyAccount",
    component: _14e42fce,
    name: "MyAccount___en",
    children: [{
      path: "AdressBook",
      component: _7139916d,
      name: "MyAccount-AdressBook___en"
    }, {
      path: "BillingDetails",
      component: _2080b196,
      name: "MyAccount-BillingDetails___en"
    }, {
      path: "LoyaltyCard",
      component: _8c0fe210,
      name: "MyAccount-LoyaltyCard___en"
    }, {
      path: "MyNewsletter",
      component: _3e30b41a,
      name: "MyAccount-MyNewsletter___en"
    }, {
      path: "MyProfile",
      component: _7b29efdf,
      name: "MyAccount-MyProfile___en"
    }, {
      path: "MyReviews",
      component: _7aa65d5e,
      name: "MyAccount-MyReviews___en"
    }, {
      path: "OrderHistory",
      component: _87a67158,
      name: "MyAccount-OrderHistory___en"
    }, {
      path: "ShippingDetails",
      component: _8fdeb194,
      name: "MyAccount-ShippingDetails___en"
    }]
  }, {
    path: "/Product",
    component: _648947c8,
    name: "Product___en"
  }, {
    path: "/reset-password",
    component: _7665bc0b,
    name: "reset-password___en"
  }, {
    path: "/ResetPassword",
    component: _ef413a12,
    name: "ResetPassword___en"
  }, {
    path: "/de/Category",
    component: _6d8151be,
    name: "Category___de"
  }, {
    path: "/de/checkout",
    component: _59c9cdd5,
    name: "checkout___de",
    children: [{
      path: "billing",
      component: _a1327858,
      name: "billing___de"
    }, {
      path: "payment",
      component: _4e1615df,
      name: "payment___de"
    }, {
      path: "shipping",
      component: _7d2bed25,
      name: "shipping___de"
    }, {
      path: "thank-you",
      component: _66b9b8cc,
      name: "thank-you___de"
    }]
  }, {
    path: "/de/Checkout",
    component: _07068369,
    name: "Checkout___de",
    children: [{
      path: "Billing",
      component: _55961642,
      name: "Checkout-Billing___de"
    }, {
      path: "Payment",
      component: _17752f66,
      name: "Checkout-Payment___de"
    }, {
      path: "Shipping",
      component: _c6322f12,
      name: "Checkout-Shipping___de"
    }, {
      path: "ThankYou",
      component: _f31697c4,
      name: "Checkout-ThankYou___de"
    }]
  }, {
    path: "/de/ContactUs",
    component: _7534f54b,
    name: "ContactUs___de"
  }, {
    path: "/de/Home",
    component: _3fa897fc,
    name: "Home___de"
  }, {
    path: "/de/MyAccount",
    component: _14e42fce,
    name: "MyAccount___de",
    children: [{
      path: "AdressBook",
      component: _7139916d,
      name: "MyAccount-AdressBook___de"
    }, {
      path: "BillingDetails",
      component: _2080b196,
      name: "MyAccount-BillingDetails___de"
    }, {
      path: "LoyaltyCard",
      component: _8c0fe210,
      name: "MyAccount-LoyaltyCard___de"
    }, {
      path: "MyNewsletter",
      component: _3e30b41a,
      name: "MyAccount-MyNewsletter___de"
    }, {
      path: "MyProfile",
      component: _7b29efdf,
      name: "MyAccount-MyProfile___de"
    }, {
      path: "MyReviews",
      component: _7aa65d5e,
      name: "MyAccount-MyReviews___de"
    }, {
      path: "OrderHistory",
      component: _87a67158,
      name: "MyAccount-OrderHistory___de"
    }, {
      path: "ShippingDetails",
      component: _8fdeb194,
      name: "MyAccount-ShippingDetails___de"
    }]
  }, {
    path: "/de/Product",
    component: _648947c8,
    name: "Product___de"
  }, {
    path: "/de/reset-password",
    component: _7665bc0b,
    name: "reset-password___de"
  }, {
    path: "/de/ResetPassword",
    component: _ef413a12,
    name: "ResetPassword___de"
  }, {
    path: "/de/my-account/:pageName?",
    component: _1a8a32e2,
    name: "my-account___de"
  }, {
    path: "/de/p/:id/:slug",
    component: _1d21d7a0,
    name: "product___de"
  }, {
    path: "/de/c/:slug_1/:slug_2?/:slug_3?/:slug_4?/:slug_5?",
    component: _1c02a18d,
    name: "category___de"
  }, {
    path: "/my-account/:pageName?",
    component: _1a8a32e2,
    name: "my-account___en"
  }, {
    path: "/p/:id/:slug",
    component: _1d21d7a0,
    name: "product___en"
  }, {
    path: "/c/:slug_1/:slug_2?/:slug_3?/:slug_4?/:slug_5?",
    component: _1c02a18d,
    name: "category___en"
  }, {
    path: "/",
    component: _0cad146e,
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
