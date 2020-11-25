var parisScore = 0;
var romeScore = 0;
var londonScore = 0;
var miamiScore = 0;
var orlandoScore = 0;
var kauaiScore = 0;
var answerTracker = 0;
var questionTracker = 0;
var keptScore = [];
var questChoiPoints = [
    {
        questions: 'What kind of weather do you like?',
        choices: [
            'Warm but dry',
            'Cold',
            'Rainy and Brisk',
            'Tropical and Sunny'
        ],
        points: [
            {
                //points ordered as paris, rome, london, miami, orlando and kauai
                firstChoice: [1, 4, 2, 3, 3, 5],
                secondChoice: [5, 2, 3, 0, 0, 5],
                thirdChoice: [0, 3, 5, 3, 3, 0],
                fourthChoice: [2, 3, 0, 4, 4, 5]
            }
        ]
    },
    {
        questions: 'What kind of activities are you looking forward to?',
        choices: [
            'I want to visit places with history, museums, National Landmarks etc',
            'I want to relax and enjoy my environment somewhere by the water',
            'I want to do something exciting like sky dive, theme parks, scuba diving.',
            "I'm going on vacation with family and want a variety of different attractions"
        ],
        points: [
            {
                //points ordered as paris, rome, london, miami, orlando and kauai
                firstChoice: [5, 4, 5, 2, 3, 4],
                secondChoice: [2, 3, 1, 3, 2, 5],
                thirdChoice: [2, 1, 3, 2, 4, 5],
                fourthChoice: [2, 3, 4, 2, 5, 3]
            }
        ]
    },
    {
        questions: 'What kind of shopping will you do once you get there?',
        choices: [
            "I don't plan on buying much I just want to see the sights!",
            'I like fashion and want to shop at name brands and experience new trends.',
            'I want to be able to buy historical souvenirs for my family from all the places and activities I visit.',
            "I might shop if I find something cool but I'm not really planning on it."
        ],
        points: [
            {
                //points ordered as paris, rome, london, miami, orlando and kauai
                firstChoice: [3, 5, 3, 1, 2, 4],
                secondChoice: [5, 0, 4, 3, 2, 1],
                thirdChoice: [5, 4, 5, 2, 3, 1],
                fourthChoice: [1, 5, 2, 3, 2, 4]
            }
        ]
    },
    {
        questions: 'What kind of foods do you like?',
        choices: [
            'I like to try new things and a lot of variety.',
            "I don't like a lot of excitement in my food, preferrably something bland.",
            'I like spicy foods with a lot of flavor',
            'I love baked goods for all occasions.'
        ],
        points: [
            {
                //points ordered as paris, rome, london, miami, orlando and kauai
                firstChoice: [5, 2, 5, 4, 4, 3],
                secondChoice: [3, 4, 5, 1, 5, 0],
                thirdChoice: [0, 3, 2, 5, 3, 4],
                fourthChoice: [5, 3, 4, 1, 3, 0]
            }
        ]
    },
    {
        questions: 'How do you prefer to spend your free time?',
        choices: [
            'Hiking',
            'Relaxing at the beach',
            'Exploring the city',
            'Visiting theme parks'
        ],
        points: [
            {
                //points ordered as paris, rome, london, miami, orlando and kauai
                firstChoice: [1, 1, 1, 3, 2, 5],
                secondChoice: [0, 0, 0, 5, 3, 5],
                thirdChoice: [5, 5, 5, 3, 2, 1],
                fourthChoice: [3, 2, 2, 1, 5, 1]
            }
        ]
    },
    {
        questions: 'What gives you the biggest rush?',
        choices: [
            'Visiting museums and galleries',
            'Diving',
            'Tasting delicious food and Drinks',
            'Riding rollercoasters'
        ],
        points: [
            {
                //points ordered as paris, rome, london, miami, orlando and kauai
                firstChoice: [5, 5, 5, 2, 1, 1],
                secondChoice: [0, 0, 0, 5, 1, 5],
                thirdChoice: [5, 5, 5, 3, 1, 4],
                fourthChoice: [3, 1, 2, 1, 5, 1]
            }
        ]
    },
    {
        questions: "What's the perfect way to spend a day?",
        choices: [
            'Chasing waterfalls',
            'Taking food and wine tasting tours',
            'Visiting incredible parks with record-breaking rides',
            "See as much of nature's beauty as possible"
        ],
        points: [
            {
                //points ordered as paris, rome, london, miami, orlando and kauai
                firstChoice: [0, 0, 0, 5, 1, 5],
                secondChoice: [5, 5, 5, 3, 2, 0],
                thirdChoice: [1, 1, 1, 0, 5, 0],
                fourthChoice: [1, 1, 1, 4, 3, 5]
            }
        ]

    },
    {
        questions: 'With whom will you be traveling?',
        choices: [
            'Family',
            'Friends',
            'Significant other',
            'Alone'
        ],
        points: [
            {
                //points ordered as paris, rome, london, miami, orlando and kauai
                firstChoice: [4, 2, 3, 4, 5, 5],
                secondChoice: [5, 4, 5, 5, 2, 5],
                thirdChoice: [5, 4, 4, 3, 1, 5],
                fourthChoice: [5, 5, 5, 1, 3, 0]
            }
        ]

    },
    {
        questions: 'What would you be more afraid of:',
        choices: [
            'Stay on top of the mountains',
            'See a shark at the beach',
            'Creepy creatures',
            'Historical horrors'
        ],
        points: [
            {
                //points ordered as paris, rome, london, miami, orlando and kauai
                firstChoice: [5, 4, 3, 5, 5, 0],
                secondChoice: [5, 4, 4, 0, 5, 0],
                thirdChoice: [1, 1, 0, 4, 4, 3],
                fourthChoice: [1, 0, 0, 4, 4, 3]
            }
        ]
    },
    {
        questions: 'What is your preferred fruit among these:',
        choices: [
            'Pineapple',
            'Orange',
            'Mango',
            'Apple'
        ],
        points: [
            {
                //points ordered as paris, rome, london, miami, orlando and kauai
                firstChoice: [1, 3, 3, 2, 2, 5],
                secondChoice: [3, 2, 2, 5, 5, 4],
                thirdChoice: [2, 3, 1, 5, 4, 1],
                fourthChoice: [5, 2, 3, 1, 3, 4]
            }
        ]
    }
]
var preparedQuestion = function () {
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
        listItem.className = "value";
        listItem.textContent = questChoiPoints[questionTracker].choices[i];
        listItem.setAttribute("data-answer-id", listItem.textContent);
        listItem.setAttribute("id", "value" + questionTracker);
        listItem.style.border = "1px solid #0000FF";
        listItem.style.padding = "10px 30px 10px 30px";
        listItem.style.display = "block";
        listItem.style.backgroundColor = "lightslategray";
        listItem.style.marginBottom = "5px";
        choicesList.appendChild(listItem);
        answers.appendChild(choicesList);
    }
}
$(document).on('click', '.value', function (e) {
    var answerChoice = e.target.getAttribute('data-answer-id');
    if (answerChoice === questChoiPoints[questionTracker].choices[answerTracker]) {
        parisScore += (questChoiPoints[questionTracker].points[0].firstChoice[0]);
        romeScore += (questChoiPoints[questionTracker].points[0].firstChoice[1]);
        londonScore += (questChoiPoints[questionTracker].points[0].firstChoice[2]);
        miamiScore += (questChoiPoints[questionTracker].points[0].firstChoice[3]);
        orlandoScore += (questChoiPoints[questionTracker].points[0].firstChoice[4]);
        kauaiScore += (questChoiPoints[questionTracker].points[0].firstChoice[5]);
    }
    else if (answerChoice === questChoiPoints[questionTracker].choices[answerTracker + 1]) {
        parisScore += (questChoiPoints[questionTracker].points[0].secondChoice[0]);
        romeScore += (questChoiPoints[questionTracker].points[0].secondChoice[1]);
        londonScore += (questChoiPoints[questionTracker].points[0].secondChoice[2]);
        miamiScore += (questChoiPoints[questionTracker].points[0].secondChoice[3]);
        orlandoScore += (questChoiPoints[questionTracker].points[0].secondChoice[4]);
        kauaiScore += (questChoiPoints[questionTracker].points[0].secondChoice[5]);
    }
    else if (answerChoice === questChoiPoints[questionTracker].choices[answerTracker + 2]) {
        parisScore += (questChoiPoints[questionTracker].points[0].thirdChoice[0]);
        romeScore += (questChoiPoints[questionTracker].points[0].thirdChoice[1]);
        londonScore += (questChoiPoints[questionTracker].points[0].thirdChoice[2]);
        miamiScore += (questChoiPoints[questionTracker].points[0].thirdChoice[3]);
        orlandoScore += (questChoiPoints[questionTracker].points[0].thirdChoice[4]);
        kauaiScore += (questChoiPoints[questionTracker].points[0].thirdChoice[5]);
    }
    else if (answerChoice === questChoiPoints[questionTracker].choices[answerTracker + 3]) {
        parisScore += (questChoiPoints[questionTracker].points[0].fourthChoice[0]);
        romeScore += (questChoiPoints[questionTracker].points[0].fourthChoice[1]);
        londonScore += (questChoiPoints[questionTracker].points[0].fourthChoice[2]);
        miamiScore += (questChoiPoints[questionTracker].points[0].fourthChoice[3]);
        orlandoScore += (questChoiPoints[questionTracker].points[0].fourthChoice[4]);
        kauaiScore += (questChoiPoints[questionTracker].points[0].fourthChoice[5]);
    }
    var eachQuestion = document.querySelector('.eachQuestion');
    var orderedList = document.querySelector('.orderedList');
    if (questionTracker < questChoiPoints.length - 1){
        questionTracker++;
        eachQuestion.remove();
        orderedList.remove();
        preparedQuestion();
    }
    else {
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
            alert('Paris has the high score');
            break;
        case 1:
            alert('Rome has the high score');
            break;
        case 2:
            alert('London has the high score');
            break;
        case 3:
            alert('Miami has the high score');
            break;
        case 4:
            alert('Orlando has the high score');
            break;
        case 5:
            alert('Kauai has the high score');
            break;
        default:
            alert('Miami has the high score');
    }
}
