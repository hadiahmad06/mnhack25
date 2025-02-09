// import{
//     APIProvider,
//     Map,
//     AdvancedMarker,
//     Pin,
//     InfoWindow,
// }   from "@APIProvider.gl/react-google-maps";

// export default function Inro(){
//     const position = {lat:53.54, lng: 10 };

//     return(
//         <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
//             <div style={ height: "100vh", width: "100%"}>
//                 <Map zoom={9}  center={position} mapId={process.env.NEXT_PUBLIC_MAP_ID}>
//                 <AdvancedMarker position={position} onClick={() => setOpen(true)}>
//                     <Pin background={"grey"} />
//                 </AdvancedMarker> 
//                 <Pin
//                     background={"grey"}
//                     borderColor={"greem"}
//                     glyphColor={"purple"}
//                     />     
//                     {open &&}
//             </Map>
//             React Google Maps
//             </div>
//         </APIProvider>
//     );
// }