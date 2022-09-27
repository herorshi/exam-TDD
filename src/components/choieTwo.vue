<template>
  <div>
    <pre style="font-size: 20px">
      SELECT workschedule.EmployeeID,workschedule.WorkDate ,min(cardscan.Clock)
      as 'ClockIn', max(cardscan.Clock) as 'ClockOut' FROM `workschedule` LEFT
      JOIN cardscan ON (workschedule.EmployeeID = cardscan.EmployeeID) group by
      cardscan.EmployeeID;
    </pre>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  },
  methods: {},
  computed: {},
  watch: {},
  components: {}
};
</script>

<style></style>
