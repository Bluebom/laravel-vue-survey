import {createStore} from "vuex";
import axiosClient from "../axios";

const tmpSurveys = [
  {
    id: 100,
    title: "The CodeHolic Youtube Chanel",
    slug: "codeholic-youtube-chanel",
    status: "draft",
    image: "https://images.pexels.com/photos/10998586/pexels-photo-10998586.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    description: "My name is Franklin. <br> I am a Laravel developer at PBSoft.",
    created_at: "2022-12-20 18:00:00",
    updated_at: "2022-12-20 18:00:00",
    expire_at: "2022-12-31 18:00:00",
    questions: [
      {
        id: 1,
        type: "select",
        question: "From wich country are you ?",
        description: null,
        data: {
          options: [
            { uuid: "5e1bd9e6-9dbc-11ec-b909-0242ac120002", text: "USA" },
            { uuid: "8fe4d22a-9dbc-11ec-b909-0242ac120002", text: "Georgia" },
            { uuid: "9f3b4c9a-9dbc-11ec-b909-0242ac120002", text: "Germany" },
            { uuid: "aa56b8c6-9dbc-11ec-b909-0242ac120002", text: "India" },
            { uuid: "be6e6d5f-cd09-4030-8b17-a174c39417c3", text: "UK" },
          ],
        }
      },
      {
        id: 2,
        type: "checkbox",
        question: "From wich country are you ?",
        description: null,
        data: {
          options: [
            { uuid: "23ffd20f-5ccb-4796-90e9-6b8b80a853f1", text: "USA" },
            { uuid: "c57b985e-9dbe-11ec-b909-0242ac120002", text: "Georgia" },
            { uuid: "cb84fed4-9dbe-11ec-b909-0242ac120002", text: "Germany" },
            { uuid: "652a8520-c549-4b4b-a2ab-dcce20467a10", text: "India" },
            { uuid: "4e53e4e3-4778-4464-9ac1-45a2fee3b212", text: "UK" },
          ],
        }
      },
      {
        id: 3,
        type: "checkbox",
        question: "From wich country are you ?",
        description: null,
        data: {
          options: [
            { uuid: "2f30e142-5c0d-4f62-8c49-c63c77c88f6e", text: "USA" },
            { uuid: "8e877e92-e7c9-4e53-8052-f4731fba1712", text: "Georgia" },
            { uuid: "f20b30aa-9dbe-11ec-b909-0242ac120002", text: "Germany" },
            { uuid: "e53b491e-9dbe-11ec-b909-0242ac120002", text: "India" },
            { uuid: "dc7f592d-3e1a-49d6-81a4-37fd1b60be6d", text: "UK" },
          ],
        }
      },
      {
        id: 4,
        type: "radio",
        question: "From wich country are you ?",
        description: null,
        data: {
          options: [
            { uuid: "fe338f44-9dbe-11ec-b909-0242ac120002", text: "USA" },
            { uuid: "16a2a74c-88b1-40b2-9371-d0c0f42b5c2e", text: "Georgia" },
            { uuid: "7dbefbf3-b653-4d40-ad18-72b0f4fb5d0b", text: "Germany" },
            { uuid: "0d6bd8cc-9dbf-11ec-b909-0242ac120002", text: "India" },
            { uuid: "d68bca49-22dc-47c0-a83b-1125e0b9d3be", text: "UK" },
          ],
        }
      },
      {
        id: 5,
        type: "checkbox",
        question: "From wich country are you ?",
        description: null,
        data: {
          options: [
            { uuid: "5e1bd9e6-9dbc-11ec-b909-0242ac120002", text: "USA" },
            { uuid: "8fe4d22a-9dbc-11ec-b909-0242ac120002", text: "Georgia" },
            { uuid: "9f3b4c9a-9dbc-11ec-b909-0242ac120002", text: "Germany" },
            { uuid: "aa56b8c6-9dbc-11ec-b909-0242ac120002", text: "India" },
            { uuid: "be6e6d5f-cd09-4030-8b17-a174c39417c3", text: "UK" },
          ],
        }
      },
      {
        id: 6,
        type: "text",
        question: "From wich country are you ?",
        description: null,
        data: {}
      },
      {
        id: 7,
        type: "textarea",
        question: "From wich country are you ?",
        description: null,
        data: {}
      }
    ],
  },
  {
    id: 200,
    title: "Laravel 8",
    slug: "laravel-8",
    status: "active",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/800px-Laravel.svg.png",
    description: `Laravel is a web application framework with expressive, elegant syntax. We've ...`,
    created_at: "2022-12-20 18:00:00",
    updated_at: "2022-12-20 18:00:00",
    expire_at: "2022-12-31 18:00:00",
    questions: [],
  },
  {
    id: 300,
    title: "Vue 3",
    slug: "vue-3",
    status: "active",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/800px-Laravel.svg.png",
    description: `Laravel is a web application framework with expressive, elegant syntax. We've ...`,
    created_at: "2022-12-20 18:00:00",
    updated_at: "2022-12-20 18:00:00",
    expire_at: "2022-12-31 18:00:00",
    questions: [],
  },
  {
    id: 400,
    title: "Tailwind 3",
    slug: "tailwind-3",
    status: "active",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/800px-Laravel.svg.png",
    description: `Laravel is a web application framework with expressive, elegant syntax. We've ...`,
    created_at: "2022-12-20 18:00:00",
    updated_at: "2022-12-20 18:00:00",
    expire_at: "2022-12-31 18:00:00",
    questions: [],
  }
];

const store = createStore({
  state:{
      user:{
          data:{},
          token: sessionStorage.getItem('TOKEN'),
      },
      surveys: [...tmpSurveys],
  },
  getters:{},
  actions:{
    register({commit}, user){
      return axiosClient.post('/register',user)
          .then(({data}) => {
            commit('setUser', data);
            return data;
          });
    },
    login({commit}, user){
      return axiosClient.post('/login',user)
          .then(({data}) => {
            commit('setUser', data);
            return data;
          });
    },
    logout({commit}) {
      return axiosClient.post('/logout')
        .then(response => {
          commit('logout');
          return response;
        })
    },
  },
  mutations:{
    logout: (state) => {
      state.user.data = {};
      state.user.token = null;
      sessionStorage.clear();
    },
    setUser: (state, userData) => {
      state.user.token = userData.token;
      state.user.data = userData.user;
      sessionStorage.setItem('TOKEN',userData.token);
    } 
  },
  modules:{},  
})

export default store;