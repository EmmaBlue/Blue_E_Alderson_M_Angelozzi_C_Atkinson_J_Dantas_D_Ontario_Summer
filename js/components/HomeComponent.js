import HeaderComponent from "./layout/HeaderComponent";
import SignupComponent from "./layout/SignupComponent";
import FooterComponent from "./layout/FooterComponent";

export default {
  template: `
    <section>
      <HeaderComponent />
      <SignupComponent />
      <FooterComponent />
    </section>
  `,

  data() {
    return {};
  },

  methods: {},

  components: {
    HeaderComponent,
    SignupComponent,
    FooterComponent
  }
};
