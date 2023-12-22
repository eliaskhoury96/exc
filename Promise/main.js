

/* $.get("https://random-word-api.herokuapp.com/word")
     .then((word) => {
        console.log(word[0]);
      return $.get("https://www.googleapis.com/books/v1/volumes?q=intitle:"+ word[0])
    
    
    })
    .then ((book) =>{
        console.log(book.items[0].volumeInfo.title)
         })
*/
         API_KEY = "XnUvrCCIpcdDWP82qPRLj4woSPPKTU0s"
         $.get("https://random-word-api.herokuapp.com/word")
             .then((word) => { 
                 let getBook = $.get("https://www.googleapis.com/books/v1/volumes?q=intitle:"+ word[0])
                 let getGif = $.get("http://api.giphy.com/v1/gifs/search?q=" + word[0] + "&api_key=" + API_KEY + "&limit=1")
                 return Promise.all([getBook, getGif])
             })
             .then((promiseResults) => {
                 let [getBook, getGif] = promiseResults
                 console.log(getBook.items[0].volumeInfo.title)
                 console.log(getGif.data[0].embed_url)
             })
             .catch((error) => {
                 console.log("promise failed")
             })












         
         /*let API_KEY = "5eYX6PAcEMvuQsK7gx7dbLatUOHaSVQp"
         $.get("https://random-word-api.herokuapp.com/word")
             .then((word) => { 
                 let getBook = $.get("https://www.googleapis.com/books/v1/volumes?q=intitle:"+ word[0])
                 let getGif = $.get("http://api.giphy.com/v1/gifs/search?q=" + word[0] + "&api_key=" + API_KEY + "&limit=1")
                 return Promise.all([getBook, getGif])
             })
             .then((promiseResults) => {
                 let [getBook, getGif] = promiseResults
                 console.log(getBook.items[0].volumeInfo.title)
                 console.log(getGif.data[0].embed_url)
             })
             .catch((error) => {
                 console.log("promise failed")
             })
             */

             /*console.log("before setTimeout")
             setTimeout(function () {
                 console.log("in the callback")
             }, 1000)
             console.log("after setTimeout")
             */
             
             /*const getRandomWord = function () {
                let words = ['Bonanza', 'Elusive', 'Hindrance', 'Astute', 'Polaroid', 'Phonic', 'Yonder']
            
                setTimeout(() => {
                    return words[Math.floor(Math.random() * words.length)]
                }, 1000);
            }
            
            
            console.log(getRandomWord());
             */
             
             
             /*const getRandomWord = function (callback) {
                let words = ['Bonanza', 'Elusive', 'Hindrance', 'Astute', 'Polaroid', 'Phonic', 'Yonder']
                setTimeout(() => {
                    callback(words[Math.floor(Math.random() * words.length)])
                }, 1000);
            }
            
            
            getRandomWord((randomWord)=> {
                console.log(randomWord);
            })
            */

            /*const getRandomWord = function (callback) {
                let words = ['Bonanza', 'Elusive', 'Hindrance', 'Astute', 'Polaroid', 'Phonic', 'Yonder']
                setTimeout(() => {
                    callback(words[Math.floor(Math.random() * words.length)])
                }, 1000);
            }
            
            const getSynonyms = function(word, callback) {
                let thesauraus = {
                    'Absolute': ['Definitive', 'Certain', 'Sure', 'Unequivocal'],
                    'Astute': ['Sharp', 'Poignant', 'Clever'],
                    'Azure': ['Blue', 'Cyan', 'Sky-blue'],
                    'Bright': ['Luminous', 'Brilliant'],
                    'Bonanza': ['Plethora', 'Smorgasboard', 'Copious', 'Plenty'],
                    'Elusive': ['Slick', 'Slippery', 'Ethereal', 'Loose'],
                    'Erode': ['Destroy', 'Wear out', 'Tarnish'],
                    'Hindrance': ['Bother', 'Disturbance', 'Problematic'],
                    'Phonic': ['Soundful'],
                    'Ploy': ['Plan', 'Ruse'],
                    'Polaroid': ['Photograph'],
                    'Yap': ['Bark', 'Blab', 'Chatter'],
                    'Yonder': ['There', 'Away', 'Far', 'Afar']
                }
            
                setTimeout(()=>{
                    callback(thesauraus[word])
                }, 1000)
            }
            
            const getSentiment = function(word, callback) {
                let wordSentiment = {
                    'Definitive': 1,
                    'Sharp': 1,
                    'Blue': 0,
                    'Luminous': 1,
                    'Plethora': 1,
                    'Slick': -1,
                    'Destroy': -1,
                    'Bother': -1,
                    'Soundful': 0,
                    'Plan': 0,
                    'Photograph': 0,
                    'Bark': -1,
                    'There': -1
                }
                setTimeout(()=>{
                    callback(JSON.stringify(wordSentiment[word]))
                }, 1000) 
            }
            
            const getSentimentDescription = function(sentiment){
                return sentiment == "1" ? "Positive" : sentiment == "-1" ? "Negative" : "Neutral"
            }

  
            getRandomWord((randomWord) => {
                console.log(`Random Word: ${randomWord}`);
            
                getSynonyms(randomWord, (synonyms) => {
                    if (!synonyms) {
                        console.log("No synonyms found.");
                        return;
                    }
            
                    console.log(`Synonyms of ${randomWord}:`, synonyms);
                    let synonym = synonyms[0]; // Use the first synonym
            
                    getSentiment(synonym, (sentiment) => {
                        let sentimentDescription = getSentimentDescription(sentiment);
                        console.log(`Sentiment of "${synonym}" (Synonym of ${randomWord}): ${sentimentDescription}`);
                    });
                });
            });     
            */
           /* makeAsyncOperation()
            .then((result) => {
                console.log("promise completed successfully");
            })
            .catch((error) => {
                console.log("promise failed");
            })
            .finally(() => {
                console.log("will be printed any way");
            })
            */
