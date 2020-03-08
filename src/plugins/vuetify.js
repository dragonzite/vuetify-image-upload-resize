import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

// const colors = new Colors().default
// const opts = {
//   customVariables: ['~/assets/variables.scss'],
//   theme: {
//     dark: true,
//     themes: {
//       dark: {
//         primary: colors.blue.darken2,
//         accent: colors.grey.darken3,
//         secondary: colors.amber.darken3,
//         info: colors.teal.lighten1,
//         warning: colors.amber.base,
//         error: colors.deepOrange.accent4,
//         success: colors.green.accent3,
//       },
//     },
//   },
// }

export default new Vuetify({
  customVariables: ['~/assets/variables.scss'],
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: '#1976d2',
        accent: '#424242',
        secondary: '#ff8f00',
        info: '#26A69A',
        warning: '#FFC107',
        error: '#FF3D00',
        success: '#00E676',
      },
    },
  },
})
