import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import routes from "./routes";

const App = () => (
    <Router>
        <Sidebar />
        <div className="relative md:ml-64 bg-blueGray-100 min-h-screen">
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
        </div>
    </Router>
);
export default App;
