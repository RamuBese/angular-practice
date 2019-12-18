import { Component } from '@angular/core';

@Component ({
  selector : 'my-app',
  templateUrl : `
  <div>
<h1>Employee Details</h1>
<my-employee></my-employee>
  </div>
  
  `

})

export class AppComponent{
  name : string = "World"
}