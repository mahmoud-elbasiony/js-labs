
function getAge() {
    let flag = true;
    do {
        let age = prompt("Enter your age:");
        console.log(age);
        if (age == null) {
            flag = false;
        } else {
            age = Number(age);
        }
        if (!isNaN(age) && age > 0) {
            if (age >= 1 && age <= 10) {
                alert(` Child is between 1-10`);
            } else if (age >= 11 && age <= 18) {
                alert("Teenager is between 11-18");
            } else if (age >= 19 && age <= 50) {
                alert("Grown up is between 19-50");
            } else if (age > 50) {
                alert("Old is greater than 50");
            }
        } else if (age != null) {
            alert(`Enter a vaild Age`);
        }


    } while (flag);

}
function countVowels() {
    let words = prompt("Enter a String:");
    let count = 0;
    for (let ch of words) {
        switch (ch.toLowerCase()) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                count++;
                break;
        }
    }
    alert(`number of vowels in that string is ${count}`);
}

function convert() {
    let flagTime = true;
    do {
        let time = prompt(`Enter time in 24:`);
        console.log(time);

        if (time == null) {
            flagTime = false;
        } else {
            time = Number(time);
        }

        if (time != null && !isNaN(time) && time >= 0 && time <= 24) {
            if (time >= 0 && time <= 12) {
                alert(`${time} is ${time} AM`);
            } else if (time >= 13 && time <= 24) {
                alert(`${time} is ${time - 12} PM`);
            }
        } else if (time != null) {
            alert(`Enter a vaild time`);
        }


    } while (flagTime);



}


