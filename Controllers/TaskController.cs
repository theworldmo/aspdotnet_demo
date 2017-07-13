using System;
using System.Collections;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using vega.Models;
using System.Linq;

namespace vega.Controllers
{
    public class TaskController : Controller
    {
        private static List<Task> tasks = new List<Task>();
        //simulate task Id
        private static int i = 0;
    
        [HttpPost("/api/addTask")]
        public IActionResult AddTask([FromBody] Task task){
            task.Id = ++i;
            TaskController.tasks.Add(task);
            var sortedTask = TaskController.tasks.OrderBy(t => t.Desc);
            return Ok(sortedTask);
        }

        [HttpPost("/api/updateTask")]
        public IActionResult UpdateTask([FromBody] Task task){
            var selectedTask = TaskController.tasks.FirstOrDefault(t => t.Id == task.Id);
            selectedTask.IsDone = task.IsDone;
            return Ok(task);
        }

        [HttpGet("/api/getTasks")]
        public IActionResult GetTasks(){
            var sortedTask = TaskController.tasks.OrderBy(t => t.Desc);
            return Ok(sortedTask);
        }
    }
}