import React from 'react';
import {FaGithub, FaPlus} from 'react-icons/fa';

import {Container, Form, SubmitButton} from './styles';

export default function Main(){
    return(
        <Container>
            <h1>
                <FaGithub size={25}/>
                Meus repositórios
            </h1>

            <Form onsubmit={() => {}}>
                <input type="text" placeholder="Adicionar repositórios"/>
                <SubmitButton>
                    <FaPlus color="#FFF" size={14} />
                </SubmitButton>
            </Form>

        </Container>
    );
}