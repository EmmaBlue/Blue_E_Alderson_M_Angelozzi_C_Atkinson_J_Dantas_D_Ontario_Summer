export default {
  template: `
    <section id="signup">
    <div class='bold-line'></div>
    <div class='container'>
      <div class='window'>
        <div class='overlay'></div>
        <div class='content'>
          <div class='welcome'>Hello There!</div>
          <div class='subtitle'>Sign up to our newsletter to get more information about what's happening in Ontario.</div>
          <form>
          <div class='input-fields'>
            <input v-model="input['first-name']" type='text' name="first-name" value="" placeholder='First Name' class='input-line full-width'></input>
            <input v-model="input['last-name']" type='text' name="last-name" value="" placeholder='Last Name' class='input-line full-width'></input>
            <input v-model="input.email" type='email' name="email" value="" placeholder='Email' class='input-line full-width'></input>
            <label id="country-label">Select Country... </label>
            <select v-model="input.countries" class='input-line dropdown full-width' name="countries">
              <option class="grey" name="">Select Country...</option>
              <option v-for="country in countries" :value="country.country_id">{{ country.country_name }}</option>
            </select>
            </div>
            <div id="button-container"><button @click.prevent="create_subscriber" type='submit' name='submit' class='ghost-round'>Create Account</button></div>
            </form>
            <h1 v-if="msg">Subscription Successful!</h1>
        </div>
      </div>
    </div>
  </section>
  `,
  data() {
    return {
      countries: [],
      input: {
        "first-name": "",
        "last-name": "",
        email: "",
        courntries: ""
      },
      msg: false
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
    create_subscriber() {
      this.msg = !this.msg;
      if (this.input["first-name"] !== "" && this.input["last-name"] !== "" && this.input.email !== "" && this.input.countries !== "") {
        // do afetch here and check creds on the back end
        // CREATE some form data to do a POST request
        let formData = new FormData();

        formData.append("first-name", this.input["first-name"]);
        formData.append("last-name", this.input["last-name"]);
        formData.append("email", this.input.email);
        formData.append("countries", this.input.countries);

        this.input["first-name"] = "";
        this.input["last-name"] = "";
        this.input.email = "";
        this.input.countries = "";
        
        let url = `./admin/sign-up.php`;
        fetch(url, {
          method: "POST",
          body: formData
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data == "Subscription Failed") {
              console.log("Authentication failed, try again");
            } else {
              // this.$emit("authenticated", true);
              // this.$router.replaceries({ name: "users" });
              console.log("Subscription created");
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      } else {
        console.log("Fields shouldn't be blank");
      }
    }
  },

  components: {}
};
