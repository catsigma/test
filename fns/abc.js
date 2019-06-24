let my_resolve = () => {}
const qqq = new Promise(resolve => {
  my_resolve = resolve
})
  
exports.handler = async function(event, context, callback) {
  const query = event.queryStringParameters
  if (query.set) {
    my_resolve()
    callback(null, {
      statusCode: 200,
      body: `set`
    })

  } else {

    await qqq
    callback(null, {
      statusCode: 200,
      body: `1`
    })

  }

}