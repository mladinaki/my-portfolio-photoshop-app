import { useEffect, useState } from "react";
import * as projectService from "../services/projectService";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { getDate } from "./product";

const DetailsProject = () => {

    const [project, setProject] = useState([])
    const { projectId } = useParams()
    const [currentData, setCurrentData] = useState(getDate());
    console.log(currentData);


    useEffect(() => {
        projectService.getOne(projectId)
            .then(result => setProject(result))
    }, [projectId])

    return (
        <div className="content_site">
            <div className="content_2-project">
                <div className="content_item_2">

                    <div className="contentMap">
                        <h3>Project &gt;&gt; {project.projectName}</h3>
                        <div className="dataItem-details">{currentData}</div>
                        <div className="imageMap">
                            <img src={project.imageUrl} style={{ width: '357px', left: -17 }} />
                            <h5 style={{ color: 'white', top: 18, left: 83, position: 'relative', fontSize: 16, display: 'inline' }}>{project.projectName}</h5>
                        </div>
                    </div>
                    <div className="descItem">

                        <span className="nameDesc">{project.projectName}</span>---
                        {project.description}</div>
                </div>
            </div>

            <div className="btn_contactme_details">
                <img src="../images/btn_contactme.png" />
                <Link to={'/'} >Back to home</Link>
            </div>
        </div>
    )
}

export default DetailsProject