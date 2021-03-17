import React, { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const getData = async () => {
    const response = await fetch(url);
    const result = await response.json();
    setData(result);
    setLoading(false);
  };
  useEffect(() => {
    getData();
  }, [url]);
  return { loading, data };
};
