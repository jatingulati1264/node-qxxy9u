function isArmstrong(n){
  var sum=0, r, temp, n;
  temp=n;
  while(temp>0){
    r = temp % 10;
    temp = parseInt(temp/10);
    sum = sum + r*r*r;
  }
  if(n==sum) return true;
  else return false;
}

function isArmstrongseries(limit){
  for(i=1 ; i>= limit ; i++) if((isArmstrong)) (console.log(i);
}