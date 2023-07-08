import cities from "../assets/datas/citiesArray";
import React, { useState } from "react";

const HeroText = () => {
    const [showCities, setShowCities] = useState(false);

    const citiShower = () => {
        if (cities) {
            return cities.map((city, index) => {
                return <li key={index}>{city}</li>;
            });
        }
    };

    const handleClick = () => {
        setShowCities(true);
    };

    return (
        <div>
            <button onClick={handleClick} className="px-3 py-2 bg-slate-700 rounded-md text-white">
                Click To Show Cities
            </button>
            {showCities && <ul>{citiShower()}</ul>}
        </div>
    );
};

export default HeroText;
