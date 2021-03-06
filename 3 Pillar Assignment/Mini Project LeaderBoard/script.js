document.getElementById("add").onclick = function() {
    let allAreFilled = true;
    document.getElementById("info").querySelectorAll("[required]").forEach(function(i) {
        if (!allAreFilled) return;
        if (i.type === "radio") {
            let radioValueCheck = false;
            document.getElementById("info").querySelectorAll(`[name=${i.name}]`).forEach(function(r) {
                if (r.checked) radioValueCheck = true;
            })
            allAreFilled = radioValueCheck;
            return;
      }
    if (!i.value) { allAreFilled = false;  return; }
    })
    if (!allAreFilled) {
        alert("All fields mandatory");
    }
    else{
        savePlayerData();
        const firstNameInput = document.getElementById('firstname');
        firstNameInput.value = '';

        const lastNameInput = document.getElementById('lastname');
        lastNameInput.value = '';
        
        const countryInput = document.getElementById('country');
        countryInput.value='';

        const scoreInput = document.getElementById('score');
        scoreInput.value='';


    }
  };
const Second_container = document.querySelector(".second_container");
// console.log(Second_container);

let playerInfo = [];  //player array

// creating a card
const generateNewCard = (playerData) => `
<div class="second">
        <div class="second_1">
            <div>${playerData.firstName}</div>
            <div>${playerData.lastName}</div>
            <div>${playerData.Country}</div>
            <div>${playerData.Score}</div>
            
        </div>
        <div class="second_2">
            <div class="display" id=${playerData.id} onclick="deleteCard.apply(this,arguments)"><img style="width: 20px;" id=${playerData.id} src="./delete-icon.svg" onclick="deleteCard.apply(this,arguments)" />
            </div>
            <div class="display" id=${playerData.id} onclick="updateScore().apply(this,arguments)">+5</div>
            <div class="display">-5</div>
        </div>
    </div>
`;


// using local storage to store data
const loadInitialData = () => {
    const getCardData = localStorage.getItem("player_array");
    const {cards} = JSON.parse(getCardData);
    cards.map((card_obj)=>{
        Second_container.insertAdjacentHTML("afterend",generateNewCard(card_obj));
        playerInfo.push(card_obj);
    });
}

// delete playerdata
const deleteCard = (event) => {
    
    event = window.event;
    const targetID = event.target.id;
    const tagname = event.target.tagName;

    playerInfo = playerInfo.filter((card_obj) => card_obj.id !== targetID)
    localStorage.setItem("player_array", JSON.stringify({cards:playerInfo}));
    
    if(tagname === "IMG"){
         return  event.target.parentElement.parentElement.parentElement.remove();
    }else{
        return event.target.parentElement.parentElement.remove();
    }
       
};

// saving player info filled in input section
const savePlayerData = () => {
    const playerData = {
        id: `${Date.now()}`,
        firstName: document.getElementById("firstname").value,
        lastName: document.getElementById("lastname").value,
        Country: document.getElementById("country").value,
        Score: document.getElementById("score").value
    }
    // console.log(playerData);
    Second_container.insertAdjacentHTML("afterend", generateNewCard(playerData));

    playerInfo.push(playerData);
    localStorage.setItem("player_array", JSON.stringify({cards:playerInfo}));
     
} ;

const updateScore = (event) => {
    
    event = window.event;
    const targetID = event.target.id;
    const tagname = event.target.tagName;

    playerInfo.forEach(o => {
        if(o.id == targetID){
            ss = o.Score;
            o.Score=ss+5;
        }
    });
    
    //console.log(typeof(ss));
   
    document.getElementsById("display")[1].value = ss+5;
    
   
};