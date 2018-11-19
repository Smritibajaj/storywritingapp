var draftstory = JSON.parse(localStorage.getItem('storyarr'));
console.log(draftstory);
for(i=0; i < draftstory.length ;i++){
    var card = document.querySelector('.container');
    var cont = document.createElement('div');
    cont.classList.add('card');
    cont.classList.add('mt-3');
    card.appendChild(cont);
    var cont1 = document.createElement('div');
    cont.appendChild(cont1);
    cont1.classList.add('card-body');
    //var card = document.querySelector('#card-body');
    var cardtitle = document.createElement('h5');
    cardtitle.classList.add('card-title');
    cardtitle.innerHTML = draftstory[i].articlename;
    cont1.appendChild(cardtitle);
    var cardcontent = document.createElement('p');
    cardcontent.classList.add('card-text');
    cardcontent.innerHTML = draftstory[i].article;
    cont1.appendChild(cardcontent);
    var button = document.createElement('button');
    button.classList.add('btn-primary');
    button.classList.add('btn');
    button.innerHTML = 'Edit';
    button.setAttribute('type','button');
    cont1.appendChild(button);
    var session = {a: draftstory[i].articlename, b:draftstory[i].article};
    console.log(session);
    sessionStorage.setItem("session1", JSON.stringify(session));
}
    var buttons = document.querySelectorAll('.btn');
    buttons.forEach( btn => btn.addEventListener('click', function(i){
    console.log();
    window.location.href = '/write';
    }));