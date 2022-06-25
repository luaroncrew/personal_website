import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Experience} from "../experiences.component";
import {MarkdownService} from 'ngx-markdown'

@Component({
  selector: 'app-one-experience',
  templateUrl: 'one-experience.component.html',
})
export class OneExperienceComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public experience: Experience,
              private markdownService: MarkdownService) {}
  ngOnInit() {
    this.markdownService.renderer.image = (href: string) => {
      return '' +
        '<img src="' + href + '" width=900px alt="error">'
    };
  }
}
