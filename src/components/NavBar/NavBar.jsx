import { NavLink } from 'react-router-dom'

export const NavBar = () => {
  return (
      <div>
          <nav>
                  <div>
                      <ul>
                          <li>
                              <NavLink to="/client">Client List</NavLink>
                          </li>
                          <li>
                              <NavLink to="/product" >Product List</NavLink>
                          </li>
                          <li>
                              <NavLink to="/pack">Pack List</NavLink>
                          </li>
                          <li>
                              <NavLink to="/order">Order List</NavLink>
                          </li>
                          <li>
                              <NavLink to="/completed">Completed operation</NavLink>
                          </li>
                      </ul>
                  </div>
          </nav>
     </div>
  )
}
