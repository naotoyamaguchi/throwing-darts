function scoreThrows(arr){
  let score = 0;
  let bonus = true;
  for(let i = 0; i < arr.length; i++){
    //removes bonus 100 points if any score is over 5
    if(arr[i] > 5){
      bonus = false;
    }

    if(arr[i] < 5){
      score += 10;
    }

    if(arr[i] >= 5 && arr[i] <= 10){
      score += 5;
    }

  }

  if(bonus === true){
    score += 100;
  }

  return score;
}

module.exports = scoreThrows;