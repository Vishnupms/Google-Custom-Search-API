import { useEffect, useState } from "react";
import Instance from "../Axios/Instance";

const useSearch = (searchTerm) => {
  const [data, setData] = useState('');
  
  useEffect(() => {
    let debounceTimer;

    const fetchData = async () => {
      const response = await Instance.get('/search?q=' + searchTerm);
      setData(response.data);
      console.log(response.data, "hi");
    };

    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(fetchData, 300); 

    return () => {
      clearTimeout(debounceTimer);
    };
  }, [searchTerm]);
  
  return {
    data,
  };
};

export default useSearch;
