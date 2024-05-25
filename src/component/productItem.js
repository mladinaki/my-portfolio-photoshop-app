import { Link } from "react-router-dom";

const ProductItem = ({ _id, imageUrl, description, projectName }) => {
    return (
        <div className="contentMap">

            <div className="imageMap">
                <Link to={`/details-project/${_id}`} >
                    <img src={imageUrl}  />
                    <h5>{projectName}</h5>
                </Link>
            </div>
        </div>
    )
}

export default ProductItem;