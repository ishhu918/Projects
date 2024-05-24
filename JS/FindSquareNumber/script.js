function squareNum(){
    const SquareNumberEL = document.getElementById('SquareNumber').value;
    let SquareNumberResult = SquareNumberEL**2;

    document.getElementById('result').innerText = `Square of ${SquareNumberEL} is ${SquareNumberResult}`;
}