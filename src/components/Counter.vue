<template>
  <div>
    <div>
      <span>Local count: {{count}}</span>
    </div>
    <div>
      <span>Global count: {{globalCount}}</span>
    </div>
    <button v-on:click="add('local')">Add (Local)</button>
    <button v-on:click="add('global')">Add (Global)</button>
    <button v-on:click="sub('local')">Subtract (Local)</button>
    <button v-on:click="sub('global')">Subtract (Global)</button>
    <button v-on:click="restart()">Reset (Local)</button>
  </div>
</template>

<script>
import CounterService, { GlobalCounter } from '../services/CounterService'

export default {
  name: 'Counter',
  data () {
    return {
      count: 0,
      globalCount: 0
    }
  },
  methods: {
    restart: function () {
      this.counterService.reset()
    },
    add: function (scope) {
      if (scope === 'global') return GlobalCounter.add()
      return this.counterService.add()
    },
    sub: function (scope) {
      if (scope === 'global') return GlobalCounter.subtract()
      return this.counterService.subtract()
    }
  },
  created () {
    this.counterService = new CounterService()

    this.counterSub = this.counterService.counter$
      .subscribe((v) => { this.count = v })

    this.globalSub = GlobalCounter.counter$
      .subscribe((v) => { this.globalCount = v })
  },
  destroyed () {
    this.counterSub.unsubscribe()
    this.globalSub.unsubscribe()
  }
}
</script>

<style scoped>

</style>
