
import NavBar from "./navbar";
const Layout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col">
            <NavBar />
            <main className="flex-grow p-4">{children}</main>
            <footer className="bg-green-500 p-4 text-white text-center">
                &copy; {new Date().getFullYear()} Food Recipe App
            </footer>
        </div>
    );
};

export default Layout;
