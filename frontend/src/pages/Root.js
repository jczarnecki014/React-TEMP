import { Outlet,useNavigation } from "react-router-dom"

import MainNavigation from '../components/MainNavigation'

const RootPage = () => {

    const navigation = useNavigation();

    return (
        <>
            <MainNavigation />
            {navigation.state === 'loading' && <p>Loading...</p>}
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default RootPage