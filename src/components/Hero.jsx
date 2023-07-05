
const Hero = () => {
    let marks = 95;
    return (
        <div>
            <h1>Marks Checker</h1>
            {marks>80?<h2>Briliant Result!</h2>:<h2>Avarage Result.</h2>}
        </div>
    );
};

export default Hero;