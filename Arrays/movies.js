// Array of Movie Ratings
var movieScores = [4.4, 3.3, 5.9, 8.8, 1.2, 5.2, 7.4, 7.5, 7.2, 9.7, 4.2, 6.9];

// Start a total rating count
var sum = 0;

// Arrays to hold movie scores
var goodMovieScores = [];
var okMovieScores = [];
var badMovieScores = [];






// Find the average score

// Use a for loop to iterate through the movie scores
 for (var i = 0; i < movieScores.length; i++)
      {
         if (movieScores[i] > 7)
			{
				goodMovieScores.push(movieScores[i]);
      
			}
			else if (movieScores[i] < 7 && movieScores[i] > 5)
			{
				okMovieScores.push(movieScores[i]);
			}
			else
			{
				badMovieScores.push(movieScores[i]);
			}
			
			
			sum = movieScores[i] + sum;
			average = sum / movieScores.length;
	  }
// To find the counts of each type of movie score, store the length of 
// each of the movie ratings arrays


// Print the results
console.log("---------"); 
console.log("There are " + goodMovieScores.length + " good movies.");
console.log("There are " + okMovieScores.length + " ok movies.");
console.log("There are " + badMovieScores.length + " bad movies.");
console.log("The average movie rating is " + average.toFixed(2) + ".");
console.log("---------"); 