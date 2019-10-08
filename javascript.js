let i = 5;
debugger;
console.log("Global: " + i);
debugger;

function local() {
  console.log("Inside local() code block");
  for (let i = 0; i < 10; i++) {
    console.log("Local: " + i);
    // debugger;
  }
}

local();

console.log("Outside local() code block");

debugger;
console.log("Global: " + i);
debugger;

function localToGlobal() {
  console.log("Inside localToGlobal() code block");
  for (i; i < 10; i++) {
    console.log("Local: " + i);
    debugger;
  }
}

localToGlobal();

console.log("Outside local() code block");

debugger;
console.log("Global: " + i);
debugger;
