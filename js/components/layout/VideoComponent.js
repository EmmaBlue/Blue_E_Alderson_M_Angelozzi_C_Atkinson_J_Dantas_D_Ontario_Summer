
export default {
  template: `
  <section id="videoSect">
  <div class="fullscreen-vid-wrap">
  <video id="vid" autoplay muted loop>
  
  </video>
  </div>
  </section>
  `,

  data() {
    return {

    }
  },
  mounted: function () {
    this.showVideo();
  },
  methods: {
    showVideo() {
      var vid = document.querySelector('#vid');
      console.log(vid);
      // create source video element according to screen size
      if (window.matchMedia("(max-width: 700px)").matches) {
        this.videoSource(vid, "video/Hackathon_Rough.mp4", "video/mp4");

      } else if (window.matchMedia("(max-width: 999px)").matches) {
        this.videoSource(vid, "video/Hackathon_Rough.mp4", "video/mp4");

      } else if (window.matchMedia("(min-width: 1000px)").matches) {
        this.videoSource(vid, "video/Hackathon_Rough.mp4", "video/mp4");

      }
    },
    videoSource(element, src, type) {
      var source = document.createElement("source");

      source.src = src;
      source.type = type;

      element.appendChild(source);
    }
  }
}