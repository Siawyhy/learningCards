import Link from "next/link"
//import Image from "next/image"
import { useRouter } from "next/router"

import styles from "../../styles/header.module.scss"

const navBar = [
    {id:1, tittle: "My words", path: '/'},
    {id:2, tittle:"Categories", path:'/categories'},
    {id:3, tittle:"About us", path:'/about'},
];

const Header = () => {
    const {pathname} = useRouter();

    return(
        <>
        <header className={styles.header}>
            <h1>
            <Link key={1} href="/">
                <span><h1>Start Learning</h1></span>
            </Link>
            </h1>
            <nav >
                <ul className={styles.nav}>
                    {navBar.map(({id, tittle, path}) => (
                        <Link key={id} href={path}>
                            <li>
                                <a className={pathname === path ? styles.nav_activ : styles.nav_item} href={path}>{tittle}</a>
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