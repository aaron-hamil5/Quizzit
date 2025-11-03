class Question{
    constructor(
        question_img,
        sub_heading,
        question,

        btn_img_one,
        btn_text_one,

        btn_img_two,
        btn_text_two,

        btn_img_three,
        btn_text_three,

        btn_img_four,
        btn_text_four,

        correct_answer,
        detailed_reason
    ){
        this.question_img = question_img;
        this.sub_heading = sub_heading;
        this.question = question;

        this.btn_img_one = btn_img_one;
        this.btn_text_one = btn_text_one;

        this.btn_img_two = btn_img_two;
        this.btn_text_two  = btn_text_two;

        this.btn_img_three = btn_img_three;
        this.btn_text_three = btn_text_three;

        this.btn_img_four = btn_img_four;
        this.btn_text_four = btn_text_four;

        this.correct_answer = correct_answer;
        this.detailed_reason = detailed_reason;
    }
    LoadQuestion(){
        LoadQuestionBoard(
            this.question_img,
            this.sub_heading,
            this.question,

            this.btn_img_one,
            this.btn_text_one,

            this.btn_img_two,
            this.btn_text_two,

            this.btn_img_three,
            this.btn_text_three,

            this.btn_img_four,
            this.btn_text_four,

            this.correct_answer,
            this.detailed_reason
        )
    }
    SetAnswer(){
        answer = this.correct_answer
    }
}

let answer = 0
let i = 0
let answered = false
let score = 0

const questions =[
    new Question(
        "/images/quiz/Beauty_and_the_boss_album_art.webp",
        "Which One?",
        "Which artist spent over $5k on their album, but lost everything because Spotify detected 'illegal Streams'",

        "/images/quiz/taylor_swift_portrait.webp",
        "Taylor Swift",

        "/images/quiz/charli_xcx_portrait.webp",
        "Charli XCX",

        "/images/quiz/karra_portrait.webp",
        "Karra",

        "/images/quiz/nicki_manaj_portrait.webp",
        "Nicki Minaj",

        3,
        "KARRA released her debut album The Beauty and the Boss.One of her songs started getting a big spike in streams. Spotify and her distributor, DistroKid, flagged it as “illegal streams” (thinking the plays were fake). Without warning, they took down her whole album. KARRA decided to fight back by stopping future releases on streaming platforms."
    ),
    new Question(
        "/images/quiz/question_two_imagery.webp",
        "Which One?",
        "Which artist is well known for blending hip-hop with classical Indian music and being a co-writer for major artist (Fall Out Boy, Gwen Stefani)",

        "/images/quiz/raja_kumari_portrait.webp",
        "Raja Kumari",

        "/images/quiz/navv_inder_portrait.webp",
        "Navv Inder",

        "/images/quiz/shankar_mahadevan_portrait.webp",
        "Shankar Mahadevan",

        "/images/quiz/harshdeep_kaur_portrait.webp",
        "Harshdeep Kaur",

        1,
        "Raja Kumari has co-written some great songs: 'Centuries' by Fall Out Boy, 'Change Your Life' by Iggy Azalea,'Goddess' by Krewella, NERVO, and 'Renegade' on Arcane League of Legends"
    ),
    new Question(
        "/images/quiz/youtube_logo.webp",
        "Which One?",
        "Which YouTube Channel lost major credibility due to none stop mistakes, and overworking to produce content on a strict tight schedule.",

        "/images/quiz/jerryrigeverything_portrait.webp",
        "JerryRigEverything",

        "/images/quiz/mrwhosetheboss_portrait.webp",
        "Mrwhosetheboss",

        "/images/quiz/ufd_tech_portrait.webp",
        "UFD Tech",

        "/images/quiz/linus_tech_tips_portrait.webp",
        "Linus Tech Tips",

        4,
        "Linus Tech Tips (LTT), known for its consistent and high-volume upload schedule, faced significant criticism over declining quality assurance and factual errors in mid-2023. The situation escalated following a public report highlighting these issues, leading the company to issue a formal apology and implement a week-long production break (known as 'Restructure'). This pause was used to re-evaluate internal processes, prioritise accuracy and quality over speed, and publicly commit to stricter quality control moving forward."
    ),
    new Question(
        "/images/quiz/durability_test.webp",
        "Which One?",
        "Which device’s battery got punctured when JerryRigEverything did his bend test.",

        "/images/quiz/nokia_3310.webp",
        "Nokia 3310",

        "/images/quiz/pixel_10_pro_fold.webp",
        "Google Pixel 10 Pro Fold",

        "/images/quiz/fold7.webp",
        "Samsung Galaxy Z Fold7",

        "/images/quiz/iphone_air.webp",
        "Apple iPhone Air",

        2,
        "Jerry did his usual test to check the durability of the current device compared to the last generation. When he bent the phone in its unfolded mode. The device gave up where the antenna line lied. While fidgeting with the device, the battery gets punctured and then the device starts to smoke and the battery reacted badly and heated up. He got very lucky the device didn’t catch on flames."
    ),
    new Question(
        "/images/quiz/console_wars.webp",
        "Which One?",
        "Which company was doing so well with their console and then royally ruined it with their next generation.",

        "/images/quiz/microsoft_logo.webp",
        "Microsoft",

        "/images/quiz/sony_logo.webp",
        "Sony",

        "/images/quiz/google_logo.webp",
        "Google",

        "/images/quiz/nintendo_logo.webp",
        "Nintendo",

        1,
        "The initial announcement of the Xbox One was widely seen by consumers as a catastrophic failure, essentially spelling the console's death before arrival. Microsoft's reveal focused heavily on TV and entertainment features while promoting extremely unpopular policies like mandatory constant internet connectivity and severe restrictions on used games. This event severely damaged the Xbox brand's reputation; the only thing keeping the ecosystem strong today is the success of its smart subscription service, Xbox Game Pass."
    ),
    new Question(
        "",
        "You're done",
        "Well Done!, How did you do?",

        "",
        "",

        "",
        "",

        "",
        "",

        "",
        "",

        0,
        "",
    )
]


function SetQuestion(
){
    questions[i].LoadQuestion();
    questions[i].SetAnswer();
}

function LoadQuestionBoard(
    question_img,
    sub_heading,
    question,
    btn_img_one,
    btn_text_one,
    btn_img_two,
    btn_text_two,
    btn_img_three,
    btn_text_three,
    btn_img_four,
    btn_text_four
){
    document.getElementById("question_img").src = question_img;
    document.getElementById("sub_heading").textContent = sub_heading;
    document.getElementById("question").textContent = question;

    document.getElementById("btn_img_one").src = btn_img_one;
    document.getElementById("btn_text_one").textContent = btn_text_one;
    
    document.getElementById("btn_img_two").src = btn_img_two;
    document.getElementById("btn_text_two").textContent = btn_text_two;

    document.getElementById("btn_img_three").src = btn_img_three;
    document.getElementById("btn_text_three").textContent = btn_text_three;

    document.getElementById("btn_img_four").src = btn_img_four;
    document.getElementById("btn_text_four").textContent = btn_text_four;
}

function Response(response){
    if(response === answer){
        console.log("Correct");
        document.getElementById("info_text").textContent = "Well Done, " + questions[i].detailed_reason;
        score++;
        document.getElementById("score").textContent = score + "/5";
    } else {
        console.log("Womp Womp")
        document.getElementById("info_text").textContent = "Wrong! " + questions[i].detailed_reason;
    }
    answered = true
}

function Progress(){
    if (answered) {
        i++
        document.getElementById("info_text").textContent = "";

        SetQuestion()
        answered = false
    }
}