function scoreThrows(arr){

  function isGoodNumber(elem, index){
    return elem >=0;
  }

  if(arr.constructor !== Array){
    return false;
  }

  if(arr.every(isGoodNumber) === false){
    return false;
  }

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