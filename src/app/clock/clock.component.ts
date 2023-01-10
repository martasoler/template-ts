import { Component } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent {

  // Displayed dated
  date: any;
  hoursAdd: number = 0;
  minutesAdd: number = 0;
  
  // Intervals to display dinamically 
  interval: any 

  // Modes variables
  displayOptions : Boolean = false;
  modeCount : number = 0;
  ligthMode: Boolean = false;

  ngOnInit(){
     this.interval = setInterval(() => {
      const currentDate = new Date();
      this.date = currentDate.toLocaleTimeString();
    }, 1000);
  }

  onAdd():void{
    this.modeCount = this.modeCount + 1;
    if (this.modeCount == 1){
      this.hoursAdd  = this.hoursAdd + 1;
    } else if (this.modeCount == 2){
      this.minutesAdd  = this.minutesAdd + 1;
    } else {
      this.displayOptions = false;
      this.modeCount = 0;
    }

    clearInterval(this.interval);
    this.interval = setInterval(() => {
      const currentDate = new Date();
      currentDate.setHours(
        currentDate.getHours()+this.hoursAdd, 
        currentDate.getMinutes()+this.minutesAdd)
      this.date = currentDate.toLocaleTimeString();
    }, 1000);
  }

  onClickMode():void{
     if (this.modeCount == 0){
       this.displayOptions = true;
     }
   }

   onLight():void{
    this.ligthMode = !this.ligthMode;
  }

  onReset(): void{
    clearInterval(this.interval)
    this.interval = setInterval(() => {
      const currentDate = new Date();
      this.date = currentDate.toLocaleTimeString();
    }, 1000);

  }
}
