import React from "react";
import { Card, Row, Text } from "@nextui-org/react";
import { Grid } from "@nextui-org/react";
import { useRouter } from "next/router";

const PokemonCard = ({ pokemon }) => {
    const router = useRouter();
    return(
        <Grid xs={6} sm={3} md={3} xl={2} keys={pokemon.id}>
            <Card 
                isHoverable 
                isPressable 
                onClick={() => router.push(`name/${pokemon.name}`)}>
                <Card.Body css={{ p: 1 }}>
                    <Card.Image src={pokemon.img} width="100%" height={140} />
                </Card.Body>
                <Card.Footer>
                    <Row justify="space-between">
                            <Text transform="capitalize">{pokemon.name}</Text>
                            <Text>#{pokemon.id}</Text>
                    </Row>
                </Card.Footer>
            </Card>
        </Grid>
    );
};

export default PokemonCard;
