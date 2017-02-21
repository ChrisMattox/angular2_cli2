import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
<h1>Hello from the {{componentName}}.</h1>
`
})
export class AppComponent {
  title = 'Found The Title!';
  saying = 'And added another tidbit!';
  image = 'http://vignette2.wikia.nocookie.net/disney/images/2/24/Captain_america_civil_war_promoart-spiderman.jpg/revision/latest?cb=20161017165547'

  clicked(event) {
    let someArray = [1, "string", false];
      for (let entry of someArray) {

        console.log(entry);
      }
      console.log("Weeeee")
  }




}
