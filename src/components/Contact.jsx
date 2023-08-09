import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const Contact = () => {
  return (
    <div>
      <h2>Contact</h2>
      <p>
        +2348138348347
        <FontAwesomeIcon icon={faPhone} />
      </p>
      <div>
        <p>
          send an email
          <FontAwesomeIcon icon={faEnvelope} />
        </p>
        <textarea>message</textarea>
      </div>
    </div>
  );
};

export default Contact;
