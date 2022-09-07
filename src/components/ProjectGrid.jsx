import { constants } from "../Utils"


export const ProjectGrid = ({data, details}) => {
    return (
        <div className="project-grid">
            {
                    details != "" 
                    ? 
                    <div className="project-details">
                        <h3 className="detail-row">Descripción: </h3>
                        <p className="detail-row right">{details}</p>
                    </div> 
                    : ""
            }
            <div className="project-data">
                {
                    constants.map((element, index) => {
                        return (
                            <div key={index}>
                                <h3 className="detail-row">{element}:</h3>
                                <p className="detail-row right">{data[index]}</p>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}