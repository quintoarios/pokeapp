import { Button,Container, Image, Card, Grid, Text } from "@nextui-org/react";
import React, { useState, useEffect } from "react";
import {Popover, Spacer,Pagination as UIPagination,Row,} from "@nextui-org/react";
import { pokeApi } from "../../apis";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useRouter } from 'next/router'
import CustomLayout from "../../components/Layouts/CustomLayout";

//import { getPokemonAbility } from "../../utils/getPokemonAbility";

const PokemonPage = () => {
    const [isInFavorites, setIsInfavorites]= useState(false);
    const [imagenes, setImagenes]= useState([])
    const [pokemon, setPokemon] = useState(null)
    const router = useRouter()
    console.log(router)
    
    const onToggleFavorites = () => {
        setIsInfavorites(!isInFavorites);
    };
///////////////////////////////////////////////////////////////////////////////////
    const getData = async () => {
        const respuesta = await pokeApi.get(`/pokemon/${router.query.name}`);
        console.log(respuesta.data)
        const pokemonsData = {
            ...respuesta.data,
          
           //image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${respuesta.data.id}.svg'
           image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${respuesta.data.id}.svg`
        };

        setPokemon(pokemonsData);
      };
      
      useEffect(() => {
        getData();
      }, []);
  

    useEffect(() => {
        if(pokemon){
        setImagenes([
            pokemon?.sprites?.other?.dream_world?.front_default,
            pokemon?.sprites?.other?.home.front_default,
            pokemon?.sprites?.other?.home.front_shiny,
            pokemon?.sprites?.other?.["official-artwork"].front_default,
        ]);
    }
    }, [pokemon]);
    if (!pokemon) return null;
    
    return (
        <CustomLayout title={pokemon.name}>
            <Grid.Container css={{marginTop:"5px"}} gap={2}>
                <Grid xs={12} sm={4}>
                    <Card>
                        <Card.Body>
                            <Card.Image
                                src={pokemon.image}
                                alt={pokemon.name}
                                width="100%"
                                height={200}
                            />
                        </Card.Body>
                    </Card>
                </Grid>
                <Grid xs={12} sm={8}>
                    <Card>
                    <Card.Header
                        css={{ display: "flex", justifyContent: "space-between" }}
                    >
                        <Text h1 transform="uppercased">{pokemon.name}</Text>
                        <Button color="gradient" ghost={!isInFavorites} onClick={onToggleFavorites}>
                            {isInFavorites ? 'En Favoritos' : 'Guardar en Favoritos'}
                        </Button>
                    </Card.Header>
                <Card.Body>
                    <Text size={30}>Sprites:</Text>

                        <Container direction="row" display="flex" gap={0}>
                            <Image
                                src={pokemon.sprites.front_default}
                                alt={pokemon.name}
                                width={100}
                                height={100}
                            />
                            <Image
                                src={pokemon.sprites.back_default}
                                alt={pokemon.name}
                                width={100}
                                height={100}
                            />
                            <Image
                                src={pokemon.sprites.front_shiny}
                                alt={pokemon.name}
                                width={100}
                                height={100}
                            />
                            <Image
                                src={pokemon.sprites.back_shiny}
                                alt={pokemon.name}
                                width={100}
                                height={100}
                            />
                        </Container>
                        <Spacer y={1}
                                css={{
                                    height:"2px",
                                    width:"100%",
                                    margin: "10px auto !important",
                                    backgroundColor: "$blue500",
                                    }}
                                    />

                                <Text size={30}>stats:</Text>
                                <Grid.Container direction="row" justify="flex-start" gap={2}>
                                    {pokemon.stats.map((stat) => (
                                        <Grid xs={4} key={stat.stat.name} justify="space-between">
                                            <Text h4 transform="capitalize">{stat.stat.name}: </Text>
                                            <Text>{stat.stat.base_stat}</Text>
                                </Grid>
                            ))}
                                </Grid.Container>

                        <Spacer y={1}
                                css={{
                                    height:"2px",
                                    width:"100%",
                                    margin: "10px auto !important",
                                    backgroundColor: "$blue500",
                                    }}
                                    />
                </Card.Body>
            </Card>
        </Grid>
                <Grid xs={12}>
                    <Card>
                        <Card.Header>
                            <text h2>Galeria</text>
                            </Card.Header>
                            <Card.Body>
                            <Swiper
                                cssMode={true}
                                navigation={true}
                                pagination={true}
                                mousewheel={true}
                                keyboard={true}
                                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                                className="mySwiper"
                            >
                                {imagenes.map(
                                    (imagen, index) => (
                                        <SwiperSlide key={index} style={{ width: "100%" }}>
                                            <Card css={{ maxWidth: "300px", marginBottom: "20px" }}>
                                                <Card.Body>
                                                    <Card.Image
                                                        src={imagen}
                                                        alt={pokemon.name}
                                                        width="100%"
                                                        height={200}
                                                    />
                                                </Card.Body> 
                                            </Card>
                                        </SwiperSlide>
                                    )
                                )}
                            </Swiper>


                        </Card.Body>
                         </Card>
                         </Grid>
            </Grid.Container>
        </CustomLayout>
    );
}

export default PokemonPage;
