import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const Contact = () => {
  return (
    <div className="flex flex-col item-center bg-gray-500">
      <h2 className="flex flex-col">Contact</h2>
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
