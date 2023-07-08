import HeroText from "./HeroText";
const Hero = () => {

    return (
        <div className="px-10">
            <h1 className='text-xl font-bold text-red-700 text-center'>Passing Object by props</h1>
            <HeroText />
        </div>
    );
}

export default Hero;