import Vue from "vue";
import Vuex from "vuex";
import VuexStoragePlugin from "./vuex-storage-plugin";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [
    new VuexStoragePlugin({
      prefix: "MeuApp",
      storage: sessionStorage,
      populate: [
        {
          key: "attr",
          mutation: "setAttr"
        },
        {
          key: "NewModule/attrNewModule",
          mutation: "setAttrNewModule"
        },
        {
          key: "NewNamespacedModule/attrNewNamespacedModule",
          mutation: "NewNamespacedModule/setAttrNewNamespacedModule"
        }
      ]
    })
  ],
  state: {
    attr: null
  },
  getters: {
    attr({ attr }) {
      return attr;
    }
  },
  mutations: {
    setAttr(state, attr) {
      state.attr = attr;
    }
  },
  modules: {
    NewModule: {
      state: {
        attrNewModule: null
      },
      getters: {
        attrNewModule({ attrNewModule }) {
          return attrNewModule;
        }
      },
      mutations: {
        setAttrNewModule(state, attr) {
          state.attrNewModule = attr;
        }
      }
    },
    NewNamespacedModule: {
      namespaced: true,
      state: {
        attrNewNamespacedModule: null
      },
      getters: {
        attrNewNamespacedModule({ attrNewNamespacedModule }) {
          return attrNewNamespacedModule;
        }
      },
      mutations: {
        setAttrNewNamespacedModule(state, attr) {
          state.attrNewNamespacedModule = attr;
        }
      }
    }
  }
});
