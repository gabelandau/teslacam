import Vue from 'vue'
import Vuex from 'vuex'
import { processUploadedFiles } from '@/helpers/file-management'

Vue.use(Vuex)

const state = {
  events: null
}

const mutations = {
  setEvents (state, files) {
    state.events = processUploadedFiles(files)
  }
}

const getters = {
  events: state => state.events
}

export default new Vuex.Store({
  state,
  getters,
  mutations
})
