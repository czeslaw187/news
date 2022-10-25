import Navbar from "./Navbar";

function Layout({children}) {
    return ( 
        <>
            <Navbar />
            <div className="w-screen bg-gradient-to-br from-indigo-200">{children}</div>
        </>
     );
}

export default Layout;