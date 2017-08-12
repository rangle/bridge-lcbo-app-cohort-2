import { Observable } from 'rxjs/Observable';



// const getLocation = () => {
//   if (navigator.geolocation) {
//     console.log("get location called")
//     navigator.geolocation.getCurrentPosition(showPosition);
//   } else {
//     console.log("Geolocation is not supported by this browser.")
//     return {}
//   }
// };

// new promise(avigator.geolocation.getCurrentPosition(), (res, rej)=>
// if res return data)

const getLocation = () => {
console.log('called')
return Observable.defer(function () {
        // execute the function and then examine the returned value.
        // if the returned value is *not* an Rx.Observable, then
        // wrap it using Observable.return
        var result = navigator.geolocation.getCurrentPosition();
        console.log(25, result)
        return  Observable.return(result);
    });
  };

const showPosition = ({ coords: { latitude, longitude } }) => {
  console.log('13', latitude);
  return { latitude: 41, longitude }
};

export default getLocation
