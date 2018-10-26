<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>
      <amazon /><apple /><facebook />
      <p>Disclaimer: These logos have nothing to do with Vue JS.</p>
    </h3>
  </div>
</template>

<script>
import Amazon from '@fortawesome/fontawesome-free/sprites/brands.svg?amazon';
import Apple from '@fortawesome/fontawesome-free/sprites/brands.svg?apple';
import Facebook from '@fortawesome/fontawesome-free/sprites/brands.svg?facebook';
export default {
  name: 'HelloWorld',
  components: {
    Amazon,
    Apple,
    Facebook
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
svg {
  width: 50px;
  margin: 20px;
}
</style>
