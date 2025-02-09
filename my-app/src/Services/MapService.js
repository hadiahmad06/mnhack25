// // src/MapService.js

// import React, { useEffect, useRef } from 'react';
// import mapboxgl from 'mapbox-gl';

// // Set your Mapbox access token
// mapboxgl.accessToken = '';

// const MapService = () => {
//   // Ref to hold the map container element
//   const mapContainer = useRef(null);

//   useEffect(() => {
//     // Initialize the map when the component mounts
//     const map = new mapboxgl.Map({
//       container: mapContainer.current, // Container element
//       style: 'mapbox://styles/mapbox/streets-v11', // Style URL
//       center: [-74.5, 40], // Initial map center [longitude, latitude]
//       zoom: 9, // Initial zoom level
//     });

//     // Add a marker to the map
//     new mapboxgl.Marker().setLngLat([-74.5, 40]).addTo(map);

//     // Cleanup the map instance when the component unmounts
//     return () => map.remove();
//   }, []);

//   return (
//     <div
//       ref={mapContainer}
//       style={{ width: '100%', height: '500px' }} // Customize map size
//     />
//   );
// };

// export default MapService;
