import React from "react";
import AddClientModel from "../Components/Blocks/AddClientModel";
import Clients from "../Components/Blocks/Client";
import Project from "../Components/Blocks/Project";

export default function Home(){
    return (
        <>
        
        <div className="d-flex gap-3 mb-4 ">
     
        <AddClientModel />
        </div>
        <Project />
        <hr/>
        <Clients />
     
        </>
        
    )
}