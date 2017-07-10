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
  private newTask: string;
  //private now: Date = new Date();
  //private subscription: Subscription;
  private tasks: any[] = [
    {
      id:1,
      desc:"buy milk",
      isDone:false
    },
    {
      id:2,
      desc:"buy egg",
      isDone:false
    },
    {
      id:3,
      desc:"buy noodle",
      isDone:false
    }
  ];

  constructor(
    private taskService: TaskService) {
  }

  ngOnInit() {
  /*
    var timer = TimerObservable.create(0,1000);
    this.subscription = timer.subscribe(tm => {
      this.now = new Date();
    })
  */
  }

  add(){
    this.taskService.createTask(this.newTask)
      .subscribe(res => console.log(res));
  }

  ngOnDestroy(): void {
  /*
    this.subscription.unsubscribe();
    console.log("timer ends");
  */
  }
}
