import Link from "next/link"
//import Image from "next/image"
import { useRouter } from "next/router"

const navBar = [
    {id:1, tittle: "My words", path: '/'},
    {id:2, tittle:"Categories", path:'/categories'},
    {id:3, tittle:"About us", path:'/dev'},
];

const Header = () => {
    const {pathname} = useRouter();
    console.log(pathname);

    return(
        <>
        <header className="header">
            <h1 className='.header_title'>
            <Link key={1} href="/">
                <span>Start Learning</span>
            </Link>
            </h1>
            <nav >
                <ul className='header_nav'>
                    {navBar.map(({id, tittle, path}) => (
                        <Link key={id} href={path}>
                            <li>
                                <a className={pathname === path ? "header_nav_activ" : "header_nav_item"}>{tittle}</a>
                            </li>
                        </Link>
                    ))}
                </ul>
            </nav>
        </header>
        </>
    )
}

export default Header;