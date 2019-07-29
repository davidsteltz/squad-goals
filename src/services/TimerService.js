import { interval } from 'rxjs';

class TimerService {
  constructor () {
    this.$timer = interval(100);
  }
}

const GlobalTimer = new TimerService();

export default TimerService;
export { GlobalTimer };
