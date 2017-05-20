export const nullEmpties = values => {
  const cleaned = {};
  Object.keys(values).forEach(k => {
    cleaned[k] = values[k] || null;
  });
  if (Array.isArray(cleaned.tags) && cleaned.tags.length === 0)
    cleaned.tags = null;
  return cleaned;
};

export const removeEmpties = values => {
  const cleaned = {};
  Object.keys(values).filter(v => values[v] !== null).forEach(k => {
    cleaned[k] = values[k];
  });
  return cleaned;
};
