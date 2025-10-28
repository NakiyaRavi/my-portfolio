import { Component } from '@angular/core';
import { About } from '../about/about';
import { Skills } from '../skills/skills';
import { Contact } from '../contact/contact';
import { Project } from '../project/project';



@Component({
  selector: 'app-home',
  imports: [About,Skills,Contact,Project],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
