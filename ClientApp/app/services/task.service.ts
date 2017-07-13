import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class TaskService {

  constructor(private http: Http) { }
  
  getTasks() {
    return this.http.get("/api/getTasks").map(res => res.json());
  }

  createTask(task){
    return this.http.post("/api/addTask", task).map(res => res.json());
  }
  
  updateTask(task){
    return this.http.post("/api/updateTask", task).map(res => res.json());
  }

}