using System;

namespace TaskTrackerApi.Models;

public class TaskItem
{
    public int Id {get; set;}
    //we're initializing the line variable to hold an empty string value rather than null.
    public string Title {get; set; } = string.Empty;
    public bool IsCompleted {get; set;}
}
