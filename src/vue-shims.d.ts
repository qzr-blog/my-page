
// declare module '*.vue' {
//   import Vue from 'vue'

//   export default Vue
// }

declare module 'vue/types/vue' {
  
  interface Vue {
    $axios: any
    $util: any
    $api: any
  }
  

}
export {}

