import { gql } from "@apollo/client";



export const ADD_Project = gql`
mutation addProject($name:String!,$description:String!,$status:ProjectStatus!,$clientId:ID!){
    addProject(name:$name,description:$description,status:$status,clientId:$clientId){
        id
        name
        description
        status
        client{
            name
            email
            phone
        }
    }
}

`

export const DELETE_PROJECT = gql`
  mutation DeleteProject($id: ID!) {
    deleteProject(id: $id) {
      id
    }
  }
`;