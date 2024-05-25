import { Link } from "react-router-dom"

const Contact = () => {
    return (
        <div className="content_site">
            <div className="content_contact">

                <div className="content_form">
                    <h3>Contact</h3>

                    <div className="contact-email">
                        <p>
                            E-mail:
                            <span>
                                ↗ mladinaki54@gmail.com
                            </span>
                        </p>
                    </div>
                    <div className="contact-social">
                        <p>
                            Social media:
                        </p>
                        <span>
                            <br />
                            ↗ Instagram
                            <br /><Link to={'https://github.com/mladinaki'}>↗ GitHub</Link>
                            <br /><Link to={'https://www.linkedin.com/in/%D0%BC%D0%BB%D0%B0%D0%B4%D0%B5%D0%BD-%D1%82%D0%BE%D0%B4%D0%BE%D1%80%D0%BE%D0%B2-938ab62b6/'}>↗ LinkeDin</Link>
                        </span>
                    </div>

                    {/*<form>
                            <input type="text" name="name" placeholder="Name" />
                            <input type="text" name="email" placeholder="email" />
                            <textarea id="lname" name="lname" placeholder="message" />

                            <button type="submit" value="Submit" >Send</button>
                        </form>*/}

                </div>
            </div>
        </div>
    )
}

export default Contact