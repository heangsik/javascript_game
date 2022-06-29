let board = Array(Array(0, 0, 0, 0), Array(0, 0, 0, 0), Array(0, 0, 0, 0), Array(0, 0, 0, 0));
let tableId =   Array(Array("00", "01", "02", "03"),
                Array("10", "11", "12", "13"),
                Array("20", "21", "22", "23"),
                Array("30", "31", "32", "33"));
let score;
//console.log(tableId);
const colorSelect= function (cell)
{
    console.log(cell)
    let className = "num2";
    switch(cell.innerHTML)
    {
        case 4: className = "num4"; break;
        case 8: className = "num8"; break;
        case 16: className = "num16"; break;
        case 32: className = "num32"; break;
        case 64: className = "num64"; break;
        case 128: className = "num128"; break;
        case 256: className = "num256"; break;
        case 512: className = "num512"; break;
        case 1024: className = "num1024"; break;
        case 2048: className = "num2048"; break;
    }
    cell.className = className;
}
const rotate = function(cnt)
{
    let bufArray = Array(Array(0, 0, 0, 0), Array(0, 0, 0, 0), Array(0, 0, 0, 0), Array(0, 0, 0, 0));
    for(let ro = 0 ; ro < cnt ; ro++)
    {
        for(let row = 0; row < 4; row++)
        {
            for(let col = 0; col < 4 ; col++)
            {
                bufArray[col][4-1-row] = board[row][col];
            }
        }
        for(let row = 0; row < 4; row++)
        {
            for(let col = 0; col < 4 ; col++)
            {
                board[row][col] = bufArray[row][col] ;
            }
        }
        updateHandler();
    }
}

const move = function () {

};
const arrowKeyDownEventHandler = function (e){
    rotate(1);
    switch(e.keyCode)
    {
        case 38:
            console.log("up");
            break;
        case 40:
            console.log("down");
            break;
        case 37:
            console.log("left");
            break;
        case 39:
            console.log("right");
            break;
    }
}
const updateHandler = function () {
    document.getElementById("score").innerHTML = score;


    for(let i = 0 ; i < 4 ; i++)
    {
        for(let j = 0 ; j < 4 ; j++)
        {
            let cell = document.getElementById(tableId[i][j]);
            // if(  board[i][j] == 0)
            // {
            //     cell.innerHTML = "";
            // }
            // else
            {
                cell.innerHTML = board[i][j];
                // colorSelect(cell);
            }
            ;
        }
    }

};

const initializeHandler = function(){

    score = 0;
    let cnt = 0;
    for(let i = 0 ; i < 4 ; i++)
    {
        for(let j = 0 ; j < 4 ; j++)
        {
            board[i][j] = cnt;
            cnt++;
        }
    }

    console.log(cnt);
    let initCnt = 0;
    // while(initCnt < 2)
    // {
    //
    //     let x = creatRandom(4);
    //     let y = creatRandom(4);
    //     // console.log(x, y, initCnt, board[x][y])
    //     // console.log(board[x][y]===0)
    //     if( board[x][y] === 0 )
    //     {
    //         board[x][y] = 2;
    //         initCnt++;
    //     }
    // }
    updateHandler();
}
const creatRandom = function (maxInt) {
    return parseInt(Math.random() * maxInt);
};



document.onkeydown = arrowKeyDownEventHandler;