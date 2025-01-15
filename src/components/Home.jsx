
import { Link } from "react-router-dom"

const Home = () => {

    return(
        <>
        <h1 className="välkommen">Välkommen!</h1>
        <br />
        <button>
            <Link to="/hälsning">Gå vidare</Link>
        </button>
        <hr />

        </>
    );

};

export default Home