import { Link } from "react-router-dom"

const Skills = () => {

    return (
        <div className="content_site">
            <div className="content_2-skills">
                <div className="content_item_2-skills">

                    <h3>Skills</h3>
                    <div className="content-item-skils">
                        <img src="../images/js.png" />
                        <img src="../images/nodejs.png" />
                        <img src="../images/react.png" />
                        <img src="../images/css.png" />
                        <img src="../images/html-5.png" />
                    </div>

                </div>
                </div>
                <div className="btn_contactme_details-skills">
                    <img src="../images/btn_contactme.png" />
                    <Link to={'/'} >Back to home</Link>
                </div>
        </div>
    )
}

export default Skills