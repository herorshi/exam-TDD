<template>
  <div class="mt-16 d-flex justify-center">
    <div class="mx-auto">
      <div class="row">
        <div class="col-md-auto mt-2 text-md-right text-sm-left">Name</div>
        <div class="col-md-auto">
          <v-text-field
            v-model="nameFruit"
            hide-details
            hide-spin-buttons
            outlined
            dense
          ></v-text-field>
        </div>
      </div>
      <div class="row">
        <div class="col-md-auto mt-2 text-md-right text-sm-left">Photo</div>
        <div class="col-md col-sm-auto">
          <v-file-input
            full-width
            hide-details
            style=""
            accept="image/png, image/jpeg, image/bmp"
            @change="setFile()"
            prepend-icon="mdi-camera"
            v-model="image"
            outlined
            dense
          ></v-file-input>
        </div>
      </div>

      <div class="row">
        <div
          class="col-md-auto pb-0 text-right d-md-block d-sm-none"
          style="visibility: hidden"
        ></div>
        <div class="col-md-auto">
          <v-btn
            :disabled="nameFruit === '' || base64 === ''"
            @click="saveData"
            class="primary elevation-0 me-2"
            style="width: 93px"
            >save</v-btn
          >
          <v-btn @click="setCancel" class="elevation-0 me-2" style="width: 93px"
            >cancel</v-btn
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      nameFruit: "",
      image: {},
      base64: ""
    };
  },
  methods: {
    getBase64(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsBinaryString(file);
        reader.onload = (function () {
          return function (e) {
            resolve(window.btoa(e.target.result));
          };
        })(file);
        reader.onerror = (error) => reject(error);
      });
    },

    async setFile() {
      if (this.image !== undefined) {
        let file = this.image;
        let bs = await this.getBase64(file).then((value) => {
          return "data:image/png;base64," + value;
        });
        this.base64 = bs;
      }
    },
    saveData() {
      this.$emit("save", this.nameFruit, this.base64);
      this.nameFruit = "";
      this.image = null;
      this.base64 = "";
    },
    setCancel() {
      this.nameFruit = "";
      this.image = "";
      this.base64 = "";
      this.$emit("cancel", false);
    }
  }
};
</script>

<style></style>
