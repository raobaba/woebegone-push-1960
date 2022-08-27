import { useRef } from "react";
import styles from "../Components/Navbar.module.css"
export const Video = ()=> {
  const ref = useRef(null);
  return (
    <div className="App">
      <video className={styles.video} ref={ref} id="video-player" controls width="250">
        <source 
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm"
          type="video/webm"
        />
        <source
          src="https://interactive-examples.mdn.mozilla.net/medis/cc0-videos/flower.mp4"
          type="video/mp4"
        />
        <br />
      </video>

    </div>
  );
}
