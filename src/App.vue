<template>
  <div id="app">
    <label>Attr:</label> <input type="text" v-model="newAttr" />
    <button type="button" @click="setAttr(newAttr);">Update Attr</button>
    <pre>{{ attr }}</pre>

    <br />

    <label>AttrNewModule:</label>
    <input type="text" v-model="newAttrNewModule" />
    <button type="button" @click="setAttrNewModule(newAttrNewModule);">
      Update AttrNewModule
    </button>
    <pre>{{ attrNewModule }}</pre>

    <br />

    <label>AttrNewNamespacedModule:</label>
    <input type="text" v-model="newAttrNewNamespacedModule" />
    <button
      type="button"
      @click="setAttrNewNamespacedModule(newAttrNewNamespacedModule);"
    >
      Update AttrNewNamespacedModule
    </button>
    <pre>{{ attrNewNamespacedModule }}</pre>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

export default {
  name: "App",
  data,
  computed: {
    ...mapGetters(["attr", "attrNewModule"]),
    ...mapGetters("NewNamespacedModule", ["attrNewNamespacedModule"])
  },
  methods: {
    ...mapMutations(["setAttr", "setAttrNewModule"]),
    ...mapMutations("NewNamespacedModule", ["setAttrNewNamespacedModule"])
  }
};

function data() {
  return {
    newAttr: null,
    newAttrNewModule: null,
    newAttrNewNamespacedModule: null
  };
}
</script>
