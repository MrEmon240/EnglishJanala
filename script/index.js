const lodadLaessons = () => {
  fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((res) => res.json())
    .then((json) => displayLesson(json.data));
};
// word function
const loadLevelWord = (id) => {
  const url = `https://openapi.programming-hero.com/api/level/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayloadLevelWord(data.data));
};

const displayloadLevelWord = (words) => {
  const wordContainer = document.getElementById("word-container");
  wordContainer.innerHTML = "";

  words.forEach((word) => {
    const card = document.createElement("div");
    card.innerHTML = `
            
            <div class="bg-white rounded-xl shadow-sm text-center py-10 px-5">
        <h2 class="font-bold text-2xl">${word.word}</h2>
        <p class="font-semibold">${word.Pronounciation}</p>
        <div class="text-2xl font-medium ont-bangla">"${word.meaning} / ${word.pronunciation}"</div>
        <div class="flex justify-between items-center">
        
            <button class="btn bg-[#1a90ff30] hover:bg-[#1A91FF80]"><i class="fa-solid fa-circle-info"></i></button>
            <button class="btn bg-[#1a90ff36] hover:bg-[#1A91FF80]"><i class="fa-solid fa-volume-high"></i></button>
        </div>
    </div>
            
            
            `;
    wordContainer.append(card);
  });
};

// word end
const displayLesson = (lessons) => {
  const levelContainer = document.getElementById("level-container");
  levelContainer.innerHTML = "";

  for (let lesson of lessons) {
    const buttonDiv = document.createElement("div");
    buttonDiv.innerHTML = `

     <button onclick = "loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary"><i class="fa-solid fa-book-open"></i> Learn - ${lesson.level_no} </button>


    `;

    levelContainer.append(buttonDiv);
  }
};

lodadLaessons();
