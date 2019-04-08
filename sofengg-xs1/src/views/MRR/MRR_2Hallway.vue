<template>
  <v-card>
    <v-img :src="require('@/assets/MRR/MRR_2HALLWAY1.png')">
      <MapNavbar :guide="'Directions for Canteen goes here'"
                 :Image1="require('@/assets/ONE_MISSION_PARK.png')"
                 :Image2="require('@/assets/MRR/CLINIC_ROOM.png')"
                 :Image3="require('@/assets/MRR/DLSUSTORE.png')"
                 :Image4="require('@/assets/MRR/ELAB_A.png')"
                 :Image5="require('@/assets/MRR/MRR_CANTEEN.png')"
                 :Image6="require('@/assets/MRR/STUDENTHUB.png')" />
      <v-layout>
        <v-flex class="text-xs-center">
          <Arrows_forward :link="'/MRR_2Hallway2'" />
        </v-flex>
      </v-layout>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /> <br /> <br /> <br />
      <v-layout xs4>
        <v-flex class="text-xs-right">
        </v-flex>
      </v-layout>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /> <br /> <br /> <br />
      <br /> <br /> <br /><br /> <br /> <br /> <br /> <br /><br /> <br /> <br />
      <v-layout>
        <v-flex class="text-xs-center">
          <Arrows_back :link="'/MRR_2Elevator'" />
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
