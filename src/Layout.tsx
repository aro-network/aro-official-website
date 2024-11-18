import { Outlet } from "react-router-dom";
import { Footer } from "./components/footer";
import { Header } from "./components/header";

export function Layout() {
    return (
        <div className="pb-20">
            <Header />
            <img src="/bg.avif" alt="" className="fixed w-screen h-screen object-cover z-0" />
            <Outlet />
            <Footer />
        </div>
    )
}