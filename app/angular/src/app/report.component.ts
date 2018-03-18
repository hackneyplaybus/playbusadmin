import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';

@Component({
  selector: 'hpb-report',
  template: `
<div class="w3-padding-64">
  <div class="w3-container">
  <br/>
  <a style="w3-padding-16" target="_blank" href='https://docs.google.com/spreadsheets/d/xxxxxxxxxxxxxxxxxxxxx'>Open in Google Sheets</a>
  <br/>
    <iframe width="100%" height="3500" src="https://datastudio.google.com/embed/reporting/xxxxxxxxxxxxxxxxxxxxxxxxxxxxx" frameborder="0" style="border:0" allowfullscreen></iframe>
  </div>
</div>
`,
  
})
export class ReportComponent {    
}



