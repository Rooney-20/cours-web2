import { useState, useEffect } from 'react'

interface Dog {
    message : string,
    status : string
}

const RandomDog = () => {
    const[dog, setDog] = useState<Dog>();

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => {
            if(!response.ok)
                throw new Error(
                 `fetch : ${response.status} : ${response.statusText}`
                );
            return response.json();
        })
        .then((data) => {
            setDog({
                message : data.message ?? "no image found",
                status : data.status ?? "Error"
            });
        });
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

