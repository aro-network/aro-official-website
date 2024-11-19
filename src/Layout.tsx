import { Outlet } from "react-router-dom";
import { Footer } from "./components/footer";
import { Header } from "./components/header";

export function Layout() {
    return (
        <div className="pb-20 sm:pb-0">
            <Header />
            <img src="/bg.avif" alt="" className="fixed z-0 object-cover w-screen h-screen" />
            <Outlet />
            <Footer />
        </div>
    )
}