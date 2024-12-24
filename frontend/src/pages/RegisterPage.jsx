import { Navbar } from "../components/Navbar";
import { useState } from "react";
import signup_img from "../images/signup_img.avif";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/AuthProvider";

export const RegisterPage = () => {
    const navigate = useNavigate();
    const {login} = useAuth();

    const [isFlip, setIsFlip] = useState(false);

    const backendurl = "https://urbanmart-ecommerce-zwgk.vercel.app";

    const handleFlip = () => {
        setIsFlip((isFlip === true) ? false : true);
    }

    const [loginData, setLoginData] = useState({
        email:'',
        password:''
    });

    const [signupData, setSignupData] = useState({
        name:'',
        email:'',
        password:'',
        confirmPass:'',
        street:'',
        city:'',
        state:'',
        phone:''
    });

    const updateLogEmail = (e) => {
        let value = e.target.value;
        console.log(value);
        setLoginData({
          ...loginData,
          email: value
        })
      }
      const updateLogPass = (e) => {
        let value = e.target.value;
        console.log(value);
        setLoginData({
          ...loginData,
          password: value
        })
      }

      const updateSignUpChange = (e) => {

        const { name, value } = e.target;

        setSignupData(prev => ({
          ...prev,
          [name]: value
        }));
      };

      const performSignup = async ()=>{

        console.log(signupData);

        await fetch(`${backendurl}/signup`,{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify({
                name: signupData.name,
                email: signupData.email,
                password: signupData.password,
                street: signupData.street,
                city: signupData.city,
                state: signupData.state,
                phone: signupData.phone
            })
        })
        .then((res)=>res.json())
        .then((data)=>{
            if(data.message === "user created successfully"){
                setIsFlip((isFlip === true) ? false : true);
            }
            else{
                alert(`something went wrong. ${data.error}`);
            }
        });
      };

      const performLogin = async ()=>{
        await fetch(`${backendurl}/login`,{
            method: 'POST',
            credentials: 'include',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                email: loginData.email,
                password: loginData.password
            })
        })
        .then((res) => res.json())
        .then((data) =>{
            console.log(data);
            if(data.message === "User Logged in successfully"){
                console.log(data.user_id);
                login();
                return navigate('/');
            }
            else{
                alert(`Something went wrong. ${data.error}`)
            }
        } )
      }

    return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh', backgroundColor: '#dfd3c3', overflowX: 'hidden'
        }}>
            <Navbar />

            <div className="register-card">
                <div className={`card ${isFlip ? 'flip' : ''}`}>

                    {/* default page Login hoga */}
                    <div className="card-front">

                        <div style={{ display: 'flex', justifyContent: 'space-evenly', width: '100%', height: '100%' }}>

                            <img src={signup_img} style={{ width: '45%', height: '100%', position: 'relative' }} alt="tasveer" />

                            <div style={{ width: '50%', display:'flex', justifyContent:'center', alignItems:'start', flexDirection:'column' }}>
                                <h2 style={{ color: "white", marginTop: '1vh' }}> Login </h2>

                                <div className="input-box">
                                    <input type="text" placeholder="Registered Email" style={{width:'80%'}} onChange={updateLogEmail} />
                                </div>
                                <div className="input-box">
                                    <input type="password" placeholder="Password" style={{width:'80%'}} onChange={updateLogPass}/>
                                </div>
                                <div className="input-box">
                                    <button style={{width:'80%'}} onClick={performLogin}> Login </button>
                                </div>

                                <p style={{ display: 'flex', width: '100%', justifyContent: 'left', color:'#d6d6d6' }}>
                                    Don't have an account?&nbsp;&nbsp;
                                    <p style={{ color: 'yellow', cursor: 'pointer' }} onClick={handleFlip}> Sign Up </p>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* backside i.e. signup page */}
                    <div className="card-back">

                        <div style={{ display: 'flex', justifyContent: 'space-evenly', width: '100%', height: '100%' }}>

                            <div style={{ width: '50%' }}>
                                <h2 style={{ color: "white", textAlign: 'center', marginTop: '1vh' }}> Sign Up </h2>

                                <div className="input-box">
                                    <input type="text" placeholder="Your Name" name="name" value={signupData.name} onChange={updateSignUpChange} />
                                    <input type="text" placeholder="Your Email" name="email" value={signupData.email} onChange={updateSignUpChange} />
                                </div>
                                <div className="input-box">
                                    <input type="number" placeholder="Phone" name="phone" value={signupData.phone} onChange={updateSignUpChange} />
                                </div>

                                <div className="input-box">
                                    <input type="text" placeholder="Street" name="street" value={signupData.street} onChange={updateSignUpChange} />
                                    <input type="text" placeholder="City" name="city" value={signupData.city} onChange={updateSignUpChange} />
                                    <input type="text" placeholder="State" name="state" value={signupData.state} onChange={updateSignUpChange} />
                                </div>
                                <div className="input-box">
                                    <input type="password" placeholder="New Password" name="password" onChange={updateSignUpChange} value={signupData.password} />
                                    <input type="password" placeholder="Confirm Password" name="confirmPass" onChange={updateSignUpChange} value={signupData.confirmPass} />
                                </div>

                                <div className="input-box">
                                    <button style={{width:'80%'}} onClick={performSignup}> Sign Up </button>
                                </div>

                                <p style={{ display: 'flex', width: '100%', justifyContent: 'center', color:'#d6d6d6' }}>
                                    Already have an account?&nbsp;&nbsp;
                                    <p style={{ color: 'yellow', cursor: 'pointer' }} onClick={handleFlip}> Login </p>
                                </p>
                            </div>
                            <img src={signup_img} style={{ width: '45%', height: '100%', position: 'relative' }} alt="tasveer" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}