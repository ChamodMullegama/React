import React, { useEffect, useState } from 'react';

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "dee50e7439ca4117b50468f761e1ea9e";

function Find({ setfooddata }) {
    const [query, setquery] = useState("pizza");

    useEffect(() => {
        async function fetchfood() {
            const res = await fetch(`${URL}?q=${query}&apiKey=${API_KEY}`);
            const data = await res.json();
            console.log(data.results);
            setfooddata(data.results);
        }
        fetchfood();
    }, [query, setfooddata]);

    return (
        <div>
            <input 
                type="text"
                value={query}
                onChange={(e) => setquery(e.target.value)}
            />
        </div>
    );
}

export default Find;
