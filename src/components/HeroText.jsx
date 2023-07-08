const HeroText = (props) => {
    let datas = props.datas;

    return (
        <div>
            <ul>
                {datas.map((data, index) => {
                    return <li key={index}>{data}</li>;
                })}
            </ul>
        </div>
    );
};

export default HeroText;