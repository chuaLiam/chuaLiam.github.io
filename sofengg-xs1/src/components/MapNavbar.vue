<template>
  <div>
    <v-layout v-if="!navCard">
      <v-flex class="text-xs-left">
        <Directions :directions="guide"/>
      </v-flex>
      <v-flex class="text-xs-right">
        <v-btn large fab color="green"
               @click="navCard = true"
               px-0>
          <v-icon class="primary">map</v-icon>
        </v-btn>
      </v-flex>
    </v-layout>

    <v-card v-else
            color="rgb(0, 255, 0, 0.2)">
      <v-layout>
        <v-container xs6 sm4>
          <v-layout>
            <v-flex class="text-xs-center" v-on:click="clickMethod1">
              <v-avatar size="100px" tile>
                <v-img :src="Image6">
                </v-img>
              </v-avatar>
            </v-flex>
            <v-flex class="text-xs-center" v-on:click="clickMethod2">
              <v-avatar size="100px" tile>
                <v-img :src="Image5"> </v-img>
              </v-avatar>
            </v-flex>
            <v-flex class="text-xs-center" v-on:click="clickMethod3">
              <v-avatar size="100px" tile>
                <v-img :src="Image4"> </v-img>
              </v-avatar>
            </v-flex>
            <v-flex class="text-xs-center" v-on:click="clickMethod4">
              <v-avatar size="100px" tile>
                <v-img :src="Image3"> </v-img>
              </v-avatar>
            </v-flex>
            <v-flex class="text-xs-center" v-on:click="clickMethod5">
              <v-avatar size="100px" tile>
                <v-img :src="Image2"> </v-img>
              </v-avatar>
            </v-flex>
            <v-flex class="text-xs-center" v-on:click="clickMethod6">
              <v-avatar size="100px" tile>
                <v-img :src="Image1"> </v-img>
              </v-avatar>
            </v-flex>
          </v-layout>
        </v-container>
        <v-flex class="text-xs-right">
          <v-btn fab flat color="primary"
                 @click="navCard = false">
            <v-icon class="primary">close</v-icon>
          </v-btn>
        </v-flex>
      </v-layout>
    </v-card>
  </div>
</template>

<script>
import Directions from '../components/Directions.vue'
export default {
  methods: {
    clickMethod1 () {
      window.location.href = this.location1
    },
    clickMethod2 () {
      window.location.href = this.location2
    },
    clickMethod3 () {
      window.location.href = this.location3
    },
    clickMethod4 () {
      window.location.href = this.location4
    },
    clickMethod5 () {
      window.location.href = this.location5
    },
    clickMethod6 () {
      window.location.href = this.location6
    }
  },
  components: { Directions },
  props: ['guide', 'Image1', 'Image2', 'Image3', 'Image4', 'Image5', 'Image6', 'location1', 'location2', 'location3', 'location4', 'location5', 'location6'],
  data () {
    return {
      navCard: false
    }
  }
}
</script>
