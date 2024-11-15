import React from 'react';
import CachedOutlinedIcon from '@mui/icons-material/CachedOutlined';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';

export const Feature = () => {
  return (
    <div style={{width:'100%', height:'30vh', display:'flex', justifyContent:'space-around', alignItems:'center', marginTop:'5vh'}}>
      <div style={{width:'30%', height:'90%', backgroundColor:'#fff', display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
        <CachedOutlinedIcon sx={{width:'40px', height:'40px'}}/>
        <h3> Easy Exchange Policy </h3>
        <p> We offer hassle free exchange policy </p>
      </div>
      <div style={{width:'30%', height:'90%', backgroundColor:'#fff', display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
        <VerifiedOutlinedIcon sx={{width:'40px', height:'40px'}}/>
        <h3> 7 days Return Policy </h3>
        <p> We provide 7 days return policy </p>
      </div>
      <div style={{width:'30%', height:'90%', backgroundColor:'#fff', display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
        <HeadsetMicOutlinedIcon sx={{width:'40px', height:'40px'}}/>
        <h3> Best Customer Support </h3>
        <p> We provide 24/7 customer support </p>
      </div>
    </div>
  )
};