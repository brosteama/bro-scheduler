import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import routes from "./routes";

const App = () => (
    <Router>
        <Routes>
            {routes.map((route, index) => {
                return (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        element={
                            <route.layout>
                                <route.component />
                            </route.layout>
                        }
                    />
                );
            })}
        </Routes>
    </Router>
);
export default App;
