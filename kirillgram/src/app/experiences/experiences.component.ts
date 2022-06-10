// TODO: reading experience description from text files or database
// TODO: description providing in MD or XML or other type of possible parsing
// TODO:
import { Component } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import {OneExperienceComponent} from "./one-experience/one-experience.component";

export interface Experience {
  description: string;
  date: string;
  imageLink: string;
}

const EXPERIENCES: Experience []  = [
  {
    description: 'asldkjfhasdf',
    date: 'whebvmvmbn',
    imageLink: '../assets/pictures/img_1.png'
  },
  {
    description: 'Ubikap',
    date: 'whbvmmvben',
    imageLink: '../assets/pictures/img_1.png'
  },
  {
    description: 'Yandex',
    date: 'whemvbvmn',
    imageLink: '../assets/pictures/img_2.png'
  },
  {
    description: 'IUT',
    date: 'when',
    imageLink: '../assets/pictures/img_3.png'
  },
  {
    description: 'far away',
    date: 'when',
    imageLink: '1231231231'
  },
  {
    description: 'far away',
    date: 'when',
    imageLink: '1231231231'
  },
  {
    description: 'far away',
    date: 'when',
    imageLink: '1231231231'
  },
  {
    description: 'far away',
    date: 'when',
    imageLink: '1231231231'
  },
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
