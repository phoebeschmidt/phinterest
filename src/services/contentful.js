import * as contentful from contentful

let client
let authorized

function initClient (space, accessToken, preview) {
  client = contentful.createClient({
    space: space,
    accessToken: accessToken,
    host: preview ? 'preview.contentful.com' : 'cdn.contentful.com'
  })
  return client.getSpace()
    .then((space) => {
      authorized = true
      currentSpace = space
      return space
    })
}

function getClient () {
  return authorized && client
}

export { initClient, getClient }
