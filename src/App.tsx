import React from "react";
import { Store } from "./Store";

function App(): JSX.Element {
    const store = React.useContext(Store);

    return (
        <React.Fragment>
            {console.log(store)}
            <h1>Rick and Morty</h1>
            <p>Pick yorour favourite episode!!!</p>
        </React.Fragment>
    );
}

export default App;
