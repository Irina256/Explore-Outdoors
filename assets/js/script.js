var parisScore = 0;
var romeScore = 0;
var londonScore = 0;
var miamiScore = 0;
var orlandoScore = 0;
var kauaiScore = 0;
var answerTracker = 0;
var questionTracker = 0;
var keptScore = [];
var cityCounter = 0;
var carCounter = 0;
var imagesSrc = [
    './assets/images/paris.jpg',
    './assets/images/rome.jpg',
    './assets/images/london-big-ben.jpg',
    './assets/images/miami.jpg',
    './assets/images/universal-ball-800x450-1.jpg',
    './assets/images/kauai.jpg'
];
var cityName = [
    'Paris, France',
    'Rome, Italy',
    'London, UK',
    'Miami, Florida',
    'Orlando, Florida',
    'Kauai, Hawaii',
];
var progressCar = [
    './assets/images/Question-Images/question-0-image.png',
    './assets/images/Question-Images/question-1-image.png',
    './assets/images/Question-Images/question-2-image.png',
    './assets/images/Question-Images/question-3-image.png',
    './assets/images/Question-Images/question-4-image.png',
    './assets/images/Question-Images/question-5-image.png',
    './assets/images/Question-Images/question-6-image.png',
    './assets/images/Question-Images/question-7-image.png',
    './assets/images/Question-Images/question-8-image.png',
    './assets/images/Question-Images/question-9-image.png',
    './assets/images/Question-Images/question-10-image.png',
    './assets/images/Question-Images/question-11-image.png',
];
//need description for each city picture 
// it's going to be an array of 6 paragraph
var cityDescription = [
    "Paris, France's capital, is a major European city and a global center for art, fashion, gastronomy and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine. Beyond such landmarks as the Eiffel Tower and the 12 th - century, Gothic Notre - Dame cathedral, the city is known for its cafe culture and designer boutiques along the Rue du Faubourg Saint - Honoré.",
    "Rome, capturing the attention of 7-10 million tourists every year, The Eternal City is bursting with history, art, and delicious food. Being in the spotlight for century’s you would think all of Rome’s secrets are revealed to the public eye. But there are lots of lesser-known stories about the city that you may not have heard of.",
    "London is made up of two ancient cities which are now joined together.They are: the City of London, know simply as 'the City' which is the business and financial heart of the United Kingdom. It is also known as the Square Mile (2.59 sq km/1 sq mi). It was the original Roman settlement (ancientLondinium), making it the oldest part of London and already 1,000 years old when the Tower of London was built. The City of Westminster, where Parliament and most of the government offices are located. Also Buckingham Palace, the official London residence of the Queen and the Royal family are located there too. Together they all make up a region known as Greater London.",
    "Miami is one of the world’s greatest and most iconic tourist destinations – thanks to its sub tropical climate, pristine beaches and relaxed ambiance. It also does fun really well. In keeping with the ‘fun’ theme. Miami, officially the City of Miami, is a metropolis located in southeastern Florida in the United States. It is the third most populous metropolis on the East coast of the United States, and it is the seventh largest in the country.",
    "Orlando, a city in central Florida, is home to more than a dozen theme parks. Chief among its claims to fame is Walt Disney World, comprised of parks like the Magic Kingdom and Epcot, as well as water parks. Another major destination, Universal Orlando, offers Universal Studios and Islands of Adventure, with the Wizarding World of Harry Potter straddling both. Thanks to its year-round sunny weather, high quality of life and attractions, Orlando is a well-known city.",
    "Kauai is an island in the Central Pacific, part of the Hawaiian archipelago. It's nicknamed 'the Garden Isle ' thanks to the tropical rainforest covering much of its surface. The dramatic cliffs and pinnacles of its Na Pali Coast have served as a backdrop for major Hollywood films, while 10 - mile - long Waimea Canyon and the Nounou Trails traversing the Sleeping Giant mountain ridge are hiking destinations. It’ s no surprise that Kauai, also known as the“ Garden Isle, It is famous for its white sandy beaches, jagged green mountains, and tropical landscapes.Tourists have been flocking here for decades enamored with itsnatural beauty and often making Kauai their home.",
]
var questChoiPoints = [{
    questions: 'What kind of weather do you like?',
    choices: [
        'Warm but dry',
        'Cold',
        'Rainy and Brisk',
        'Tropical and Sunny'
    ],
    points: [{
        //points ordered as paris, rome, london, miami, orlando and kauai
        firstChoice: [1, 4, 2, 3, 3, 5],
        secondChoice: [5, 2, 3, 0, 0, 5],
        thirdChoice: [0, 3, 5, 3, 3, 0],
        fourthChoice: [2, 3, 0, 4, 4, 5]
    }]
},
{
    questions: 'What kind of activities are you looking forward to?',
    choices: [
        'I want to visit places with history, museums, National Landmarks etc',
        'I want to relax and enjoy my environment somewhere by the water',
        'I want to do something exciting like sky dive, theme parks, scuba diving.',
        "I'm going on vacation with family and want a variety of different attractions"
    ],
    points: [{
        //points ordered as paris, rome, london, miami, orlando and kauai
        firstChoice: [5, 4, 5, 2, 3, 4],
        secondChoice: [2, 3, 1, 3, 2, 5],
        thirdChoice: [2, 1, 3, 2, 4, 5],
        fourthChoice: [2, 3, 4, 2, 5, 3]
    }]
},
{
    questions: 'What kind of shopping will you do once you get there?',
    choices: [
        "I don't plan on buying much I just want to see the sights!",
        'I like fashion and want to shop at name brands and experience new trends.',
        'I want to be able to buy historical souvenirs for my family from all the places and activities I visit.',
        "I might shop if I find something cool but I'm not really planning on it."
    ],
    points: [{
        //points ordered as paris, rome, london, miami, orlando and kauai
        firstChoice: [3, 5, 3, 1, 2, 4],
        secondChoice: [5, 0, 4, 3, 2, 1],
        thirdChoice: [5, 4, 5, 2, 3, 1],
        fourthChoice: [1, 5, 2, 3, 2, 4]
    }]
},
{
    questions: 'What kind of foods do you like?',
    choices: [
        'I like to try new things and a lot of variety.',
        "I don't like a lot of excitement in my food, preferrably something bland.",
        'I like spicy foods with a lot of flavor',
        'I love baked goods for all occasions.'
    ],
    points: [{
        //points ordered as paris, rome, london, miami, orlando and kauai
        firstChoice: [5, 2, 5, 4, 4, 3],
        secondChoice: [3, 4, 5, 1, 5, 0],
        thirdChoice: [0, 3, 2, 5, 3, 4],
        fourthChoice: [5, 3, 4, 1, 3, 0]
    }]
},
{
    questions: 'How do you prefer to spend your free time?',
    choices: [
        'Hiking',
        'Relaxing at the beach',
        'Exploring the city',
        'Visiting theme parks'
    ],
    points: [{
        //points ordered as paris, rome, london, miami, orlando and kauai
        firstChoice: [1, 1, 1, 3, 2, 5],
        secondChoice: [0, 0, 0, 5, 3, 5],
        thirdChoice: [5, 5, 5, 3, 2, 1],
        fourthChoice: [3, 2, 2, 1, 5, 1]
    }]
},
{
    questions: 'What gives you the biggest rush?',
    choices: [
        'Visiting museums and galleries',
        'Diving',
        'Tasting delicious food and Drinks',
        'Riding rollercoasters'
    ],
    points: [{
        //points ordered as paris, rome, london, miami, orlando and kauai
        firstChoice: [5, 5, 5, 2, 1, 1],
        secondChoice: [0, 0, 0, 5, 1, 5],
        thirdChoice: [5, 5, 5, 3, 1, 4],
        fourthChoice: [3, 1, 2, 1, 5, 1]
    }]
},
{
    questions: "What's the perfect way to spend a day?",
    choices: [
        'Chasing waterfalls',
        'Taking food and wine tasting tours',
        'Visiting incredible parks with record-breaking rides',
        "See as much of nature's beauty as possible"
    ],
    points: [{
        //points ordered as paris, rome, london, miami, orlando and kauai
        firstChoice: [0, 0, 0, 5, 1, 5],
        secondChoice: [5, 5, 5, 3, 2, 0],
        thirdChoice: [1, 1, 1, 0, 5, 0],
        fourthChoice: [1, 1, 1, 4, 3, 5]
    }]

},
{
    questions: 'With whom will you be traveling?',
    choices: [
        'Family',
        'Friends',
        'Significant other',
        'Alone'
    ],
    points: [{
        //points ordered as paris, rome, london, miami, orlando and kauai
        firstChoice: [4, 2, 3, 4, 5, 5],
        secondChoice: [5, 4, 5, 5, 2, 5],
        thirdChoice: [5, 4, 4, 3, 1, 5],
        fourthChoice: [5, 5, 5, 1, 3, 0]
    }]

},
{
    questions: 'What would you be more afraid of:',
    choices: [
        'Stay on top of the mountains',
        'See a shark at the beach',
        'Creepy creatures',
        'Historical horrors'
    ],
    points: [{
        //points ordered as paris, rome, london, miami, orlando and kauai
        firstChoice: [5, 4, 3, 5, 5, 0],
        secondChoice: [5, 4, 4, 0, 5, 0],
        thirdChoice: [1, 1, 0, 4, 4, 3],
        fourthChoice: [1, 0, 0, 4, 4, 3]
    }]
},
{
    questions: 'What is your preferred fruit among these:',
    choices: [
        'Pineapple',
        'Orange',
        'Mango',
        'Apple'
    ],
    points: [{
        //points ordered as paris, rome, london, miami, orlando and kauai
        firstChoice: [1, 3, 3, 2, 2, 5],
        secondChoice: [3, 2, 2, 5, 5, 4],
        thirdChoice: [2, 3, 1, 5, 4, 1],
        fourthChoice: [5, 2, 3, 1, 3, 4]
    }]
},
{
    questions: 'What’s your biggest pet peeve?',
    choices: [
        'When your phone hits 1% and you left the charger at home',
        'Slow walkers',
        'Lack of exciting things to do',
        'Large crowds'
    ],
    points: [{
        //points ordered as paris, rome, london, miami, orlando and kauai
        firstChoice: [4, 3, 4, 4, 4, 1],
        secondChoice: [2, 3, 3, 1, 1, 5],
        thirdChoice: [4, 3, 4, 4, 5, 1],
        fourthChoice: [3, 3, 3, 1, 1, 5]
    }]
},
{
    questions: 'What is on your bucket list?',
    choices: [
        'Experiencing a totally new culture',
        'Scuba Diving',
        'Leaving the map at home and completely losing yourself somewhere',
        'To see ancient structures'
    ],
    points: [{
        //points ordered as paris, rome, london, miami, orlando and kauai
        firstChoice: [3, 4, 3, 3, 3, 5],
        secondChoice: [2, 2, 2, 5, 3, 5],
        thirdChoice: [4, 4, 4, 2, 4, 1],
        fourthChoice: [4, 5, 3, 1, 1, 2]
    }]
}
]
var preparedQuestion = function () {
    $('.btn').remove();
    $('.quizTitle').remove();
    $('.quizDesc').remove();
    $('#slide-show').remove();
    $('.img-description').remove();
    var pngGrabber = document.createElement('img');
    pngGrabber.src = progressCar[carCounter];
    console.log(pngGrabber);
    $(".image-wrapper").html('<img src="' + progressCar[carCounter] + '" />');
    var answers = document.querySelector('.answers')
    var choicesList = document.createElement("ol");
    choicesList.className = "orderedList";
    var question = document.createElement("h1");
    question.className = 'eachQuestion';
    var quests = questChoiPoints[questionTracker].questions;
    question.textContent = quests;
    answers.appendChild(question);
    for (var i = 0; i < questChoiPoints[questionTracker].choices.length; i++) {
        var listItem = document.createElement("button");
        listItem.className = "value col s8 offset-s2 btn-large";
        listItem.textContent = questChoiPoints[questionTracker].choices[i];
        listItem.setAttribute("data-answer-id", listItem.textContent);
        listItem.style.display = "block";
        choicesList.appendChild(listItem);
        answers.appendChild(choicesList);
    }
    carCounter++;
}
var body = document.querySelector(".body");
body.classList.add("body-before-load");
window.addEventListener('load', function () {
    var preloader = document.querySelector('.preloader');
    preloader.classList.add('preload-finish');
    body.classList.remove("body-before-load")
})

