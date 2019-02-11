export default {
  template: `
    <section id="signup">
    <div class='bold-line'></div>
    <div class='container'>
      <div class='window'>
        <div class='overlay'></div>
        <div class='content'>
          <div class='welcome'>Hello There!</div>
          <div class='subtitle'>Get Info about Summer in Ontario.</div>
          <form action="admin/sign-up.php" method="post">
          <div class='input-fields'>
            <input type='text' name="first-name" value="" placeholder='First Name' class='input-line full-width'></input>
            <input type='text' name="last-name" value="" placeholder='Last Name' class='input-line full-width'></input>
            <input type='email' name="email" value="" placeholder='Email' class='input-line full-width'></input>
            <select class='input-line full-width' name="countries">
              <option name="">Select Country...</option>
              <option v-for="country in countries" :value="country.country_id">{{ country.country_name }}</option>
            </select>
            </div>
            <div class='spacing'>or continue with <span class='highlight'>Facebook</span></div>
            <div><button type='submit' name='submit' class='ghost-round full-width'>Create Account</button></div>
            </form>
        </div>
      </div>
    </div>
  </section>
  `,
  data() {
    return {
      countries : [],
    };
  },

  created: function () {
    this.fetchCountries();
  },

  methods: {
    fetchCountries() {
      let url = "./admin/scripts/countries.php";
      console.log(url);

      fetch(url) // pass in the one or many query
        .then(res => res.json())
        .then(data => {
          console.log(data);
          this.countries = data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },

  },

  components: {}
};
