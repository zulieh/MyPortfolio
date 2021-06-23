import { Link } from "react-router-dom";
import "./style.css";
const Home = () => {
    return (
        <div className = "home">
            <div className = "title">
                <h1>
                    <p>Hello,</p>
                    <p>I'm Zuleiha Dantijani</p>
                    <p>I'm a Software developer</p>
                </h1>
                <Link to ="About">
                    <button>More Info</button>
                </Link>
                <div className = "person">
                    <img
                    src={`${process.env.PUBLIC_URL}/photo.png`}
                    alt="mypicture"
                    />
                </div>
            </div>

            
        </div>
    );
};

export default Home
