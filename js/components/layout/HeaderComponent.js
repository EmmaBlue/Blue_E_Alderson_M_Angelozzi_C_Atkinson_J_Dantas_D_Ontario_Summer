import NavHeaderComponent from "./NavHeaderComponent";
export default {
  template: `
    <header>
      <navheadercomponent :navlist="navlist"></navheadercomponent>
    </header>
  `,

  data() {
    return {
      navlist: ["Destinations", "Media", "About", "Register"]
    };
  },

  methods: {
    viewMode() {
      var palette = "0";
      if (document.body.getAttribute("data-palette") === "0") {
        palette = "1";
      }

      document.body.setAttribute("data-palette", palette);
    }
  },

  components: {
    navheadercomponent: NavHeaderComponent
  }
};
