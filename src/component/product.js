import { useEffect, useState } from "react";
import ProductItem from "./productItem";

import * as projectService from "../services/projectService";

function getDate() {
    const today = new Date();
    const date = today.getDate();
    const month = today.getMonth() + 1;
    return `${date}/${month}`;
}

const Product = (_id) => {
    const [data, setProject] = useState([]);
    const [currentData, setCurrentData] = useState(getDate());


    useEffect(() => {
        projectService.getAll()
            .then(result => setProject(result))

    }, [])

    return (
        <div className="itemNameProduct">
            {data.map((item) => {
                return (
                    <div>
                        <div className="dataItem">{currentData}</div>
                        <ProductItem key={item._id} {...item} />
                    </div>
                )
            })}
            <div className="not-found">
                {data.length === 0 && <span>Няма намерен продукт!</span>}
            </div>
        </div>
    )
}
export default Product