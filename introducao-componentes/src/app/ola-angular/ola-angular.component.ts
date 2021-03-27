import { Component } from "@angular/core";

@Component({
    selector: 'ola-angular',          // Nome da Tag HTML
    templateUrl: './ola-angular.component.html',
    styleUrls: [
        './ola-angular.component.css'
    ]
})
export class OlaAngularComponent {
    framework: string = 'Angular'
}