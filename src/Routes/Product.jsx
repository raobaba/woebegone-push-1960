import styles from "../Components/Navbar.module.css";
import {ProductVideo} from "./ProductVideo.jsx"
export const Product = ()=>{
    return(
        <>
        <div className={styles.product}>
             <p>Product/Tour</p>
             <h1>See Hotjar In Action</h1>
             <h2>Experience Hotjar for yourself with our interactive live demo, <br /> click around, and try all key features first-hand.</h2>
             <button>Explore a live demo</button>
         <div className={styles.head3}>
             <div>
             <ProductVideo  />
             </div>
             <div>
                <div>
                    <h2>Here's how it works</h2>
                    <p>Hotjar is an intuitive, visual way to discover, consolidate, <br /> and communicate user needs.</p>
                    <div>
                       <div className={styles.simple}>
                             <img src="https://images.ctfassets.net/lh3zuq09vnm2/3fvft31gR35Q9BjAxVk4Zw/9f93e529be4989f97d5743844699cf2a/icon-heatmaps.svg" alt="" />
                            <h3>Visualize user behaviour</h3>
                       </div>
                       <div className={styles.simple}>
                       <p>Heatmaps visually represent where users click, move, and scroll on your site. With this context, you'll learn how users really behave. Learn more</p>
                       </div>
                    </div>
                    <div>
                        <div className={styles.simple}>
                            <img src="https://images.ctfassets.net/lh3zuq09vnm2/76fQfkmWFtHn8xYHEbbzA0/f17539a8253616c98a87062824619972/icon-recordings.svg" alt="" />
                            <h3>See what users see</h3>
                        </div>
                        <div className={styles.simple}>
                            <img src="https://images.ctfassets.net/lh3zuq09vnm2/6hX51iaEPtQHWldsN5Fy3Y/3a66ea3c6ba95bad60f90d9c31113980/icon-incoming-feedback.svg" alt="" />
                            <h3>Get feedback with context</h3>
                        </div>
                        <div className={styles.simple}>
                             <img src="https://images.ctfassets.net/lh3zuq09vnm2/5sO4egYUhUh5eBDtoPB4RS/3102e823999e1e700e876eef2fcb83af/icon-surveys.svg" alt="" />
                             <h3>Hear from your users</h3>
                        </div>
                    </div>

                </div>
             </div>
          </div>
          <div className={styles.product1}>
            <h2>You know what users do on your site. But do you know <br /> why?</h2>
            <p>With the combined power of Hotjar's intuitive tools and features you can find out.</p>
              <div>
                 <div>
                    <img src="https://images.ctfassets.net/lh3zuq09vnm2/5vLZfGCny6darJ0oStPSC1/81057e5dc7a56060e3f904c3f98e3605/Highlights.svg" alt="" />
                 </div>
                 <div>
                    <h2>Extract and share the most <br />  meaningful parts of your insights</h2>
                    <p>Cut out snippets of your recordings and heatmaps and save them into special collections that you can easily share and analyze with your team. </p>
                    <button>Explore Highlights</button>
                 </div>
              </div>
          </div>
          <div className={styles.product2}>
            <div>
                <div>
                    <h2>Focus on the insights that matter <br /> to you and your team</h2>
                    <p>Trim down the hours you spend digging around for insights and focus on what matters the most. Create a dedicated workspace for your team, a specific project, or a particular part of the user journey. </p>
                    <button>Explore Workspaces</button>
                </div>
                <div>
                    <img src="https://images.ctfassets.net/lh3zuq09vnm2/4zl7pDAzlSNS45JESh0dXd/ebf4954db7e3e6e826379eb28672c1e7/Workspaces.svg" alt="" />
                </div>
            </div>
          </div>
          <div className={styles.product1}>
              <div>
                 <div>
                    <img src="https://images.ctfassets.net/lh3zuq09vnm2/160DEhN9Y7lSNIufUDDLBo/1914b38ae6395d3525f7a5cfd1e5827d/Dashboards.svg" alt="" />
                 </div>
                 <div>
                    <h2>Stay on top of your user metrics</h2>
                    <p>Get a high-level view of user data and spot issues before they become serious, identify trends, and find deeper insights with your Dashboard.</p>
                    <button>Explore Dashboard</button>
                 </div>
              </div>
          </div>
          <div className={styles.product2}>
            <div>
                <div>
                    <h2>Save time and effort. Integrate <br /> Hotjar with dozens of tools</h2>
                    <p>Connect Hotjar with thousands of popular apps, so you can automate your work and have more time for what matters most—no code required.</p>
                    <button>Explore Integration</button>
                </div>
                <div>
                    <img src="https://images.ctfassets.net/lh3zuq09vnm2/3EfpQ2s8SAHkzd6hyKTdVq/fb35a52c2035d6a14312cbe6a4e54a00/Integrations.svg" alt="" />
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
          <div className={styles.product3}>
             <h1>Here are six reasons why 900,000 sites use Hotjar</h1>
             <div>
                <div className={styles.small}>
                    <img src="https://images.ctfassets.net/lh3zuq09vnm2/4VTnrBBlDTLfnlzUNgyoIW/a41f6ffeb8cf966488c9936e814e98a9/check-icon.svg" alt="" /> <br />
                    <h3>Unlimited team members</h3> <br /> 
                    <p>We have no user limits on any plan. Invite all your team and clients at no added cost!</p> <br /> <br />
                    <img src="https://images.ctfassets.net/lh3zuq09vnm2/4VTnrBBlDTLfnlzUNgyoIW/a41f6ffeb8cf966488c9936e814e98a9/check-icon.svg" alt="" /> <br /> 
                    <h3>Smarter visitor targeting</h3> <br /> 
                    <p>Target visitors by URL, device, and User Attributes.</p> <br /> 
                </div> 
                <div className={styles.small}>
                    <img src="https://images.ctfassets.net/lh3zuq09vnm2/4VTnrBBlDTLfnlzUNgyoIW/a41f6ffeb8cf966488c9936e814e98a9/check-icon.svg" alt="" /> <br />
                    <h3>Multi-device support</h3> <br />
                    <p>All our features support desktop, mobile, and tablet versions of your website.</p> <br /> <br />
                    <img src="https://images.ctfassets.net/lh3zuq09vnm2/4VTnrBBlDTLfnlzUNgyoIW/a41f6ffeb8cf966488c9936e814e98a9/check-icon.svg" alt="" /> <br />
                    <h3>Export and share</h3> <br />
                    <p>Share your Hotjar insights with a simple link.</p> <br />
                </div>
                <div className={styles.small}>
                    <img src="https://images.ctfassets.net/lh3zuq09vnm2/4VTnrBBlDTLfnlzUNgyoIW/a41f6ffeb8cf966488c9936e814e98a9/check-icon.svg" alt="" /> <br />
                    <h3>Easy installation</h3> <br />
                    <p>Plug-ins to get you set up in seconds, or dig deeper with the aid of a developer.</p> <br /> <br />
                    <img src="https://images.ctfassets.net/lh3zuq09vnm2/4VTnrBBlDTLfnlzUNgyoIW/a41f6ffeb8cf966488c9936e814e98a9/check-icon.svg" alt="" /> <br />
                    <h3>Reliable customer support</h3> <br />
                    <p>Got a question? We'll get back to you within two working days.</p> <br />
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
                        <img src="https://www.hotjar.com/_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2Flh3zuq09vnm2%2Fj59ad49ppbPT1SHWve9NY%2Fe5db6ad129b489101ace1d77f622b3a0%2Fuser-red.jpg&w=1920&q=75" alt="" />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}