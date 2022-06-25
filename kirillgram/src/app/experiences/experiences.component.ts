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
    mainImagePath: '../assets/experiences/ubikap/logo.png'
  },
  {
    name: 'Yandex',
    descriptionPath: require('raw-loader!../../assets/experiences/yandex/description.md').default,
    mainImagePath: '../assets/experiences/yandex/img.png'
  },
  {
    name: 'Yandex',
    descriptionPath: '../assets/experiences/ubikap/logo.png',
    mainImagePath: '../assets/experiences/yandex/img.png'
  },
  {
    name: 'Yandex',
    descriptionPath: '../assets/experiences/ubikap/logo.png',
    mainImagePath: '../assets/experiences/yandex/img.png'
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
