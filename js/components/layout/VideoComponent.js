
export default {
  template: `
  <section id="videoSect">
  <div class="fullscreen-vid-wrap">
  <video id="vid" autoplay muted loop>

  </video>
  <div class="controls">
          <ul>
            <li class="rewindToStart">
                  <i @click="rWindVid" class="fas fa-fast-backward"></i>
                </li>
            <li class="play-pause">
                  <i @click="togglePlay" class="fas fa-pause"></i>
                </li>
            <li><input type="range" id="clipBar" value="0"></li>
            <li>
                  <p id="clipTiming">0:00 / 0:00</p>
                </li>
            <li id="muteBtn"><i @click="volOn" class="fas fa-volume-up"></i></li>
            <li><i @click="volOff" class="fas fa-volume-mute"></i></li>
            
          </ul>

        </div>
  </div>
  </section>
  `,

  data() {
    return {
      vid: ""
    }
  },
  mounted: function () {
    this.vid = document.querySelector('#vid');
    this.showVideo();
  },
  methods: {

    showVideo() {
      var vid = document.querySelector('#vid');

      // create source video element according to screen size
      if (window.matchMedia("(max-width: 700px)").matches) {
        this.videoSource(vid, "video/Hackathon_Mobile.mp4", "video/mp4");

      } else if (window.matchMedia("(max-width: 999px)").matches) {
        this.videoSource(vid, "video/Hackathon_Desktop.mp4", "video/mp4");

      } else if (window.matchMedia("(min-width: 1000px)").matches) {
        this.videoSource(vid, "video/Hackathon_Desktop.mp4", "video/mp4");

      }
    },


    // UPDATE VOLUME ON volume bar
    changeVolume() {
      vid.volume = volumeBar.value;
    },
    videoSource(element, src, type) {
      var source = document.createElement("source");

      source.src = src;
      source.type = type;

      element.appendChild(source);
    }
  }
}
