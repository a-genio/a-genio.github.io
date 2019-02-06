let tiles = [];
let freeCell = {y: 3, x: 3};
let shuffled = false;

function createCellNull() {
	let cell = document.createElement("div");
    cell.classList.add("field__cell", "field__cell--null");
	return cell;
                           }
 function setCellOffset(cell) {
/* добавление строки  px необходимой для формирования
корректных свойств CSS. */
	 cell.style.left = (15 + (15 + 81.25) * cell.x) + "px";
     cell.style.top = (15 + (15 + 81.25) * cell.y) + "px";
}
function appendCell(cell) {
     let field = document.getElementById("field");
      field.appendChild(cell);
}

function createField() {
     for(let y = 0; y < 4; ++y) {
         for(let x = 0; x < 4; ++x) {
			 let cell = createCellNull();
			 cell.y = y;
			 cell.x = x;
			 setCellOffset(cell);
			 appendCell(cell);
         }
     }
}
function createCellTile() {
     let cell = document.createElement("div");
     cell.classList.add("field__cell", "field__cell--tile");
	return cell;
	
}

function createTiles() {
	for(let y = 0; y < 4; ++y) {
		 for(let x = 0; x < 4; ++x) {
 			let n = y * 4 + x + 1;
/* Всего костяшек должно быть 15. */
               if(n < 16) {
               let cell = createCellTile();
               cell.y = y;
               cell.x = x;
               cell.innerHTML = n;
               setCellOffset(cell);
               appendCell(cell);
/* Добавляем костяшку в массив. */
               tiles.push(cell);
                       }
         }
     }
}

function between(a, b, t) {
      return a <= t && t <= b || b <= t && t <= a;
                      }

function checkVictory() {
   for(let i = 0; i < tiles.length; ++i) {
       let n = tiles[i].y * 4 + tiles[i].x + 1;
/*  нестрогое сравнение, так как строка */
       if(tiles[i].innerHTML != n) return;
                       }
       document.getElementById("modal").classList.add("modal--visible");
                   }



function tileClick(event) {
	
	let bar = event.target;
/* Запооминаем старые координаты каждой ячейки */
	let oldX = bar.x, oldY = bar.y;
	if(bar.y == freeCell.y) {
		for(let i = 0; i < tiles.length; ++i) {
			let tile = tiles[i];
			if(tile.y == bar.y && between(bar.x, freeCell.x, tile.x)) {
				if(bar.x < freeCell.x) tile.x += 1;
				else tile.x -= 1;
				setCellOffset(tile);
			}
		}
		freeCell = {y: oldY, x: oldX};
	} else if(bar.x == freeCell.x) {
		for(let i = 0; i < tiles.length; ++i) {
			let tile = tiles[i];
			if(tile.x == bar.x && between(bar.y, freeCell.y, tile.y)) {
				if(bar.y < freeCell.y) tile.y += 1;
				else tile.y -= 1;
				setCellOffset(tile);
			}
		}
		freeCell = {y: oldY, x: oldX};
	}
/* Если мы не в стадии перемешивания,
проверяем, собрана ли головоломка */
	if(shuffled) {
		checkVictory();
	}
	
}




function animateTiles() {
	for(let i = 0; i < tiles.length; ++i) {
		tiles[i].addEventListener("click", tileClick);
		
	}
}

function shuffleTiles() {
	for(let i = 0; i < 1000; ++i) {
		let index = Math.floor(Math.random() * tiles.length);
		tiles[index].click();
	}
    shuffled = true;
}




createField();
createTiles();
animateTiles();
shuffleTiles();

let plita = document.getElementsByClassName("field__cell field__cell--tile");
let count=0;
let hodi = document.getElementById("hodi");
let win = document.getElementById("win");
function hod() {
	count++;
	hodi.innerHTML = count;
	win = hodi.value;
	};
			
for(i=0; i<plita.length; i++) {
	plita[i].addEventListener("click", hod);
	}