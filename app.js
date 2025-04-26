// Boolean1. A butun soni berilgan. Jumlani rostlikka tekshiring: "A soni musbat".
// let a = 11;
// if (a > 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// Boolean2. A butun soni berilgan. Jumlani rostlikka tekshiring: "A soni toq son".
// let a = 21;

// if (a % 2 != 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// Boolean3. Ikkita butun A va B sonlari berilgan. Jumlani rostlikka tekshiring: "A>2 va B <=3".
// let a = 11;
// let b = 22;
// if (a > 2 && b <= 3) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// Boolean4. Uchta A, B, C butun sonlar berilgan. Jumlani rostlikka tekshiring: "A <= B <= C"
// let a = 2;
// let b = 3;
// let c = 4;
// if (a <= b && b <= c) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// Boolean5. Ikkita butun A va B sonlari berilgan. Jumlani rostlikka tekshiring: "A va B sonlarining har ikkalasi ham yoki toq son yoki juft son".
// let a = 22;
// let b = 33;
// if (a % 2 == 0 && a % 2 == 0) {
//   console.log(`Bular juft sonlar`, true);
// } else {
//   console.log(`Bular toq sonlar yoki 1 tasi toq son`, false);
// }

// Boolean6. Uchta A, B, C butun sonlar berilgan. Jumlani rostlikka tekshiring: "A, B, C sonlarning hech bo'lmaganda bittasi musbat".
// let a = 5;
// let b = 53;
// let c = 35;

// if (a > 0 || b > 0 || c > 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// Boolean7. Uch xonali son berilgan. Jumlani rostlikka tekshiring: “Ushbu sonning barcha raqamlari har xil".
// let number = 123;

// let birinchison = (number - (number % 100)) / 100;
// let ikkinchison = ((number - (number % 10)) / 10) % 10;
// let uchinchison = number % 10;
// if (
//   birinchison == ikkinchison &&
//   ikkinchison == uchinchison &&
//   uchinchison == birinchison
// ) {
//   console.log(false);
// } else {
//   console.log(true);
// }

// Boolean8. Jumlani rostlikka tekshiring: "Berilgan uchta butun sonlarning hech bo'lmaganda 2 tasi bir biriga teng".
// let a = 1;
// let b = 2;
// let c = 3;
// if (a == b || b == c || c == a) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// Boolean9. Shaxmat doskasining ikkita turli (x1, y1), (x2, y2) koordinalari berilgan (1-8 oraliqda yotuvchi butun sonlar). Jumlani rostlikka tekshiring: "Farzin bir yurishda bir maydondan ikkinchisiga o'ta oladi". bu shahmatga oit ekan tushunmadim savolni

// UYGA VAZIFA

// Boolean1. A butun soni berilgan. Jumlani rostlikka tekshiring: "A soni juft son”.
// let son = 2;
// if (son % 2 == 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// Boolean2. Ikkita butun A va B sonlari berilgan. Jumlani rostlikka tekshiring:
// "A >= 0 yoki B <-2"
// let a = 3;
// let b = 4;

// if (a >= 0 || b < -2) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// Boolean3. Uchta A, B, C butun sonlar berilgan. Jumlani rostlikka tekshiring: "B soni A va C sonlari orasida yotadi".
// let a = 1;
// let b = 4;
// let c = 5;

// if (a > b && b < c) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// Boolean4. Ikkita butun A va B sonlari berilgan. Jumlani rostlikka tekshiring: "A va B sonlari toq sonlar".
// let a = 11;
// let b = 44;

// if (a % 2 == 0 && b % 2 == 0) {
//   console.log(false);
// } else {
//   console.log(true);
// }

// Boolean5. Ikkita butun A va B sonlari berilgan. Jumlani rostlikka tekshiring: "A va B sonlarning hech bo'lmaganda bittasi toq son".
// let a = 12;
// let b = 43;

// if (a % 2 != 0 || b % 2 != 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// Boolean6. Ikkita butun A va B sonlari berilgan. Jumlani rostlikka tekshiring: "A va B sonlarning faqat bittasi toq son".
// let a = 4;
// let b = 6;

// if (a % 2 == 0 && b % 2 == 0) {
//   console.log("hech biri toq son emas");
// } else if (a % 2 != 0 && b % 2 != 0) {
//   console.log("Ikkisi ham toq son");
// } else {
//   console.log("Bularning faqat 1 tasi toq son");
// }

