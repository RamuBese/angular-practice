
import { Component } from '@angular/core'

@Component ({
    selector : 'my-employee',
    template : '<h1>Hi {{name}}</h1>'
})


export class employeecomponent{ 
    name : string = 'Srikanth'

}