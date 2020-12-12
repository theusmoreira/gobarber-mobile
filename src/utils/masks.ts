function maskPhone(value: string): string | null {
  const cleaned = `${value}`.replace(/\D/g, '');
  const match = cleaned.match(/^(55|)?(\d{2})(\d{5})(\d{4})$/);
  if (match) {
    const intlCode = match[1] ? '+55 ' : '';
    return [intlCode, '(', match[2], ') ', match[3], '-', match[4]].join('');
  }
  return match;
}

export { maskPhone };
