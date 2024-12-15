function foo(x, memo = {}){
  if(x in memo) return memo[x];
  if(x == 1) return true;
  if(x == 2) return false; 
  memo[x] = foo(x-2, memo) && foo(x-1, memo);
  return memo[x];
}