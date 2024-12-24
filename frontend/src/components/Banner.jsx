import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import { useNavigate } from "react-router-dom";


export const Banner = () => {

    const navigate = useNavigate();

    const handleCollection = ()=>{
       return navigate('/collection');
    }

    return (
        <div className="banner">
            <div style={{width:'100%', display:'flex', justifyContent:'center', alignItems:'center', gap:'5vw'}}>
                <div>
                    <h1 style={{ fontSize: '5vw', color: 'white' }}> Urban Mart </h1>
                    <p style={{ fontSize: '2vw', color: 'white' }}>The ultimate urban marketplace.</p>
                </div>
                <button 
                style={{ width: '20%', height: '40%', fontSize:'1.5vw', backgroundColor:'#596e79', color:'white', cursor:'pointer', display:'flex', justifyContent:'center', alignItems:'center', gap:'1vw' }}

                onClick={handleCollection}
                > 
                    <LocalGroceryStoreIcon/>
                    Shop Now 
                </button>
            </div>
        </div>
    );
}