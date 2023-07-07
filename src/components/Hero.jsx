import HeroText from "./HeroText";
// let cities = ["Dhaka", "Landon", "Ohio", "Shikago", "Korachi"];
const Hero = () => {
    return (
        <div className="px-10">
            <h1 className='text-xl font-bold text-red-700 text-center'>Passing props</h1>
            <HeroText firstProps="this is my first props"/>
        </div>
    );
}

export default Hero;