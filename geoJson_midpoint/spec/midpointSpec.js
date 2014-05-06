describe("midpoint", function() {
  var geoJson = {"type":"FeatureCollection","features":[
    {"type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[[[[-10,20],[-20,50],[-30,30],[-50,40],[-40,35],[-30,35]]]]},"properties":{"name":"Greenland"},"id":"GL"}]}

  it("should return the coordinate midpoint", function() { 
    expect(midpoint(geoJson)).toEqual([-30, 35])
  })
})