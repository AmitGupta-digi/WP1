

function add() {
    const ad1 = parseFloat(document.getElementById("ad1").value);
    const ad2 = parseFloat(document.getElementById("ad2").value);
    const res = ad1 + ad2;
    document.getElementById("ans1").innerHTML = res;
};

function odd() {
    const odd = parseFloat(document.getElementById("odd").value);
    if (odd % 2 == 1)
        document.getElementById("ansodd").innerHTML = "Odd";
    else if (odd % 2 == 0)
        document.getElementById("ansodd").innerHTML = "Even";
    else
        document.getElementById("ansodd").innerHTML = "Please Enter Number";
};

function prime() {
    const prime = document.getElementById("prime").value;
    if (prime != undefined) {
        if (prime == 1) {
            document.getElementById("ansprime").innerHTML = "Not Prime";
        }
        else {
            let hf = parseInt(prime / 2);
            var flag = parseInt("");
            for (var i = 2; i <= hf; i++) {
                if (prime % i == 0) {
                    flag = 0;
                    break;
                }
                else
                    flag = 1;
            }
        }
        if (flag == 1 || prime == 2 || prime == 3)
            document.getElementById("ansprime").innerHTML = "Prime";
        else
            document.getElementById("ansprime").innerHTML = "Not Prime";
    }
    else
        document.getElementById("ansprime").innerHTML = "Please Enter Number";
};

function fibo() {
    const fibo =parseInt( document.getElementById("fibo").value);
    let n1 = 0, n2 = 1, nextTerm;
    for (let i = 1; i <= fibo; i++) {
        document.getElementById("ansfibo").innerHTML += n1 + " ";
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
};


function facto() {
    const facto =parseInt( document.getElementById("fact").value);
    let fact = 1;
    for (let i = facto; i >=1; i--) {
        fact*=i;
        document.getElementById("ansfact").innerHTML=fact;        
    }
};
function addj(){
    document.getElementById("addj").innerHTML=    `function add() {
        const ad1 = parseFloat(document.getElementById("ad1").value);
        const ad2 = parseFloat(document.getElementById("ad2").value);
        const res = ad1 + ad2;
        document.getElementById("ans1").innerHTML = res;
    };
    `;
   }

   function oddj(){
    document.getElementById("oddj").innerHTML=    `function odd() {
        const odd = parseFloat(document.getElementById("odd").value);
        if (odd % 2 == 1)
            document.getElementById("ansodd").innerHTML = "Odd";
        else if (odd % 2 == 0)
            document.getElementById("ansodd").innerHTML = "Even";
        else
            document.getElementById("ansodd").innerHTML = "Please Enter Number";
    };`;
   }

   function primej(){
    document.getElementById("primej").innerHTML=    `function prime() {
        const prime = document.getElementById("prime").value;
        if (prime != undefined) {
            if (prime == 1) {
                document.getElementById("ansprime").innerHTML = "Not Prime";
            }
            else {
                let hf = parseInt(prime / 2);
                var flag = parseInt("");
                for (var i = 2; i <= hf; i++) {
                    if (prime % i == 0) {
                        flag = 0;
                        break;
                    }
                    else
                        flag = 1;
                }
            }
            if (flag == 1 || prime == 2 || prime == 3)
                document.getElementById("ansprime").innerHTML = "Prime";
            else
                document.getElementById("ansprime").innerHTML = "Not Prime";
        }
        else
            document.getElementById("ansprime").innerHTML = "Please Enter Number";
    };`;
   }

   function fiboj(){
    document.getElementById("fiboj").innerHTML=    `function fibo() {
        const fibo =parseInt( document.getElementById("fibo").value);
        let n1 = 0, n2 = 1, nextTerm;
        for (let i = 1; i <= fibo; i++) {
            document.getElementById("ansfibo").innerHTML += n1 + " ";
            nextTerm = n1 + n2;
            n1 = n2;
            n2 = nextTerm;
        }
    };`;
   }



function factoj(){
    document.getElementById("factoj").innerHTML=    `function facto() {
        const facto =parseInt( document.getElementById("fact").value);
        let fact = 1;
        for (let i = facto; i >=1; i--) {
            fact*=i;
            document.getElementById("ansfact").innerHTML=fact;        
        }
    };
    `;
   }
