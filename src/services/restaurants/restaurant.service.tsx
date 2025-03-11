import { mocks } from "./mock";
import camelize from "camelize";

interface Restaurant {
  opening_hours?: { open_now: boolean };
  business_status?: string;
  [key: string]: any;
}

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
export const restaurantTransform = ({
  results = [],
}: {
  results: Restaurant[];
}) => {
  const mappedResults = results.map((restaurant: Restaurant) => {
    return {
      ...restaurant,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
    };
  });
  // console.log(mappedResults);
  return camelize(mappedResults);
};
