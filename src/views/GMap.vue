<template>
  <div class="map" ref="mapDivRef"></div>
</template>

<script>
import { ref, onBeforeMount, onMounted } from "vue";

export default {
  name: "GMap",
  props: {
    center: { lat: Number, lng: Number },
    zoom: Number,
    mapType: String,
    disableUI: Boolean,
    markers: Array
  },
  setup(props) {
    // the google map object
    const map = ref(null);

    // the map element in the templste
    const mapDivRef = ref(null);

    // load in the google script
    onMounted(() => {
      // key is is the .env file
      const key = process.env.VUE_APP_GOOGLEMAPS_KEY;

      // create the script element to load
      const googleMapScript = document.createElement("SCRIPT");
      googleMapScript.setAttribute(
          "src",
          `https://maps.googleapis.com/maps/api/js?key=${key}&callback=initMap`
      );
      googleMapScript.setAttribute("defer", "");
      googleMapScript.setAttribute("async", "");
      document.head.appendChild(googleMapScript);
    });

    const loadMapMarkers = () => {
      if (!props.markers.length) return;


      props.markers.forEach(markerInfo => {

        //puts marker on the map
        const mapMarker = new window.google.maps.Marker({
          position: new window.google.maps.LatLng(
              markerInfo.lat,
              markerInfo.lng
          ),
          map: map.value,
          title: markerInfo.title
        });

        //info window
        mapMarker.infoWindow = new window.google.maps.InfoWindow({
          content : markerInfo.title
        });
        mapMarker.addListener('click', () => {
          if ( mapMarker.infoWindow !== null){
            mapMarker.infoWindow.open(map.value, mapMarker)
          }
        })
      });
    };

    /**
     * this function is called as soon as the map is initialized
     */
    window.initMap = () => {
      map.value = new window.google.maps.Map(mapDivRef.value, {
        mapTypeId: props.mapType || "hybrid",
        zoom: props.zoom || 8,
        disableDefaultUI: props.disableUI || false,
        center: props.center || { lat: 38.0, lng: -77.01 }
      });

      loadMapMarkers();
    };



    return {
      mapDivRef
    };
  }
};
</script>

<style lang="css" scoped>
.map {
  width: 100%;
  height: 300px;
  background-color: azure;
}
</style>
