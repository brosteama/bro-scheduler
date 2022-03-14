import Content from "./Content";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({ children, noNavbar, noFooter }) => (
    <div className="flex">
        <Sidebar />

        <div className="container ml-1">
            <Header />
            <Content />
        </div>
        
    </div>
);

export default Layout;
