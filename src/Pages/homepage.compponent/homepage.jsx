import React from 'react'
import Directory from '../../components/directorycomponent/directory'
import HomeScreen from '../../HomeScreen';
import './homepage.styles.scss'


const HomePage = () => (
    <div className="homepage">
        <Directory />
        <HomeScreen />
        
    </div>
)

export default HomePage;