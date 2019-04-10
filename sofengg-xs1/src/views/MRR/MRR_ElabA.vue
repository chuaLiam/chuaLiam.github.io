<template>
  <v-card>
    <v-img :src="require('@/assets/MRR/ELAB_A.png')">
      <MapNavbar :guide="['-It is located at the fourth floor of MRR Building.','-Upon arrival at the fourth floor of the building, via stairs or elevator (located at the right side of the stairs), ELab A is the room right infront of the elevator. It is beside ELab B']"
                 :Image1="require('@/assets/ONE_MISSION_PARK.png')"
                 :Image2="require('@/assets/MRR/CLINIC_ROOM.png')"
                 :Image3="require('@/assets/MRR/DLSUSTORE.png')"
                 :Image4="require('@/assets/MRR/ELAB_A.png')"
                 :Image5="require('@/assets/MRR/MRR_CANTEEN.png')"
                 :Image6="require('@/assets/MRR/STUDENTHUB.png')"
                 :location1="'MRR_Hub'"
                 :location2="'MRR_Canteen'"
                 :location3="'MRR_ElabA'"
                 :location4="'MRR_dlsuStore'"
                 :location5="'MRR_clinicRoom'"
                 :location6="'oneMission'" />
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <br /><br /><br />
      <v-layout xs4>
        <v-flex></v-flex>
        <v-flex></v-flex>
        <v-flex></v-flex>
        <v-flex></v-flex>
        <v-flex class="text-xs-center">
          <Arrows_forward :link="'/MRR_3Elevator'" />
        </v-flex>
      </v-layout>
    </v-img>
  </v-card>
</template>

<script>
import MapNavbar from '@/components/MapNavbar.vue'
import Arrows_forward from '@/components/Arrows_forward.vue'

export default {
  components: { MapNavbar, Arrows_forward },
  data () {
    return {
    }
  }
}
</script>
