export default {
  props: ["navlist"],
  template: `
         <div id="mainHeader">
          <h2 class="hidden">Hamburger Navigation</h2>
          <!-- Hamburger Navigation -->
          <div class="navigation">
            <input type="checkbox" class="navigation__checkbox" id="navi-toggle" />
            <label for="navi-toggle" class="navigation__button">
              <span class="navigation__icon">&nbsp;</span>
            </label>
            <div class="navigation__background">&nbsp;</div>
            <nav class="navigation__nav">
              <h3 class="hidden">Main Navigation</h3>
              <ul class="navigation__list">
                <li class="navigation__item" v-for="item in navlist">
                        <router-link :to="item" class="navigation__link">{{ item }}</router-link>
                </li>
                <ul id="social">
                  <li>
                            <a href="http://www.twitter.com" target="_blank" id="tw"
                              ><i class="fab fa-twitter"></i
                            ></a>
                          </li>
                  <li>
                            <a href="http://www.instagram.com" target="_blank" id="pt"
                              ><i class="fab fa-instagram"></i
                            ></a>
                          </li>
                  <li>
                            <a href="http://www.facebook.com" target="_blank" id="fb"
                              ><i class="fab fa-facebook-square"></i
                            ></a>
                          </li>
                </ul>
                </li>
              </ul>
            </nav>
          </div>
          <img id="headerLogo" src="./images/logo-short.svg" alt="Ontario Summer Logo">

        </div>
    `
};
