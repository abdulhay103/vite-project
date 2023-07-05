
const Hero = () => {
    let marks = 55;
    return (
        <div>
            <h1>Immedietly invoke funtion:</h1>
            {(()=>{
                if(marks>80 && marks<100){
                    return <h2>Congratulation! You Got A+</h2>
                }
                else if(marks>70 && marks<80){
                        return <h2>Congratulation! You Got A</h2>
                }
                else if(marks>60 && marks<70){
                        return <h2>Congratulation! You Got A-</h2>
                }
                else if(marks>50 && marks<60){
                        return <h2>Congratulation! You Got B</h2>
                }
                else if(marks>40 && marks<50){
                        return <h2>Congratulation! You Got C</h2>
                }
                else if(marks>33 && marks<40){
                        return <h2>Congratulation! You Got D</h2>
                }
                else{
                    return <h2>You fail the Exam</h2>
                }
            })()}
        </div>
    );
};

export default Hero;