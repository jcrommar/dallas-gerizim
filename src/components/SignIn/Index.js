import React from 'react';
import {
    Container,
    FormWrap,
    Icon,
    FormContent,
    Text,
} from './SignInElements';

const SignIn = () => {
    return (
        <>
        <Container>
            <FormWrap>
                <Icon to="/">Ebenezer</Icon>
                    <FormContent>
                        <Text>Some Text</Text>
                    </FormContent>
            </FormWrap>
        </Container>  
        </>
    )
}

export default SignIn;
