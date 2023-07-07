// let cities = ["Dhaka", "Landon", "Ohio", "Shikago", "Korachi"];
const Hero = () => {
    let status = false;
    return (
        <div className="px-10">
            <h1 className='text-xl font-bold text-red-700 text-center'>loop In jsx:</h1>
            {
                status?
                <button onClick={()=>{setTimeout(() => {
                    alert("you are logined. Are you sure to log out")
                }, 2000);}} className="px-5 py-2 bg-red-500 text-white text-lg font-semibold cursor-pointer rounded">log Out</button>
            :
                <button onClick={()=>{setTimeout(() => {
                    alert("you are logouted! Pls log in again.")
                }, 2000);}} className="px-5 py-2 bg-green-500 text-white text-lg font-semibold cursor-pointer rounded">log In</button>
            }
        </div>
    );
}

export default Hero;