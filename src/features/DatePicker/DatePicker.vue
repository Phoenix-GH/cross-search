<template>
   <v-layout row wrap v-if="active">
    <v-flex>
      <v-menu
        lazy
        :close-on-content-click="false"
        v-model="menu"
        transition="scale-transition"
        offset-y
        full-width
        :nudge-right="40"
        max-width="290px"
        min-width="290px"
      >
        <v-text-field
          class="picker-flex"
          slot="activator"
          v-model="date"
        ></v-text-field>
        <v-date-picker v-model="date" no-title scrollable actions>
          <template slot-scope="{ save, cancel }">
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn flat color="primary" @click="cancel">Cancel</v-btn>
              <v-btn flat color="primary" @click="save">OK</v-btn>
            </v-card-actions>
          </template>
        </v-date-picker>
      </v-menu>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    data: () => ({
      date: null,
      menu: false,
      modal: false,
      active: true,
    }),
    methods: {
      save() {
        this.$parent.$parent.filterDate(this.date, this.date);
      },
      cancel() {
        console.log('cancel');
      },
    },
  };

</script>

<style lang="stylus" scoped>
.picker-flex
  width 143px
</style>