$(document).on('click', '.value', function (e) {
    var answerChoice = e.target.getAttribute('data-answer-id');
    if (answerChoice === questChoiPoints[questionTracker].choices[answerTracker]) {
        parisScore += (questChoiPoints[questionTracker].points[0].firstChoice[0]);
        romeScore += (questChoiPoints[questionTracker].points[0].firstChoice[1]);
        londonScore += (questChoiPoints[questionTracker].points[0].firstChoice[2]);
        miamiScore += (questChoiPoints[questionTracker].points[0].firstChoice[3]);
        orlandoScore += (questChoiPoints[questionTracker].points[0].firstChoice[4]);
        kauaiScore += (questChoiPoints[questionTracker].points[0].firstChoice[5]);
    } else if (answerChoice === questChoiPoints[questionTracker].choices[answerTracker + 1]) {
        parisScore += (questChoiPoints[questionTracker].points[0].secondChoice[0]);
        romeScore += (questChoiPoints[questionTracker].points[0].secondChoice[1]);
        londonScore += (questChoiPoints[questionTracker].points[0].secondChoice[2]);
        miamiScore += (questChoiPoints[questionTracker].points[0].secondChoice[3]);
        orlandoScore += (questChoiPoints[questionTracker].points[0].secondChoice[4]);
        kauaiScore += (questChoiPoints[questionTracker].points[0].secondChoice[5]);
    } else if (answerChoice === questChoiPoints[questionTracker].choices[answerTracker + 2]) {
        parisScore += (questChoiPoints[questionTracker].points[0].thirdChoice[0]);
        romeScore += (questChoiPoints[questionTracker].points[0].thirdChoice[1]);
        londonScore += (questChoiPoints[questionTracker].points[0].thirdChoice[2]);
        miamiScore += (questChoiPoints[questionTracker].points[0].thirdChoice[3]);
        orlandoScore += (questChoiPoints[questionTracker].points[0].thirdChoice[4]);
        kauaiScore += (questChoiPoints[questionTracker].points[0].thirdChoice[5]);
    } else if (answerChoice === questChoiPoints[questionTracker].choices[answerTracker + 3]) {
        parisScore += (questChoiPoints[questionTracker].points[0].fourthChoice[0]);
        romeScore += (questChoiPoints[questionTracker].points[0].fourthChoice[1]);
        londonScore += (questChoiPoints[questionTracker].points[0].fourthChoice[2]);
        miamiScore += (questChoiPoints[questionTracker].points[0].fourthChoice[3]);
        orlandoScore += (questChoiPoints[questionTracker].points[0].fourthChoice[4]);
        kauaiScore += (questChoiPoints[questionTracker].points[0].fourthChoice[5]);
    }
    var eachQuestion = document.querySelector('.eachQuestion');
    var orderedList = document.querySelector('.orderedList');
    if (questionTracker < questChoiPoints.length - 1) {
        questionTracker++;
        eachQuestion.remove();
        orderedList.remove();
        preparedQuestion();
    } else {
        scoreReport(parisScore, romeScore, londonScore, miamiScore, orlandoScore, kauaiScore);
    }
});

