import React from 'react'
import  {gql,useQuery} from "@apollo/client";
const Graphql = () => {

const schema=gql`query {
  Pokemons {
    name,
    url
  }
}`;
const {loading,error,data}=useQuery(schema);
console.log(data)
return (
    <div>Graphql</div>
  )
}

export default Graphql
