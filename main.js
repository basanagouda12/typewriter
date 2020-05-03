// const TypeWriter = function(txtElement, words, wait =3000)
// {
//     this.txtElement =txtElement;
//     this.words=words;
//     this.txt ='';
//     this.wordIndex = 0;
//     this.wait = parseInt(wait, 10);
//     this.type();
//     this.isDeleting=false;
// }

// //type method
// TypeWriter.prototype.type = function() {
//     //current index of word
//     const current=this.wordIndex % this.words.length;

//     //get full txt
//     const fullTxt =this.words[current];

//     //check deleting
//     if(this.isDeleting)
//     {
//         //remove char
//         this.txt=fullTxt.substring(0,this.txt.length - 1);
//     }
//     else{
//         //add char
//         this.txt=fullTxt.substring(0,this.txt.length + 1);
//     }

//     //insert txt inti element
//     this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

//     //type speed
//     let typeSpeed= 300;

//     if(this.isDeleting){
//         typeSpeed /= 2;

//     }

//     //if world complete
//     if(!this.isDeleting && this.txt === fullTxt){
//         //pause
//         typeSpeed=this.wait;
//         // delete true
//         this.isDeleting=true;
//     }else if(this.isDeleting && this.txt ==='')
//     {
//         this.isDeleting =false;
//         //move to next word
//         this.wordIndex++;

//         //pause before first
//         typeSpeed =500;
//     }


//     setTimeout(() => this.type(),typeSpeed)
// }


// es6 class
class TypeWriter {
    constructor(txtElement, words, wait =3000){
        this.txtElement =txtElement;
        this.words=words;
        this.txt ='';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting=false;

    }
    type(){
         //current index of word
        const current=this.wordIndex % this.words.length;

        //get full txt
        const fullTxt =this.words[current];

        //check deleting
        if(this.isDeleting)
        {
            //remove char
            this.txt=fullTxt.substring(0,this.txt.length - 1);
        }
        else{
            //add char
            this.txt=fullTxt.substring(0,this.txt.length + 1);
        }

        //insert txt inti element
        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

        //type speed
        let typeSpeed= 300;

        if(this.isDeleting){
            typeSpeed /= 2;

        }

        //if world complete
        if(!this.isDeleting && this.txt === fullTxt){
            //pause
            typeSpeed=this.wait;
            // delete true
            this.isDeleting=true;
        }else if(this.isDeleting && this.txt ==='')
        {
            this.isDeleting =false;
            //move to next word
            this.wordIndex++;

            //pause before first
            typeSpeed =500;
        }


        setTimeout(() => this.type(),typeSpeed);

    }
}



//init on dom load
document.addEventListener('DOMContentLoaded',init);

// init app

function init() {
    const txtElement = document.querySelector('.txt-type');
    const words =JSON.parse(txtElement.getAttribute('data-words'));
    const wait=txtElement.getAttribute('data-wait');
    // init typewrite
    new TypeWriter(txtElement,words,wait);
}