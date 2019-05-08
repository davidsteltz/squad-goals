import { BehaviorSubject } from 'rxjs'
import { take } from 'rxjs/operators'

class CounterService {
  constructor () {
    this._subject = new BehaviorSubject(0)
    this.counter$ = this._subject.asObservable()
  }

  add (n = 1) {
    this.counter$.pipe(take(1))
      .subscribe(value => this._subject.next(value + n))
  }

  subtract (n = 1) {
    this.counter$.pipe(take(1))
      .subscribe(value => this._subject.next(value - n))
  }

  reset () {
    this._subject.next(0)
  }
}

const GlobalCounter = new CounterService()

export default CounterService
export { GlobalCounter }
