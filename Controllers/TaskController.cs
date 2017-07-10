using System;
using System.Collections;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Vega.Models;

namespace vega.Controllers
{
    public class TaskController : Controller
    {
        private static List<Task> tasks = new List<Task>();
        private static int i = 0;
    
        [HttpPost("/api/addTask")]
        public string AddTask(string arg){
            return "server-side," + arg;
            /*
            Task task = new Task();
            task.Id = i++;
            task.Desc = "test";
            task.IsDone = false;
            TaskController.tasks.Add(task);
            Console.WriteLine("here");       
            */
        }

        [HttpGet("/api/getTask")]
        public string GetTasks(){
            return "hello";
        }
    }
}