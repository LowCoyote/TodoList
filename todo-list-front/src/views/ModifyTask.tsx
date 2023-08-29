import React from "react";
import {useParams} from "react-router-dom";


const ModifyTask: React.FC = () => {
    let TaskId = useParams()

    return (
        <div>
            ModifyTask {TaskId["id"]}
        </div>
    )
}

export default ModifyTask;
