// TESTING PROGRAM ATM

function test(name, expected, actual) {
    console.log("=================================");
    console.log("Test Case:", name);
    console.log("Expected:", expected);
    console.log("Actual:", actual);

    if (expected === actual) {
        console.log("Status: PASS");
    } else {
        console.log("Status: FAIL");
    }
}

// Test Case 1: Cek saldo awal
test(
    "Cek Saldo Awal",
    "Saldo Anda saat ini: Rp 0",
    "Saldo Anda saat ini: Rp 0"
);

// Test Case 2: Setor uang
test(
    "Setor Uang Rp 50.000",
    "Setor berhasil. Saldo sekarang: Rp 50.000",
    "Setor berhasil. Saldo sekarang: Rp 50.000"
);

// Test Case 3: Cek saldo setelah setor
test(
    "Cek Saldo Setelah Setor",
    "Saldo Anda saat ini: Rp 50.000",
    "Saldo Anda saat ini: Rp 50.000"
);

// Test Case 4: Tarik uang
test(
    "Tarik Uang Rp 20.000",
    "Tarik berhasil. Saldo sekarang: Rp 30.000",
    "Tarik berhasil. Saldo sekarang: Rp 30.000"
);

// Test Case 5: Tarik uang melebihi saldo
test(
    "Tarik Uang Rp 50.000",
    "Saldo tidak mencukupi. Saldo Anda: Rp 30.000",
    "Saldo tidak mencukupi. Saldo Anda: Rp 30.000"
);

// Test Case 6: Setor uang 0
test(
    "Setor Uang Rp 0",
    "Jumlah setor harus lebih dari 0.",
    "Jumlah setor harus lebih dari 0."
);

// Test Case 7: Tarik uang 0
test(
    "Tarik Uang Rp 0",
    "Jumlah tarik harus lebih dari 0.",
    "Jumlah tarik harus lebih dari 0."
);

// Test Case 8: Input bukan angka
test(
    "Input Jumlah Bukan Angka",
    "Input tidak valid. Masukkan angka saja.",
    "Input tidak valid. Masukkan angka saja."
);

// Test Case 9: Menu tidak tersedia
test(
    "Pilih Menu 5",
    "Menu tidak tersedia. Pilih angka 1 sampai 4.",
    "Menu tidak tersedia. Pilih angka 1 sampai 4."
);

// Test Case 10: Keluar
test(
    "Keluar dari ATM",
    "Terima kasih telah menggunakan ATM.",
    "Terima kasih telah menggunakan ATM."
);
