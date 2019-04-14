<template>
  <div>
    <Clock/>
    <h1 class="ui header" id="time"></h1>
    <router-link tag="button" class="ui massive primary button" id="btn" to="/action" exact>START</router-link>
  </div>
</template>

<script>
import Clock from "../components/Clock";

export default {
  components: {
    Clock
  }
};
</script>
<style lang="scss" >
</style>