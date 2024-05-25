import { useState } from "react"
import { Link } from "react-router-dom"
import Product from "./product";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

//React boostrap//

const ProductItems = () => {


    return (
        <div className="content_site">

            <div className="content_one">
                <div className="avatar_img"><img src="images/avatar.png" /></div>
                <div className="content_p">

                    <h2>Hello!<br /> Welcome to the site</h2>
                    <p>
                        My name is <span>Mladen Todorov</span><br />
                        from Bulgeria I like to working on the <span>
                            front-end </span><br />
                        of the network for creating innovative web solutions.
                    </p>

                    <div className="btn_contactme">
                        <img src="images/btn_contactme.png" />
                        <Link to={'/contact'}>Contact me</Link>
                    </div>
                </div>
            </div>

            <div className="content_2">
                <div className="content_item_2-home">

                    <h3>Projects</h3>
                    <div className="dd">
                        <Product />
                    </div>

                </div>
            </div>

            <div className="content_3">

                <h1>About me</h1>
                <p>
                    "As a highly motivated and inquisitive professional, I possess an innate passion for design
                    that extends across various disciplines. Embracing an autodidactic approach, I consistently
                    maintain a positive and ego-free demeanor in all aspects of my work. My commitment to
                    excellence is underscored by a robust work ethic that permeates every endeavor,
                    ensuring a steadfast dedication to achieving superior outcomes.
                </p>
            </div>
        </div>
    )
}


export default ProductItems