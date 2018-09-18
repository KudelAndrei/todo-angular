import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public tasks:Array<any> = [];
  public countFilter:any = 0;
  public filters:Array<any> = [
    { name: 'all', checked: null },
    { name: 'active', checked: false },
    { name: 'complited', checked: true }
  ];
  public activeFilter:any = this.filters[0];

  public form: FormGroup = new FormGroup({
    task: new FormControl()
  });

  submit() {
    this.tasks.push({
      title: this.form.value.task,
      checked: false,
    });
    this.form.reset();
  }

  deleteTask(index:number) {
    this.tasks.splice(index, 1);
  }

  changeFilter(){
    this.countFilter = this.tasks.length > 0 ? 
      this.tasks.filter(task => task.checked === this.activeFilter.checked || this.activeFilter.checked === null) ?
      this.tasks.filter(task => task.checked === this.activeFilter.checked || this.activeFilter.checked === null).length
      : 0
      : 0;
  }

}
