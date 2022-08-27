import { useRef } from "react";
import styles from "../Components/Navbar.module.css"
export const ProductVideo = ()=> {
  const ref = useRef(null);
  return (
    <div className="App">
      <video className={styles.video} ref={ref} id="video-player" controls width="250">
        <source 
          src="https://videos.ctfassets.net/lh3zuq09vnm2/2q1Ma50UnBKlnPbbRReO2j/f50946203d4a6bb26285a80a7275e571/heatmap-scrolling.mp4"
          type="video/webm"
        />
        <br />
      </video>

    </div>
  );
}
