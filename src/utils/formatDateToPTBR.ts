export const formatDateToPTBR = (date: string) => {
  return new Intl.DateTimeFormat('pt-BR').format(new Date(date));
}