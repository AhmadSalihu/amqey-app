import React from 'react'
import ProductMap from '../../components/Carousel/ProductMap';
import Directory from '../../components/directorycomponent/directory';



import './homepage.styles.scss'


const HomePage = () => (

    <div className="homepage">
    <Directory />
    <br></br>
    <ProductMap />
      </div>
    )



export default HomePage;