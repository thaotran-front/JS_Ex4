// BÀI TẬP 1
/*Đầu vào:
    - Đặt biến var a, 
 var b, var c

Xử lý:
    - Nếu a > b && a > c.
    Xét trường hợp b > c hoặc trường hợp b < c
    - Nếu b > a && b > c 
    Xét trường hợp a > c hoặc trường hợp a < c
    - Nếu c > a && c > b 
    Xét trường hợp a > b hoặc trường hợp a < b

Đầu ra: xuất giá trị ra.
*/
document.getElementById("tangdan").onclick = function(){
    var a= document.getElementById("number1").value*1;
    var b= document.getElementById("number2").value*1;
    var c= document.getElementById("number3").value*1;
    var sapXep;
if(a>b && a>c){
    if(b>c){
        sapXep ="Thứ tự là: "+ c + b + a;
    }else{
        sapXep ="Thứ tự là: "+ b + c + a;
    }
    }else if(b>a && b>c){
        if(a>c){
            sapXep ="Thứ tự là: "+ c + a + b;
        }else{
            sapXep ="Thứ tự là: "+ a + c + b;
        }
    }else if(c>a && c>b){
        if(a>b){
            sapXep ="Thứ tự là: " + b + a + c;
        }else{
            sapXep ="Thứ tự là: "+ a + b + c;
        }
    }
    document.getElementById("footerxuatra").innerHTML= sapXep;
}


// BÀI TẬP 2
/*
Đầu vào:
- Cho người dùng nhập vào giá trị người sử dụng máy tính.
- Tạo biến lời chào.
Xử lý:
- Nếu người dùng là bố => Xin Chào + bố
- Nếu người dùng là mẹ => Xin Chào + mẹ
- Nếu người dùng là anh => Xin Chào + anh
- Nếu người dùng là em => Xin Chào + em

Đầu ra:
- Xuất ra lời chào.
 */


var loiChao; 
document.getElementById("buttonInfo").onclick= function(){
  var user = document.getElementById("family").value;
    if(user = "bố"){
        loiChao = "Xin Chào " + user;
    }else if(user = "mẹ"){
        loiChao = "Xin Chào " + user;
    }else if(user = "anh"){
        loiChao = "Xin Chào " + user;
    }else if(user = "em"){
        loiChao= "Xin Chào " + user;
}
document.getElementById("footerXuat").innerHTML= loiChao;
}

//BÀI TẬP 4:

document.getElementById("button").onclick= function(){
    var a = document.getElementById("canhA").value;
    var b = document.getElementById("canhB").value;
    var c = document.getElementById("canhC").value;

    if(a==b && b==c){
        var kq = "Đây là tam giác đều";
    }else if (a*a==b*b+c*c || b*b==a*a+c*c || c*c ==a*a + b*b){
        var kq = "Đây là tam giác vuông";
    }else if (a==b || b==c || a==c){
        var kq = "Đây là tam giác cân";
    };
    document.getElementById("result").innerHTML=kq;
}