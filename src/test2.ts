interface team {
    [propName: string]: number;
}

const dreamTeam: team = {
    playerNmber1: 521,
    playerNmber2: 754,
    playerNmber3: 338,
};

const countTotalScore = function (teamObj: team): number {
    return Object.values(teamObj).reduce((player, acc) => acc + player, 0);
};

console.log("Total score is", countTotalScore(dreamTeam));


//----------------------------------------------------------//


type colors = "RED" | "GREEN" | "BLUE";

const getRandomColor = (
    firstColor?: colors,
    secondColor?: colors,
    thirdColor?: colors
): string => {
    const red = Math.floor((firstColor ? 255 : 0) * Math.random());
    const green = Math.floor((secondColor ? 255 : 0) * Math.random());
    const blue = Math.floor((thirdColor ? 255 : 0) * Math.random());
    const opacity = Math.random().toPrecision(2);

    return `rgba(${red},${green},${blue},${opacity})`;
};

const color = getRandomColor("RED", "GREEN", "BLUE");

console.log("%c%s", `color:${color}; font-size: 50px;`, "RANDOM COLOR");
