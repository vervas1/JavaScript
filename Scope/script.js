// Global scope - pasiekiamas visur mano kode
// Function scoep - (pasiekiami tik funkcijos viduje) uz funkciju ribu nepasieksim let, const, var ,
// block scope - pasiekiamas tik bloko viduje, nera funkcija,  ; if yra tik salyga,

const printName = () => {
  let myName = 'John';
};

console.log(myName);
printName();
