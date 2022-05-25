import { Container, Button } from "../styles/buttons";

const Buttons = (): JSX.Element => {
    return(<>
    <Container> 
        <div>
            <Button>Text</Button>
            <Button variant="outlined">Outlined</Button>
            <Button variant="contained">Contained</Button>
        </div>
        <div>
            <Button>Text</Button>
            <Button size="medium" variant="outlined">Outlined</Button>
            <Button size="small" variant="contained">Contained</Button>
        </div>
       
         
    </Container>
    </>)
}

export default Buttons;