if ('serviceWorker' in navigator) {
    // console.log('Lo soporta')
    navigator.serviceWorker.register('./sw.js')
        .then(result => console.log(result))
        .catch(err => console.log(err))
} else {
    console.log('Error')
}