if (typeof Buffer === 'undefined') {
  global.Buffer = require('buffer').Buffer
}

let RNRandomBytes = require('react-native').NativeModules.RNRandomBytes

function toBuffer (nativeStr) {
  return new Buffer(nativeStr, 'base64')
}

export function randomBytes (length, cb) {
  if (!cb) {
    throw new Error('callback parameter is required')
  }

  RNRandomBytes.randomBytes(length, function(err, base64String) {
    if (err) {
      cb(err, null)
    } else {
      cb(null, toBuffer(base64String))
    }
  })
}
