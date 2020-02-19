import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    step1: {
      nama: '',
      lastname: '',
      jabatan: '',
      nip: '',
      phone: '',
      wa: '',
      wilayah: '',
      email: ''
    },
    step2: {
      image: ''
    },
    step3: {
      "id": "",
      "rfId": "",
      "email": "",
      "nip": "",
      "idPendaftaran": null,
      "name": "",
      "lastName": "",
      "address": "",
      "city": "",
      "phone": "",
      "phoneMessage": "",
      "level": null,
      "priority": null,
      "picture": "",
      "totalTime": null,
      "createdDate": "",
      "updateDate": ""
    }
  },
  mutations: {
    setStep1 (state, data) {
      state.step1 = data;
    },
    setStep2 (state, data) {
      state.step2 = data;
    },
    setStep3 (state, data) {
      state.step3 = data.data;
    }
  },
  actions: {}
});
