

import { Link } from "react-router-dom"

const Home = () => {

    return(
        <>
        <h1 className="välkommen">Hackathon</h1>
        <br />
        <button className="submit-button" >
            <Link to="/hälsning" className="button-text">Gå vidare</Link>
        </button>

        </>
    );

};

export default Home