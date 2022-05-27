import { useState } from "react";
import axios from "axios";

const BASE_URL = "http://api.weatherbit.io/v2.0/current";
// const CROSS_DOMAIN = "https://the-ultimate-api-challenge.herokuapp.com";
// const REQUEST_URL = `${CROSS_DOMAIN}/${BASE_URL}`;

const useForecast = () => {
  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [forecast, setForecast] = useState(null);

  const submitRequest = async (location) => {
    // get where on earth ID
    const response = await axios(`${BASE_URL}/search`, {
      params: { query: location },
    });
    console.log({ response });
    // get weather
  };

  return {
    isError,
    isLoading,
    forecast,
    submitRequest,
  };
};

export default useForecast;
