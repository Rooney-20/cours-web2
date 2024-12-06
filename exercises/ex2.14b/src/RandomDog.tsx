import { useState, useEffect } from 'react'

interface Dog {
    message : string,
    status : string
}

const RandomDog = () => {
    const[dog, setDog] = useState<Dog>();

    const fetchDog = async () => {
        try {
            const response = await fetch("https://dog.ceo/api/breeds/image/random");
            if(!response.ok)
                throw new Error(
                 `fetch : ${response.status} : ${response.statusText}`
                );
            const data = await response.json();
            setDog({
                message : data.message ?? "no image found",
                status : data.status ?? "Error"
            });
        } catch (error) {
            console.error("error fetching dog img", error);
        }
    }

    useEffect(() => {
        fetchDog();
    },[])

    if(!dog) {
        <p>Loading...</p>
    }

    return (
        <div>
            <img src={dog?.message} style={{ maxHeight: 300 }}/>
            <p>Status : {dog?.status} </p>
        </div>
    );
}


export default RandomDog;

