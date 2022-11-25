import {useState , useEffect} from 'react';

import Image from 'next/image';
import HolaMundo from '../components/HolaMundo';
import styles from '../styles/Home.module.css';
import { pokeApi } from "../apis";
import Layout from '../components/layouts/layout';
import { Card, Grid } from '@nextui-org/react';
import { Text } from "@nextui-org/react";
import PokemonCard from '../components/PokemonCard';

export default function Home() {
  const [pokemons, setPokemons] = useState([]);
 

  const getData = async () => {
    const respuesta = await pokeApi.get("/pokemon?limit=151");
    const pokemonsData = respuesta.data.results.map((poke, i) =>
    ({
      ...poke,
      id: i + 1,
     // img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg',
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i+1}.svg`,
    }));
    setPokemons(pokemonsData);
  };
  
  useEffect(() => {
    getData();
  }, []);

  console.log("pokemons", pokemons);
  if(pokemons.length === 0 ) return null;

  return (
      <Layout title="Pokedex ! Listado de Pokemons">
        <Grid.Container gap={2} justify="flex-start">
          <Grid xs={12} sm={3} md={2} css={{alignItems:"stretch"}}>
            <Card>
              <Card.Header>
              <Text h2>Busqueda</Text>
              </Card.Header>
              <Card.Body>
                <Text h3>Filtros</Text>
              </Card.Body>
            </Card>
          </Grid>
          <Grid xs={12} sm={9} md={10} className="content-results">
            <Grid.Container grap={2} justify="flex-start">
              {pokemons.length > 0 && pokemons.map((pokemon) => (
                <PokemonCard key={pokemon.id} pokemon={pokemon} />
              ))}

            </Grid.Container>
          </Grid>
        </Grid.Container>
      </Layout>
  );
}
