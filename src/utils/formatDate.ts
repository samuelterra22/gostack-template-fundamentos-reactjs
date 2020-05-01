const formatDate = (date?: number | Date): string => {
  return Intl.DateTimeFormat('pt-BR').format(date);
};

export default formatDate;
