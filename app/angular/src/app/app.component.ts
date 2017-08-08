import { Component, OnInit, NgZone } from '@angular/core';

@Component({
  selector: 'playbus-app',
  templateUrl: `./templates/app.component.html`,
})
export class AppComponent implements OnInit  {
  
  show: boolean = false;
  width: number = window.innerWidth;
  //height: number = 0;
  leftMargin: string = '0px';

  // Used to monitor the window size to display sidebar
  constructor(private ngZone: NgZone) {}

  toggle(): void {
    this.show = !this.show;
  }

  ngOnInit(): void {
    window.onresize = (e) =>
    {
      this.ngZone.run(() => {
        this.width = window.innerWidth;
        //this.height = window.innerHeight;
      });
    }; 
  }

  showSidebar(): boolean {
    if (this.width > 933) {
      this.show = false;
      this.leftMargin = '150px';
      return true;
    }

    this.leftMargin = '0px';
    return false;
  }
}
