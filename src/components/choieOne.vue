<template>
  <div>
    <div class="pl-4" style="white-space: break-spaces">{{ str }}</div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      space: "",
      str: ""
    };
  },
  mounted() {
    this.sortString();
  },
  methods: {
    sortString() {
      let roundSpace = 0;
      for (var x = 1; x <= 9; x++) {
        this.str += this.space;
        for (var v = 1; v <= x; v++) {
          this.str += x.toString() + " ";
        }
        if (++roundSpace >= 3) {
          roundSpace = 0;
          this.space += "\t";
        }

        this.str += "\n";
      }
    }
  },
  computed: {},
  watch: {},
  components: {}
};
</script>

<style></style>
