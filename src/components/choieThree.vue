<template>
  <div class="container">
    <v-snackbar v-model="snackbar" top :timeout="timeout" color="success">
      {{ message }}

      <template v-slot:action="{ attrs }">
        <v-btn color="white" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
    <div v-if="statusInsert === false">
      <div class="d-flex justify-end">
        <span class="text-right">
          <v-btn @click="statusInsert = true" class="success elevation-0 my-2"
            >เพิ่มผลไม้</v-btn
          >
          <div>
            <v-text-field
              @input="searchData"
              v-model="search"
              outlined
              dense
              label="Search here"
            ></v-text-field>
          </div>
        </span>
      </div>

      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left" width="300">Name</th>
              <th class="text-left">Photo</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in store" :key="item.name">
              <td>{{ item.name }}</td>
              <td>
                <img
                  :src="item.image"
                  width="200"
                  height="100"
                  style="object-fit: cover"
                />
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </div>
    <addFrouite v-else @cancel="clear" @save="save"></addFrouite>
  </div>
</template>

<script>
import addFrouite from "@/components/addFruit.vue";
export default {
  name: "App",
  data() {
    return {
      store: [],
      storeOld: [],
      search: "",
      statusInsert: false,
      message: "",
      snackbar: false,
      timeout: 2000
    };
  },
  methods: {
    clear(value) {
      this.statusInsert = value;
    },
    save(name, photo) {
      this.store.push({
        name: name,
        nameSearch: name.toLowerCase(),
        image: photo
      });
      this.storeOld = this.store;
      this.message = "บันทึกข้อมูลสำเร็จ";
      this.snackbar = true;
    },
    searchData() {
      this.store = this.storeOld.filter((value) =>
        value.nameSearch.includes(this.search.toLowerCase())
      );
    }
  },
  computed: {},
  watch: {},
  components: { addFrouite }
};
</script>

<style>
.v-text-field--box .v-input__slot,
.v-text-field--outline .v-input__slot {
  min-height: 35px !important;
}
</style>
