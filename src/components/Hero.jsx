import HeroText from "./HeroText";
import HeroObject from "./HeroObject";
// let cities = ["Dhaka", "Landon", "Ohio", "Shikago", "Korachi"];
const Hero = () => {
    let myArray=["Abdul Hay", 28, "Mirpur", "MSc in Fisheries"];
    let myObj = {
        name: "Abdul Hay",
        age:28,
        address: "Mirpur",
    }

    return (
        <div className="px-10">
            <h1 className='text-xl font-bold text-red-700 text-center'>Passing Object by props</h1>
            <HeroText datas={myArray}/>
            <HeroObject objects ={myObj} />
        </div>
    );
}

export default Hero;