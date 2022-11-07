import React from "react";
import "./App.css";
import { Layout, PokemonList } from "./components";
import { useQuery } from "react-query";
import { fetchPokemons } from "./api/fetchApi";
import Spinner from "react-bootstrap/Spinner";
import { Alert } from "react-bootstrap";
import PaginatedList from "./components/PaginatedList";
import { Pokemon } from "./pokemons/Pokemon";

function App() {
  const { data, error, isError, isLoading } = useQuery(
    "pokemons",
    fetchPokemons
  );

  if (isLoading) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  if (isError) {
    return (
      <Alert variant="danger">
        <>Error! {error}</>
      </Alert>
    );
  }

  return (
    <Layout>
      <PokemonList allPokemons={data.results} />
    </Layout>
  );
}

export default App;
