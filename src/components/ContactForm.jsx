
const ContactForm = () => {

    let text = 4;
    return (
        <div>
            {
            text >=5 ?
            <p>text is grater than 5</p>
            :
            <p>text is smaller than 5</p>
            }
        </div>
    );
};

export default ContactForm;