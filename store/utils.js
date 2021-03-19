export const getOptions = (accessToken, url) => {
  const options = {
    url: url,
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + accessToken,
      'Content-Type': 'application/json',
    }
  }
  return options
}
