var geoJsonMidpoint = function(geoJson) {
  var features = geoJson.features
  // var coordinateArrays = geoJson.features[0].geometry.coordinates
  var longitudeArray = []
  var latitudeArray = []

  features.forEach(function(feature) { 
    feature.geometry.coordinates.forEach(function(coord) {
      coord.forEach(function(coordArray) {
          if(typeof(coordArray[0]) === 'number') {
            latitudeArray.push(coordArray[0])
            longitudeArray.push(coordArray[1])
          } else {
            coordArray.forEach(function(array) {
              latitudeArray.push(array[0])
              longitudeArray.push(array[1])     
            })  
          }      
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