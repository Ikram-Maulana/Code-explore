// ! Enum itu Untuk input yang nilainya sudah fix, orang tidak dapat menambah selain yang sudah ditentukan

// ! enum Name {0, 1, 2}; -> berurutan
enum Gender {Male, Female, Unknown};

// ! Merubah Nilai Enum
enum Benua {Asia = 1, Europe = 2, Amerika = 3};

// ! Enum String
enum Category {
  Grocery = "GROCERY", 
  Electronic = "ELECTRONIC",
  Handphone = "HANDPHONE"
}

let jenisKelamin: Gender = Gender.Male;
console.log(jenisKelamin);

let lokasi: Benua = Benua.Asia;
console.log(lokasi);

let kategory: Category = Category.Handphone;
console.log(kategory);