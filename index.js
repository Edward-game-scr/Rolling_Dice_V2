const roll_dice = () => {

    const DiceResult = document.getElementById("DiceResult");
    DiceResult.textContent = "Rolling dice...";

    setTimeout( function() {

        const NumOfDice = document.getElementById("NumOfDice").value;
        DiceResult.textContent = "";
        const DiceImages = document.getElementById("DiceImages");
        const values = [];
        const images = [];

        for(let i = 0; i < NumOfDice; ++i) {

            const value = Math.floor(Math.random() * 6) + 1;

            values.push(value);

            images.push(`<img src="Images/${value}.png" alt="Dice ${value}">`);

        }

        DiceResult.textContent = `dice: ${values.join(', ')}`;
        DiceImages.innerHTML = images.join('');
    
    } ,4000);

}
