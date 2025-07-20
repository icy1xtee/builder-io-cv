export function getDurationString(dateStr: string): string {
  const [monthStr, yearStr] = dateStr.split("/");
  const month = parseInt(monthStr, 10) - 1;
  const year = parseInt(yearStr, 10);

  if (isNaN(month) || isNaN(year) || month < 0 || month > 11) {
    return "Неверный формат даты. Используйте mm/yyyy.";
  }

  const inputDate = new Date(year, month);
  const now = new Date();

  let monthsDiff =
    (now.getFullYear() - inputDate.getFullYear()) * 12 +
    (now.getMonth() - inputDate.getMonth());

  if (monthsDiff < 0) {
    return "Дата из будущего";
  }

  const years = Math.floor(monthsDiff / 12);
  const months = monthsDiff % 12;

  function pluralize(n: number, forms: [string, string, string]): string {
    const mod10 = n % 10;
    const mod100 = n % 100;
    if (mod100 >= 11 && mod100 <= 14) return forms[2];
    if (mod10 === 1) return forms[0];
    if (mod10 >= 2 && mod10 <= 4) return forms[1];
    return forms[2];
  }

  const parts: string[] = [];

  if (years > 0) {
    parts.push(`${years} ${pluralize(years, ["год", "года", "лет"])}`);
  }
  if (months > 0 || years === 0) {
    parts.push(
      `${months} ${pluralize(months, ["месяц", "месяца", "месяцев"])}`,
    );
  }

  return parts.join(" ");
}
