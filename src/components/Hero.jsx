// let cities = ["Dhaka", "Landon", "Ohio", "Shikago", "Korachi"];
const Hero = () => {
    let status = false;
    let text = 2;
    return (
        <div className="px-10">
            <h1 className='text-xl font-bold text-red-700 text-center'>Conditional operator && In jsx:</h1>
            {(()=>{
                if(status && text >=5){
                    return <button onClick={()=>{setTimeout(() => {
                        alert("you are logined. Are you sure to log out")
                    }, 1000);}} className="px-5 py-2 bg-red-500 text-white text-lg font-semibold cursor-pointer rounded">log Out</button>
                }else{
                    return <button onClick={()=>{setTimeout(() => {
                        alert("you are not logined. Make sure your login status")
                    }, 1000);}} className="px-5 py-2 bg-green-500 text-white text-lg font-semibold cursor-pointer rounded">log In</button>
                }
            })()}
        </div>
    );
}

export default Hero;