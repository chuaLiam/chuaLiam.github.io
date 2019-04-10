<template>
  <v-card>
    <v-img :src="require('@/assets/GT/GT_DORM_EJEEP.png')">
      <MapNavbar :guide="'Directions for Canteen goes here'"
                 :Image1="require('@/assets/GT/CANTEEN.png')"
                 :Image2="require('@/assets/GT/FUNSPACE.png')"
                 :Image3="require('@/assets/GT/COLLABSPACE.png')"
                 :Image4="require('@/assets/OVAL.png')"
                 :Image5="require('@/assets/GT/CLASSROOM.png')"
                 :Image6="require('@/assets/GT/MPH.png')"
                 :location1="'GT_MPH'"
                 :location2="'GT_Classroom'"
                 :location3="'oval'"
                 :location4="'GT_Collabspace'"
                 :location5="'GT_Funspace'"
                 :location6="'GT_Canteen'"/>
      <v-layout>
        <v-flex class="text-xs-center">
          <Arrows_forward :link="'/GT_EntranceShuttle'" />
        </v-flex>
      </v-layout>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /> <br /> <br /> <br />
      <v-layout xs4>
        <v-flex class="text-xs-left">
          <Arrows_left :link="'/Arthaland_Building'" />
        </v-flex>
        <v-flex class="text-xs-right">
          <Arrows_right :link="'/Arthaland_Room'" />
        </v-flex>
      </v-layout>
    </v-img>
  </v-card>
</template>

<script>
import MapNavbar from '@/components/MapNavbar.vue'
import Arrows_forward from '@/components/Arrows_forward.vue'
import Arrows_right from '@/components/Arrows_right.vue'
import Arrows_left from '@/components/Arrows_left.vue'

export default {
  components: { MapNavbar, Arrows_forward, Arrows_right, Arrows_left },
  data () {
    return {
    }
  }
}
</script>
