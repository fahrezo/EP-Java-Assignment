<template>
  <div class="container">
    <iframe
      id="inlineFrameExample"
      title="Inline Frame Example"
      width="100%"
      height="100%"
      :src="pageUrl">
</iframe>
  </div>
</template>

<script>
import { mapState } from "pinia"
import { useCounterStore } from "../stores/counter"

export default {
  name: "WebPage",
  computed: {
    ...mapState(useCounterStore, ["pageUrl"])
  }
}
</script>

<style>
</style>