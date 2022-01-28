// All archives
const cacheName = 'apv-v1'
const archives = [
    '/',
    'index.html',
    'css/bootstrap.css',
    'css/styles.css',
    'js/apv.js',
    'js/app.js'
]

self.addEventListener('install', e => {
    console.log('Installed')

    e.waitUntil(
        caches.open(cacheName)
        .then(Cache => {
            console.log('Registrando Cache')
            Cache.addAll(archives)
        })

    )

})

self.addEventListener('activate', e => {
    console.log('activated')
})

self.addEventListener('fetch', e => {
    // console.log(ev)

    e.respondWith(
        caches.match(e.request)
        .then(result => {
            return result
        })
    )
})