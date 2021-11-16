let coffee = document.getElementById('coffee')
let oksusu = document.getElementById('oksusu')
let water = document.getElementById('water')

let coin_1000 = document.getElementById('1000coin')
let coin_500 = document.getElementById('500coin')
let coin_100 = document.getElementById('100coin')
let totalMoney = document.getElementById('total_money')

let coin__1000 = 1000
let coin__500 = 500
let coin__100 = 100

coffee.innerText = `커피(700원)`
oksusu.innerText = `옥수수 수염차(1000)원`
water.innerText = `물(500원)`

coin_1000.innerText = `${coin__1000}원`
coin_500.innerText = `${coin__500}원`
coin_100.innerText = `${coin__100}원`

let sum = 0
total_money.innerHTML = `money : ${sum}`
// function clickMoney(sum) {
//     console.log('clickmoney', sum)
//     if(sum >= 1000) {
//         coffee.style.color = 'green'
//         oksusu.style.color = 'green'
//         water.style.color = 'green'
//     } else if(sum >= 700) {
//         coffee.style.color = 'green'
//         oksusu.style.color = 'black'
//         water.style.color = 'green'
//     } else if(sum >= 500) {
//         coffee.style.color = 'black'
//         oksusu.style.color = 'black'
//         water.style.color = 'green'
//     } else {
//         coffee.style.color = 'black'
//         oksusu.style.color = 'black'
//         water.style.color = 'black'
//     }

//     if(sum < 0) {
//         total_money.innerHTML = `money : ${sum} 의 빚이 생겼어요!`
//         return
//     }
//     total_money.innerHTML = `money : ${sum}`
// }

// function money() {
//     if(coin_1000) {
//         sum += coin__1000;
//         clickMoney(sum);

//     } // else if(coin_500) {
//     //     sum += coin__500;
//     //     clickMoney(sum)
//     // }
//     console.log(coin_1000)
//     console.log(sum)
//     return sum
// }

// function money2() {
//     if(coin_500) {
//         sum += coin__500;
//         clickMoney(sum);
//     } // else if(coin_500) {
//     //     sum += coin__500;
//     //     clickMoney(sum)
//     // }
//     console.log(sum)
// }

// function money3() {
//     if(coin_100) {
//         sum += coin__100;
//         clickMoney(sum);
//     } // else if(coin_500) {
//     //     sum += coin__500;
//     //     clickMoney(sum)
//     // }
//     console.log(sum)
// }

// function check1() {
//     sum -= 700;
//     clickMoney(sum)
//     console.log(sum)
// }

// function check2() {
//     sum -= 1000;
//     clickMoney(sum)
//     console.log(sum)
// }

// function check3() {
//     sum -= 500;
//     clickMoney(sum)
//     console.log(sum)
// }

const drinks = {
  coffee: 700,
  oksusu: 1000,
  water: 500,
}

function inputMoney(money) {
  sum += money

  for (const key in drinks) {
    // console.log(key)를 찍으면 drinks 객체의 키값이 나온다 (coffee, oksusu, water)
    // console.log(drinks[key]를 찍으면 drinks 키값의 value값을 가져오는걸 확인할 수 있다.)
    if (sum >= drinks[key]) {
      document.getElementById(key).style.color = 'green'
      continue
    }
    document.getElementById(key).style.color = 'black'
  }

  if (sum < 0) {
    total_money.innerHTML = `money : ${sum} 의 빚이 생겼어요!`
    return
  }
  total_money.innerHTML = `money : ${sum}`
}
