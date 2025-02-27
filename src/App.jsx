import { Link } from "react-router-dom";

function App() {
    return (
        <>
            <p>Deploy Gang</p>
            <Link to={"/real"}>Click to go the the cool page</Link>
        </>
    );
}

export default App;
