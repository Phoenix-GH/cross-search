<template>
  <v-layout row wrap class="searchbar-row">
    <v-flex xs6 sm5  @click.stop>
      <ExpandButton />
    </v-flex>
    <v-flex xs6 sm6 v-if="specifiedDate"> 
      <DatePicker />
    </v-flex>
    <v-flex xs12 sm12>
      <List>
        <Row>
          <Item
            name="All years"
          />
        </Row>

        <Row>
          <Item
            name="Last 24 hours"
          />
          <Item
            name="Exact date"
          />
          <Item
            name="Date range"
          />
        </Row>

        <Row>
          <Item
            name="Last week"
          />
          <Item
            name="Last 2 weeks"
          />
        </Row>

        <Row>
          <Item
            name="Last month"
          />
          <Item
            name="Last 2 months"
          />
          <Item
            name="Last 3 months"
          />
          <Item
            name="Last 6 months"
          />
        </Row>

        <Row>
          <Item
            name="Last year"
          />
          <Item
            name="Last 2 years"
          />
        </Row>
      </List>
    </v-flex>
    <v-dialog  
      persistent
      full-width
      max-width="863px"
      v-model="specifiedRange">
      <v-card>
        <v-card-text>
          <v-layout row wrap>
           <v-flex xs6 sm6>
             <div
              class="SearchResultOptions-checkboxWrapper"
             >
              <Radio
                name="Date Range"
                inputName="dateSelector"
                v-model="rangeType"
                value="range"
              />
            </div>
          </v-flex>
          <v-flex xs6 sm6>
            <v-dialog
              persistent
              v-model="fromModal"
              full-width
              max-width="290px"
            >
              <v-text-field
                slot="activator"
                label="From"
                v-model="startDate"
              ></v-text-field>
              <v-date-picker v-model="startDate" scrollable>
                <template slot-scope="{ save, cancel }">
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn flat color="primary" @click="cancel">Cancel</v-btn>
                    <v-btn flat color="primary" @click="save">OK</v-btn>
                  </v-card-actions>
                </template>
              </v-date-picker>
            </v-dialog>

            <v-dialog
              persistent
              v-model="toModal"
              full-width
              max-width="290px"
            >
              <v-text-field
                slot="activator"
                label="To"
                v-model="endDate"
              ></v-text-field>
              <v-date-picker v-model="endDate" scrollable>
                <template slot-scope="{ save, cancel }">
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn flat color="primary" @click="cancel">Cancel</v-btn>
                    <v-btn flat color="primary" @click="save">OK</v-btn>
                  </v-card-actions>
                </template>
              </v-date-picker>
            </v-dialog>
          </v-flex>
          </v-layout>
           {{rangeType}}
          </v-card-text>
        <v-card-actions>
          <v-btn center color="primary" flat @click.stop="closeDialog">OK</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
import moment from 'moment';
import DatePicker from '@/features/DatePicker';
import Radio from '@/components/Radio';
import ExpandButton from './ExpandButton';
import List from './List';
import Row from './Row';
import Item from './Item';

export default {
  components: {
    ExpandButton,
    List,
    Row,
    Item,
    DatePicker,
    Radio,
  },
  data() {
    return {
      isOpen: false,
      selected: 'All years',
      specifiedDate: false,
      specifiedRange: false,
      startDate: null,
      endDate: null,
      menu: false,
      fromModal: false,
      toModal: false,
      exactModal: false,
      rangeType: '',
    };
  },
  mounted() {
    document.body.addEventListener('click', () => {
      if (this.isOpen) {
        this.toggleVisibility();
      }
    });
  },
  methods: {
    toggleVisibility() {
      this.isOpen = !this.isOpen;
    },
    save() {
    },
    closeDialog() {
      this.specifiedRange = false;
      this.$parent.$parent.filterDate(this.startDate, this.endDate);
    },
    filterByDate(dateSpecified) {
      const today = new Date();
      this.startDate = moment(today).format('YYYY-MM-DD');
      this.endDate = this.startDate;
      if (dateSpecified === 'Last 24 hours') {
        this.startDate = moment(today).add(-1, 'days').format('YYYY-MM-DD');
      } else if (dateSpecified === 'Last week') {
        this.startDate = moment(today).add(-1, 'weeks').format('YYYY-MM-DD');
      } else if (dateSpecified === 'Last 2 weeks') {
        this.startDate = moment(today).add(-2, 'weeks').format('YYYY-MM-DD');
      } else if (dateSpecified === 'Last month') {
        this.startDate = moment(today).add(-1, 'months').format('YYYY-MM-DD');
      } else if (dateSpecified === 'Last 2 months') {
        this.startDate = moment(today).add(-2, 'months').format('YYYY-MM-DD');
      } else if (dateSpecified === 'Last 3 months') {
        this.startDate = moment(today).add(-3, 'months').format('YYYY-MM-DD');
      } else if (dateSpecified === 'Last 6 months') {
        this.startDate = moment(today).add(-6, 'months').format('YYYY-MM-DD');
      } else if (dateSpecified === 'Last year') {
        this.startDate = moment(today).add(-1, 'years').format('YYYY-MM-DD');
      } else if (dateSpecified === 'Last year') {
        this.startDate = moment(today).add(-1, 'years').format('YYYY-MM-DD');
      } else if (dateSpecified === 'Last 2 years') {
        this.startDate = moment(today).add(-2, 'years').format('YYYY-MM-DD');
      }
      this.$parent.$parent.filterDate(this.startDate, this.endDate);
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '../../styles/color-palette'
.searchbar-row
  @media screen and (min-width: 600px)
    height 64px

</style>

