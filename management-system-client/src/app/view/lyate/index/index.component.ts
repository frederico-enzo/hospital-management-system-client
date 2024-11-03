import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { AppComponent } from "../../../app.component";

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [HeaderComponent, AppComponent],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {

}
