const fetchISSLocation = () => {
  return fetch("https://api.wheretheiss.at/v1/satellites/25544")
  .then(response => response.json())
}

export default fetchISSLocation