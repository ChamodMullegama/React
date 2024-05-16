import React, { useEffect, useState } from 'react';
import styles from './Find.module.css'; // Import CSS module

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
        <div className={styles.findContainer}>
            <input 
                className={styles.searchinput} // Apply CSS module class
                type="text"
                value={query}
                onChange={(e) => setquery(e.target.value)}
            />
        </div>
    );
}

export default Find;
