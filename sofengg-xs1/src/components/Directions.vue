<template>
  <v-dialog v-model="dialog"
            width="600">
    <template v-slot:activator="{ on }">
      <v-btn large fab color="green"
             v-on="on">
        <v-icon>directions</v-icon>
      </v-btn>
    </template>

    <v-flex class="text-xs-right">
      <v-card>
        <v-card-title class="headline green lighten-2"
                      width="500"
                      primary-title>
          Directions

          <v-spacer></v-spacer>

          <v-card-actions>
            <v-btn small fab flat color="primary"
                   @click="dialog = false">
              <v-icon>close</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card-title>
        <v-card-text class="text-xs-left">
          <template v-for="(direction, index) in directions">
            {{ direction }} <br />
          </template>
        </v-card-text>
        <v-divider></v-divider>
      </v-card>
      </v-flex>
  </v-dialog>
</template>

<script>
  export default {
  props: ['directions'],
  data () {
    return {
      dialog: false,
    }
  }
}
</script>
