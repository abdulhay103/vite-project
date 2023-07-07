// let cities = ["Dhaka", "Landon", "Ohio", "Shikago", "Korachi"];
const Hero = () => {
    let status = true;
    let text = 51;
    return (
        <div className="px-10">
            <h1 className='text-xl font-bold text-red-700 text-center'>Conditional operator && In jsx:</h1>
            {
                status && text >=5 &&
                <button onClick={()=>{setTimeout(() => {
                    alert("you are logined. Are you sure to log out")
                }, 2000);}} className="px-5 py-2 bg-red-500 text-white text-lg font-semibold cursor-pointer rounded">log Out</button>
            }
        </div>
    );
}

export default Hero;