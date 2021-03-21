const withPWA = require('next-pwa')

module.exports = withPWA({
  siteTitle: 'The Lab',
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
    register: true,
    scope: '/',
    sw: 'sw.js',
    runtimeCaching: [{
      urlPattern: '/',
      handler: 'StaleWhileRevalidate',
      options: {
        // don't change cache name
        cacheName: 'start-url',
        expiration: {
          maxEntries: 1,
          maxAgeSeconds: 24 * 60 * 60 // 24 hours
        }
      }
    }, {
      urlPattern: /\/_next\/*/,
      handler: 'CacheFirst',
      options: {
        cacheName: 'next-assets',
        expiration: {
          maxEntries: 20,
          maxAgeSeconds: 24 * 60 * 60 * 365
        }
      }
    }]
  }
})
