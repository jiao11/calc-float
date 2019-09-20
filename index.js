// 加法
// n表示保留的小数位数
exports.accAdd = function (num1, num2, n) {
  var r1, r2, m, result;
  try { r1 = num1.toString().split(".")[1].length } catch (e) { r1 = 0 };
  try { r2 = num2.toString().split(".")[1].length } catch (e) { r2 = 0 };
  m = Math.pow(10, Math.max(r1, r2));
  result = (num1 * m + num2 * m) / m;
  var n = Number(n) ? Number(n) : null;
  return n ? Number(result.toFixed(n)) : result;
}

// 减法
// n表示保留的小数位数
exports.accSub = function(num1, num2, n) {
  var r1, r2, m, n;
  try { r1 = num1.toString().split(".")[1].length } catch (e) { r1 = 0 };
  try { r2 = num2.toString().split(".")[1].length } catch (e) { r2 = 0 };
  m = Math.pow(10, Math.max(r1, r2));
  // 动态控制精度长度
  n = n ? n : (r1 >= r2) ? r1 : r2;
  var n = Number(n) ? Number(n) : null;
  return Number(((num1 * m - num2 * m) / m).toFixed(n));
}

// 乘法
// n表示保留的小数位数
let accMul = function(num1, num2, n) {
  var m = 0, s1 = num1.toString(), s2 = num2.toString(), result;
  try { m += s1.split(".")[1].length } catch (e) { };
  try { m += s2.split(".")[1].length } catch (e) { };
  result = Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
  var n = Number(n) ? Number(n) : null;
  return n ? Number(result.toFixed(n)) : result;
}
exports.accMul = accMul;

// 除法
// n表示保留的小数位数
exports.accDiv = function(num1, num2, n) {
  var t1, t2, r1, r2, result;
  try { t1 = num1.toString().split(".")[1].length } catch (e) { t1 = 0 };
  try { t2 = num2.toString().split(".")[1].length } catch (e) { t2 = 0 };
  with (Math) {
    r1 = Number(num1.toString().replace(".", ""));
    r2 = Number(num2.toString().replace(".", ""));
    result = (r1 / r2) * pow(10, t2 - t1);
    var n = Number(n) ? Number(n) : null;
    return n ? Number(result.toFixed(n)) : result;
  }
}

// 多个数相加
// arr为数组，n为相加的结果保留的小数位数
exports.arrAdd = function(arr, n) {
  var floatLenArr = [];
  if (!arr || arr.length === 0) return;
  for (var i=0; i<arr.length; i++) {
    floatLenArr[i] = arr[i].toString().split('.')[1] ? arr[i].toString().split('.')[1].length : 0;
  }
  var n = Number(n) ? Number(n) : null;
  var m = n ? Math.pow(10, n) : Math.pow(10, Math.max(...floatLenArr));
  var totleNum = 0;
  for (var i=0; i<arr.length; i++) {
    totleNum += arr[i] * m;
  }
  console.info(totleNum / m)
  console.info(n ? (totleNum / m).toFixed(n) : totleNum / m)
  return n ? (totleNum / m).toFixed(n) : totleNum / m
}

// 多个数相加, 不够100补给最后一位数，返回数组
// arr为数组，n为相加的结果保留的小数位数
exports.arrLastAdd = function(arr, n) {
  console.info(arr)
  var floatLenArr = [];
  if (!arr || arr.length === 0) return;
  for (var i=0; i<arr.length; i++) {
    floatLenArr[i] = arr[i].toString().split('.')[1] ? arr[i].toString().split('.')[1].length : 0;
  }
  var n = Number(n) ? Number(n) : null;
  var m = n ? Math.pow(10, n) : Math.pow(10, Math.max(...floatLenArr));
  console.info(m)
  var totleNum = 0;
  for (var i=0; i<arr.length; i++) {
    arr[i] = n ? parseInt(accMul(arr[i], m))/m : arr[i];
    totleNum += accMul(arr[i], m);
  }
  var num = totleNum/m < 100 ? (100*m - totleNum)/ m : 0;
  console.info(num)
  arr[arr.length - 1] = (accMul(arr[arr.length - 1], m) + accMul(num, m))/m;
  console.info(arr)
  return arr;
}

// 多个数相加, 不够100补给数组中最大的一位数，返回数组
// arr为数组，n为相加的结果保留的小数位数
exports.arrMaxAdd = function(arr, n) {
  console.info(arr)
  console.info(n)
  var floatLenArr = [];
  if (!arr || arr.length === 0) return;
  for (var i=0; i<arr.length; i++) {
    floatLenArr[i] = arr[i].toString().split('.')[1] ? arr[i].toString().split('.')[1].length : 0;
  }
  var n = Number(n) ? Number(n) : null;
  var m = n ? Math.pow(10, n) : Math.pow(10, Math.max(...floatLenArr));
  console.info('m', m)
  var totleNum = 0;
  for (var i=0; i<arr.length; i++) {
    arr[i] = n ? parseInt(accMul(arr[i], m))/m : arr[i];
    totleNum += accMul(arr[i], m);
  }
  var num = totleNum/m < 100 ? (100*m - totleNum)/ m : 0;
  console.info(num)
  var maxNum = Math.max(...arr);
  var index = arr.indexOf(maxNum);
  arr[index] = (accMul(arr[index], m) + accMul(num, m))/m;
  console.info(arr)
  return arr;
}