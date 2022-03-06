const age = 8;
let isAdult = false
  canWork = false
  canEnlist = false
  canDrink = false

switch (true) {
  case age >= 21:
    canDrink = true;
  case age >= 18:
    isAdult = true;
    canEnlist = true;
  case age >= 16:
    canWork = true;
}