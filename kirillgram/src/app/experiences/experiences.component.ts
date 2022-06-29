import { Component } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { OneExperienceComponent } from "./one-experience/one-experience.component";

export interface Experience {
  name: string;
  descriptionPath: string;
  mainImagePath: string;
}

const EXPERIENCES: Experience []  = [
  {
    name: 'Ubikap',
    descriptionPath: require('raw-loader!../../assets/experiences/ubikap/description.md').default,
    mainImagePath: '../assets/experiences/ubikap/logo.jpg'
  },
  {
    name: 'Yandex',
    descriptionPath: require('raw-loader!../../assets/experiences/yandex/description.md').default,
    mainImagePath: '../assets/experiences/yandex/logo.png'
  },
  {
    name: 'Encode x Near Hackathon',
    descriptionPath: require('raw-loader!../../assets/experiences/near_hack/description.md').default,
    mainImagePath: '../assets/experiences/near_hack/logo.png'
  },
  {
    name: 'Fireman Museum DA',
    descriptionPath: require('raw-loader!../../assets/experiences/fireman/description.md').default,
    mainImagePath: '../assets/experiences/fireman/logo.png'
  },
  {
    name: 'Far Away Swap',
    descriptionPath: require('raw-loader!../../assets/experiences/far_away/description.md').default,
    mainImagePath: '../assets/experiences/far_away/logo.png'
  }
];

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent {

  experiences = EXPERIENCES;

  constructor(public dialog: MatDialog) {}
  openDialog(experience: Experience): void {
    const dialogRef = this.dialog.open(OneExperienceComponent, {
      width: '85%',
      height: '75%',
      data: experience
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit(): void {
    this.experiences = EXPERIENCES
  }
}
