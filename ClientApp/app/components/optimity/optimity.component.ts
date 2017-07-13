import { TaskService } from './../../services/task.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from "rxjs/Subscription";
import { TimerObservable } from "rxjs/observable/TimerObservable";

@Component({
  selector: 'app-optimity',
  templateUrl: './optimity.component.html',
  styleUrls: ['./optimity.component.css']
})
export class OptimityComponent implements OnInit, OnDestroy {
  
  private task: any = {
    id: null,
    desc: "",
    isDone: false
  };

  private tasks: any[] = [];

  constructor(private taskService: TaskService) {
  }

  ngOnInit() {
    this.taskService.getTasks()
      .subscribe(res => this.tasks = res);
  }

  add() {
    this.taskService.createTask(this.task)
      .subscribe(res => {
        this.tasks = res;
      });
    this.task.desc = "";
  }

  update(t){
    this.taskService.updateTask(t)
      .subscribe(res => {
        console.log(res);
      });
  }

  ngOnDestroy(): void {
  }
}
