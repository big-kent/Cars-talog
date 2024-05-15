import React, { useState, useEffect } from 'react';

const useFetch = (url) => {

const [data, setData] = useState([]);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);

  

  useEffect(() => {
    setLoading(true);
    fetch(url)
     .then(response => response.json())
     .then(data => {
        setData(data);
        setLoading(false);
      })
     .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, [url]);
    return {data, loading, error};
}
 
export default useFetch;