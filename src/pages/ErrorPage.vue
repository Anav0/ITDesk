<template>
  <fa-icon class="errorPage-icon" icon="sad-cry" size="2x"></fa-icon>
</template>

<script>
import { setTimeout } from "timers";
import settings from "./../settings.json";
export default {
  mounted: function() {
    setTimeout(() => {
      this.$router.push("/");
    }, settings.return_timeout);
  }
};
</script>

<style >
.errorPage-icon {
  padding-top: 45vh;
  color: white;
  font-size: 50rem;
}
</style>