const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const quoteAuthor = document.getElementById('author');
const twitter = document.getElementById('twitter');
const newQuote = document.getElementById('new-quote');
const loader = document.getElementById('loader');

// loading
function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

// complete
function complete() {
    if(!loader.hidden) 
        quoteContainer.hidden = false;
 

    loader.hidden = true;
    
}

// get quote from api
async function getQuote() {
    loading();
    const proxyUrl= 'https://cors-anywhere.herokuapp.com/'
    const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
    
    try {
        const response = await fetch(proxyUrl + apiUrl, {
            headers: {
               'Access-Control-Allow-Origin': '*'
            }
        })
        const data = await response.json();
       quoteText.innerText = data.quoteText;
       quoteAuthor.innerText = data.quoteAuthor;
       console.log(data);
      
       complete();
    } catch (error) {
        console.log('ops', error);
    }
    
}

function tweet() {
    const author = quoteAuthor.innerText;
    const text = quoteText.innerText;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${text} - ${author}`;
    window.open(twitterUrl, '_blank');
}
// on load
getQuote();
//loaderFunc();

newQuote.addEventListener('click', getQuote);
twitter.addEventListener('click', tweet);