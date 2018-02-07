<template>
  <v-card
    class="
      u-posRelative
      Gallery-item
      Gallery-item--small
      Gallery-item--leftSpace
    "
    @click.native="handleItemClick"
  >
     <v-card-media
       :src="image"
       height="100px"
     >
       <Checkbox
         class="Gallery-itemCheckbox"
         ref="checkbox"
        />
       <v-container fill-height fluid class="Gallery-itemCaption">
         <v-layout fill-height>
           <v-flex xs12 align-end flexbox class="u-textCenter">
             <span
                class="
                  white--text
                  u-posAbsoluteCenter
                  Gallery-itemCaptionText
                "
                v-text="name"
              />
           </v-flex>
         </v-layout>
       </v-container>
     </v-card-media>
   </v-card>
</template>

<script>
import Checkbox from '@/components/Checkbox';

export default {
  props: ['image', 'name'],
  components: {
    Checkbox,
  },
  methods: {
    handleItemClick() {
      this.$refs.checkbox.$el.click();
    },
  },
};
</script>

<style lang="stylus" scoped>
.Gallery-item
  cursor pointer
  margin-top 30px;
  &--small
    width 150px
    float left
    height 100px
  &--leftSpace:not(:last-child)
    margin-right 30px
  @media screen and (max-width: 375px) 
    margin-left 0
    width: 95%
    &--leftSpace:not(:last-child)
      margin-right 0

.Gallery-image
  &--full
    width 100%
    height 100%

.Gallery-itemName
  background-color rgba(94, 94, 94, 0.7)
  padding 4px
  line-height 16px
  &--fullWidth
    width 100%
  &--adjustBottom
    bottom 0

.Gallery-itemCheckbox
  position absolute
  top 5px
  left 5px
  transition all .05s ease

.Gallery-itemCheckbox:not(:checked)
  transform scale(0)

.Gallery-item:hover .Gallery-itemCheckbox
  transform scale(1)

.Gallery-itemCaption
  background-color rgba(94, 94, 94, 0.7)
  width 20px
  height 30px
  bottom 0
  position absolute
  width 100%

.Gallery-itemCaptionText
  line-height 14px
</style>
