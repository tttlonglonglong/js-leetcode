setTimeout(() => {
  console.log('fn1')
}, 0)
setImmediate(() => {
  console.log('fn2')
})

// out-fn3
// out-fn2
// out-fn1
// out-fn4
setTimeout(() => {
  setTimeout(() => {
    console.log('out-fn1')
    process.nextTick(() => console.log('out-fn4'))
  }, 0)
  setImmediate(() => {
    console.log('out-fn2')
  })
  process.nextTick(() => console.log('out-fn3'))
}, 1000)
