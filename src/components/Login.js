import {useState} from "react"
const Login = () => {

    const [isSignInForm, setisSignInForm] = useState(true)
    const toggleSignUpForm = () =>{
        setisSignInForm(!isSignInForm);
    }

    return (
        <div>
            <img  className="absolute h-screen w-screen object-cover" src="https://assets.nflxext.com/ffe/siteui/vlv3/fa7be975-efc3-48c6-8188-f07fdd1aa476/web/IN-en-20250428-TRIFECTA-perspective_e045264e-b4d4-4a6f-b2cc-f95e3344a332_medium.jpg" alt="background" />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative m-auto w-full md:w-9/12"  >
                <img className="w-52 pt-1" src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" />
                <form className="bg-black w-96 text-white px-16 py-12 mx-auto md:w-[480px] mt-24">
                        <h1 className="text-3xl font-bold pb-7 ">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                        {!isSignInForm && (
                            <input className="w-full h-12 rounded-md px-2 mb-4 border-[1px] border-zinc-400 bg-slate-800" placeholder="Full Name" type="text"></input>
                        )}
                        <input className="w-full h-12 rounded-md px-2 mb-4 border-[1px] border-zinc-400 bg-slate-800" placeholder="Email or mobile number" type="text"></input>
                        <input className="w-full h-12 rounded-md px-2 mb-4 border-[1px] border-zinc-400 bg-slate-800"  placeholder="Password" type="password"></input>
                        <button className="w-full rounded-md h-10 bg-red-600 font-semibold mb-6">{isSignInForm ? "Sign In" :"Sign Up" }</button>
                        <p className="text-gray-400 cursor-pointer" onClick={toggleSignUpForm}>{isSignInForm ? (<>New to Netflix?<span className="font-semibold text-white"> Sign up now.</span></>) : (<>Already a member?<span className="font-semibold text-white"> Sign in now</span></>)}</p>
                </form> 
            </div>
            <div>
              
            </div>
        </div>
    )
}

export default Login;