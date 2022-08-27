import styles from "../Components/Navbar.module.css";
export const GetStarted = ()=>{
    return (
        <div>
            <div className={styles.sign}>
                <img src="https://insights.hotjar.com/static/dd3f3da381ecbb6aa239.svg" alt="" />
                <div>
                    <div className={styles.first}>
                       <h1>Create Your Hotjar Account</h1>
                       <div>

                       </div>
                       <div>
                           <img src="https://www.leutholdsalbertlea.com/wp-content/uploads/2019/08/Screen-Shot-2015-09-01-at-9.05.53-AM1.png" alt="" />
                           <button>Sign in with Google</button>
                       </div>
                       <p>-------------------or,sign in with google----------------</p>
                       <div>
                           <img src="https://cdn2.iconfinder.com/data/icons/o-commerce-1/256/icon_unlock-512.png" alt="" />
                           <button>Sign in with SAML SSO</button>
                       </div>
                      
                    </div>
                    <div className={styles.second}>
                        <p>HOTJAR GUIDES</p>
                        <img src="https://insights.hotjar.com/static/f109fbf4cabb33d9326c.jpg" alt="" />
                        <h3>Understand how users really experience your site</h3>
                        <h4>Hotjar is an intuitive, visual way to discover, consolidate, and communicate user needs.</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}