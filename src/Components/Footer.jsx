import styles from "./Navbar.module.css";
export const Footer = ()=>{
    return (
        <>
        <div className={styles.container}>
             <div>
                <h3>Product</h3>
                <p>Product tour</p>
                <p>Heatmaps</p>
                <p>Session recordings</p>
                <p>Feedback</p>
                <p>Surveys</p> <hr />
                <p>Intigrations</p>
                <p>Survey templates</p>
                <p>Highlights</p>
                <p>Workspaces</p>
                <p>Dashboards</p>
                <p>Trends</p>
             </div>
             <div>
                <h3>Why Hotjar</h3>
                <p>For products teams</p>
                <p>For product managers</p>
                <p>For product designer</p>
                <p>For researchers</p>
                <p>Case studies</p>                
             </div>
             <div>
                <h3>Learn</h3>
                <p>Guides</p>
                <p>Blog</p>
                <p>Product forge</p>
                <p>Support</p>
                <p>Product management</p>
                <p>Product management grocery</p>
                <p>UX design</p>
                <p>Product experience insights</p>
                <p>Website tracking</p>
             </div>
             <div>
                <h3>Company</h3>
                <p>About us</p>
                <p>Careers</p>
                <p>Privacy</p>
                <p>Press</p>
             </div>
             <div>
                <h3>Compliance</h3>
                <p>Legal overview</p>
                <p>Compliance & security</p>
                <p>Terms of service</p>
                <p>Privacy policy</p>
                <p>Acceptable Use policy</p>
             </div>
            
        </div>
        <div className={styles.color}>
            <div className={styles.end}>
                <img src="https://images.ctfassets.net/lh3zuq09vnm2/2xYBSWqzEcgQBCSZvzi2Ba/4900f94996692c866f7bc6e8d270156d/Facebook.svg" alt="" />
                <img src="https://images.ctfassets.net/lh3zuq09vnm2/2gmz7xiNP3FbVtmkrX0yOk/22c37a7312bb87516b445506a15bd4ab/Twitter.svg" alt="" />
                <img src="https://images.ctfassets.net/lh3zuq09vnm2/1aJwui56wNjZwTTH9ZTGkk/4a8f3d1a644fb2614a86fce9582e8e09/LinkedIn.svg" alt="" />
                <img src="https://images.ctfassets.net/lh3zuq09vnm2/2nncGYpZv80x0X0bG857Cz/8d256f52107275c5437b8b826345fc9c/Youtube.svg" alt="" />
            </div> 
            <div className={styles.last}>
                <div>
                <img className={styles.img} src="https://yt3.ggpht.com/eH_MdhjC_DxpUtxBNXqb7fhhfKSa-nWiIQ1IqaRxD06nEbFiIRahQf5bUHE1WPpnfczXsvUdYA=s88-c-k-c0x00ffffff-no-rj" alt="" />
                <p>Copyright © 2014 - 2022 Hotjar Ltd. All rights reserved.</p>
                <p>English (United States)</p>
                <p>Cookie info </p>
                <p> Cookie settings</p>
                <p> Do not track</p>
                </div>
            </div>
        </div>
        </>
    )
}