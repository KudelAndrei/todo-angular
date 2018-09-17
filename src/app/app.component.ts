import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public tasks:string[] = [];
  public filters:string[] = ['all', 'active', 'complited'];
  public activeFilter:string = 'all';

  public form: FormGroup = new FormGroup({
    task: new FormControl()
  });

  submit() {
    this.tasks.push(this.form.value.task);
    this.form.reset();
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }

  changeFilter(filter:string){
    this.activeFilter = filter;
  }

}
