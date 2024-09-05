import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <div className=" flex items-center justify-center h-screen w-screen bg-gradient-to-r from-cyan-200 to-cyan-400 ">
        <div className="flex w-2/7 shadow-lg 	  items-center justify-center flex-col gap-4 bg-gradient-to-r from-orange-300 to-rose-300 p-4 m-4 rounded-lg">
          <h1 className="text-4xl font-bold">Login</h1>
         

          <div>
            <label className="text-3xl p-4  font-semibold">User Name:</label>
            <input className=" shadow-lg	 font-bold rounded-lg p-2" type="text" placeholder="type your name" />
          </div>
          <div>
           
            <label className="text-3xl p-4 font-semibold">Email:</label>
            <input className="font-bold rounded-lg p-2 shadow-lg	 " type="email" placeholder="type your email" />
          </div>

          <div>
            <label className="text-3xl p-4 font-semibold">Pass:</label>
            <input className="font-bold rounded-lg p-2 shadow-lg	 " type="Password" placeholder="type your Pass" />
          </div>

          

          <button className="border-2 p-2 font-bold rounded-lg bg-gradient-to-r from-cyan-200 to-cyan-400 hover:scale-110 ">Submit</button>
          <p className=" font-semibold " >Dont Have a account? <Link to="/SignUp"><span className="font-extrabold">SignUp</span></Link>  </p>
        </div>
      </div>
    </>
  );
}
