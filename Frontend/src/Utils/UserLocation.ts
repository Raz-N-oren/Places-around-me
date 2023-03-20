import GeolocationModel from "../Models/GeolocationModel";

function getStoreLocation(): Promise<GeolocationModel> {
    return new Promise<GeolocationModel>((resolve, reject) => {
        window.navigator.geolocation.getCurrentPosition(
            position => {
                const geo = new GeolocationModel();
                geo.latitude = position.coords.latitude;
                geo.longitude = position.coords.longitude;
                resolve(geo);
            },
            err => reject(err)
        );
    });
}

export default getStoreLocation;