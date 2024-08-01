const error=(err)=>{
    console.log(err)    
}

const success=(pos)=>{
    const coords=pos.coords;
    console.log(coords)
    } 
const options={
        maximumAge:0,
        enableHighAccuracy:false,
        timeout:1500 
}

navigator.geolocation.getCurrentPosition(
    success,
    error,
    options
)

