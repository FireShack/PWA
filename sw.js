self.addEventListener('install', e => {
    console.log('Installed')
})

self.addEventListener('activate', e => {
    console.log('activated')
})

self.addEventListener('fetch', ev => {
    // console.log(ev)
})