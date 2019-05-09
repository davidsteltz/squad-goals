<template>
  <div>
    <div>
      <span>Local timer: {{time}}</span>
    </div>
    <div>
      <span>Global timer: {{globalTime}}</span>
    </div>
    <button v-on:click="toggle()">{{isRunning ? 'Stop' : 'Start'}}</button>
    <button v-on:click="restart()">Restart</button>
  </div>
</template>

<script>
import { Subject } from 'rxjs'
import { scan, filter, takeUntil } from 'rxjs/operators'
import TimerService, { GlobalTimer } from '../services/TimerService'

let timer$ = new TimerService()

export default {
  name: 'Timer',
  data () {
    return {
      isRunning: false,
      time: 0,
      globalTime: 0
    }
  },
  methods: {
    toggle: function () {
      this.isRunning = !this.isRunning
    },
    restart: function () {
      this.isRunning = false
      this.time = 0
      this.timerSub.unsubscribe()
      this.timerSub = timer$.$timer
        .pipe(
          filter(() => this.isRunning),
          scan((sum) => sum + 1, 0),
          takeUntil(this.destroyed$.asObservable()))
        .subscribe((v) => {
          this.time = v
        })
    }
  },
  created () {
    this.destroyed$ = new Subject()

    this.timerSub = timer$.$timer
      .pipe(
        filter(() => this.isRunning),
        scan((sum, cur) => sum + 1, 0),
        takeUntil(this.destroyed$.asObservable()))
      .subscribe((v) => {
        this.time = v
      })

    this.globalSub = GlobalTimer.$timer
      .pipe(
        scan((sum) => sum + 1),
        takeUntil(this.destroyed$.asObservable())
      )
      .subscribe((v) => {
        this.globalTime = v
      })
  },
  destroyed () {
    this.timerSub.unsubscribe()
    this.destroyed$.next()
    this.destroyed$.complete()
  }
}
</script>

<style scoped>

</style>
