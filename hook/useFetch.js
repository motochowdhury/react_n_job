import { useState,useEffect } from "react";
import axios from "axios";

const useFetch = (endpoint) => {
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
        params: {query: 'Python developer in Texas, USA', page: '1', num_pages: '1'},
       
      };
}