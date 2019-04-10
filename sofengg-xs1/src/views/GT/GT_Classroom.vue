<template>
  <v-card>
    <v-img :src="require('@/assets/GT/CLASSROOM.png')">
      <MapNavbar :guide="['-Most of the classes are held in the classrooms at the 2nd Floor of the GT Building.']"
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
        </v-flex>
      </v-layout>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /> <br /> <br /> <br />
      <v-layout xs4>
        <v-flex class="text-xs-left">
          <Arrows_left :link="'/GT_2Hallway'" />
        </v-flex>
      </v-layout>
    </v-img>
  </v-card>
</template>

<script>
import MapNavbar from '@/components/MapNavbar.vue'
import Arrows_left from '@/components/Arrows_left.vue'

export default {
  components: { MapNavbar, Arrows_left },
  data () {
    return {
    }
  }
}
</script>
