import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Experience} from "../experiences.component";

@Component({
  selector: 'app-one-experience',
  templateUrl: 'one-experience.component.html',
})
export class OneExperienceComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public experience: Experience) {}
}
