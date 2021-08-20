import react from 'react';
import {Button} from '@chakra-ui/react';
import { Redirect } from 'react-router';

export default function Test(){
    return(
   <Redirect to="/">
    <Button>

    </Button>
    </Redirect>
    );
}