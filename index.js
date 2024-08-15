const content = [
    {
          quote: "Evernote is a powerful tool that can help executives, entrepreneurs and creative people capture and arrange their ideas. All you have to do is use it.",
  
          quoteTitle: "— Forbes",
  
  },
  {
      quote: "Evernote is a powerful tool for managing your tasks right alongside all of the information you work with every day.",
      
      quoteTitle: "— Inc. Magazine",
  },
  {
      quote: "It feels like there are endless ways to use Evernote… Use it for school, work, life, and beyond.",
      quoteTitle: "— The Verge",
  },
  {
      quote: "A few years ago, after my computer broke down and I lost all of the notes I had saved to my desktop, I finally decided to embrace the cloud and download Evernote. Since then, I havent looked back.",
      quoteTitle: "— Entrepreneur Magazine",
  },
  {
      quote: "You can even send emails to Evernote and gather all of the things you need in a single place.",
      quoteTitle: "— Business.com",
  },
  {
      quote: "Consider Evernote to be your go-to hub for not just to-do lists but all of your notes. The organizational possibilities are expansive.",
      quoteTitle: "— Well + Good",
  }
 ]
 


let testQuote= document.getElementById("testQuote")
let testQuoteLogo= document.getElementById("testQuoteLogo")
//declaring image events
let logo0 = document.getElementById("logo0")
let logo1 = document.getElementById("logo1")
let logo2 = document.getElementById("logo2")
let logo3 = document.getElementById("logo3")
let logo4 = document.getElementById("logo4")
let logo5 = document.getElementById("logo5")

logo0.addEventListener("click", function () {
    testQuote.innerText = content[0].quote;
    testQuoteLogo.innerText = content[0].quoteTitle;

})

logo1.addEventListener("click", function () {
    testQuote.innerText = content[1].quote;
    testQuoteLogo.innerText = content[1].quoteTitle;

})

logo2.addEventListener("click", function () {
    testQuote.innerText = content[2].quote;
    testQuoteLogo.innerText = content[2].quoteTitle;

})

logo3.addEventListener("click", function () {
    testQuote.innerText = content[3].quote;
    testQuoteLogo.innerText = content[3].quoteTitle;

})

logo4.addEventListener("click", function () {
    testQuote.innerText = content[4].quote;
    testQuoteLogo.innerText = content[4].quoteTitle;

})

logo5.addEventListener("click", function () {
    testQuote.innerText = content[5].quote;
    testQuoteLogo.innerText = content[5].quoteTitle;

})


count = 0;
wordsArray = [
    'Evernote is a powerful tool that can help executives, entrepreneurs and creative people capture and arrange their ideas. All you have to do is use it.',
    'Evernote is a powerful tool for managing your tasks right alongside all of the information you work with every day.',
    'It feels like there are endless ways to use Evernote… Use it for school, work, life, and beyond.',
    'A few years ago, after my computer broke down and I lost all of the notes I had saved to my desktop, I finally decided to embrace the cloud and download Evernote. Since then, I havent looked back.',
    'You can even send emails to Evernote and gather all of the things you need in a single place.',
    'Consider Evernote to be your go-to hub for not just to-do lists but all of your notes. The organizational possibilities are expansive. '
];
setInterval(function () {
    count++;
    $("#testQuote").fadeOut(300, function() {
        $(this).html(wordsArray[count % wordsArray.length]).fadeIn(500);
    });
}, 5000);


count1 = 0;
wordsArray1 = [
    '— Forbes', '— Inc. Magazine', '— The Verge', '— Entrepreneur Magazine','— Business.com', '— Well + Good'
];

setInterval(function () {
    count1++;
    $("#testQuoteLogo").fadeOut(300, function() {
        $(this).html(wordsArray1[count1 % wordsArray1.length]).fadeIn(500);
    });
}, 5000);





//this is the navbar JAVASCRIPT pls
const hamburger = document.querySelector('.hamburger')
const drawerNav = document.querySelector('.drawer-nav')
hamburger.addEventListener('click', () => {
drawerNav.classList.toggle('active')
})
const mobileFeature = document.getElementById('mobile-feature')
const mobilePlan = document.getElementById('mobile-plan')
const mobileFeatureList = document.querySelector('.mobile-feature-dropdownmenu-list')
const mobilePlanList = document.querySelector('.mobile-plans-dropdown-list')
mobileFeature.addEventListener('click', ()=>{
mobileFeatureList.classList.toggle('active')
})
mobilePlan.addEventListener('click', ()=>{
mobilePlanList.classList.toggle('active')
})

//just adding content

const menubtn = document.querySelector('.menu-btn')
let menuOpen = false;
menubtn.addEventListener('click', ()=>{
    if(!menuOpen){
        menubtn.classList.add('open');
        menuOpen = true;
    }
    else {
        menubtn.classList.remove('open');
        menuOpen = false;
    }
})

/// aside function
let aside = [
    {
        head: 'work anywhere',
        subHead: 'Keep important info handy- your notessync automatically to all your devices.'
    },
    {
        head: 'remember everything',
        subHead: 'Make notes more useful by adding text, images, audio, scan, PDFs, and documents.'
    },
    {
        head: 'TURN TO-DO INTO DONE',
        subHead: 'Bring your notes, tasks, and schedules together to get things done more easily.'
    },
    {
        head: 'find things fast',
        subHead: 'Get what you need, when you need it with powerful, flexible search capabilities.'
    }
]
let asideHead = document.querySelector('.aside-1-list-head')
let asideSubHead = document.querySelector('.aside-1-list-sub-head')

asideHead.textContent = `${aside[0].head}`
asideSubHead.textContent = `${aside[0].subHead}`
let index = 0;
// slider.src = `${data.results[0].urls.regular}` ;

setInterval(() => {
    index++
    if( index >= aside.length-1){
        index = 0;
    }
    asideHead.textContent = `${aside[index].head}`
    asideSubHead.textContent = `${aside[index].subHead}`
    
}, 3000);
let freeExpandBtn = document.querySelector('.feature-expand1')
let out1 = document.querySelector('.out1')
freeExpandBtn.addEventListener('click', () =>{
    out1.classList.toggle('active')
})
let personalExpandBtn = document.querySelector('.feature-expand2')
let out2 = document.querySelector('.out2')
personalExpandBtn.addEventListener('click', () =>{
    out2.classList.toggle('active')
})
let professionalExpandBtn = document.querySelector('.feature-expand3')
let out3 = document.querySelector('.out3')
professionalExpandBtn.addEventListener('click', () =>{
    out3.classList.toggle('active')
})
// nextBbtn.addEventListener("click", () => {

//     index++;
//     if(index >= data.results.length-1) {
//         index = 0;
//     }
    
//     slider.src = `${data.results[index].urls.regular}` ;

//   })
