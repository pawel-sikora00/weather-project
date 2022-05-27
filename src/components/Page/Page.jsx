import React, { Fragment } from "react";
import Header from "../Header/Header";
import Form from "../Form/Form";
import Error from "../Error/Error";
import Loader from "../Loader/Loader";
import Forecast from "../Forecast/Forecast";
import useForecast from "../../hooks/useForecast";

import "./Page.css";

const Page = () => {
  const { isError, isLoading, forecast, submitRequest } = useForecast();

  const submitSearch = (value) => {
    submitRequest(value);
  };

  return (
    <Fragment>
      <Header />
      <div className="box">
        {!isLoading && <Form submitSearch={submitSearch} />}
        {isError && <Error message={isError} />}
        {isLoading && <Loader />}
      </div>
      {forecast && <Forecast />}
    </Fragment>
  );
};

export default Page;
