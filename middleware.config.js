module.exports = {
  integrations: {
    shopify: {
      location: '@vue-storefront/shopify-api/server',
      configuration: {
        api: {
          domain: 'snitch-dev.myshopify.com',
          storefrontAccessToken: 'b4b1c17c021b367517519b996bc03ee1'
        },
        currency: 'USD',
        country: 'US'
      }
    }
  }
};
