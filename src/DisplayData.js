import React, { useState, useEffect } from "react";
import fetchData from "./FetchDataConfig";

function DisplayData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchingdata = async () => {
      let response = await fetchData();
      setData(response);
    };
    fetchingdata();
  }, []);
  console.log(data);
  return (
    <>
      <h1>hello</h1>
    </>
  );
}

export default DisplayData;
