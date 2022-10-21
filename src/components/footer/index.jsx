import React from "react";
import './Footer.css'
import SvgGit from '../../assets/svg/icons8-github.svg'
import SvgLinkedin from '../../assets/svg/icons8-linkedin.svg'
import SvgBehance from '../../assets/svg/icons8-behance.svg'

export default () => {
    return (
        <footer>
            <h1>Made by: Alves Dev</h1>
            <h2>Contact:</h2>

            <ul>
                <li><a href="https://github.com/alvesxdev" target='_blank'><img src={SvgGit} alt="Icone Git Hub" /></a></li>
                <li><a href="https://www.linkedin.com/in/alves-dev-06bb08188/" target='_blank'><img src={SvgLinkedin} alt="Logo Linkedin" /></a></li>
                <li><a href="https://www.behance.net/alvesxdev" target='_blank'><img src={SvgBehance} alt="Logo behance" /></a></li>
            </ul>

            <p>Created in 2022</p>
            <p>Image rights: Netflix</p>
            <p>Data taken from the website: Themoviedb.org</p>

        </footer>
    )
}