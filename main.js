/**
 * Bai tap 1: Tổng các số dương trong mảng.
 */
var arr = [];
function nhapso() {
  var nhapsodi = +document.getElementById("nhapsodi").value;

  arr.push(nhapsodi);
  console.log(nhapsodi);
  document.getElementById("inkq").innerHTML = arr;
}


function ex1() {
 
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  document.getElementById("ketqua").innerHTML = sum;
}


// /**
//  * Bai tap 2: Đếm có bao nhiêu số dương trong mảng.
//  */
function ex2() {
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      count++;
    }
  }
  document.getElementById("ketqua2").innerHTML = count;
}


// /**
//  * Bai tap 3: Tìm số nhỏ nhất trong mảng.
//  */
function ex3() {
  var min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
  }
  document.getElementById("ketqua3").innerHTML = min;
}

// /**
//  * Bai tap 4: Tìm số dương nhỏ nhất trong mảng.
//  */

function ex4() {
  var min = 0;
  var i = 0;
  for (i; i < arr.length; i++) {
    if (arr[i] > 0) {
      min = arr[i];
      break;
    }
  }

  for (var j = i + 1; j < arr.length; j++) {
    if (arr[j] > 0 && min > arr[j]) {
      min = arr[j];
    }
  }
  document.getElementById("ketqua4").innerHTML = min;
}


// /**
//  * Bai 5: Tìm số chẵn cuối cùng trong mảng. Nếu mảng không có giá trị chẵn thì trả về -1.
//  */

function ex5() {
  var result;
  for (var i = arr.length - 1; i >= 0; i--) {
    if (arr[i] % 2 == 0) {
      result = arr[i];
      break;
    } else {
      result = -1;
    }
  }
  document.getElementById("ketqua5").innerHTML = result;
}

// /**
//  * Bai 6:  Đổi chỗ 2 giá trị trong mảng theo vị trí (Cho nhập vào 2 vị trí muốn đổi chỗ giá trị).
//  */

function ex6() {
  var result = [];
var sothunhat = +document.getElementById("numberOne").value;
var sothuhai = +document.getElementById("numberTwo").value;



      var a = arr[sothunhat];
      arr[sothunhat] = arr[sothuhai];
      arr[sothuhai] = a;

      for (let i = 0; i < arr.length; i++) {
        result += arr[i] + " ";     
      }
  document.getElementById("ketqua6").innerHTML = result;
 
}


// /**
//  * Bai 7. Sắp xếp mảng theo thứ tự tăng dần.
//  */
function ex7() {
  var temp;
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
    result += arr[i] + " ";
  }

  document.getElementById("ketqua7").innerHTML = result;
}


// /**
//  * Bai 8: Tìm số nguyên tố đầu tiên trong mảng. Nếu mảng không có số nguyên tố thì trả về – 1.
//  */

function ex8() {
  var result = "";
  for (var i = 0; i < arr.length; i++) {
    var check = true;
    for (var j = 2; j <= Math.sqrt(arr[i]); j++) {
      if (arr[i] % j === 0) {
        check = false;
        break;
      }
    }

    if (check && arr[i] > 1) {
      result += arr[i] + " ";
      break;
    }
  }
  document.getElementById("ketqua8").innerHTML = result;
}


// /**
//  * Bai 9: Nhập thêm 1 mảng số thực, tìm xem trong mảng có bao nhiêu số nguyên?
//  */
function ex9() {
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (Number.isInteger(arr[i])) {
      count++;
    }
  }
  document.getElementById("ketqua9").innerHTML = count;
}



// /**
//  * Bai 10: So sanh so am va so duong.
//  */

function ex10() {
  var add = 0;
  var even = 0;
  var result = "";
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      add++;
    } else {
      even++;
      console.log(even);
    }
  }
  if (add > even) {
    result = "So duong nhieu hon";
  } else {
    result = "So am nhieu hon";
  }
  document.getElementById("ketqua10").innerHTML = result;
}

