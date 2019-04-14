<template>
  <div id="app" class="ui container center aligned">
    <Logo/>
    <PageHeader :header="this.header" :subheader="this.subheader"/>
    <Weather/>
    <div id="background">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Logo from "./components/Logo";
import Weather from "./components/Weather";
import PageHeader from "./components/PageHeader";
import "./css/custom.css";

export default {
  name: "app",
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
          return "Jeśli ośmiornica głoduje, potrafi zjeść własną mackę.";
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
  components: {
    Logo,
    Weather,
    PageHeader
  }
};
</script>

<style>
</style>
