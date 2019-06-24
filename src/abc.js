let my_resolve = () => {}
const qqq = new Promise(resolve => {
  setTimeout(() => {resolve()}, 9000)
})

exports.handler = async function(event, context, callback) {
  await qqq
    callback(null, {
      statusCode: 200,
      body: `set`
    })
}