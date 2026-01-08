import { Outlet, ScrollRestoration } from "react-router"
import Header from "./Header"
import Footer from "./Footer"

function Layout() {
    return (
        <>
            <ScrollRestoration />
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout