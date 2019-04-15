<template>
  <div id="app" class="ui container center aligned">
    <Logo/>
    <PageHeader :header="this.header" :subheader="this.subheader"/>
    <Weather/>
    <div v-if="$route.name==='FrontPage'">
      <div id="background">
        <router-view></router-view>
      </div>
    </div>
    <div v-if="$route.name!=='FrontPage'">
      <div id="background_2">
      <router-view></router-view>
    </div>
    </div>
  </div>
</template>

<script>
import Logo from "./components/Logo";
import Weather from "./components/Weather";
import PageHeader from "./components/PageHeader";
import "./css/custom.css";
import "./css/semantic.css";
import axios from "axios";

export default {
  name: "app",
  data: () => {
    return {
      fact: ""
    };
  },
  created: function() {
    this.displayFunFact().then(fact => {
      this.fact = fact;
    });
  },
  computed: {
    header() {
      switch (this.$route.fullPath) {
        case "/":
          return "Czy wiesz, że?";
        case "/error":
          return "Niestety nie udało się rozpoznać twojej twarzy";
        case "/success":
          return "Miłego dnia w pracy :)";
        case "/action":
          return "Cześć Krzysiu!";
        default:
          return "Twoja ścieżka jest inwalidą";
      }
    },
    subheader() {
      switch (this.$route.fullPath) {
        case "/":
          return this.fact;
          break;
        case "/error":
          return "Ponowna próba nastąpi za 3s";
        case "/success":
          return "Powrót do ekranu startowego za 3s";
        case "/action":
          return "Co robisz?";
        default:
          return ":c :c :c :c";
      }
    }
  },
  methods: {
    displayFunFact(callback) {
      let url = `https://my.api.mockaroo.com/fun_fact.json?key=${
        process.env.VUE_APP_MOCKAROO_API_KEY
      }`;
      return axios
        .get(url)
        .then(data => {
          return data.data.fact;
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  components: {
    Logo,
    Weather,
    PageHeader
  }
};
</script>

<style>
</style>
