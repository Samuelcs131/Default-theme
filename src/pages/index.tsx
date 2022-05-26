import type { NextPage } from 'next'
import Buttons from '../components/Buttons'
import Colors from '../components/Colors' 
import HeadPage from '../components/HeadPage'
import Switch from '../components/Switch'
import Typography from '../components/Typography'
import { ContainerMain } from '../styles/container' 
import { Content } from '../styles/home'

const Home: NextPage = () => {
  return (<>
  <HeadPage titlePage="Default Theme"/>
  <ContainerMain>
  <div>
    <h1 style={{textAlign: 'center', marginBottom: '10px', marginTop: '10px'}}>The theme</h1>
    <Switch/>
    <Content>
        <Colors/>
        <Typography/>
        <Buttons/>
    </Content>
  </div>
  </ContainerMain>
  </>)
}

export default Home
