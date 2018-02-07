<template>
  <div class="SearchResultItem">
    <h2 class="SearchResultItem-title">{{item.titleName}}</h2>
    <v-layout row wrap>
      <v-flex xs12 lg2 sm6>
        <div class="SearchResultItem-badge">{{item.badge}}</div>
      </v-flex>
      <v-flex xs12 lg2 sm6>
        <div>
          <span class="text--light">Author:</span>
          <span class="text--dark">{{item.author}}</span>
        </div>
      </v-flex>
      <v-flex xs12 lg2 sm6>
        <div>
          <span class="text--light">Source:</span>
          <span class="text--dark">{{item.url}}</span>
        </div>
      </v-flex>
      <v-flex xs12 lg2 sm6>
        <div>
          <span class="text--light">Date:</span>
          <span class="text--dark">{{item.publishDate}}</span>
        </div>
      </v-flex>
    </v-layout>
    <p class="SearchResultItem-description" v-html="item.excerpt"></p>
  </div>
</template>

<script>
export default {
  props: ['item'],
};
</script>

<style>
.SearchResultItem {
  margin-top: 30px;
}
.SearchResultItem-title {
	width: auto;
	height: 16px;
  font-family: 'Open Sans', sans-serif;
	font-size: 18px;
	line-height: 0.89;
	text-align: left;
	color: #b01e21;
}
.SearchResultItem-description {
  width: 90%;
  font-family: 'Open Sans', sans-serif;
	font-size: 14px;
	text-align: left;
	color: #5e5e5e;
  margin-top: 12px;
}
.SearchResultItem-info {
  display: flex;
  flex-direction: row;
}

.SearchResultItem-badge {
  display: inline-block;
  padding: 0px 12px;
	border-radius: 10px;
	border: solid 1px #aabccd;
  font-family: 'Open Sans', sans-serif;
	font-size: 11px;
	font-weight: bold;
	text-align: left;
	color: #aabccd;
}
.text--light {
  color: #909090;
}
.text--dark {
  color: #5e5e5e;
  word-wrap: break-word;
}
.hl {
  background-color: #ffff00;
  padding: 1px 4px;
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  border-radius: 6px;
}
</style>
