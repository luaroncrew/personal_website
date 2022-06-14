import {Component, Inject, VERSION} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Experience} from "../experiences.component";

@Component({
  selector: 'app-one-experience',
  templateUrl: 'one-experience.component.html',
})
export class OneExperienceComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public experience: Experience) {}
  angularVersion = VERSION.full;
  ngxMarkdownVersion = '13.1.0';
  markdown = `
  # Yandex | assessor developer

## What I had to do

sadklfj
sadfa'pdsjgfdf
gd
sfg
dsfg


dsfgsdfgsdf


 - dsgdf
 - dfdfg
   -fdsf
   - dsfgsdf


#
  `
}
