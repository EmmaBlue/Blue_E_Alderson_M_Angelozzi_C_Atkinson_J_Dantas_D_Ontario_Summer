import HeaderComponent from "./layout/HeaderComponent.js";
import SignupComponent from "./layout/SignupComponent.js";
import FooterComponent from "./layout/FooterComponent.js";

export default {
  template: `
    <section>
      <HeaderComponent />
      <SignupComponent/>
      <FooterComponent />
    </section>
  `,

  data() {
    return {};
  },

  methods: {},

  components: {
    HeaderComponent: HeaderComponent,
    SignupComponent: SignupComponent,
    FooterComponent: FooterComponent
  }
};
