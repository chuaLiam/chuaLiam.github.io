<template>
  <v-card>
    <v-img :src="require('@/assets/MRR/CLINIC_ROOM.png')">
      <MapNavbar :guide="['-It is located at the first floor of MRR Building.','-Upon arrival at the East Canopy of MRR Building, proceed to the left hallway. The Clinic is the room at the leftmost side of the hallway.']"
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
      <v-layout>
        <v-flex class="text-xs-center">
        </v-flex>
      </v-layout>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /> <br /> <br /> <br />
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /> <br /> <br /> <br />
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /> <br /> <br /> <br />
      <br />
      <v-layout xs4>
        <v-flex class="text-xs-center">
          <Arrows_back :link="'/MRR_Clinic'" />
        </v-flex>
      </v-layout>
    </v-img>
  </v-card>
</template>

<script>
import MapNavbar from '@/components/MapNavbar.vue'
import Arrows_back from '@/components/Arrows_back.vue'

export default {
  components: { MapNavbar, Arrows_back },
  data () {
    return {
    }
  }
}
</script>
