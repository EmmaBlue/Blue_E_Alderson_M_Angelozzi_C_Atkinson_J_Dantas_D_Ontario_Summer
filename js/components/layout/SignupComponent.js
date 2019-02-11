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
          <form action="admin/signup.php" method="post">
          <div class='input-fields'>
            <input type='text' name="first-name" value="" placeholder='First Name' class='input-line full-width'></input>
            <input type='text' name="last-name" value="" placeholder='Last Name' class='input-line full-width'></input>
            <input type='email' name="email" value="" placeholder='Email' class='input-line full-width'></input>
            <input type='text' name="country" value=""placeholder='Country' class='input-line full-width'></input>
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
    return {};
  },

  methods: {},

  components: {}
};
