let tasks = {
	tasks: [
		{
			text: "Pay Bills",
			completed: true
		},
		{
			text: "Clean Bathroom",
			completed: false
		},
		{
			text: "Wash Car",
			completed: true
		},
		{
			text: "Buy Groceries",
			completed: false
		},
		{
			text: "Make Bed",
			completed: true
		},
		{
			text: "Code Apps",
			completed: false
		},
	],
	getTasksToDo() {
		
		this.tasks.forEach((task)=>{
			
			if (task.completed == false)
			{
				console.log(`${task.text}`);
			}
			
		});
	}
	
};

tasks.getTasksToDo();