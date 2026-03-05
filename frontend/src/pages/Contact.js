import Header from "../components/Header";
import VideoComponent from "../components/VideoComponent";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

function Contact() {
    return (
        <div className="Contact">
            <h1>
                Contact Us
            </h1>
            <h4>
                Zoey HE (She/Her/Hers) - Founder
            </h4>
            <h4>
                zoey@sunvio.video
            </h4>
            <ContactForm></ContactForm>
        </div>
    );
}

export default Contact;
