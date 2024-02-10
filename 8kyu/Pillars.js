//problem
There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. Your function accepts three arguments:

1. number of pillars (≥ 1);
2. distance between pillars (10 - 30 meters);
3. width of the pillar (10 - 50 centimeters).
Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).

//answer 1
function pillars(num_pill, dist, width) {
  // your code here
  return num_pill>1?(num_pill-1)*dist*100+(num_pill-2)*width:0;
}

//answer 2
function pillars(num_pill, dist, width) {
  if (num_pill < 2) return 0;
  const widthAllPillars = (num_pill - 2) * width;
  const distAll = (num_pill - 1) * (dist * 100);
  
  return distAll + widthAllPillars;
}

//answer 3
function pillars(num_pill, dist, width) {
  return num_pill <= 1 ? 0 : (num_pill - 1) * dist * 100 + (num_pill - 2) * width;
}

//answer 4
function pillars(num_pill, dist, width) {
    if (num_pill === 1) {
        return 0;
    }else{
        let distance = dist * ((num_pill -1) * 100 );
        let pillars = num_pill - 2;
        return distance + (width * pillars);
    }  
}
