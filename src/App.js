import { useState } from "react";

function App() {
  const [value, setvalue] = useState("");
  const [result, setresult] = useState("");
  const handleInput = (e) => {
    const val = e.target.textContent;
    setvalue((prev) => prev + val);
   // console.log(e.target.textContent);
  };
  const precedence = (operator) => {
    switch (operator) {
      case "+":
      case "-":
        return 1;
      case "*":
      case "/":
        return 2;
      default:
        return 0;
    }
  };

  const calculate = (value) => {
    //value become expression
    let output = [];
    let store = [];
    let operator = ["+", "-", "*", "/"];
    console.log(typeof(value));//string
    for (let i = 0; i < value.length; i++) {
      let number = value[i];
      if (!isNaN(number)) {
        //this is for number
        while (!isNaN(value[i + 1]) || value[i + 1] === ".") {
          number = number + value[i+1];
          i++;
          
        }
        output.push(number);
      } else if (operator.includes(number)) {
        //this is for operator
        while (
          store.length &&
          precedence(number) <= precedence(store[store.length - 1])
        ) {
          output.push(store.pop());
        }
      
        store.push(number);
      }
    }
    while(store.length){
      output.push(store.pop());
    }
    let resultarr=[];
    for(let i=0;i<output.length;i++){
      let chars=output[i]
      if(!isNaN(chars)){
        resultarr.push(chars);
      }
      else{
        let b=resultarr.pop();
        let a=resultarr.pop();
        switch(chars){
          case "+":
            resultarr.push(a+b);
            break;
            case "-":
              resultarr.push(a-b);
              break;
            case "*":
            resultarr.push(a*b);
            break;
            case "/":
              resultarr.push(a/b);
              break;
              default:
                break;


        }
        return resultarr.pop()
      }
    }
  };

  const clearfun = () => {
    setvalue("");
    setresult("");
  };

  const validatefun = () => {
    if (value === "") {
      setresult("Error");
    } else if (value.includes("0/0")) {
      setresult("NaN");
    } else if (value.includes("1/0")) {
      setresult("Infinity");
    } else {
      setresult(calculate(value));
     
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h2>React Calculator</h2>
      <input type="text" value={value} readOnly />
      <h5>{result}</h5>
      <div
        style={{
          padding: "5px",
          display: "flex",
          justifyContent: "space-between",
          width: "300px",
          height: "60px",
        }}
      >
        <button
          style={{
            width: "60px",
            border: "3px solid black",
            borderRadius: "5px",
            fontWeight: "bold",
            fontSize: "25px",
          }}
          onClick={(e) => handleInput(e)}
        >
          7
        </button>
        <button
          style={{
            width: "60px",
            border: "3px solid black",
            borderRadius: "5px",
            fontWeight: "bold",
            fontSize: "25px",
          }}
          onClick={(e) => handleInput(e)}
        >
          8
        </button>
        <button
          style={{
            width: "60px",
            border: "3px solid black",
            borderRadius: "5px",
            fontWeight: "bold",
            fontSize: "25px",
          }}
          onClick={(e) => handleInput(e)}
        >
          9
        </button>
        <button
          style={{
            width: "60px",
            border: "3px solid black",
            borderRadius: "5px",
            fontWeight: "bold",
            fontSize: "25px",
          }}
          onClick={(e) => handleInput(e)}
        >
          +
        </button>
      </div>

      <div
        style={{
          padding: "5px",
          display: "flex",
          justifyContent: "space-between",
          width: "300px",
          height: "60px",
        }}
      >
        <button
          style={{
            width: "60px",
            border: "3px solid black",
            borderRadius: "5px",
            fontWeight: "bold",
            fontSize: "25px",
          }}
          onClick={(e) => handleInput(e)}
        >
          4
        </button>
        <button
          style={{
            width: "60px",
            border: "3px solid black",
            borderRadius: "5px",
            fontWeight: "bold",
            fontSize: "25px",
          }}
          onClick={(e) => handleInput(e)}
        >
          5
        </button>
        <button
          style={{
            width: "60px",
            border: "3px solid black",
            borderRadius: "5px",
            fontWeight: "bold",
            fontSize: "25px",
          }}
          onClick={(e) => handleInput(e)}
        >
          6
        </button>
        <button
          style={{
            width: "60px",
            border: "3px solid black",
            borderRadius: "5px",
            fontWeight: "bold",
            fontSize: "25px",
          }}
          onClick={(e) => handleInput(e)}
        >
          -
        </button>
      </div>

      <div
        style={{
          padding: "5px",
          display: "flex",
          justifyContent: "space-between",
          width: "300px",
          height: "60px",
        }}
      >
        <button
          style={{
            width: "60px",
            border: "3px solid black",
            borderRadius: "5px",
            fontWeight: "bold",
            fontSize: "25px",
          }}
          onClick={(e) => handleInput(e)}
        >
          1
        </button>
        <button
          style={{
            width: "60px",
            border: "3px solid black",
            borderRadius: "5px",
            fontWeight: "bold",
            fontSize: "25px",
          }}
          onClick={(e) => handleInput(e)}
        >
          2
        </button>
        <button
          style={{
            width: "60px",
            border: "3px solid black",
            borderRadius: "5px",
            fontWeight: "bold",
            fontSize: "25px",
          }}
          onClick={(e) => handleInput(e)}
        >
          3
        </button>
        <button
          style={{
            width: "60px",
            border: "3px solid black",
            borderRadius: "5px",
            fontWeight: "bold",
            fontSize: "25px",
          }}
          onClick={(e) => handleInput(e)}
        >
          *
        </button>
      </div>

      <div
        style={{
          padding: "5px",
          display: "flex",
          justifyContent: "space-between",
          width: "300px",
          height: "60px",
        }}
      >
        <button
          style={{
            width: "60px",
            border: "3px solid black",
            borderRadius: "5px",
            fontWeight: "bold",
            fontSize: "25px",
          }}
          onClick={(e) => clearfun(e)}
        >
          C
        </button>
        <button
          style={{
            width: "60px",
            border: "3px solid black",
            borderRadius: "5px",
            fontWeight: "bold",
            fontSize: "25px",
          }}
          onClick={(e) => handleInput(e)}
        >
          0
        </button>
        <button
          style={{
            width: "60px",
            border: "3px solid black",
            borderRadius: "5px",
            fontWeight: "bold",
            fontSize: "25px",
          }}
          onClick={() => validatefun()}
        >
          =
        </button>
        <button
          style={{
            width: "60px",
            border: "3px solid black",
            borderRadius: "5px",
            fontWeight: "bold",
            fontSize: "25px",
          }}
          onClick={(e) => handleInput(e)}
        >
          /
        </button>
      </div>
    </div>
  );
}

export default App;