// Boolean7. Uchta A, B, C butun sonlar berilgan. Jumlani rostlikka tekshiring: "A, B, C sonlarning har biri musbat".
// let a = 11;
// let b = 33;
// let c = 44;
// if (a % 2 != 0 && b % 2 != 0 && c % 2 != 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// Boolean8. Uchta A, B, C butun sonlar berilgan. Jumlani rostlikka tekshiring: "A, B, C sonlaridan faqat bittasi musbat son".
// let a = 1;
// let b = 3;
// let c = 5;
// let musbat = 0;
// let manfiy = 0;

// if (a > 0) {
//   musbat++;
// } else {
//   manfiy++;
// }
// if (b > 0) {
//   musbat++;
// } else {
//   manfiy++;
// }
// if (c > 0) {
//   musbat++;
// } else {
//   manfiy++;
// }

// if (musbat == 1) {
//   console.log("Ushbu sonlarning faqat 1 tasi musbat");
// } else {
//   console.log(
//     `Ushbu sonlarning faqar ${musbat} tasi musbat ${manfiy} tasi manfiy`
//   );
// }

// Boolean9. Uchta A, B, C butun sonlar berilgan. Jumlani rostlikka tekshiring: "A, B, C sonlardan faqat ikkitasi musbat son".
// let a = 1;
// let b = 3;
// let c = 5;
// let musbat = 0;
// let manfiy = 0;

// if (a > 0) {
//   musbat++;
// } else {
//   manfiy++;
// }
// if (b > 0) {
//   musbat++;
// } else {
//   manfiy++;
// }
// if (c > 0) {
//   musbat++;
// } else {
//   manfiy++;
// }

// if (musbat == 2) {
//   console.log("Ushbu sonlarning faqat 2 tasi musbat");
// } else {
//   console.log(
//     `Ushbu sonlarning faqar ${musbat} tasi musbat ${manfiy} tasi manfiy`
//   );
// }

// Boolean10. Musbat butun son berilgan. Jumlani rostlikka tekshiring: "Berilgan son ikki xonali juft son".
// let son = 35;

// if (son <= 99 && son % 2 == 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// Boolean11. Musbat butun son berilgan. Jumlani rostlikka tekshiring: "Berilgan son uch xonali toq".
// let son = 35;

// if (son >= 999 && son <= 100 && son % 2 != 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// Boolean12. Jumlani rostlikka tekshiring: "Berilgan uchta butun sonlarning hech bo'lmaganda bir jufti o'zaro qarama-qarshi".
// let a = 2;
// let b = 4;
// let c = 5;

// if (a + b == 0 || b + c == 0 || c + a == 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// Boolean13. Uch xonali son berilgan. Jumlani rostlikka tekshiring: “Ushbu sonning raqamlari ketama- ket o'suvchi bo'lib joylashgan".
// let son = 123;

// let birinchison = (son - (son % 100)) / 100;
// let ikkinchison = ((son - (son % 10)) / 10) % 10;
// let uchinchison = son % 10;

// if (birinchison + 1 == ikkinchison && ikkinchison + 1 == uchinchison) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// Boolean14. Uch xonali son berilgan. Jumlani rostlikka tekshiring: "Ushbu sonning raqamlari ketama- ket o'suvchi bo'lib joylashgan yoki kamayuvchi ketma-ketlikka ega".
// let son = 123;

// let birinchison = (son - (son % 100)) / 100;
// let ikkinchison = ((son - (son % 10)) / 10) % 10;
// let uchinchison = son % 10;

// if (birinchison + 1 == ikkinchison && ikkinchison + 1 == uchinchison) {
//   console.log(true);
// } else if (uchinchison - 1 == ikkinchison && ikkinchison - 1 == birinchison) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// Boolean15. Uch xonali son berilgan. Jumlani rostlikka tekshiring: "Ushbu sonni chapdan o'qiganda ham, o'ngdan o'qiganda ham bir xil".

// let son = 123;

// let birinchison = (son - (son % 100)) / 100;
// let ikkinchison = ((son - (son % 10)) / 10) % 10;
// let uchinchison = son % 10;

// if (birinchison == uchinchison) {
//   console.log(true);
// } else {
//   console.log(false);
// }
