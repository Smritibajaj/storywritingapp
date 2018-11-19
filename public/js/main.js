if(document.referrer == "http://localhost:8087/draft"){
    var article1 = document.querySelector('#exampleFormControlTextarea1');
    var articlename1 = document.querySelector('#exampleInputPassword1');
    var bar = JSON.parse(sessionStorage.getItem('session1'));
    console.log("BAR IS " +bar.a);
    article1.innerHTML = bar.b;
    articlename1.value = bar.a;   
}

var savedraft = document.querySelector('.btn-primary');
var submit = document.querySelector('.btn-success');
var storyarr =[];
if( JSON.parse(localStorage.getItem('storyarr')) === null){
    localStorage.setItem('storyarr', JSON.stringify(storyarr));
}

savedraft.addEventListener('click',function(e){
console.log(e);
e.preventDefault();
var article = document.querySelector('#exampleFormControlTextarea1').value;
var articlename = document.querySelector('#exampleInputPassword1').value;
var story = {
articlename: articlename,
article: article
}
var draftstory = JSON.parse(localStorage.getItem('storyarr'));
console.log(draftstory);
draftstory.push(story);
console.log(draftstory);
localStorage.setItem('storyarr', JSON.stringify(draftstory));
console.log(localStorage.setItem('storyarr', JSON.stringify(draftstory)));
});
submit.addEventListener('click', function(e){
console.log("enter");
e.preventDefault();
var article = document.querySelector('#exampleFormControlTextarea1').value;
var articlename = document.querySelector('#exampleInputPassword1').value;
// The data we are going to send in our request
var storyobj = {
    articlename: articlename,
    articlenumber: 1,
    article: article,
    like: true,
    username: 'simmybajaj',
    useremail: 'simmybajaj1603@gmail.com',
    read: false,
}
var story = JSON.stringify(storyobj);

console.log(story);
const url = 'http://localhost:8087/create';
let fetchData = { 
    method: 'POST', 
    body: story,
    headers: {
        'Content-Type': 'application/json',
    },
}
fetch(url, fetchData)
.then(function() {
    console.log('done');
    console.log(fetchData);
})
.catch(function() {
    console.log('not done');
})

});


