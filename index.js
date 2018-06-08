function init() {
    console.log('Hello Rigo from the console!');
    document.querySelector('.error').style.display = "none";
    document.querySelector('body').addEventListener('click',init);
    
    var first = '...a ';
    var adj = ['small ','pink ','tall '];
    var noun = ['gorilla ','dog ','elephant '];
    var action = ['took my ','stole my ','threw my '];
    var possession = ['computer ','homework ','ball '];
    var place = ['at the park !!!','at school !!!','in front of the office !!!'];
    
    var rdm1 = Math.floor(Math.random() * adj.length);
    var rdm2 = Math.floor(Math.random() * noun.length);
    var rdm3 = Math.floor(Math.random() * action.length);
    var rdm4 = Math.floor(Math.random() * possession.length);
    var rdm5 = Math.floor(Math.random() * place.length);
    
    var finalSentence = first + adj[rdm1] + noun[rdm2] + action[rdm3] + possession[rdm4] + place[rdm5];
    document.querySelector('#excuse').innerHTML = finalSentence;
};