import { Link } from "react-router-dom";
import "./style.css";

const Home = () => {
  return (
    <div className="home">
      <div className="title">
        <h1>Zuleiha Dantijani</h1>
        <h4>Full stack Software engineer</h4>
        <p>
          Fullstack software engineer with 2+ years of experience developing a
          demonstrated history of working in the information technology and
          services industry. I have a passion for developing innovative
          solutions that expedite the efficiency and effectiveness of
          organizational success, skilled in technologies such as React,
          Javascript and Nodejs.
        </p>
        <Link to="About">
          <button>More Info</button>
        </Link>
      </div>
      <div className="person">
        <img src={`${process.env.PUBLIC_URL}/profile_p.jpeg`} alt="mypicture" />
      </div>
    </div>
  );
};

export default Home;
