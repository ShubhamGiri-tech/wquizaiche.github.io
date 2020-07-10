window.onload = function () {
    show(0);
}
//Questions

let questions = [
    {
        id: 1,
        question: "WHAT IS MANGO?",
        answer: "Fruit",
        options: [
            "Fruit",
            "Vegetable",
            "Rashpan",
            "None of these"
        ]
    },
    {
        id: 2,
        question: "WHAT IS INDIA?",
        answer: "Country",
        options: [
            "Fruit",
            "Country",
            "Veg",
            "None of these"
        ]
    },
    {
        id: 3,
        question: "WHAT IS UP?",
        answer: "State",
        options: [
            "State",
            "Country",
            "Continent",
            "None of these"
        ]
    },
    {
        id: 4,
        question: "WHAT IS ZEBRA?",
        answer: "Animal",
        options: [
            "Animal",
            "Fruit",
            "Flower",
            "None of these"
        ]
    },
    {
        id: 5,
        question: "WHAT IS ODISHA?",
        answer: "None of these",
        options: [
            "Animal",
            "zadi buti",
            "village",
            "None of these"
        ]
    },
    {
        id: 6,
        question: "WHO IS FAVOURITE BROWSER?",
        answer: "None of these",
        options: [
            "Animal",
            "zadi buti",
            "village",
            "None of these"
        ]
    },
    {
        id: 7,
        question: "IN WHICH YEAR DID GANDHIJI IS BORN?",
        answer: "None of these",
        options: [
            "Animal",
            "zadi buti",
            "village",
            "None of these"
        ]
    },
    {
        id: 8,
        question: "WHO IS ASHOKA?",
        answer: "None of these",
        options: [
            "Animal",
            "zadi buti",
            "village",
            "None of these"
        ]
    }
];







function submitForm(e) {
    e.preventDefault();
    let name = document.forms["welcome_form"]["name"].value;


    sessionStorage.setItem("name", name);

    location.href = "quiz1.html";

}

let question_count = 0;
let point = 0;
sessionStorage.setItem("points", point);
var x = "";
var y = "";

function next() {



    if (question_count == 2) {
        if (question_count == 2) {
            x = document.getElementById("r2").checked;
        }
        //let user_answer = x;
        //console.log(x);
        if (x == true) {
            point += 10
        }
    } else if (question_count == 3) {
        if (question_count == 3) {
            y = document.getElementById("r5").checked;
        }
        //let user_answer = x;
        //console.log(x);
        if (y == true) {
            point += 10
        }
    } else if (question_count == 4) {
        if (question_count == 4) {
            y = document.getElementById("t4").value;
        }
        //let user_answer = x;
        //console.log(x);
        if (y == "state") {
            point += 10
        }
    }else if (question_count == 5) {
        if (question_count == 5) {
            y = document.getElementById("r14");
        }
        //let user_answer = x;
        //console.log(x);
        if (y.options[y.selectedIndex].text == "Google Chrome") {
            point += 10
        }
    }else if (question_count == 6) {
        if (question_count == 6) {
            y = document.getElementById("k4").value;
        }
        //let user_answer = x;
        //console.log(x);
        if (y == "1869") {
            point += 10
        }
    }  else {
        let user_answer = document.querySelector("li.option.active").innerHTML;
        console.log(user_answer);
        if (user_answer == questions[question_count].answer) {

            point += 10;
            sessionStorage.setItem("points", point);
        }
        console.log(question_count);
        if (question_count == questions.length - 1) {
            sessionStorage.setItem("time", `${minutes} minutes and ${seconds} seconds`);
            clearInterval(mytime);
            location.href = "end.html";
            return;
        }
    }



    question_count++;

    show(question_count);

}

function show(count) {
    let question = document.getElementById("questions");



    if (count == 2) {
        question.innerHTML = `
     <h2>Q${question_count + 1}. ${questions[count].question}</h2>
     
     <div id="rates">
  <input type="radio" id="r1" name="rate" value="Fixed Rate" > Fixed Rate
  <input type="radio" id="r2" name="rate" value="State" > State
  <input type="radio" id="r3" name="rate" value="Multi Rate"> Multi Rate  
</div>
     
 
     `;

    }
    else if (count == 3) {
        question.innerHTML = `
     <h2>Q${question_count + 1}. ${questions[count].question}</h2>
     
     <div id="rates">
  <input type="checkbox" id="r4" name="rate1" value="Fixed Rate" > Fixed Rate
  <input type="checkbox" id="r5" name="rate1" value=Animal > Animal
  <input type="checkbox" id="r6" name="rate1" value="Multi Rate"> Multi Rate  
</div>
     
 
     `;

    } 

    else if (count == 4) {
        question.innerHTML = `
     <h2>Q${question_count + 1}. ${questions[count].question}</h2>
     
    <div id="rates">
        <input type="text" id="t4" name="rate4" value="State" >  
    </div>
     
 
     `;

    }

    else if (count == 5) {
        question.innerHTML = `
     <h2>Q${question_count + 1}. ${questions[count].question}</h2>
     
    <div id="rates">
    <select id="r14" >
    <option></option>
    <option>Google Chrome</option>
    <option>Firefox</option>  
    <option>Internet Explorer</option>
    <option>Safari</option>
    <option>Opera</option>
  </select>  
    </div>
     
 
     `;

    }

    else if (count == 6) {
        question.innerHTML = `
     <h2>Q${question_count + 1}. ${questions[count].question}</h2>
     
     <div id="rates">
     <input type="text" id="k4" name="rate49" value="" >  
 </div>
     
 
     `;

    }


     else {
        question.innerHTML = `
        <h2>Q${question_count + 1}. ${questions[count].question}</h2>
        <ul class="option_group">
        <li class="option">${questions[count].options[0]}</li>
        <li class="option">${questions[count].options[1]}</li>
        <li class="option">${questions[count].options[2]}</li>
        <li class="option">${questions[count].options[3]}</li>
        </ul>
    
        `;

    }

    //if (question_count == 2) {
    //    x = document.getElementById("r2").checked;
    //}
    //console.log(x);
    toggleActive();
}

function toggleActive() {

    if (question_count == 2) {
        //x=document.querySelectorAll('input[name="rate"]:checked').value;
        /*var rates = document.getElementById('rates').value;
        var rate_value;
        if (rates == 'Fixed Rate') {
            rate_value = document.getElementById('r1').value;

        } else if (rates == 'Variable Rate') {
            rate_value = document.getElementById('r2').value;

        } else if (rates == 'Multi Rate') {
            rate_value = document.getElementById('r3').value;
        }*/

        //document.getElementById('results').innerHTML = rate_value;
    } else {
        let option = document.querySelectorAll("li.option");

        for (let i = 0; i < option.length; i++) {
            option[i].onclick = function () {
                for (let j = 0; j < option.length; j++) {
                    if (option[j].classList.contains("active")) {
                        option[j].classList.remove("active");
                    }
                }
                option[i].classList.add("active");
            }
        }
    }
}