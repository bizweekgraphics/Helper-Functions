var midpoint = function(geoJson) {
  var coordinateArrays = geoJson.features[0].geometry.coordinates
  var longitudeArray = []
  var latitudeArray = []

  coordinateArrays.forEach(function(coordArray) {
    coordArray.forEach(function(array) {
      array.forEach(function(coordinates) {
        latitudeArray.push(coordinates[0])
        longitudeArray.push(coordinates[1])     
      })
    })    
  })

  var latMax = Math.max.apply(Math, latitudeArray)
  var latMin = Math.min.apply(Math, latitudeArray)
  
  var lngMax = Math.max.apply(Math, longitudeArray)
  var lngMin = Math.min.apply(Math, longitudeArray)

  midLat = (latMax + latMin) / 2
  midLng = (lngMax + lngMin) / 2


  return [midLat, midLng]
}