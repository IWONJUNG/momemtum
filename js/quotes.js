
const quotes = [
    {
        quote:'If I have lost confidence in myself, I have the universe against me.',
        author: 'Ralph Waldo Emerson',
    },
    {
        quote:'The farther behind I le,ave the past, the closer I am to forging my own character.',
        author: 'Isabelle Eberhardt'
    },
    {
        quote:'Nothing is a waste of time if you use the experience wisely.',
        author: 'Auguste Rodin',
    },
    {
        quote:'We can draw lessons from the past, but we cannot live in it.',
        author: 'Lyndon B. Johnson',
    },
    {
        quote:'Perpetual optimism is a force multiplier.',
        author: 'Colin Powell',
    },
    {
        quote:'He who has never hoped can never despair.',
        author: 'George Bernard Shaw',
    },
    {
        quote:'To accomplish great things, we must dream as well as act.',
        author: 'Anatole France',
    },
    {
        quote:'Never deprive someone of hope; it might be all they have.',
        author: 'H. Jackson Brown Jr.',
    },
    {
        quote:'The greatest risk is the risk of riskless living.',
        author: 'Stephen Covey',
    },
    {
        quote:'Wheresoever you go, go with all your heart.',
        author: 'Confucius',
    },
    
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

 
// 0 ~ 배열 길이 만큼의 정수를 랜덤으로 반환
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]; 


quote.innerText = todaysQuote.quote;
author.innerText = `- ${todaysQuote.author} -`;