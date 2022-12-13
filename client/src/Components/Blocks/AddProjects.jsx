import React, { useState } from "react";
import { FaList } from "react-icons/fa";
import { useMutation, useQuery } from "@apollo/client";
import {GET_PROJECTS} from '../../querries/ProjectQuery';
import { GET_CLIENTS } from "../../querries/ClientQuery";
import { ADD_Project } from "../../mutations/projectMutation";
// import Spinner from "./Spinner";


export default function AddProjectModel() {

    const [name,setName] = useState("");
    const [description,setDescription] = useState("");
    const [clientId,setClientId] = useState("");
    const [status,setStatus] = useState("new");

    const [addClient] = useMutation(
        ADD_Project,{
        variables:{name,description,status,clientId},
        update(cache,{data:{addProject}}){
            const {projects} = cache.readQuery({query:GET_PROJECTS});
            
            cache.writeQuery({
                query:GET_PROJECTS,
                data:{projects:[...projects,addProject]},

            })
        }
    })

    // Get Clients for Select

    const {loading,error,data} = useQuery(GET_CLIENTS)

    const onSubmit = (e) => {
        e.preventDefault();
        
        if(name === '' || description === '' || status ===''){
            return alert('Please fill in all fields');

     
        }
        addClient(name,description,status,clientId);

        setName('');
        setDescription('');
        setStatus('new');
        setClientId("")
    }
    if(loading) return null;

    if(error) return <p>Something Went Wrong</p>

  return (
    <>
      {!loading && !error && (
        <>
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#addProjectModel"
          >
            <div className="d-flex align-items-center">
              <FaList className="icon" />
              <div>Add Project</div>
            </div>
          </button>

          <div
            className="modal fade"
            id="addProjectModel"
            aria-labelledby="addProjectModelLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="addProjectModelLabel">
                    Add Project
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <form onSubmit={onSubmit}>
                    <div className="mb-3">
                      <label className="form-label">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Description</label>

                      <textarea
                        id="description"
                        value={description}
                        className="form-control"
                        onChange={(e) => setDescription(e.target.value)}
                      ></textarea>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Status</label>

                      <select
                        className="form-select"
                        id="status"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                      >
                        <option value="new">Not Started</option>
                        <option value="progress">In Progress</option>
                        <option value="completed">Completed</option>
                      </select>
                    </div>


                    <div className="mb-3">
                      <label className="form-label">Status</label>

                      <select
                        className="form-select"
                        id="clientId"
                        value={clientId}
                        onChange={(e) => setClientId(e.target.value)}
                      >
                         <option value="">Select Client</option>
                         {data.clients.map((client) => (
                            <option key={client.id} value={client.id}>
                              {client.name}
                            </option>
                          ))}
                      </select>
                    </div>

                    {/* <div className="mb-3">
                      <label className="form-label">
                        <select
                          id="clientId"
                          className="form-select"
                          value={}
                          onChange={(e) => setClientId(e.target.value)}
                        >
                          <option value="">Select Client</option>
                          {data.clients.map((client) => (
                            <option key={client.id} value={client.id}>
                              {client.name}
                            </option>
                          ))}
                        </select>
                      </label>
                    </div> */}
                    <button
                      type="submit"
                      data-bs-dismiss="modal"
                      className="btn btn-primary"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}