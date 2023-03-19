let input = document.querySelector("#text");
let submit = document.querySelector("#submit");

let content = [
    "கற்றது கைம்மண்ணளவு கல்லாதது உலகளவு.",
    "நாக்கிலே இருக்கிறது நன்மையும் தீமையும்.",
    "சாட்டை இல்லாப் பம்பரம் ஆட்டிவைக்க வல்லவன்.",
    "நூற்றுக்கு மேல் ஊற்று, ஆயிரத்துக்கு மேல் ஆற்றுப் பெருக்கு.",
    "நத்தையின் வயிற்றிலும் முத்துப் பிறக்கும்.",
    "குரங்கின் கைப் பூமாலை.",
    "நிலத்தில் எழுந்த பூண்டு நிலத்தில் மடிய வேண்டும்.",
    "ஒளவை சொல்லுக்கு அச்சம் இல்லை.",
    "பூனை கொன்ற பாவம் உன்னோடு , வெல்லம் தின்ற பாவம் என்னோடு.",
    "கொல்லைக்குப் பல்லி , குடிக்குச் சகுனி."
];

submit.addEventListener('click', function(){
    input.innerHTML = content[Math.round(Math.random()*content.length)];
});
document.write(input.innerHTML);