export const nullEmpties = values => {
  const cleaned = {};
  Object.keys(values).forEach(k => {
    cleaned[k] = values[k] || null;
  });
  return cleaned;
};

export const removeEmpties = values => {
  const cleaned = {};
  Object.keys(values).filter(v => values[v] !== null).forEach(k => {
    cleaned[k] = values[k];
  });
  return cleaned;
};
