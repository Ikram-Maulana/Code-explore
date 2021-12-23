"use strict";
// ! Enum -> data konstan atau fixed
// Numeric Enum
// Nilai default itu berurutan dari 0 kita bisa custom
var Month;
(function (Month) {
    Month[Month["JAN"] = 1] = "JAN";
    Month[Month["FEB"] = 2] = "FEB";
    Month[Month["MAR"] = 3] = "MAR";
    Month[Month["APR"] = 4] = "APR";
    Month[Month["MAY"] = 5] = "MAY";
})(Month || (Month = {}));
console.log(Month.MAR);
// String Enum
var Months;
(function (Months) {
    Months["JAN"] = "Januari";
    Months["FEB"] = "Februari";
    Months["MAR"] = "Maret";
    Months["APR"] = "April";
    Months["MAY"] = "Mei";
})(Months || (Months = {}));
console.log(Months.FEB);
