// Data
const questions = [
    {
    question: "What is the name of Naruto’s signature jutsu?",
    option: ["Chidori", "Rasengan", "Amaterasu", "Shadow Possession"],
    answer: "Rasengan"
},
    {
    question: "Which Akatsuki member uses clay explosions?",
    option: ["Pain", "Itachi", "Deidara", "Hidan"],
    answer: "Deidara"
},
    {
    question: "Who killed Itachi Uchiha?",
    option: ["Naruto", "Kakashi", "Sasuke", "Madara"],
    answer: "Sasuke"
},
    {
    question: "Which dojutsu belongs to the Hyuga clan?",
    option: ["Sharingan", "Rinnegan", "Byakugan", "Ketsuryugan"],
    answer: "Byakugan"
},
    {
    question: "Who declared the Fourth Great Ninja War?",
    option: ["Obito", "Madara", "Orochimaru", "Zabuza"],
    answer: "Obito"
},
    {
    question: "What is the name of Killer Bee’s sword style?",
    option: ["Seven Sword Dance", "Eight Blades Style", "Acrobat", "Lightning Sword Art"],
    answer: "Acrobat"
},
    {
    question: "Who was the first jinchuriki of the Nine-Tails?",
    option: ["Kushina Uzumaki", "Mito Uzumaki", "Minato Namikaze", "Madara"],
    answer: "Mito Uzumaki"
},
    {
    question: "Which summon did Pain use to capture Naruto during their battle?",
    option: ["Giant Crab", "Giant Rhino", "Chameleon", "Giant Toad"],
    answer: "Chameleon"
},
    {
    question: "Which member of the Seven Ninja Swordsmen wielded Samehada before Kisame?",
    option: ["Fuguki Suikazan", "Mangetsu Hozuki", "Jinin Akebino", "Kushimaru Kuriarare"],
    answer: "Fuguki Suikazan"
},
    {
    question: "What was the name of Danzo’s summon?",
    option: ["Baku", "Enma", "Gamabunta", "Kamatari"],
    answer: "Baku"
}
];

// Game State Variables
let score = 0;

// Display Question
const displayQuestion = (index) => {
    const q = questions[index];
    console.log(`Q${index + 1} ${q.question}`);
}

// Display Options
const displayOption = (index) => {
    questions[index].option.forEach( (opt, i) => {
        console.log(` ${i+1}. ${opt}`);
    })
}

// Check Answer
const checkAnswer = (index, input)  => {            
    const selectedOption = questions[index].option[input - 1]; // because the input is just 1, 2, 3, 4 => we want selected option so converting numberInput by the user to selectedOption
    if(selectedOption === questions[index].answer){
        console.log(`Correct Answer`);
        score++;
    }else{
        console.log(`Wrong Answer`);
    }
}

// Ask user for input
const inputAns = () => {
    let userAns = prompt(`Enter your answer(1, 2, 3, 4): `);
    return userAns;
}


// Validate Answer
const validateAns = (input) => {
    if(isNaN(input) || input < 1 || input > 4){
        return false;
    }else{
        return true;
    }
}

// Show Result
const showResult = () => {
    const percentage = Math.round((score/questions.length)*100);
    const getMessage = (pct) => {
        if(pct === 100) return "Perfect";
        if(pct >= 70) return "Good job";
        if(pct >= 40) return "Keep Practicing";
        return "Better luck next time";
    };

    console.log(`\n---RESULTS---`);
    console.log(`Score: ${score}/${questions.length}`);
    console.log(`Percentage: ${percentage}%`);
    console.log(getMessage(percentage));
};


// Main Loop
const runQuiz = () => {

    // For each question,

    questions.forEach( (q, index) => {
        displayQuestion(index); // Display the current question
        displayOption(index); // Display the current option

        let ans;

        do {
            ans = inputAns();
            if(!validateAns(ans)){
                console.log(`Enter a valid option(1, 2, 3, 4)`);
            }
        } while(validateAns(ans) === false);

        checkAnswer(index, ans);

    })

    // Checking result after all question ran
    showResult();
}

runQuiz();


