import "./ContactFormStyles.css";

function ContactForm() {
  return (
    <div className="form-container">
      <h1>Contact Us</h1>
      <form>
        <input placeholder="Name" />
        <input placeholder="E-mail" />
        <input placeholder="Subject" />
        <textarea placeholder="message" rows="4">
          {" "}
        </textarea>
        <button>Submit</button>
      </form>
    </div>
  );
}
export default ContactForm;
