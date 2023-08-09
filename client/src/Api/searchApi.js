import { useEffect, useState } from "react";
import axios from "axios";


const useSearch = (searchTerm) => {
    const [data, setData] = useState('');
  
    useEffect(() => {
      const fetchData = async () => {
        const response = await axios.get('http://localhost:8000/api/search?q=' + searchTerm);
        setData(response.data);
        console.log(data,"hi")
      };
      fetchData();
    }, [searchTerm]);
  
    return {
      data,
    };
  };
  

export default useSearch;