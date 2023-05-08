let course = {
	courseNumber: "CSC-174",
	courseName: "Server-Side JavaScript",
	instructor: "Student"
};

//let courseNumber = course.courseNumber;
//let courseName = course.courseName;

// if you want to name them other than what they already are e.g
//let {courseNumber:courseNum, courseName, instructor} = course;

// let {courseNumber, courseName, instructor = "Dr. Nelthrope"} = course;


/* 
console.log(courseNumber);
console.log(courseName);
console.log(instructor); */

let registration = (action, {courseNumber, courseName, instructor}) => {
	console.log(action, courseNumber, courseName, instructor);
	
	if(action == 'enroll')
	{
		console.log(`You have enrolled in ${courseNumber}. `);
		console.log(` ${courseName} is taught by ${instructor}. `);
		console.log();
	}
	else if(action == 'withdraw')
	
	{
		console.log(`You have withdrawn from ${courseNumber}: ${courseName}. `);
		console.log(`${instructor}wishes you well in your studies `);
		console.log();
	}
	
	else
	{
		console.log();
		console.log("Error: You have chosen an invalid action");
	}
};



let action = process.argv[2];

registration(action, course);
