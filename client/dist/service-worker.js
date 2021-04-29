importScripts("/precache-manifest.dc00326d25b97d709168ed566e885cb6.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

// /* eslint @typescript-eslint/explicit-function-return-type: 0 */
// import { store } from '@/store'
// console.log('sw!')
// self.__WB_DISABLE_DEV_LOGS = true
//
// import { CacheableResponsePlugin } from 'workbox-cacheable-response'
// import { matchPrecache, precacheAndRoute } from 'workbox-precaching'
// import { setCatchHandler, setDefaultHandler } from 'workbox-routing'
// import { NetworkFirst, StaleWhileRevalidate } from 'workbox-strategies'
//
// const CACHE_NAME = 'cache4'
// self.addEventListener('fetch', (event) => {
//   const { request } = event
//   if (request.method !== 'GET') return
//   if (request.url.indexOf('http') !== 0) return
//   if (request.url === 'https://localhost:8080/') return request
//   event.respondWith(
//     (async function () {
//       return await new StaleWhileRevalidate({
//         cacheName: CACHE_NAME,
//       })
//         .handle({
//           event,
//           request,
//         })
//
//         .catch(() => {
//           return
//         })
//       // return strategy
//       // else {
//       //   try {
//       //     // const cache = await caches.open(CACHE_NAME)
//       //     const requestedCache = await caches.match(request)
//       //     console.log('r', requestedCache)
//       //     return requestedCache
//       //   } catch (e) {
//       //     console.log(e)
//       //   }
//       // }
//     })(),
//   )
// })
// // const offlineListener = event => {
// //   const { request } = event
// //   if (request.method !== 'GET') return
// //   if (request.url.indexOf('http') !== 0) return
// //   event.respondWith(async function() {
// //     const cache = await caches.open(CACHE_NAME)
// //     return await cache.match(request)
// //   })
// // }
//
// // // if (!event.clientId) return
// //
// // event.respondWith(
// //   (async function() {
// //     const cache = await caches.open('assets')
// //     const cachedResponsePromise = await cache.match(event.request)
// //     const networkResponsePromise = fetch(event.request)
// //     event.waitUntil(
// //       (async function() {
// //         const networkResponse = await networkResponsePromise
// //         await cache.put(event.request, networkResponse.clone())
// //       })()
// //     )
// //     return cachedResponsePromise || networkResponsePromise
// //   })()
// // )
// // })
//
// // setCatchHandler(async ({ event }) => {
// //   // Return the precached offline page if a document is being requested
// //   // if (event.request.destination === 'document') {
// //   //   return matchPrecache('/offline.html')
// //   // }
// //   // console.log(event)
// //   return console.log(event)
// //   // return Response.error()
// // })

