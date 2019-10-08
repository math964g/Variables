debugger;
function local() {
  console.log("Inside local() code block");
  for (let i = 0; i < 4; i++) {
    console.log("Local: " + i);
    debugger;
  }
}

  local();

  debugger;





  let i = 2;
  debugger;
  console.log("Global: " + i);
  debugger;

  function localUsingGlobal() {
    console.log("Inside localUsingGlobal() code block");
    for (let i = 0; i < 4; i++) {
      console.log("Local: " + i);
      // debugger;
    }
  }

  localUsingGlobal();

  console.log("Outside local() code block");

  debugger;
  console.log("Global: " + i);
  debugger;






  function localToGlobal() {
    console.log("Inside localToGlobal() code block");
    for (i; i < 4; i++) {
      console.log("Local: " + i);
      debugger;
    }
  }

  localToGlobal();

  console.log("Outside local() code block");

  debugger;
  console.log("Global: " + i);
  debugger;
