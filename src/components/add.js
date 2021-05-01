import React from 'react'

import {
    Form,
    FormGroup,
    Label,
    Input,
    Button

} from 'reactstrap'

export const Add = () => {
    return (
        <Form>
            <FormGroup>
                <Label> Name </Label>
                <Input type = "text" placeholder = "Enter Name"> </Input>
            </FormGroup>
            <Button type = "submit"> submit </Button>
            <a href="/" className = "btn btn-danger ml-2">Cancel</a>
        </Form>
    )
}
