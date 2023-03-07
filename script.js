const audioElement = document.getElementById('audio');
const button = document.getElementById('button');

function toggleButton(){
  button.disabled = !button.disabled
}

// VoiceRSS Javascript SDK



// function test(){

// }

// test()

// Tell me joke function takes joke in and passes into vss and get us the speech functionality
function tellme(joke){
    VoiceRSS.speech({
    key: '8a7ce745dbc04445a026dc292b209024',
    src: joke,
    hl: 'en-us',
    v: 'Linda',
    r: 0, 
    c: 'mp3',
    f: '44khz_16bit_stereo',
    ssml: false
});
}

// Get jokes from joke API
async function getJokes(){
  let joke=''
  try{
    const response = await fetch("https://v2.jokeapi.dev/joke/Programming")
    const data = await response.json()
    joke = (data.joke) ? data.joke : data.setup+'...'+data.delivery
    toggleButton()
    tellme(joke)
  }catch(e){
    console.log('error')
  }
}

button.addEventListener('click', getJokes)

audioElement.addEventListener('ended',toggleButton)
