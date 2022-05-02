let quantity = prompt("กรอกจำนวนสินค้า")
let sum = 0
for (let i = 1;i <= quantity; i++)
{
    let itemprice = prompt("รายการสินค้าชิ้นที่"+i)
    sum = sum + parseInt(itemprice)
    document.getElementById("result").innerHTML += "ราคาสินค้าชิ้นที่"+i+" : "+itemprice+" บาท"+"<br>"
    
}
document.getElementById("sum").innerHTML = "ราคาสินค้าทั้งหมด "+sum+" บาท"
document.getElementById("qrt").innerHTML = "มีสินค้าทั้งหมด "+quantity+" รายการ"