import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-track-by',
  templateUrl: './track-by.component.html',
  styleUrls: ['./track-by.component.css']
})
export class TrackByComponent implements OnInit {
  skills: any[];

  constructor() { }

  ngOnInit() {
    this.loadSkills();
  }

  loadSkills() {
    this.skills = [
      {
        id: 1,
        name: 'JavaScript'
      },
      {
        id: 2,
        name: 'Angular'
      },
      {
        id: 3,
        name: 'ReactJS'
      },
      {
        id: 4,
        name: 'Vue'
      }
    ];
  }

  addSkill(skill) {
    this.skills.push({
      id: this.skills.length + 1,
      name: skill
    });
  }

  removeSkill(id) {
    this.skills = this.skills.filter(skill => skill.id !== id);
  }

  trackSkills(index, item) {
    return item ? item.id : undefined;
  }

}
