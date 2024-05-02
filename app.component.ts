import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from "./child/child.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, ChildComponent]
})
export class AppComponent {
  title = 'input-output-6';
  data=10;
  updatedata(){
    this.data+=1;
  }
}
