// let cities = ["Dhaka", "Landon", "Ohio", "Shikago", "Korachi"];
const Hero = () => {
    let status = false;
    switch (status) {
        case true:
            return (
                <div className="px-10">
                    <h1 className='text-xl font-bold text-red-700 text-center'>loop In jsx:</h1>
                    <button onClick={()=>{setTimeout(() => {
                        alert("you are logined. Pls explore new things.")
                    }, 2000);}} className="px-5 py-2 bg-red-500 text-white text-lg font-semibold cursor-pointer rounded">log Out</button>
                </div>
            );
        case false:
            return (
                <div className="px-10">
                    <h1 className='text-xl font-bold text-red-700 text-center'>loop In jsx:</h1>
                    <button onClick={()=>{setTimeout(() => {
                            alert("you are logouted! Pls log in again.")
                        }, 2000);}} className="px-5 py-2 bg-green-500 text-white text-lg font-semibold cursor-pointer rounded">log In</button>
                </div>
            );
        default:
            return null;
    }
};

export default Hero;