// 1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
const insertY = ['the soup kitchen', 'Disneyland', 'the White House'];
const insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];


randomize.addEventListener('click', result);

function result() {

    const xValue = randomValueFromArray(insertX);
    const yValue = randomValueFromArray(insertY);
    const zValue = randomValueFromArray(insertZ);

    let storyText = `It was 94 fahrenheit outside, so ${xValue} went for a walk. When they got to ${yValue}, they stared in horror for a few moments, then ${zValue}. Bob saw the whole thing, but was not surprised — ${xValue} weighs 300 pounds, and it was a hot day.`;

    if (customName.value !== '') {
        storyText = storyText.replace(/:insertx:/g, customName.value);
    }
    
    
  
  story.textContent = storyText;
  story.style.visibility = 'visible';
}


