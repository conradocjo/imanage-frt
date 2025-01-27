'use client';

import LogoutButton from "../components/Logout"

const Header = () => {
    return <>
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">IManage</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">

                    <li>
                        <details>
                            <summary>
                                Menu
                            </summary>
                            <ul className="z-50 p-2 bg-base-100 rounded-t-none">
                                <li><a>Link 1</a></li>
                                <li><a>Link 2</a></li>
                            </ul>
                        </details>
                    </li>
                    <li><LogoutButton /></li>
                </ul>
            </div>
        </div>
    </>
}

export default Header;