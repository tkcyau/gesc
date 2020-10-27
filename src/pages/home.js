import React from 'react';

import { HeaderContainer } from '../containers/header'
import { Feature  } from "../components"


export default function Home() {
    return (
        <HeaderContainer>
            <Feature>
                <Feature.Title>Find your community at UVA Engineering</Feature.Title>
                <Feature.SubTitle>Make a difference</Feature.SubTitle>
            </Feature>
        </HeaderContainer>
    )
}