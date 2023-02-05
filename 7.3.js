// ширина и высота числовое значение, тип кнопки (type = button),
//  цвет кнопки (green), создайте метод кнопки
// (onClick, выводящий в консоль информацию о нашей кнопке в формате
//     // console.log(this.props) выводим все пропертиес
//     не забудьте создать экземпляр класса
// button - передать аргументы в наш конструктор класса.
// А также, проверьте в отдельной функции testButton(),
// что свойства этого экземпляра класса соответствуют заданным.

class Button {
  constructor(width, height, type, colour) {
    this.props = {
      width,
      height,
      type,
      colour,
    };
  }
  onClick() {
    console.log(this.props);
  }
}

let newButton = new Button(50, 80, "Button", "green");
console.log(newButton);

// newButton.onClick();
// console.log(newButton);

// let testButton = new Button(70,80,"Button", "blue");
// console.log (testButton)

function testButton(width, height, type, colour) {
  if (
    newButton.props.width === width &&
    newButton.props.height === height &&
    newButton.props.type === type &&
    newButton.props.colour == colour
  ) {
    console.log("the button is valid");
  } else {
    console.log("the button is unvalid");
  }
}

console.log(testButton(70, 80, "Button", "blue"));

