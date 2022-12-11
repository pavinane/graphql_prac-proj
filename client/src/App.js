import Header from "./Components/Blocks/Header";
import {ApolloProvider,ApolloClient,InMemoryCache} from "@apollo/client";
import Clients from "./Components/Blocks/Client";
import AddClientModel from "./Components/Blocks/AddClientModel";



const cache = new InMemoryCache({
  typePolicies:{
    Query:{
      fields:{
        clients:{
          merge(existing,incoming){
            return incoming
          }
        },
        projects:{
          merge(existing,incoming){
            return incoming
          }
        },
      }
    }
  }
})

const client = new ApolloClient({
  uri:"http://localhost:5000/graphql",
  cache
})


function App() {
  return (
    <>
    <ApolloProvider client={client}>
    <Header />
      <div className="container">
        <AddClientModel />
        <Clients />
    </div>
    </ApolloProvider>
    </>
  
  );
}

export default App;