var askQuestion = document.querySelector("#startQuiz");
askQuestion.addEventListener("click", preparedQuestion);
var scoreReport = function (parisScore, romeScore, londonScore, miamiScore, orlandoScore, kauaiScore) {
    keptScore.push(parisScore);
    keptScore.push(romeScore);
    keptScore.push(londonScore);
    keptScore.push(miamiScore);
    keptScore.push(orlandoScore);
    keptScore.push(kauaiScore);
    console.log(keptScore);
    var highScore = (keptScore.indexOf(Math.max(...keptScore)));
    switch (highScore) {
        case 0:
            window.location.replace('paris.html');
            break;
        case 1:
            window.location.replace('rome.html');
            break;
        case 2:
            window.location.replace('london.html');
            break;
        case 3:
            window.location.replace('miami.html');
            break;
        case 4:
            window.location.replace('orlando.html');
            break;
        case 5:
            window.location.replace('kauai.html');
            break;
    }
}
var imageCity = document.querySelector('.img-city');
var cityDetails = document.querySelector('.city-description');
var slider = document.querySelector('.slideShow');
var slideShow = function () {
    slider.setAttribute('src', imagesSrc[cityCounter]);
    imageCity.textContent = cityName[cityCounter];
    cityDetails.textContent = cityDescription[cityCounter];
    if (cityCounter < imagesSrc.length - 1) {
        cityCounter++;
    } else {
        cityCounter = 0;
    }
    setTimeout('slideShow()', 5000);
}
window.onload = slideShow;
