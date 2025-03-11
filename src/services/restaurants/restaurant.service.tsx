import { mocks, mockImages } from "./mock";
import camelize from "camelize";

// A request to get all the restaurants & it needs location - with it we can get the
// restaurants in that location - in our mocck data we have 4 locations to playaround
export const restaurantsRequest = (location = "37.7749295,-122.4194155") => {
  // console.log(location+` mock is the location`);
  return new Promise((resolve, reject) => {
    const mock = mocks[location as keyof typeof mocks];
    if (!mock) {
      reject("not found");
    }
    resolve(mock);
  });
};
export const restaurantTransform = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
    // for now we are just randomly selecting the images from the mockImages
    // and assigning it to the restaurant photos.
    restaurant.photos = restaurant.photos.map((p) => {
      return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
    });
    return {
      ...restaurant,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
    };
  });
  return camelize(mappedResults);
};
