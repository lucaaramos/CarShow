import { useState, useEffect } from "react";
import axios from '../services/axios';


const GetCar = () => {
    const [cars, setCars] = useState([])

    useEffect( () => {
        const fetchData = async() =>{
            try{
                const response = await axios.get('/api/cars');
                setCars(response.data)
            }catch(error){
                console.log('Error', error);
        }
        };
        fetchData()
    }, [])
    return { cars }
}

export default GetCar;