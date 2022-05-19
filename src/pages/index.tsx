import type { NextPage } from 'next'
import Head from 'next/head' 
import Pallete from '../components/Pallete'
import { ContainerMain } from '../styles/home'

const Home: NextPage = () => {
  return (<>
  <ContainerMain>
    <div>
      <Pallete/>
    </div>
  </ContainerMain>
  </>)
}

export default Home
