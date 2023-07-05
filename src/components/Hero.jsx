
const Hero = () => {
    let cities = ["Dhaka", "Landon", "Ohio", "Shikago", "Korachi"];
    return (
        <div>
            <h1>loop In jsx:</h1>
            <ol>
                {
                    cities.map((item, index)=>{
                        return <li key={index.toString()}>{item}</li>
                    })
                }
            </ol>
        </div>
    );
};

export default Hero;