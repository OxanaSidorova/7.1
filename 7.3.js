// ширина и высота числовое значение, тип кнопки (type = button),
//  цвет кнопки (green), создайте метод кнопки 
// (onClick, выводящий в консоль информацию о нашей кнопке в формате 
//     // console.log(this.props) выводим все пропертиес
//     не забудьте создать экземпляр класса 
// button - передать аргументы в наш конструктор класса. 
// А также, проверьте в отдельной функции testButton(), 
// что свойства этого экземпляра класса соответствуют заданным.
    

class Button {
    constructor(width, height, type, colour){
        this.props ={
            width,
            height,
            type,
            colour
        }

        }
        onClick(){
         console.log(this.props)
        }
    }
      
let newButton = new Button(50, 80,"Button", "green");
console.log(newButton)


// newButton.onClick();
// console.log(newButton);

// let testButton = new Button(70,80,"Button", "blue");
// console.log (testButton)

let testButton = function (width, height, type,colour) {
    if (width === 60) {
        console.log("valid");
        }

    if(height===70){
        console.log("faild");
    }
    if(type === "Button"){
        console.log("valid")
    }
    if (colour==="red"){
        console.log ("faild")
    }
}
testButton(60, 70, "Button", "red")

