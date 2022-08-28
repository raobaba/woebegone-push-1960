import styles from "../Components/Navbar.module.css";
import { useNavigate } from 'react-router-dom';
export const Login = ()=>{
  const navigate = useNavigate()
    const handleSubmit = e => {
       e.preventDefault();
       console.log(e.target.email.value);
   
       if (!e.target.email.value) {
         alert("Email is required");
       } else if (!e.target.email.value) {
         alert("Valid email is required");
       } else if (!e.target.password.value) {
         alert("Password is required");
       } else if (
         e.target.email.value === "raorajan9576@gmail.com" &&
         e.target.password.value === "12345"
       ) {
         alert("You have successfully signed up!");
         e.target.email.value = "";
         e.target.password.value = "";
         navigate("/hotjar")
       } else {
         alert("Wrong email or password combination");
       }
     };
   
     const handleClick = e => {
       e.preventDefault();
   
       alert("Goes to registration page");
     };
     return (
       <div className={styles.login}>
          <form className="form" onSubmit={handleSubmit}>
          
             <h3>Email</h3>
             <div className={styles.input}>
               <input type="email" name="email" placeholder="raorajan9576@gmail.com" />
             </div>
             <h3>Password</h3> 
             <div className={styles.input}>
               <input type="password" name="password" placeholder="12345" />
             </div>
             <button className="primary">Sign</button>
           </form>
         <p onClick={handleClick} >signUp here</p>

       </div>
     )
   }