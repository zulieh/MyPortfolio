import { Link } from "react-router-dom";
import "./style.css";
import pix from "../../assets/profile_p.jpeg";

const Home = () => {
  return (
    <div className="home">
      <div className="title">
        <h1>Zuleiha Dantijani</h1>
        <h4>Frontend Engineer</h4>
        <p>
          Experienced Frontend Engineer with a strong background in the
          information technology and services industry. Proficient in React,
          JavaScript, and Node.js, with a focus on delivering efficient and
          effective solutions. Passionate about user-centric design and creating
          intuitive user experiences. Adept at collaborating with
          cross-functional teams and translating business requirements into
          technical specifications. Committed to staying up-to-date with
          industry trends and continuously expanding the skill set. Strong
          problem-solving abilities and excellent communication skills.
        </p>
        <Link
          to="About"
          className="border rounded-full py-2 px-4 text-sm mt-5 bg-gray-500 text-white hover:bg-black"
        >
          More Info
        </Link>
      </div>
      <div className="person">
        <img src={pix} alt="mypicture" />
      </div>
    </div>
  );
};

export default Home;
