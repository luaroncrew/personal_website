// TODO: reading experience description from text files or database
import { Component, OnInit } from '@angular/core';


export interface Experience {
  description: string;
  date: string;
  imageLink: string;
}

const EXPERIENCES: Experience []  = [
  // adding the experiences manually
  {
    description: 'fasdkhfjgasdkjhgfasd',
    date: 'when',
    imageLink: '1231231231'
  },
  {
    description: 'Ubikap',
    date: 'when',
    imageLink: '1231231231'
  },
  {
    description: 'Yandex',
    date: 'when',
    imageLink: '1231231231'
  },
  {
    description: 'IUT',
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

export class ExperiencesComponent implements OnInit {
  experiences = EXPERIENCES;
  ngOnInit(): void {
    this.experiences = EXPERIENCES
  }
}
