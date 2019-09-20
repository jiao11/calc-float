# calc-float

  [gitHub地址](https://github.com/jiao11/calc-float)

## 特点
  + 轻量级浮点数运算，提供浮点数加、减、乘、除运算的方法，方便使用
  + 此方法包含两个及两个以上浮点数的运算

## 安装
  npm i calc-float

## 使用
  + accAdd(0.1, 0.2, 2)
  + accSub(2.01, 0.12, 2)
  + accMul(1.01, 1.3, 2)
  + accDiv(0.69, 10, 2)
  + arrAdd([10.433, 13.7, 34.5455, 34.35, 6.9], 2)

## 提供的运算方法
  + accAdd(num1, num2, n) // 两个浮点数加法
  + accSub(num1, num2, n) // 两个浮点数减法
  + accMul(num1, num2, n) // 两个浮点数乘法
  + accDiv(num1, num2, n) // 两个浮点数除法
  + arrAdd(arr, n)   // 多个浮点数相加
  + arrLastAdd(arr, n)   // 多个浮点数相加, 不够100补给最后一位数，返回数组
  + arrMaxAdd(arr, n)    // 多个浮点数相加, 不够100补给数组中最大的一位数，返回数组

  num1、num2为浮点数; arr为数组, n表示运算后保留的小数位数