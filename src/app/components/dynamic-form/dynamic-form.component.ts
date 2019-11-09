import { Component, OnInit } from '@angular/core';

enum FormType {
  Incident = 'incident',
  Firefighters = 'firefighters',
  Maintenance = 'maintenance'
}

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
  formType: string;
  formTypes = FormType;

  constructor() { }

  ngOnInit() {
    this.formType = 'incident';
  }

}
