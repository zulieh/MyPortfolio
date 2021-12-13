import { Link } from "react-router-dom";
import "./style.css";
const Home = () => {
    return (
        <div className = "home">
            <div className = "title">
                <h1>
                    <p>Zuleiha Dantijani</p>
                </h1>
                <h4>Full stack Software engineer</h4>
                <p>I am an innovative Software engineer with 2 years of experience building 
                    interfaces that are usable and pleasant for the most number of people possible.
                </p>
                <Link to ="About">
                    <button>More Info</button>
                </Link>
            </div> 
            <div className = "person">
                    <img
                    src={`${process.env.PUBLIC_URL}/profile_p.jpeg`}
                    alt="mypicture"
                    />
            </div>    
        </div>
    );
};

export default Home
