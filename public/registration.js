if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register('serviceWorker.js')
        .then( reg => {

        })
        .catch( err => {
            alert('An error occurred')
            console.log(err)
        })
}