import React from "react";
/*import Layout from "./../../components/layouts/layout";*/
import Image from "next/image";
import NextLink from "next/link";
import { useTheme, Text, Link, Spacer } from "@nextui-org/react";

const NavBar = () => {
    const { theme } = useTheme();
    const id = Math.floor(Math.random() * 100) + 1;
    return (
        <div
            style={{
                display: "flex",
                width: "100%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "start",
                padding: "0 50px",
                position: "sticky",
                top: 0,
                left: 0,
                zIndex: 1000,
                backgroundColor: theme?.colors.gray100.value,
            }}
        >
        <Image
            src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'}
            alt="Icono de la app"
            width={70}
            height={70}
        />
            <NextLink  href="/" passHref>
                <Link>
                    <Text color="white" h2 sm={undefined}>P</Text>
                    <Text color="white" h3 sm={undefined}>okedex!</Text>    
                </Link>
            </NextLink>
            <Spacer css={{ flex:1 }} />
            <NextLink  href="/favoritos" passHref>
                <Link>
                    <Text color="white" h3 sm={undefined}>
                    Favoritos
                    </Text>
                </Link>
            </NextLink>
        </div>
    );
};

export default NavBar;