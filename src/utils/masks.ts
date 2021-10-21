function maskCardValidate(text: string) {
  text = text.replace(/\D/g, '');
  text = text.replace(/^(\d{2})(\d)/, '$1/$2');
  return text;
}

export { maskCardValidate };
