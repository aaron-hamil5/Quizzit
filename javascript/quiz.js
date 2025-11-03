function SetQuestion(
){
    LoadQuestion(
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
        "Nicki Minaj"
    )

}

function LoadQuestion(
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