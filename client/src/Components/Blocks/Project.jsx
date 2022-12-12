import Spinner from "./Spinner";
import { useQuery } from "@apollo/client";
import { GET_PROJECTS } from "../../querries/ProjectQuery";
import ProjectCards from "./ProjectCard";


export default function Project(){
    const {loading,error,data} = useQuery(GET_PROJECTS)
    
    if(loading) return <Spinner />
    if(error) return <p>Something went wrong</p>
    

    return(
     <>
     {data.projects.length > 0 ?(
            <div className="row">
                {
                    data.projects.map((project) => (
                        <ProjectCards key={project.id} project={project}/>
                    ))
                }
            </div>
        
     ):(<p>No Projects</p>)   }
     </>
    )
}