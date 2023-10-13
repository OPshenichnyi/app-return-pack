import { NavLink } from 'react-router-dom'
import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg bg-black">
                    <div className="container-fluid ">
                        <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <button type="button" className="btn btn-outline-warning mx-2">
                                        <NavLink to="/client">Client List</NavLink>
                                    </button>
                                </li>
                                <li className="nav-item">
                                    <button type="button" className="btn btn-outline-warning mx-2">
                                        <NavLink to="/product" >Product List</NavLink>
                                    </button>
                                </li>
                                <li className="nav-item">
                                    <button type="button" className="btn btn-outline-warning mx-2">
                                        <NavLink to="/pack">Pack List</NavLink>
                                    </button>
                                </li>
                                <li className="nav-item">
                                    <button type="button" className="btn btn-outline-warning mx-2">
                                        <NavLink to="/order">Order List</NavLink>
                                    </button>
                                </li>
                                <li className="nav-item">
                                    <button type="button" className="btn btn-outline-warning mx-2">
                                        <NavLink to="/completed">Completed operation</NavLink>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <Suspense>
                <Outlet></Outlet>
            </Suspense>
        </>
    )
}
