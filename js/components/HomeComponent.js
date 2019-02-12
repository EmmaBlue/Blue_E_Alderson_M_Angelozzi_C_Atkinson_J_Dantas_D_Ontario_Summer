import HeaderComponent from "./layout/HeaderComponent.js";
import ContentComponent from "./layout/ContentComponent.js";
import FooterComponent from "./layout/FooterComponent.js";

export default {
  template: `
    <section>
      <HeaderComponent />
      <ContentComponent />
    </section>
  `,

  data() {
    return {};
  },

  methods: {},

  components: {
    HeaderComponent: HeaderComponent,
    ContentComponent: ContentComponent,
    FooterComponent: FooterComponent
  }
};
