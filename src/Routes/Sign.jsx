import styles from "../Components/Navbar.module.css";
import { Login } from './../Components/Login';
export const Sign = ()=>{
    return (
        <>
            <div className={styles.sign}>
                <img src="https://insights.hotjar.com/static/dd3f3da381ecbb6aa239.svg" alt="" />
                <div>
                    <div className={styles.first}>
                       <h1>Sign In</h1>
                       <div>
                        <p>Need a Hotjar account?</p>
                        <a href="sign.jsx">Sign In</a>
                       </div>
                       <div>
                           <img src="https://www.leutholdsalbertlea.com/wp-content/uploads/2019/08/Screen-Shot-2015-09-01-at-9.05.53-AM1.png" alt="" />
                           <button>Sign in with Google</button>
                       </div>
                       <div>
                           <img src="https://cdn2.iconfinder.com/data/icons/o-commerce-1/256/icon_unlock-512.png" alt="" />
                           <button>Sign in with SAML SSO</button>
                       </div>
                       <p>--------------or,sign in with google---------------</p>
                        {/* <p>Email address</p> 
                       <input type="text" name="" id="" placeholder="e.g:- raobaba@gmail.com" />
                       <p>Password</p>
                       <input type="text" name="" id="" placeholder="Enter Your Password" />  <br />
                       <a href="sign.jsx">reset password</a> <br />
                       <p> <input type="checkbox" /> keep in signed in </p>
                       <button>Sign</button>  */}
                      <div>
                       <Login />
                      </div>
                    </div>
                    <div className={styles.second}>
                        <p>HOTJAR GUIDES</p>
                        <img src="https://insights.hotjar.com/static/37d85d9a61db85c93d7f.png" alt="" />
                        <h3>Guides to learn more about Hotjar</h3>
                        <h4>Check out our guides to better understand user <br /> behavior, make the right changes, improve UX, and <br /> increase conversions on your website and product.</h4>
                        <button>Explore Guides</button> 
                    </div>
                </div>
            </div>
        </>
    )
}