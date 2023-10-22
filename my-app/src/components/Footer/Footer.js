import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
    return <footer className={styles.footer}>
        <p>This project was coded by Mariia Shulezhko and is&nbsp;
            <a href='https://github.com/mshulezhko/portfolio' target="_blank" rel="noreferrer">
                open-sourced in GitHub 👀
            </a>
        </p>
    </footer>
}

export default Footer
