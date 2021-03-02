// create a Vue instance
let app = new Vue({
  // bind it to the #root div in the DOM
  el: "#root",
  // provide data for bindings
  data: {
    title: 'Brought to you by JavaScript',
    //This will bind the property className to the class of the h1 element.
// Now you can add a property called className to Vue in script.js:
    className: 'red',
    isLoading: true
  },
  //We are telling Vue that the if the button is clicked it should call the toggleLoading method. Let's add this method to Vue in script.js:
  methods: {
    toggleLoading() {
      this.isLoading = !this.isLoading;
    }
  }
});
