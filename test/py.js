function solution(s){
  var answer = true;

  let str = s.toLowerCase();
  
  let str_split = str.split('');
  // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
  console.log(str_split)
  
  let p = 0;
  let y = 0;
  
  for(let i = 0; i < str_split.length; i++){
      if(str_split[i] == 'p'){
          p += 1;
      } else if(str_split[i] == 'y'){
          y += 1;
      } 
  }
  
  if(p == y){
      return true;
  } else { 
      return false;
  }

  
}