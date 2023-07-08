import HeroText from "./HeroText";
import cities from "../assets/datas/citiesArray"
const Hero = () => {

    function cityReader() {
        if(cities){
            return cities.map((city, index)=>{
                return <li key={index}>{city} and it key value is: {index}</li>
            })
        }
    }

    return (
        <div className="px-10">
            <h1 className='text-xl font-bold text-red-700 text-center'>Passing Object by props</h1>
            <HeroText myFun={cityReader}/>
        </div>
    );
}

export default Hero;