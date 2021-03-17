export const CLIENT_ID = "2baa0fc179d94869b28342364bd5ef98"
export const REDIRECT_URI = "http://localhost:3000"
export const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize'

export const getAuthorizeHref = () => {
  const CLIENT_ID = "2baa0fc179d94869b28342364bd5ef98"
  const REDIRECT_URI = "http://localhost:3000"
  const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize'
  const SCOPES = [
    'user-read-private',
    'user-read-email',
    'playlist-modify-public',
    'playlist-modify-private'
  ]
  return `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPES.join("%20")}&response_type=token`
}

export const getHashParams = () => {
  if (typeof window !== undefined) {
    return window.location.hash
      .substring(1) // get rid of '#'
      .split('&')   // split with apersand
      .reduce((initial, item) => {  // reduce into a single value(list)
        if (item) {
          const parts = item.split("=")
          initial[parts[0]] = decodeURIComponent(parts[1])
        }
        return initial
      }, {})
  }
}

export const removeHashParamsFromUrl = () => {
  window.history.pushState("", document.title, window.location.pathname + window.location.search);
}
