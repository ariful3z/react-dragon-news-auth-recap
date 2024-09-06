import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const Register = () => {
  const { createUser } = useContext(AuthContext)
    const handleRegister = e =>{
       e.preventDefault();
       console.log(e.currentTarget);
      
       const form = new FormData(e.currentTarget);
       const name = form.get('name');
       const photo = form.get('photo');
       const email= form.get('email');
       const password = form.get('password');
       console.log(name,photo,email,password);
       console.log(form.get('password'));

      //  creat useer

    createUser(email,password)
    .then(result => {
      console.log(result.user)
    })
      .catch(error => {
        console.error(error)
      })
       
    }
    return (
        <div>
            <h2 className="text-3xl">Please REgister</h2>
            <Navbar></Navbar>
        <div>
        <h2 className="text-3xl text-center my-10"> Please Login</h2>
            <form onSubmit={handleRegister} className="md:w-3/4 lg:w-1/2 mx-auto ">
            <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" required name="name" placeholder="name" className="input input-bordered"  />
        </div>
            <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" required name="photo" placeholder="Photo URL" className="input input-bordered"  />
        </div>
            <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" required name="email" placeholder="email" className="input input-bordered"  />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" required name="password" placeholder="password" className="input input-bordered"  />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
            </form>
            <p className="text-center mt-4">Already have an account? <Link className="text-red-700 font-bold" to="login">Login</Link></p>
        </div>
        </div>
    );
};

export default Register;