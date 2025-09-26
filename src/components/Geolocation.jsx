import {useEffect} from 'react'
export default function Geolocation() {
    
        function getLocation() {
            if(navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showPosition);
            }else {
                alert('Geolocation is not support by this browser');
            }
        }

        function showPosition(position) {
            alert('Latitude: ' + position.coords.latitude + '\nLongitude: ' + position.coords.longitude );
        }
    
    return (
        <button onClick={getLocation}>get location </button>
    )
}