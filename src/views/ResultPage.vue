<template>
  <table class="table table-hover">
    <thead class=table-dark style="text-align: center">
      <tr>
        <th scope="col">Title</th>
        <th scope="col">Website</th>
      </tr>
    </thead>
    <tbody v-for="(article, index) in searchResult"
    :key="index++">
      <tr @click="handleWebPage(article.link)">
        <td>{{ article.title }}</td>
        <td>{{ article.displayLink }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapState, mapActions } from "pinia"
import { useCounterStore } from "../stores/counter"

export default {
  name: "ResultPage",
  computed: {
    ...mapState(useCounterStore, ["searchResult"])
  },
  methods: {
    ...mapActions(useCounterStore, ["displayWebPage"]),
    handleWebPage(link) {
      this.displayWebPage(link)
    }
  }
}
</script>

<style>
</style>