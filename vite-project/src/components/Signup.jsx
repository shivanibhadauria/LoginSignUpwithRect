import { Link } from "react-router-dom";

export default function Signup() {
    return (
      <>
        <div className=" flex items-center justify-center h-screen w-screen bg-gradient-to-r from-cyan-200 to-cyan-400 ">
          <div className="flex w-2/7 shadow-lg	  items-center justify-center flex-col gap-4 bg-gradient-to-r from-orange-300 to-rose-300 p-4 m-4 rounded-lg">
            <h1 className="text-4xl font-bold">SignUp</h1>
           
  
            <div  >
              <label className="text-3xl p-4 font-semibold">First Name:</label>
              <input className=" shadow-lg	 font-bold rounded-lg p-2" type="text" placeholder="type your First Name" />
            </div>
            <div >
              <label className="text-3xl p-4 font-semibold">Last Name:</label>
              <input className=" shadow-lg	 font-bold rounded-lg p-2" type="text" placeholder="type your >Last Name" />
            </div>

            <div >
              <label className="text-3xl p-4 font-semibold">Username:</label>
              <input className=" shadow-lg	 font-bold rounded-lg p-2" type="text" placeholder="type your Username" />
            </div>
            <div >
             
              <label className="text-3xl p-4 font-semibold ">Email:</label>
              <input className="font-bold rounded-lg p-2 shadow-lg	 " type="Email" placeholder="type your Email" />
            </div>
  
            <div >
              <label className="text-3xl p-4 font-semibold">SetPass:</label>
              <input className="font-bold rounded-lg p-2 shadow-lg	 " type="Password" placeholder="set your password" />
            </div>
  
            
  
            <button className="border-2 p-2 font-bold rounded-lg bg-gradient-to-r from-cyan-200 to-cyan-400 hover:scale-110 ">Submit</button>
            <p className=" font-semibold " >Already Have a account? <Link to="/"> <span className="font-extrabold">Login</span></Link> </p>
          </div>
        </div>
      </>
    );
  }
  