<template>
  <v-card>
    <v-img :src="require('@/assets/GT/GT_EXIT.png')">
      <MapNavbar :guide="'Directions for Canteen goes here'"
                 :Image1="require('@/assets/GT/CANTEEN.png')"
                 :Image2="require('@/assets/GT/STUDYSPACE.png')"
                 :Image3="require('@/assets/GT/COLLABSPACE.png')"
                :Image4="require('@/assets/OVAL.png')"
                 :Image5="require('@/assets/GT/CLASSROOM.png')"
                 :Image6="require('@/assets/GT/MPH.png')" />
      <v-layout>
        <v-flex class="text-xs-center">
          <Arrows_forward :link="'/GT_BHallway'" />
        </v-flex>
      </v-layout>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /> <br /> <br /> <br />
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /> <br /> <br /> <br />
      <br /> <br /> <br /><br /> <br /> <br /> <br />
      <v-layout>
        <v-flex class="text-xs-center">
          <Arrows_back :link="'/GT_Canteen'" />
        </v-flex>
      </v-layout>
    </v-img>
  </v-card>
</template>

<script>
import MapNavbar from '@/components/MapNavbar.vue'
import Arrows_back from '@/components/Arrows_back.vue'
import Arrows_forward from '@/components/Arrows_forward.vue'
import Arrows_right from '@/components/Arrows_right.vue'
import Arrows_left from '@/components/Arrows_left.vue'

export default {
    components: { MapNavbar, Arrows_back, Arrows_forward, Arrows_right, Arrows_left },
    data() {
      return {
      }
  }
}
</script>
