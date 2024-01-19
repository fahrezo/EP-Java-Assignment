import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from "axios"

export const useCounterStore = defineStore('counter', {
  state() {
    return {
      showResultPage: false,
      showWebPage: false,
      searchResult: [],
      pageUrl: ""
    }
  },
  actions: {
    async search(name) {
      try {
        const {data} = await axios({
          method: 'GET',
          url: `https://www.googleapis.com/customsearch/v1?key=AIzaSyC_DNaRIFX7MLab4O0PIW_oLvn-zLCMDIY&cx=72e2379bcd1e54052&q=${name}`
        })
        console.log(data.items)
        this.searchResult = data.items
        this.showResultPage = true
      } catch (error) {
        console.log(error)
      }
    },
    async displayWebPage(link) {
      try {
        console.log(link)
        this.pageUrl = link
        this.showWebPage = true
      } catch (error) {
        console.log(error)
      }
    },
  }
})
