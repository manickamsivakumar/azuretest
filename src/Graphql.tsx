import React from 'react'
import  {gql,useQuery} from "@apollo/client";
const Graphql = () => {

const schema=gql`query {
  Pokemons {
    name,
    url
  }
}`;
const {data}=useQuery(schema);
return (
    <div>Graphql</div>
  )
}

export default Graphql
