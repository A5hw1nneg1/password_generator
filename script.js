var passtype = 1

const type_heading = async () => {
    let heading = "WELCOME TO PASSWORD GENERATOR"
    let letters = heading.split("")
    let i = 0
    while (i < letters.length) {
        await waitForMs(100);
        document.getElementById("typing-text").append(letters[i])
        i++
    }
    return
}

function waitForMs(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

type_heading()


function makepassword(x) {
    console.log(x)
    return new Promise((resolve, reject) => {
        var result = '';
        var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        var numbers = "0123456789"
        var special = '@#$%^&*^?+-(){}[]><_'
        if (x == 1) {
            for (var i = 0; i < 10; i++) {
                result += alphabet.charAt(Math.floor(Math.random() * (alphabet.length)));
            }
        }
        else if (x == 2) {
            for (var i = 0; i < 10; i++) {
                let y = Math.floor(Math.random() * 2)
                if (y == 1) {
                    result += alphabet.charAt(Math.floor(Math.random() * (alphabet.length)));
                }
                else {
                    result += numbers.charAt(Math.floor(Math.random() * (numbers.length)));
                }
            }
        }

        else {
            for (var i = 0; i < 10; i++) {
                let y = Math.floor(Math.random() * 3)
                if (y == 1) {
                    result += alphabet.charAt(Math.floor(Math.random() * (alphabet.length)));
                }
                if (y == 2) {
                    result += numbers.charAt(Math.floor(Math.random() * (numbers.length)));
                }
                else {
                    result += special.charAt(Math.floor(Math.random() * (special.length)));
                }
            }
        }
        resolve(result)
    })


}

const weak = ()=>{
    passtype = 1
    console.log(passtype)
}
const strong = ()=>{
    passtype = 2
    console.log(passtype)
}
const verystrong = ()=>{
    passtype = 3
    console.log(passtype)
}

const selectText = ()=>{
    var copytext = document.getElementById("password")
    navigator.clipboard.writeText(copytext.innerText)
    console.log("text copied")
}

const generate = async (n) => {
    document.getElementById(`confirmed`).classList.remove(`visibility`);
    document.getElementById("password").innerHTML = ""
    console.log(n)
    let password = await makepassword(n)
    console.log(password)
    document.getElementById("password").append(password)
}


