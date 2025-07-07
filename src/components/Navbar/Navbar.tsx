import React from 'react'
import styles from './Navbar.module.css'

export type NavbarProps = {
    loggedIn: boolean;
    setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
}

const Navbar = (props: NavbarProps) => {

    const Login = () => {
        props.setLoggedIn(true);
    }

    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                QuizzV4
            </div>
            <div className={styles.nav}>
                {props.loggedIn === false ? (
                    <div className={styles.links}>
                        <span onClick={() => Login()}>Iniciar Sessão</span>
                    </div>
                ) : (
                    <div className={styles.links}>
                        <span>Jogar</span>
                        <span>LeaderBoard</span>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar