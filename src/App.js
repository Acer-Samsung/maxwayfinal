import HomePage from "./HomePage";
import {Route, Switch} from "react-router-dom";

function App() {
    return (

        <Switch>
            <Route path={"/"}><HomePage/></Route>
        </Switch>

    );
}

export default App;
