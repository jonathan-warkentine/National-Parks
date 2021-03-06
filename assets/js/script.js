function renderMap(longitude, latitude, zoom) {
  require(["esri/config", "esri/Map", "esri/views/MapView"], function (
    esriConfig,
    Map,
    MapView
  ) {
    esriConfig.apiKey =
      "AAPK69742b5d3e5d4d969f28ce8b97ee91f9c-GZhvscrk59aNtlQqY1LEIYm6FP_SH-3eVXanS5UfS9755ehIGeGrMn0_NmE_pP";

    const map = new Map({
      basemap: "arcgis-topographic", // Basemap layer service
    });

    const view = new MapView({
      map: map,
      center: [longitude, latitude], // Longitude, latitude
      zoom: zoom, // Zoom level
      container: "mapDiv", // Div element
    });
  });
}

$("#searchBtn").click(function () {
  let searchEl = $("#select-state").val().toLowerCase();
  console.log(searchEl);
  for (let i = 0; i < statesArray.length; i++) {
    if (searchEl === statesArray[i].state.toLocaleLowerCase()) {
      console.log(statesArray[i].latitude);
      console.log(statesArray[i].longitude);
      renderMap(statesArray[i].longitude, statesArray[i].latitude, 6);
    }
  }
});
renderMap(-97, 38, 4);
