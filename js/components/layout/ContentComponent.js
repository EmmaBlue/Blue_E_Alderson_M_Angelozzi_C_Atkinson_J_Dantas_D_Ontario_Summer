
export default {
  template: `
    <section id="mainHome">

        <section id="landingSect">
            <h2 class="hidden">Ontario Summer</h2>

            <div id="sectionbckgd">
              <img src="images/hero-bckgd-lg.jpg">
            </div>
            <div id="img">
              <img src="images/hero-overlay.png">
            </div>
        </section>

        <section id="contentCon">

          <section id="mainDesc">
              <h2>Ontario Summer</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </section>

          <section id="videoSect"></section>
            <h2 class="hidden">Ontario Summer Video</h2>

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

        </section>
      </section>
  `,

data() {
  return {};
},

mounted: function(){
  window.addEventListener('scroll', function(){
    console.log(window.scrollY);

    var image = document.querySelector("#img img");
    var bckgd = document.querySelector("#sectionbckgd img");
    var bckgdcon = document.querySelector("#sectionbckgd");

    //get height of hero
    var heroheight = bckgdcon.offsetHeight;

    //get next section
    var maindesc = document.querySelector("#contentCon");
    var offsetmargin = heroheight + 120;
    //console.log(offsetmargin);
    maindesc.style.transform = "translateY("+offsetmargin+"px)";
    //maindesc.style.marginTop = offsetmargin+"px";

    if (window.scrollY < 25){
      image.style.transform = "scale(1.0)";
      //bckgd.style.width = "120%";
      bckgd.style.transform = "scale(1.0)";
      bckgd.style.filter = "none";

    }if (window.scrollY > 26){
      image.style.transform = "scale(0.9)";
      //bckgd.style.width = "110%";
      bckgd.style.transform = "scale(1.2)";
      bckgd.style.filter = "blur(2px)";

    }if(window.scrollY > 100){
      bckgdcon.style.zIndex = "-1";
      maindesc.style.zIndex = "5";
    }
  });
},
//using this.parallax did not work!
methods: {
  parallax(){
    var pos = 0;
    var image = document.querySelector("#img img");
    // var bckgd = document.querySelector("#section1");
    var bckgd = document.querySelector("#sectionbckgd img");

    if (window.scrollY < 25){// && window.scrollY < 50){
      pos = 100;
      image.style.transform = "scale(1.0)";
      // bckgd.style.backgroundSize = "120%";
      bckgd.style.width = "120%";
      bckgd.style.filter = "none";
    }if (window.scrollY > 26){// && window.scrollY < 75){
      image.style.transform = "scale(0.9)";
      //bckgd.style.backgroundSize = "110%";
      bckgd.style.width = "110%";
      bckgd.style.filter = "blur(2px)";
    }
  }
},

components: {}
};
