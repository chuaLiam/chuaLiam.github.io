<template>
  <v-card>
    <v-img :src="require('@/assets/OVAL.png')">
      <MapNavbar />
      <v-layout>
        <v-flex>
        </v-flex>
      </v-layout>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /> <br /> <br /> <br />
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /> <br /> <br /> <br />
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /> <br /> <br /> <br />
      <v-layout xs4>
        <v-flex></v-flex>
        <v-flex></v-flex>
        <v-flex></v-flex>
        <v-flex></v-flex>
        <v-flex></v-flex>
        <v-flex class="text-xs-center">
          <Arrows_back :link="'/MRR_Walkpath1'" />
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
    data () {
    return {
    }
  }
}
</script>
