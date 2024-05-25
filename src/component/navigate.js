import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <div className="content_site">

            <div className="content_social">
                <div className="discord_icon"><Link to={'#'}><img src="images/discord_icon.png" /></Link></div>
                <div className="github_icon"><Link to={'https://github.com/mladinaki'}><img src="images/github_icon.png" /></Link></div>
                <div className="facebook_icon"><a href="#"><img src="images/facebook_icon.png" /></a></div>
            </div>

            <div className="navbar">
                <img src="../images/menu_1.png" />

                <div className="menu" >
                    <div className="menuItem" >
                        <Link to='/' >HOME</Link>
                        <Link to='/project'>WebDev CV</Link>
                        <Link to='/skills'>SKILLS</Link>
                        <Link to='/contact'>CONTACT ME</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar;