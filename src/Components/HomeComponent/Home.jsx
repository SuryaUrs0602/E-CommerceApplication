import React from 'react'
import Main from './MainContent/Main'
import Services from '../ServicesComponent/Services'
import Trusted from '../TrustedComponent/Trusted'
import FeatureProducts from '../FeatureComponent/FeatureProducts'

const Home = () => {

  const data = {
    name: "Cart Craze"
  }

  return (
    <div>
      <Main myData={data}/>
      <FeatureProducts />
      <Services />
      <Trusted />
    </div>
  )
}

export default Home
