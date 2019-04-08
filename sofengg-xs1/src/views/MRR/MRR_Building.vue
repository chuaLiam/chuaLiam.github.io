<template>
  <v-card>
    <v-img :src="require('@/assets/MRR/MRR_Building.png')">
      <MapNavbar :guide="'Directions for Canteen goes here'"
                 :Image1="require('@/assets/ONE_MISSION_PARK.png')"
                 :Image2="require('@/assets/MRR/CLINIC_ROOM.png')"
                 :Image3="require('@/assets/MRR/DLSUSTORE.png')"
                 :Image4="require('@/assets/MRR/ELAB_A.png')"
                 :Image5="require('@/assets/MRR/MRR_CANTEEN.png')"
                 :Image6="require('@/assets/MRR/STUDENTHUB.png')" />
      <br /> <br /> <br /> <br />
      <v-layout>
        <v-flex class="text-xs-center">
          <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
          <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
          <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
          <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
          <Arrows_left :link="'/MRR_sideEntrance'" />
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
