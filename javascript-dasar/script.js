// variable

// variable dengan tipe data String
const vaiableSatu = "Ini isi variable Satu";
console.log(vaiableSatu);

// variable dengan tipe integer
const variableDua = 10;
console.log(variableDua);

// variable dengan tipe desimal
const variableTiga = 3.14;
console.log(variableTiga);

// variable dengan tipe Boolean
const variableEmpat = false;
console.log(variableEmpat);

// function
let data1 = true;
let data2 = false;

function coba(data1, data2) {

    // eksekusi kode disini
    if (data1 === true) {
        data1 = "berhasil login";
    } else {
        data1= "tidak login";
    }
    console.log(data1);


}
coba(data1, data2);

// perkalian
console.log(5 * 5);
console.log(5 + 5);

function perkalian (x, y) {
    return (x * y);
}
perkalian(5, 5)