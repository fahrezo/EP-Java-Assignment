<template>
  <div class="d-flex flex-column p-3 text-white bg-dark" style="height: 100vh;">
    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      <span class="fs-4">Find Article</span>
    </a>
    <hr>
    <ul class="nav nav-pills flex-column mb-auto">
      <li data-bs-toggle="collapse" href=".politician"
      role="button" aria-expanded="false" aria-controls="local inter">Politicians</li>
        <ul>
          <li class="collapse politician" id="local">Local</li>
            <ul class="collapse politician" id="local">
              <li v-on:click="handleSearch('Anies+Baswedan')">Anies Baswedan</li>
              <li v-on:click="handleSearch('Prabowo+Subianto')">Prabowo Subianto</li>
              <li v-on:click="handleSearch('Ganjar+Pranowo')">Ganjar Pranowo</li>
            </ul>
          <li class="collapse politician" id="inter">International</li>
            <ul class="collapse politician" id="inter">
              <li v-on:click="handleSearch('Barack+Obama')">Barack Obama</li>
              <li v-on:click="handleSearch('Donald+Trump')">Donald Trump</li>
              <li v-on:click="handleSearch('Joe+Biden')">Joe Biden</li>
            </ul>
        </ul>
      <br>
      <li data-bs-toggle="collapse" href=".singer"
      role="button" aria-expanded="false" aria-controls="local inter">Singer</li>
        <ul>
          <li class="collapse singer" id="local">Local</li>
            <ul class="collapse singer" id="local">
              <li v-on:click="handleSearch('Chrisye')">Chrisye</li>
              <li v-on:click="handleSearch('Melly+Goeslaw')">Melly Goeslaw</li>
              <li v-on:click="handleSearch('Tulus')">Tulus</li>
            </ul>
          <li class="collapse singer" id="inter">International</li>
            <ul class="collapse singer" id="inter">
              <li v-on:click="handleSearch('Rihanna')">Rihanna</li>
              <li v-on:click="handleSearch('Ed+Sheeran')">Ed Sheeran</li>
              <li v-on:click="handleSearch('Bruno+Mars')">Bruno Mars</li>
            </ul>
        </ul>
      <br>  
      <li data-bs-toggle="collapse" href=".celebrities"
      role="button" aria-expanded="false" aria-controls="local inter">Celebrities</li>
        <ul>
          <li class="collapse celebrities" id="local">Local</li>
            <ul class="collapse celebrities" id="local">
              <li v-on:click="handleSearch('Iko+Uwais')">Iko Uwais</li>
              <li v-on:click="handleSearch('Reza+Rahardian')">Reza Rahardian</li>
              <li v-on:click="handleSearch('Joe+Taslim')">Joe Taslim</li>
            </ul>
          <li class="collapse celebrities" id="inter">International</li>
            <ul class="collapse celebrities" id="inter">
              <li v-on:click="handleSearch('Tom+Cruise')">Tom Cruise</li>
              <li v-on:click="handleSearch('Brad+Pitt')">Brad Pitt</li>
              <li v-on:click="handleSearch('Matt+Damon')">Matt Damon</li>
            </ul>
        </ul>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from "pinia"
import { useCounterStore } from "../stores/counter"

export default {
  name: 'CustomSidebar',
  methods: {
    ...mapActions(useCounterStore, ["search"]),
    handleSearch(name) {
      this.search(name)
    }
  }
}
</script>

<style>
li:hover {
  cursor: pointer;
}
</style>