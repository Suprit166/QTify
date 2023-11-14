import React from "react";
import styles from "./Hero.section.module.css"
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Headphone from "../../assets/headphone_Img.png"




export default function Hero_Section () {

    return (
        <div className={styles.hero}>
        <Box display='flex' alignItems={"center"} align='center'>
            <Box styles={{fontFamily: 'Poppins, sans-serif'}} fontWeight={600} height={'100px'}>
                <Typography variant="h6"fontWeight={600} fontSize={"32px"} lineHeight={"48px"} style={{ color: '#FFFFFF' }} >
                100 Thousand Songs, ad-free
                </Typography>
                <Typography variant="h6" fontWeight={600} fontSize={"32px"} lineHeight={"48px"} style={{ color: '#FFFFFF' }}> 
                Over thousands podcast episodes
                </Typography>
            </Box>
            <Box>
                <img
                    src={Headphone}
                    alt="headphone"
                    style={{width: '212px',
                            height: '212px',
                            top: '103px',
                            left: '914px',
                           }}
                />
            </Box>
            
        </Box>
        </div>

        
            
        
    )
}

