module.exports = function getEndPoint(arr) {
  return arr.map(url => url.replace('https://swapi.dev/api', ''))
}