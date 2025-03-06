// Switch = Switch Can Be Very Efficient Replecment to many else if Statement

// let day = 2;

// switch (day) {
//   case 1:
//     console.log('Monday');
//     break;
//   case 2:
//     console.log('Tuesday');
//     break;
//   case 3:
//     console.log('Wednesday');
//     break;
//   case 4:
//     console.log('Thursday');
//     break;
//   case 5:
//     console.log('Friday');
//     break;
//   case 6:
//     console.log('Saturday');
//     break;
//   case 7:
//     console.log('Sunday');
//     break;
//   default:
//     console.log(`${day} is not a Valid Day`)
// }

let tastScore = 33;
let letterGrade;

switch (true) {
  case tastScore >= 90:
    letterGrade = "A";
    break;
  case tastScore >= 80:
    letterGrade = "B";
    break;
  case tastScore >= 70:
    letterGrade = "C";
    break;
  case tastScore >= 60:
    letterGrade = "D";
    break; 
  default:
    letterGrade = "F";
    break;
  }
  
  console.log(letterGrade);