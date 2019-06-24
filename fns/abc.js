const qqq = []

exports.handler = function(event, context, callback) {
  const rnd = Math.random()
  const last = qqq[qqq.length - 1]
  qqq.push(rnd)

  callback(null, {
    statusCode: 200,
    body: `curr: ${rnd} last:${last}`
  })
}