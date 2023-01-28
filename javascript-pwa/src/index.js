if('serviceWorker' in navigator){
  navigator.serviceWorker.register('sw.js').then(registration => {
    console.log('Registered')
    console.log(registration)
  }).catch((err) => {
    console.log(err)
  })
}