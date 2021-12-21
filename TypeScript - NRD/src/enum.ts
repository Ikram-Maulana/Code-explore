// ! Enum -> data konstan atau fixed

// Numeric Enum
// Nilai default itu berurutan dari 0 kita bisa custom
enum Month {
  JAN = 1,
  FEB,
  MAR,
  APR,
  MAY
}

console.log(Month.MAR);

// String Enum
enum Months {
  JAN = "Januari",
  FEB = "Februari",
  MAR = "Maret",
  APR = "April",
  MAY = "Mei"
}
console.log(Months.FEB);