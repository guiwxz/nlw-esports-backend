
// 1800 -> "18:00"

export const convertMinutesToHourString = (minutesAmount: number) => {
  const hours = Math.floor(minutesAmount / 60);
  const minutes = minutesAmount % 60;

  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
  // vai adicionar um 0 no final caso nao tenha 2 caracteres
}