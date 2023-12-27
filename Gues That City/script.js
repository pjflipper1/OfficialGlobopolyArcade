function generateUniqueRandomNumbers(emptyList) {
    while (emptyList.length < 10) {
        var theRandom = Math.floor(Math.random() * 40);
        var theRegulator = true;
        for (var j = 0; j < emptyList.length; j++) {
            if (emptyList[j] === theRandom) {
                theRegulator = false;
                break;
            }
        }
        if (theRegulator) {
            emptyList.push(theRandom);
        }  
    }
    return emptyList;
}
i=0;
var completion = 0;
var emptyList = [];
var NumberList = generateUniqueRandomNumbers(emptyList);;
var randomNumber = NumberList[i];
var Score = 0;
let Blank = "";
var CurrentAnswer = -1;
function displayFunction1() {
    var clues = [
        "Capital of Japan",
        "The city that never sleeps",
        "Capital of the UK",
        "The city of love",
        "Capital of China",
        "Capital of Russia",
        "Transcontinental city",
        "City in the gulf that's a rich mans playground",
        "Financial capital of India",
        "Harbor city with an iconic opera house",
        "Silicon valley of India",
        "Capital of India", 
        "Home of Hollywood",
        "Home of the .com boom",
        "Known as Sin City",
        "The _ wall once divided East _ and West _ ",
        "Home of Delta Airlines and hip pop artists like Lil Baby and the Migos",
        "Capital of the United States of America",
        "The capital of an ancient empire along the mediteranian sea",
        "The largest city by population in South America",
        "The capital of the country that hosted the 2022 FIFA World Cup was hosted",
        "Captial of Australia",
        "Captial of the country the parthenon is in",
        "Mexican city at tip of the Baja peninsula, known for American tourism",
        "City in Indonesia known to many western tourists as a surfers paradise",
        "Home of one of the best Ivy league universities and one of the best technology institutes",
        "The city where the declaration of independance was signed",
        "The _ tea party played a huge role in the start of the American revolutionary war",
        "Capital of a pacific island that is the  50th US State",
        "Capital of the largest US state by surface area",
        "The hometown of hip pop superstar Travis Scott ",
        "The capital of the coutry King Tut once ruled", 
        "The capital of the US state knwon for Cow Boys",
        "City country in South Asia, located in between Indonesia and Malaysia",
        "Indian beach city known for casinos and russian tourism",
        "Largest city by population in Pakistan",
        "Africa's largest city by population",
        "The city where table mountain is located",
        "Canadian city that Drake is from",
        "Capital of Iran",
        "Indian city known for tech companies and biriyani"
    ];
    var randomNumber = NumberList[i];
    var RandomClue = clues[randomNumber];
    CurrentAnswer = randomNumber;
    var outputElement1 = document.getElementById("output1");
    outputElement1.textContent = RandomClue;
}

function displayFunction2() {
    completion = completion + 1;
    var cityNames = [
        "Tokyo",
        "New York City",
        "London",
        "Paris",
        "Beijing",
        "Moscow",
        "Istanbul",
        "Dubai",
        "Mumbai",
        "Sydney",
        "Bengaluru",
        "New Delhi",
        "Los Angeles",
        "San Fransisco",
        "Las Vages",
        "Berlin", 
        "Atlanta",
        "Washington DC",
        "Rome",
        "Sao Paulo",
        "Doha",
        "Canberra",
        "Athens",
        "Cabo San Lucas",
        "Bali",
        "Boston",
        "Philadelphia",
        "Boston",
        "Honolulu",
        "Juneau",
        "Houston",
        "Cairo",
        "Austin",
        "Singapore",
        "Goa",
        "Karachi", 
        "Lagos",
        "Cape Town",
        "Toronto",
        "Teheran",
        "Hyderabad"
    ];

    var userInput = document.getElementById("userInput").value;
    var RandomNumberB = CurrentAnswer;
    var RandomCity = cityNames[RandomNumberB];
    var FinalResponse = "";
    i=i+1;
    if (userInput == RandomCity) {
        FinalResponse += "Correct";
        Score = Score + 1;
        document.getElementById("score").innerHTML = "Score: " + Score;
    }
    else if (userInput == Blank){
       FinalResponse = "The following answer is blank, please refresh the page to restart the game"   
    }
    else {
        FinalResponse += "Wrong, the correct answer is "+RandomCity;
    }
    var outputElement = document.getElementById("output");
    outputElement.textContent = FinalResponse;
  
  if (Score === 10 && completion === 10){
    var WinOutput = document.getElementById("win");
    WinOutput.textContent = "Congratulations, you have won, refresh the page to play again";
  }
  else if (Score < 10 && completion === 10){
    var WinOutput = document.getElementById("win");
    WinOutput.textContent = "Unfortunately you did not get every question right, refresh the page to try again";
  }

}

function DisableButton(){
  var button = document.getElementById("myButton");
  button.disabled = true;
}

function hideButton() {
    var button = document.getElementById("myButton");
    button.classList.add("button-hidden");
}