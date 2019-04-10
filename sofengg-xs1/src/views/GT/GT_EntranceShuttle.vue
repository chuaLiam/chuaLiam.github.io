<template>
  <v-card>
    <v-img :src="require('@/assets/GT/GT_SHUTTLE_DROP_OFF.png')">
      <MapNavbar :guide="['-This is where you will get dropped off if you take the On-Campus Shuttle at the MRR East Canopy.','-From the exit of the GT Building, you can find this at the right side of the building.',]"
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
                 :location6="'GT_Canteen'" />
      <v-layout>
        <v-flex class="text-xs-center">
          <Arrows_forward :link="'/MRR_sideEntrance'" />
        </v-flex>
      </v-layout>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /> <br /> <br /> <br />
      <v-layout xs4>
        <v-flex class="text-xs-right">
          <Arrows_right :link="'/Arthaland_Entrance'" />
        </v-flex>
      </v-layout>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /> <br /> <br /> <br />
      <br /> <br /> <br /><br /> <br /> <br /> <br />
      <v-layout>
        <v-flex class="text-xs-center">
          <Arrows_back :link="'/GT_EntranceWalkway'" />
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

export default {
  components: { MapNavbar, Arrows_back, Arrows_forward, Arrows_right },
  data () {
    return {
    }
  }
}
</script>
