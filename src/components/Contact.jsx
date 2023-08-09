import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const Contact = () => {
  return (
    <div className="flex flex-col items-center text-lg bg-slate-500">
      <h2 className="m-5">Contact</h2>
      <p>
        <FontAwesomeIcon icon={faPhone} />
        +2348138348347
      </p>
      {/* <div>
        <p>
          <FontAwesomeIcon icon={faEnvelope} />
          send an email
        </p>
        <textarea>message</textarea>
      </div> */}
    </div>
  );
};

export default Contact;
