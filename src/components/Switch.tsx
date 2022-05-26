import { useContext, useState } from "react";
import { DataContext } from "../store/GlobalState";
import { Container, ContainerSwitch } from "../styles/Switch";

const Switch = (): JSX.Element => {
    const [switchToggle, setSwitchToggle] = useState<boolean>(false);
    const { dispatch, state } = useContext(DataContext)

    function toggleSwitch(){
        setSwitchToggle(!switchToggle)
        dispatch({
        type: 'theme', payload: { 
            themeDefault: state.theme.themeDefault == 'dark' ? 'light' : 'dark'
        }
        })
    }

    return(<>
    <Container>
        <span>Light Mode</span>
        <ContainerSwitch toggle={switchToggle}>
            <input type="checkbox" onClick={()=>toggleSwitch()} />
            <span />
            <div />
        </ContainerSwitch>
    </Container>
    </>)
}

export default Switch;