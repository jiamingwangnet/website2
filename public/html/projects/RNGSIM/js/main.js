function calculateNumber() {
    const r = Math.random();
    let N = 1;

    while( !(Math.pow(2, -N + 1) > r && r >= Math.pow(2, -N)) )
        N++;
    
    return N;
}

const settings = {
    delay: 1000,
}

let numCounter = {}
let total = 0;
let highest = 0;

const numList = [];

function displayList() {
    const list = document.querySelector(".num-list");

    for(let i = 0; i < list.children.length; i++) {
        const child = list.children[i];

        if(i < numList.length) {
            const colorOffset = 255 - (255 * (numList[i].avg / 50));

            child.children[0].innerHTML = numList[i].N;
            child.children[1].innerHTML = numList[i].avg + "%";
            child.style.backgroundColor = `rgb(${colorOffset}, ${colorOffset}, ${colorOffset})`;
            if(colorOffset >= 191.25)
                child.style.color = "black";
            else
                child.style.color = "white";
        }
    }
}

function updateStats()
{
    const highestNum = document.querySelector("#highest-num");
    const highestChance = document.querySelector("#highest-chance");
    const total = document.querySelector("#total");

    highestNum.innerHTML = highest;
    highestChance.innerHTML = (Math.pow(2, -highest) * 100).toFixed(3) + '%';
    total.innerHTML = numList.length;
}

function getNumberLoop() {
    const N = calculateNumber();
    const number = document.querySelector('#number');
    const avg = document.querySelector('#chance-avg');
    const chance = document.querySelector('#chance');

    displayList();

    number.innerHTML = N;
    avg.innerHTML = Math.pow(2, -N) * 100 + '%';

    if(numCounter[N] == undefined)
        numCounter[N] = 1;
    else
        numCounter[N]++;
    total ++;

    chance.innerHTML = (numCounter[N] / total * 100).toFixed(3) + '%';

    if(N > highest)
        highest = N;

    const numData = {
        N: N,
        count: numCounter[N],
        avg: Math.pow(2, -N) * 100,
        chance: (numCounter[N] / total * 100).toFixed(3)
    }

    numList.unshift(numData);

    updateStats();

    setTimeout(getNumberLoop, settings.delay);
}

const searchInput = document.querySelector("#probability-search");
function probabilitySearch()
{
    const search = searchInput.value;
    const title = document.querySelector("#search-title");
    const theoretical = document.querySelector("#theoretical");
    const experimental = document.querySelector("#experimental");
    const warn = document.querySelector("#invalid");

    if(search % 1 != 0 || search < 1 && !(search == "")) {
        title.innerHTML = "Invalid input";
        theoretical.innerHTML = "";
        experimental.innerHTML = "";
        warn.style.display = "block";
        return;
    }

    if(search != "")
    {
        title.innerHTML = search;
        theoretical.innerHTML = "theoretical: " + (Math.pow(2, -search) * 100) + '%';
        if(numCounter[search] == undefined)
            experimental.innerHTML = 'experimental: 0.000%';
        else
            experimental.innerHTML = "experimental: " + (numCounter[search] / total * 100) + '%';
        warn.style.display = "none";
    }
    else 
    {
        experimental.innerHTML = '';
        theoretical.innerHTML = "";
        title.innerHTML = "";
        warn.style.display = "none";
    }
}

searchInput.addEventListener("input", probabilitySearch);

getNumberLoop();