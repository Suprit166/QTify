import React from 'react'
import { useOutletContext } from 'react-router-dom';
import HeroSection from '../../components/Hero/HeroSection';
import Section from '../../components/Section/Section';
import styles from "./HomePage.module.css"

function HomePage(props) {
    const { data } = useOutletContext();
    const {topAlbums, newAlbums} = data;

    return <>
         <HeroSection/>
         <div className={styles.wrapper}>
            <Section title="Top Albums" data={topAlbums} type="album" />
            <Section title="New Albums" data={newAlbums} type="album" />
         </div>
        
        </>
}


export default HomePage;