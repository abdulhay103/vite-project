
const ContactForm = () => {

    let text = 10;
    return (
        <div>
            {
            text >=5 ?
            <p className="p-4 text-green-500 text-lg">text is grater than 5</p>
            :
            <p className="p-4 text-green-500 text-lg">text is smaller than 5</p>
            }
        </div>
    );
};

export default ContactForm;