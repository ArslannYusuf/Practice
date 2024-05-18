function calculateAge() {
	// 1- input ve result elementlerini sec ve degiskene ata
	const txtDay = document.querySelector("#txtDay");
	const txtMonth = document.querySelector("#txtMonth");
	const txtYear = document.querySelector("#txtYear");
	const lblDays = document.querySelector("#lblDays");
	const lblMonths = document.querySelector("#lblMonths");
	const lblYears = document.querySelector("#lblYears");

	const currentDateTime = new Date(); // Mevcut tarih ve saati alir

	// 2- inputlarin degerlerini al ve degiskene ata
	const day = Number(txtDay.value);
	const month = Number(txtMonth.value);
	const year = Number(txtYear.value);

	//falsy values: null, undefined, empty, false, 0

	// 3- input degerlerini kontrol et (vaidation)
	if (!day || day < 1 || day > 31) {
		alert("Invalid day");
		return;
	}

	if (!month || month < 1 || month > 12) {
		alert("Invalid month");
		return;
	}

	const currentYear = currentDateTime.getFullYear();

	if (!year || year < currentYear - 150 || year > currentYear) {
		alert("Invalid year");
		return 34;
	}

	const birthDate = new Date(year, month - 1, day);

	if (birthDate > currentDateTime) {
		alert("Invalid birthdate");
		return;
	}

	// 4- hesapla
	const currentMonth = currentDateTime.getMonth() + 1;
	const currentDay = currentDateTime.getDate(); // Ayin gununu verir

	let ageYears = currentYear - year;
	let ageMonths = currentMonth - month;
	let ageDays = currentDay - day;

	// 06-05-2024
	// 03-02-2000

	// 06-05-2024
	// 09-07-2000

	if (ageDays < 0) {
		ageDays += 30;
		ageMonths--;
	}

	if (ageMonths < 0) {
		ageMonths += 12;
		ageYears--;
	}

	// 5- sonucu goster
	lblYears.textContent = ageYears;
	lblMonths.textContent = ageMonths;
	lblDays.textContent = ageDays;
}
