(()=>{"use strict";({length:3,width:5,grid:[],shipIDs:[],ships:[],initGrid(){for(let i=0;i<this.length;i+=1){const i=[];for(let s=0;s<this.width;s+=1)i.push(null);this.grid.push(i)}},placeShip(i,s,t){const h=s[0],e=s[1];if("Invalid position"===this.checkValidity(s))return"Invalid position";let n;if(this.ships.push(i),0!==this.shipIDs.length){const i=this.shipIDs.length-1;this.shipIDs.push(this.shipIDs[i]+1),n=this.shipIDs[i]}else this.shipIDs.push(0),n=0;if("vertical"===t)for(let s=0;s<i.length;s+=1)this.grid[h][e+s]=n;else for(let s=0;s<i.length;s+=1)this.grid[h+s][e]=n;return""},checkValidity(i){const s=i[0],t=i[1];return"number"!=typeof s||"number"!=typeof t||s<0||t<0||s>this.length||t>this.width?"Invalid position":""},receiveAttack(i){if("Invalid position"===this.checkValidity(i))return"Invalid position";const s=i[0],t=i[1],h=this.grid[s][t];return null!==h?"miss"===h||"hit"===h?"Invalid attack":(this.ships[h].hit(),!0===this.checkAllDead()?(this.grid[s][t]="hit",`Hit on ${this.shipIDs[h]}! All ships sunk!`):(this.grid[s][t]="hit",`Hit on ${this.shipIDs[h]}!`)):(this.grid[s][t]="miss","Miss")},checkAllDead(){let i=!1;return this.ships.forEach((s=>{s.isSunk()&&(i=!0)})),i}}).initGrid()})();