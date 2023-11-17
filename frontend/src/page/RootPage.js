import { Outlet } from "react-router-dom"

const RootPage = () => {
    return (
        <>
            <h1>STRONA GLOWNA</h1>
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default RootPage