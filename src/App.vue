<template>
  <div class="container-fluid" style="background-image: linear-gradient(to right, #4e63d7 0%, #76bfe9 100%)">
    <div class="row">
      <div class="col-3">
        <CustomSidebar/>
      </div>
      <div class="col-9">
        <div class="row" style="height: 50%; background-color: rgba(255, 255, 255, 0.407);">
          <ResultPage v-if="showResultPage"/>
        </div>
        <div class="row" style="height: 50%; background-color: rgba(255, 255, 255, 0.407);">
          <WebPage v-if="showWebPage"/>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import { mapState } from 'pinia';
import CustomSidebar from './components/CustomSidebar.vue';
import ResultPage from './views/ResultPage.vue';
import WebPage from './views/WebPage.vue';
import { useCounterStore } from './stores/counter';

export default {
  name: 'App',
  computed: {
    ...mapState(useCounterStore, ["showResultPage","showWebPage"])
  },
  components: {
    CustomSidebar,
    ResultPage,
    WebPage
  }
}
</script>

<style>
</style>
