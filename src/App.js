import { Layout } from "layouts";
import Test from "pages/Test";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { PrivateRoute } from "routes/PrivateRoute";

const App = () => (
    <Router>
        <Routes>
            <Route path="login" element={<Test />} />
            <Route path="register" element={<Test />} />
            <Route
                path="*"
                element={
                    <PrivateRoute>
                        <Layout />
                    </PrivateRoute>
                }
            />
        </Routes>
    </Router>
);
export default App;
