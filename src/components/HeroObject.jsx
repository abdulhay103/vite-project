
const HeroObject = (props) => {
    let objects = props.objects;
    return (
        <div>
            <h1 className="text-lg font-bold">props by object</h1>
            <ul>
                <li>{objects['name']}</li>
                <li>{objects['age']}</li>
                <li>{objects['address']}</li>
            </ul>
        </div>
    );
};

export default HeroObject;