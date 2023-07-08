const HeroText = ({myFun}) => {

    return (
        <div>
            <ul>
                {myFun()}
            </ul>
        </div>
    );
};

export default HeroText;