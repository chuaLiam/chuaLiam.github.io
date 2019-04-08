import Vue from 'vue'
import Router from 'vue-router'
import GT_Building from './views/GT/GT_Building.vue'
import GT_BEntranceFar from './views/GT/GT_BEntranceFar.vue'
import GT_EntranceShuttle from './views/GT/GT_EntranceShuttle.vue'
import GT_EntranceWalkway from './views/GT/GT_EntranceWalkway.vue'
import GT_Exit from './views/GT/GT_Exit.vue'
import GT_Elevator from './views/GT/GT_Elevator.vue'
import GT_Studyspace from './views/GT/GT_Studyspace'
import GT_Funspace from './views/GT/GT_Funspace.vue'
import GT_Collabspace from './views/GT/GT_Collabspace.vue'
import GT_BHallway from './views/GT/GT_BHallway.vue'
import GT_Canteen from './views/GT/GT_Canteen.vue'
import GT_MPH from './views/GT/GT_MPH.vue'
import GT_BEntrance from './views/GT/GT_BEntrance.vue'
import GT_Stairs1 from './views/GT/GT_Stairs1.vue'
import GT_Stairs2 from './views/GT/GT_Stairs2.vue'
import GT_Stairs3 from './views/GT/GT_Stairs3.vue'
import GT_2Hallway from './views/GT/GT_2Hallway.vue'
import GT_3Hallway from './views/GT/GT_3Hallway.vue'
import GT_Classroom from './views/GT/GT_Classroom.vue'
import MRR_Building from './views/MRR/MRR_Building.vue'
import MRR_sideEntrance from './views/MRR/MRR_sideEntrance.vue'
import MRR_Walkpath3 from './views/MRR/MRR_Walkpath3.vue'
import MRR_Walkpath2 from './views/MRR/MRR_Walkpath2.vue'
import MRR_Walkpath1 from './views/MRR/MRR_Walkpath1.vue'
import MRR_Canteen from './views/MRR/MRR_Canteen.vue'
import MRR_BHallway1 from './views/MRR/MRR_BHallway1.vue'
import MRR_BHallway2 from './views/MRR/MRR_BHallway2.vue'
import MRR_BElevator from './views/MRR/MRR_BElevator.vue'
import MRR_2Elevator from './views/MRR/MRR_2Elevator.vue'
import MRR_2Hallway from './views/MRR/MRR_2Hallway.vue'
import MRR_dlsuStore from './views/MRR/MRR_dlsuStore.vue'
import MRR_Clinic from './views/MRR/MRR_Clinic.vue'
import MRR_clinicRoom from './views/MRR/MRR_clinicRoom.vue'
import MRR_Hub from './views/MRR/MRR_Hub.vue'
import MRR_3Elevator from './views/MRR/MRR_3Elevator.vue'
import MRR_ElabA from './views/MRR/MRR_ElabA.vue'
import oneMission from './views/oneMission.vue'
import oval from './views/oval.vue'
import MRR_BStairs from './views/MRR/MRR_BStairs.vue'
import MRR_2Hallway2 from './views/MRR/MRR_2Hallway2.vue'
import MRR_2Hallway3 from './views/MRR/MRR_2Hallway3.vue'
import MRR_2Hallway4 from './views/MRR/MRR_2Hallway4.vue'
import GT_Walkpath1 from './views/GT/GT_Walkpath1.vue'
import GT_Walkpath2 from './views/GT/GT_Walkpath2.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'GT_Building',
      component: GT_Building
    },
    {
      path: '/GT_Building',
      name: 'GT_Building',
      component: GT_Building
    },
    {
      path: '/GT_Canteen',
      name: 'GT_Canteen',
      component: GT_Canteen
    },
    {
      path: '/GT_BEntrance',
      name: 'GT_BEntrance',
      component: GT_BEntrance
    },
    {
      path: '/GT_EntranceShuttle',
      name: 'GT_EntranceShuttle',
      component: GT_EntranceShuttle
    },
    {
      path: '/GT_EntranceWalkway',
      name: 'GT_EntranceWalkway',
      component: GT_EntranceWalkway
    },
    {
      path: '/GT_BEntranceFar',
      name: 'GT_BEntranceFar',
      component: GT_BEntranceFar
    },
    {
      path: '/GT_Exit',
      name: 'GT_Exit',
      component: GT_Exit
    },
    {
      path: '/GT_Studyspace',
      name: 'GT_Studyspace',
      component: GT_Studyspace
    },
    {
      path: '/GT_Collabspace',
      name: 'GT_Collabspace',
      component: GT_Collabspace
    },
    {
      path: '/GT_Funspace',
      name: 'GT_Funspace',
      component: GT_Funspace
    },
    {
      path: '/GT_BHallway',
      name: 'GT_BHallway',
      component: GT_BHallway
    },
    {
      path: '/GT_Stairs1',
      name: 'GT_Stairs1',
      component: GT_Stairs1
    },
    {
      path: '/GT_Stairs2',
      name: 'GT_Stairs2',
      component: GT_Stairs2
    },
    {
      path: '/GT_Stairs3',
      name: 'GT_Stairs3',
      component: GT_Stairs3
    },
    {
      path: '/GT_Elevator',
      name: 'GT_Elevator',
      component: GT_Elevator
    },
    {
      path: '/GT_2Hallway',
      name: 'GT_2Hallway',
      component: GT_2Hallway
    },
    {
      path: '/GT_3Hallway',
      name: 'GT_3Hallway',
      component: GT_3Hallway
    },
    {
      path: '/GT_Classroom',
      name: 'GT_Classroom',
      component: GT_Classroom
    },
    {
      path: '/GT_MPH',
      name: 'GT_MPH',
      component: GT_MPH
    },
    {
      path: '/MRR_Building',
      name: 'MRR_Building',
      component: MRR_Building
    },
    {
      path: '/MRR_sideEntrance',
      name: 'MRR_sideEntrance',
      component: MRR_sideEntrance
    },
    {
      path: '/MRR_Walkpath3',
      name: 'MRR_Walkpath3',
      component: MRR_Walkpath3
    },
    {
      path: '/MRR_Walkpath2',
      name: 'MRR_Walkpath2',
      component: MRR_Walkpath2
    },
    {
      path: '/MRR_Walkpath1',
      name: 'MRR_Walkpath1',
      component: MRR_Walkpath1
    },
    {
      path: '/MRR_Canteen',
      name: 'MRR_Canteen',
      component: MRR_Canteen
    },
    {
      path: '/MRR_BHallway1',
      name: 'MRR_BHallway1',
      component: MRR_BHallway1
    },
    {
      path: '/MRR_BHallway2',
      name: 'MRR_BHallway2',
      component: MRR_BHallway2
    },
    {
      path: '/MRR_BElevator',
      name: 'MRR_BElevator',
      component: MRR_BElevator
    },
    {
      path: '/MRR_dlsuStore',
      name: 'MRR_dlsuStore',
      component: MRR_dlsuStore
    },
    {
      path: '/MRR_Clinic',
      name: 'MRR_Clinic',
      component: MRR_Clinic
    },
    {
      path: '/MRR_clinicRoom',
      name: 'MRR_clinicRoom',
      component: MRR_clinicRoom
    },
    {
      path: '/MRR_2Elevator',
      name: 'MRR_2Elevator',
      component: MRR_2Elevator
    },
    {
      path: '/MRR_Hub',
      name: 'MRR_Hub',
      component: MRR_Hub
    },
    {
      path: '/MRR_2Hallway',
      name: 'MRR_2Hallway',
      component: MRR_2Hallway
    },
    {
      path: '/MRR_3Elevator',
      name: 'MRR_3Elevator',
      component: MRR_3Elevator
    },
    {
      path: '/MRR_ElabA',
      name: 'MRR_ElabA',
      component: MRR_ElabA
    },
    {
      path: '/oneMission',
      name: 'oneMission',
      component: oneMission
    },
    {
      path: '/oval',
      name: 'oval',
      component: oval
    },
    {
      path: '/MRR_BStairs',
      name: 'MRR_BStairs',
      component: MRR_BStairs
    },
    {
      path: '/MRR_2Hallway2',
      name: 'MRR_2Hallway2',
      component: MRR_2Hallway2
    },
    {
      path: '/MRR_2Hallway3',
      name: 'MRR_2Hallway3',
      component: MRR_2Hallway3
    },
    {
      path: '/MRR_2Hallway4',
      name: 'MRR_2Hallway4',
      component: MRR_2Hallway4
    },
    {
      path: '/GT_Walkpath1',
      name: 'GT_Walkpath1',
      component: GT_Walkpath1
    },
    {
      path: '/GT_Walkpath2',
      name: 'GT_Walkpath2',
      component: GT_Walkpath2
    }
  ]
})
