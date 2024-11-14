import { Navbar } from "../components/Navbar";
import { Products } from "../components/Products";
import { Sidebar } from "../components/Sidebar";

export const CollectionPage = () =>{
    return (
        <div>
            <Navbar/>

            <div className="collection-page">
                <Sidebar/>
                <div style={{width: '73vw', padding:'15vh 0vw', boxSizing:'border-box'}}>
                    <h1 style={{color:'black'}}> Our Collections </h1>
                    <Products/>
                </div>
            </div>
        </div>
    );
};