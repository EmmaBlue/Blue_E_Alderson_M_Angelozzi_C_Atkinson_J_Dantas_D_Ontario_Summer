import VideoComponent from "./VideoComponent.js";
export default {
  template: `
    <section id="mainHome">

        <section id="landingSect">
            <h2 class="hidden">Ontario Summer</h2>

            <div id="sectionbckgd">
              <img src="images/hero-bckgd-lg.jpg">
            </div>
            <div id="heroTitle">
              <!-- <p class="title-font">ONTARIO SUMMER</p> -->
              <img id="titleLogo" src="./images/logo-long.svg" alt="Ontario Summer Full Logo">
              <p class="tagline">Find yourself at home.</p>
            </div>
            <div id="img">
              <img src="images/hero-overlay.png">
            </div>
        </section>

        <section id="contentCon">

          <section id="mainDesc">
            <div id="descCon">
              <p class="title">YOU DESERVE TO HAVE IT ALL THIS SUMMER.</p>
              <p>Awe-inspiring views, deep relaxation, exceptional culture, and quality time with the ones you love most. That’s why Ontario is the perfect spot for your vacation.</p>
              <p>Explore the sights at Tobermory, watch the newest indie films at the Toronto Lightbox, canoe in Algonquin Park, and relax at a wine-tasting in Niagara on the Lake.</p>
              <p>This time, you won’t need to take a vacation from your vacation. Enjoy all there is to experience this summer, and </p>
              <p class="tagline">find yourself at home.</p>
            </div>
          </section>

          <VideoComponent />

          <div id="divider">
            <p>WHAT DO YOU WANT TO DO TODAY?</p>
          </div>

          <section id="picSect">
            <h2 class="hidden">Picture Gallery</h2>

              <section class="box">
                <h2 class="hidden">Picture</h2>

              </section>

              <section class="box">
                <h2 class="hidden">Picture</h2>

              </section>

              <section class="box">
                <h2 class="hidden">Picture</h2>

              </section>

              <section class="box">
                <h2 class="hidden">Picture</h2>

              </section>
          </section>
          
          <footer>
            <p>	&copy; Ontario Summer </p>
            <div id="socials">
              <i class="fab fa-facebook-square"></i>
              <i class="fab fa-instagram"></i>
              <i class="fab fa-snapchat-square"></i>
              <i class="fab fa-twitter-square"></i>
              <i class="fab fa-google-plus-square"></i>
              <i class="fab fa-youtube-square"></i>
            </div>
          </footer>

        </section>
      </section>
  `,

  data() {
    return {};
  },

  mounted: function () {
    //console.log("width: "+window.innerWidth);
    if (window.innerWidth > 849) {
      window.addEventListener('scroll', function () {

        console.log(window.scrollY);

        var image = document.querySelector("#img img");
        var bckgd = document.querySelector("#sectionbckgd img");
        var bckgdcon = document.querySelector("#sectionbckgd");


        var title = document.querySelector("#heroTitle");


        //get height of hero
        var heroheight = bckgdcon.offsetHeight;

        //get next section
        var maindesc = document.querySelector("#contentCon");
        var offsetmargin = heroheight + 120;

        maindesc.style.transform = "translateY(" + offsetmargin + "px)";

        if (window.scrollY < 25) {
          image.style.transform = "scale(1.0)";
          bckgd.style.transform = "scale(1.0)";
          bckgd.style.filter = "none";
          title.style.opacity = 0;

        } if (window.scrollY > 26) {
          image.style.transform = "scale(0.9)";
          bckgd.style.transform = "scale(1.2)";
          bckgd.style.filter = "blur(2px)";
          title.style.opacity = 1;

        } if (window.scrollY > 100) {

          bckgdcon.style.zIndex = "-1";
          maindesc.style.zIndex = "5";
        }
      });
    }

  },
  //using this.parallax did not work!
  methods: {},
  //using this.parallax did not work!


  components: {
    VideoComponent: VideoComponent
  }
};
