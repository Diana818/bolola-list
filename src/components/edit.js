import React from 'react'
import {Container, FormControl, InputLabel, Input, Button, Typography} from '@material-ui/core'



export const Edit = () => {
    return (
        <Container>
            <Typography variant="h4" component="h3">
             Edit station name
            </Typography>
           <FormControl>
       <InputLabel htmlFor="my-input">Station name</InputLabel>
       <Input id="my-input" aria-describedby="my-helper-text" />
       <Button> Submit </Button>
            </FormControl> 
        </Container>
                 
    )
}
