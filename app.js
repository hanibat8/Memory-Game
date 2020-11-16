const imgs=document.querySelectorAll('.card-img');
const cardBack=document.querySelectorAll('.card__side--back');
let firstCard;
let secondCard;
let firstCardBack;
let firstImg;
let count=0;

imgs.forEach(function(img){
    img.addEventListener('mouseover',onHoverCard);
});

function onHoverCard(event){
    if(count===0){
        firstImg=event.target;
        firstCard=saveImg(firstImg);
        firstCardBack=event.path[1];
        removeRotation(firstCardBack);
        count++;
    }
    else{
        secondCard=saveImg(event.target);
        if(checkIfSame()){
            removeRotation(event.path[1]);
            removeEvent(event.target);
            removeEvent(firstImg);
        }
        else{
            firstCardBack.classList.add('card__side--back--rotate');
        }
        count=0;
    }
}

function removeRotation(card){
    card.classList.remove('card__side--back--rotate');
}

function removeEvent(card){
    card.removeEventListener('mouseover',onHoverCard);
}

function saveImg(e){
    return e.getAttribute('src');
}

function checkIfSame(){
    if(firstCard===secondCard){
        return true;
    }
    else{
        return false;
    }

}