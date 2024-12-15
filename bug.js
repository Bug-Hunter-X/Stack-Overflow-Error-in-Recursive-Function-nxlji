function foo(x){
  if(x == 1) return true;
  if(x == 2) return false; 
  return foo(x-2) && foo(x-1);
}