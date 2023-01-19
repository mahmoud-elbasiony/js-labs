//exercise 1

function sumAndAvg() {
    let numbers = new Array();
    let flag = true;
    let sum = 0;
    let avg = 0;
    let checkexit = prompt("how many numbers?");
    let count = parseInt(checkexit);
    if (checkexit == null || isNaN(count)) {
        flag = false;
    }
    for (let i = 0; flag && i < count; i++) {

        checkexit = prompt(`Enter number ${i + 1}:`);
        console.log(checkexit);
        if (checkexit == null || isNaN(parseFloat(checkexit))) {
            flag = false;
        } else {
            numbers[i] = parseFloat(checkexit);
        }
    }
        console.log(checkexit);

    if (flag) {
        numbers.forEach((n) => sum += n);
        avg = sum / count;
        alert(`sum = ${sum}, avg = ${avg}`);
    } else if (checkexit != null) {
        alert(`wrong data typed Entered`);
    }
}
//exercise 2
let phone_book = {
    "ahmed": "0106412145",
    "mahmoud": "0105484645",
    "mohamed": "01541168464",
    "ali": "01246548746"
};

function phone() {

    let flagPhone = true;
    while (flagPhone) {
        let name, phone;
        let checkexit = prompt("Enter \n1: to add\n2: to search\n0: Exit.");
        let choice = parseInt(checkexit);
        switch (choice) {
            case 1:
                add(phone_book);
                break;
            case 2:
                name = prompt("enter name:");
                phone = search(phone_book, name);
                if (phone == undefined) {
                    alert("contact don't exist.");
                } else {
                    alert(`name: ${name}\nphone: ${phone}`);
                }
                break;
            default:
                flagPhone = false;

        }
    }


}

function add(pb) {
    let name, phone;
    name = prompt("enter name:");
    phone = prompt("enter phone:");
    pb[name] = phone;

}
function search(pb, name) {
    return pb[name];
}


//exercise 3 bouns
function clac_area() {
    let flag_area = true;
    let choice=true;
    while (flag_area && choice!=null) {
        let h, w;
        choice = prompt(`calculate area for \n1: Circle\n2: Rectangle\\Square\n3: Triangle\n4: Parallelogram\n5: Trapezium\n6: Ellipse\n0: Exit.`);
        console.log(choice);
        if (choice != null) {
            switch (choice.toLocaleLowerCase()) {
                case '1':
                case 'circle':
                    h = parseFloat(prompt("enter radius:"))||0;
                    alert(`area = ${Math.PI*h*h}`);
                    break;
                case '2':
                case "rectangle":
                case "square":
                    h = parseFloat( prompt("enter hight:"))||0;
                    w = parseFloat(prompt("enter width:")) ||0;
                    alert(`area = ${h*w}`);
                    break;
                case '3':
                case 'triangle':
                    h = parseFloat( prompt("enter hight:"))||0;
                    w = parseFloat(prompt("enter base:")) ||0;
                    alert(`area = ${h*w/2}`);
                    break;
                case '4':
                case 'parallelogram':
                    h = parseFloat( prompt("enter hight:"))||0;
                    w = parseFloat(prompt("enter base:")) ||0;
                    alert(`area = ${h*w}`);
                            
                    break;
                case '5':
                case 'trapezium':
                    h = parseFloat( prompt("enter hight:"))||0;
                    w = parseFloat(prompt("enter length of a:")) ||0;
                    w += parseFloat(prompt("enter length of b:")) ||0;
                    alert(`area = ${h*w/2}`);
                    break;
                case '6':
                case 'ellipse':
                    h = parseFloat( prompt("enter length minor axis a:"))||0;
                    w = parseFloat(prompt("enter length minor axis b:")) ||0;
                    alert(`area = ${22*h*w/7}`);
                    break;
                default:
                    flag_area = false;

            }
        }
    }

}