import { useState,useEffect } from "react";
import axios from "axios";


const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
            'X-RapidAPI-Key': '2b457d2355msh1dce226a8c97952p19a6a1jsn8c4456361385',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
          },
        params: {...query},
       
      };

    const fetchData = async () => {
        setLoading(true)

        try {
            const response = await axios.request(options)
            setData(response.data.data)
            setLoading(false)
        } catch (error) {
            setError(error);
            alert('There is a error')
        } finally {
            setLoading(false);
        }
    } 

    useEffect(()=>{
        fetchData()
    }, [])

    const refetch = ()=>{
        setLoading(true)
        fetchData()
    }

    return{data,isLoading,error,refetch};
}

export default useFetch;