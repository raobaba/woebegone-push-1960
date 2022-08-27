import styles from "../Components/Navbar.module.css";
import { Video } from './Video';
export const Hotjar = ()=>{
    return (
        <>
        <div className={styles.hotjar}>
            <div className={styles.head1}>
                <h1>Understand how users behave on your site, <br /> what they need, and how they feel, fast.</h1>
            </div>
            <div className={styles.head2}>
                <div>
                    <img src="https://images.ctfassets.net/lh3zuq09vnm2/6zxMbtJI8T43Ia7uHg49YB/32b9315a40b4f1363fb448bd0cab5534/icon-no-card.svg" alt="" />
                    <p>No credit card required</p>
                </div>
               <div>
                <img src="https://images.ctfassets.net/lh3zuq09vnm2/o8L9i7vSjKytR7aYfef7C/ead95db8958fa7ef66750e9ba4fea91e/icon-sign.svg" alt="" />
                    <p>56,549 users signed up last month</p>
               </div>
               <div>
                <img src="https://images.ctfassets.net/lh3zuq09vnm2/6lgSqbFdgGqSyLx3sGk18/e768204f0c3755e5dd816762a402ac24/icon-privacy.svg" alt="" />
                    <p>GDPR- & CCPA-ready</p>
               </div>
            </div>
          <div className={styles.head3}>
             <div>
             <Video  />
             </div>
             <div>
                <h2>The slow, manual days of collating <br /> data and feedback are over.</h2>
                <p>Hotjar is an intuitive, visual way to discover,<br /> consolidate, and communicate user needs.</p>
                <button>Start free with email</button> <br />
                <button>Start free with google</button>
                <p>Hotjar is free forever - upgrade anytime</p>
             </div>
          </div>
          <div className={styles.head4}>
            <div>
                <h2>Trusted by 900,000 websites in 180+ countries</h2>
            </div>
            <div className={styles.image}>
                <img src="https://images.ctfassets.net/lh3zuq09vnm2/6Id0eTlVwUSuDcoeLXS6wh/ab8d55b51fbc0e2bc599a6f180ef6c99/Invision.svg" alt="" />
                <img src="https://images.ctfassets.net/lh3zuq09vnm2/7hhEfCdZPI7mPC24fFsC94/adf392604ef673a224307e48ac87bd96/Adobe.svg" alt="" />
                <img src="https://images.ctfassets.net/lh3zuq09vnm2/3A5yNJ7WfWikTXKsk7r4hh/4060c710bc560b59a0dd06b6521fbe94/Decathlon.svg" alt="" />
                <img src="https://images.ctfassets.net/lh3zuq09vnm2/7siImqwRupwoBHyJCaO1zy/2d7ec1ccc7761f76c8fe18de52e889a4/T-Mobile.svg" alt="" />
                <img src="https://images.ctfassets.net/lh3zuq09vnm2/7dsuPwH4V8KJvCexSZueZc/272b2ef619de8ae4b443758413a19733/Unbounce_Logo.svg" alt="" />
                <img src="https://images.ctfassets.net/lh3zuq09vnm2/7siImqwRupwoBHyJCaO1zy/2d7ec1ccc7761f76c8fe18de52e889a4/T-Mobile.svg" alt="" />
                <img src="https://images.ctfassets.net/lh3zuq09vnm2/5F3AqUH61Ll0Oa6eRQKyuT/7ea7e484e1e46495ed4fae2a1162a575/TechSmith.svg" alt="" />
                <img src="https://images.ctfassets.net/lh3zuq09vnm2/3A5yNJ7WfWikTXKsk7r4hh/4060c710bc560b59a0dd06b6521fbe94/Decathlon.svg" alt="" />
            </div>
            <div className={styles.head2}>
                <div>
                    <img src="https://images.ctfassets.net/lh3zuq09vnm2/6zxMbtJI8T43Ia7uHg49YB/32b9315a40b4f1363fb448bd0cab5534/icon-no-card.svg" alt="" />
                    <p>No credit card required</p>
                </div>
               <div>
                <img src="https://images.ctfassets.net/lh3zuq09vnm2/o8L9i7vSjKytR7aYfef7C/ead95db8958fa7ef66750e9ba4fea91e/icon-sign.svg" alt="" />
                    <p>56,549 users signed up last month</p>
               </div>
               <div>
                <img src="https://images.ctfassets.net/lh3zuq09vnm2/6lgSqbFdgGqSyLx3sGk18/e768204f0c3755e5dd816762a402ac24/icon-privacy.svg" alt="" />
                    <p>GDPR- & CCPA-ready</p>
               </div>
            </div>
            <div className={styles.head5}>
               <h1>How it works</h1>
               <p>Understand how users really experience your site.</p>
               <div>
                  <div>
                    <h3>Heatmaps</h3>
                    <p>Visualize user behaviour</p>
                    <p>Heatmaps Visually represents where users click, move and scroll on your site. With this context you'll learn how users really behave.</p>
                    <a href="hotjar.jsx">Learn more</a>
                  </div>
                  <div>
                    <h3>Recordings</h3>
                    <p>See what your users see</p>
                    <p>Give live playbacks of users on your site. Improve your site on-the-fly by watching on the full recordings of each visit. You can see things like clicks,mouse movements,u-turns and rage clicks.</p>
                    <a href="hotjar.jsx">Learn more</a>
                  </div>
                  <div>
                    <h3>Feedback</h3>
                    <p>Discover how uses feel</p>
                    <p>A real time suggestion box on your site where users express frustration or delights about individuals parts of a page. Get direct feedback in-the-wild across your site or product.</p>
                    <a href="hotjar.jsx">Learn more</a>
                  </div>
                  <div>
                    <h3>Surveys</h3>
                    <p>Hear from your users</p>
                    <p>Crate and use targeted surveys to get better understanding of your users. Send surveys to users in the moment(not weeks latter)to validate your idea in real time.</p>
                    <a href="hotjar.jsx">Learn more</a>
                  </div>
               </div>
            </div>
            <div className={styles.head6}>
                <div>
                  <h1>Learn how we keep end-user <br /> privacy at the heart of everything <br /> we do.</h1>
                  <img src="https://images.squarespace-cdn.com/content/v1/5d53c963985014000122d113/1567842892509-T9D0FARY1KOW46UCLD8Y/Jo_Odea_Logo_Compact_Colour_FINAL.png?format=1500w" alt="" />
                </div>
                <div>
                    <div>
                        <img src="https://images.ctfassets.net/lh3zuq09vnm2/5B8CskghnpgzwFXtm8Ugma/80bebef0f59d2b56882429ff1ab72942/Legal.svg" alt="" />
                        <h3>GDPR Commitment</h3><br /><br />
                        <a href="hotjar.jsx">Learn more</a><br /> <br />
                        <img src="https://images.ctfassets.net/lh3zuq09vnm2/5B8CskghnpgzwFXtm8Ugma/80bebef0f59d2b56882429ff1ab72942/Legal.svg" alt="" />
                        <h3>PCI Compliance</h3><br /><br />
                        <a href="hotjar.jsx">Learn more</a>
                    </div> 
                    <div>
                       <img src="https://images.ctfassets.net/lh3zuq09vnm2/5B8CskghnpgzwFXtm8Ugma/80bebef0f59d2b56882429ff1ab72942/Legal.svg" alt="" />
                        <h3>CCPA Commitment</h3><br /> <br />
                        <a href="hotjar.jsx">Learn more</a><br /> <br />
                        <img src="https://images.ctfassets.net/lh3zuq09vnm2/6lgSqbFdgGqSyLx3sGk18/e768204f0c3755e5dd816762a402ac24/icon-privacy.svg" alt="" />
                        <h3>Our approach to privacy</h3> <br /><br />
                        <a href="hotjar.jsx">Learn more</a>
                    </div>
                </div>
            </div>
            <div className={styles.head7}>
                <div>
                    <div>
                        <h2>Get Started with Hotjar</h2>
                        <p>It only takes a few minutes to get started with Hotjar. <br /> Understand your users—start free, today.</p>
                        <div>
                            <button>Tour the product</button>
                            <button>Get Started free</button>
                        </div>
                        <p>No credit card required</p>
                    </div>
                    <div>
                        <div>
                            <img src="https://images.ctfassets.net/lh3zuq09vnm2/3bfJrCwdekysmEeIxLraIu/085e9e50144c68cf4b4aafe4b00072ea/No-card.svg" alt="" />
                            <p>No Credit Card required</p>
                        </div>
                        <div>
                            <img src="https://images.ctfassets.net/lh3zuq09vnm2/4zSu6L7p7Py0u7Bj0gHnZf/48fe73c51f6f33412e4ad73a93598917/Sign.svg" alt="" />
                            <p>56,549 users signed up last month</p>
                        </div>
                        <div>
                            <img src="https://images.ctfassets.net/lh3zuq09vnm2/2iq5dA7MNtpSxc5eYuWi4n/99753fbe18bdb2193c49f87419439a7e/Privacy.svg" alt="" />
                            <p>GDPR- & CCPA-ready</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.head8}>
                <div>
                    <div>
                        <h2>Hey Products Managers</h2>
                        <p>See how people are experiencing your product, figure out the <br /> changes they need most, and get buy-in for your ideas. Fast.</p>
                        <button>Learn More</button>
                    </div>
                    <div>
                        <img src="https://i0.wp.com/www.brookings.edu/wp-content/uploads/2021/01/shutterstock_1855030147.jpg?w=1024&crop=0%2C53px%2C100%2C576px&ssl=1" alt="" />
                    </div>
                </div>
            </div>
            <div className={styles.head9}>
                <div>
                    <div>
                      <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aXQlMjBndXlzJTIwbWVldGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                    </div>
                    <div>
                    <h2>Hey Products designer</h2>
                        <p>Design products that resonate, with Hotjar’s help. Figure out <br /> what works, what doesn’t, and why.</p>
                        <button>Learn More</button>
                    </div>
                </div>
            </div>
            <div className={styles.head8}>
                <div>
                    <div>
                        <h2>Hello Researchers</h2>
                        <p>Map the user journey to spot patterns and trends. Develop a <br /> deeper understanding of your users with Hotjar.</p>
                        <button>Learn More</button>
                    </div>
                    <div>
                        <img src="https://images.unsplash.com/photo-1579389083175-247ef703006f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGl0JTIwZ3V5cyUyMG1lZXRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                    </div>
                </div>
            </div>
            <div className={styles.head7}>
                <div>
                    <div>
                        <h2>Get Started with Hotjar</h2>
                        <p>It only takes a few minutes to get started with Hotjar. <br /> Understand your users—start free, today.</p>
                        <div>
                            <button>Tour the product</button>
                            <button>Get Started free</button>
                        </div>
                        <p>No credit card required</p>
                    </div>
                    <div>
                        <img src="https://media.istockphoto.com/photos/diverse-employees-on-online-conference-video-call-on-tv-screen-in-picture-id1333390966?b=1&k=20&m=1333390966&s=170667a&w=0&h=YLSgqNjIJLo20KGhfFubDcfBt_qbj4OJIiwHgPg8jx8=" alt="" />
                    </div>
                </div>
            </div>
          </div>
        </div>
        </>
    )
}