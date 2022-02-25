
let longitude = -97;
let latitude = 38;

require([
    "esri/config",
    "esri/Map", 
    "esri/views/MapView"
  ], function (esriConfig,Map, MapView) {
 
   esriConfig.apiKey = "AAPK69742b5d3e5d4d969f28ce8b97ee91f9c-GZhvscrk59aNtlQqY1LEIYm6FP_SH-3eVXanS5UfS9755ehIGeGrMn0_NmE_pP";
 
  const map = new Map({
           basemap: "arcgis-topographic" // Basemap layer service
         });
 
         const view = new MapView({
           map: map,
           center: [longitude, latitude], // Longitude, latitude
           zoom: 4, // Zoom level
           container: "mapDiv" // Div element
         });
 
       });