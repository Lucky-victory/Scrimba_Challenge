class AnalogClock {
  constructor(container) {
    this.container = document.querySelector(container);
    this.container.innerHTML=`          <div class="hour-elem" id="hour">
            <div class="hour-hand"></div>
          </div>
          <div class="minute-elem" id="minute">
            <div class="minute-hand"></div>
          </div>
          <div class="seconds-elem" id="seconds">
            <div class="seconds-hand"></div>
          </div>
        </div>
`
    this.hourElem = this.container.querySelector('#hour');
    this.minuteElem = this.container.querySelector('#minute');
    this.secondsElem = this.container.querySelector('#seconds');
    this.clockInterval = null;
    this.intervalTime = 1000;
    this.step = 6;
    this.init();
    
    
  }
  init() {

    const TIME = new Date();
    const HOURS = TIME.getHours();
    const MINUTES = TIME.getMinutes();
    const SECONDS = TIME.getSeconds();
    this.hourElem.style.transform = `rotateZ(${((HOURS/12)*15)}deg)`;
    this.minuteElem.style.transform = `rotateZ(${(MINUTES * this.step)}deg)`;
    this.secondsElem.style.transform = `rotateZ(${(SECONDS * this.step)}deg)`;
  }
  start(){
       this.clockInterval = setInterval(() => {
      this.init()
    }, this.intervalTime)
  }
  stop() {
    clearInterval(this.clockInterval)
  }
}
const Clock=new AnalogClock('#clock-container');
Clock.start()
document.body.addEventListener('click',()=>{
  Clock.stop();
  
});
document.body.addEventListener('dblclick',()=>{
  Clock.start();
  
});