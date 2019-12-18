import { Component, OnInit } from '@angular/core';
import { NgxTippyService } from 'ngx-tippy';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private tippyService: NgxTippyService) { }

  title = 'app';

  toolTipOptions = {
    arrow: true,
    interactive: true,
    hideOnClick: false,
    delay: [0, 200],
    content: '<div>my-tooltip-template</div><input type="button" value="abc">',
    onHide: (instance) => {
      console.log('This happens when the tooltip is hidden');
    }
  };

  ngOnInit(): void {
    console.log('Got in here');
    setTimeout(() => {
      console.log('Got in here time');
      this.tippyService.hideTippy('tippy');
    }, 5000);
  }
}