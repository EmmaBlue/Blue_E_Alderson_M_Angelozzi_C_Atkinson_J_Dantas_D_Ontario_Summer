import NavHeaderComponent from "./NavHeaderComponent.js";
export default {
  template: `
    <header>
      <navheadercomponent :navlist="navlist"></navheadercomponent>
    </header>
  `,

  data() {
    return {
      navlist: ["Home", "Register"]
    };
  },

  methods: {
    viewMode() {
      var palette = "0";
      if (document.body.getAttribute("data-palette") === "0") {
        palette = "1";
      }

      document.body.setAttribute("data-palette", palette);
    },
  },

  components: {
    navheadercomponent: NavHeaderComponent
  }
};
