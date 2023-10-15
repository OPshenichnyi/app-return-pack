import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { NavBar } from '../NavBar/NavBar'

export const Layout = () => {
    return (
        <>
            <header>
                <Suspense>
                    <NavBar></NavBar>
                </Suspense>
            </header>
            <Suspense>
                <Outlet></Outlet>
            </Suspense>
        </>
    )
}
