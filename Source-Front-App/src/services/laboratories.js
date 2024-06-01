export const getAll = async () => {
  const response = await fetch('http://localhost:1234/laboratories');
  if (!response.ok)
    throw new Error("WARN", response.status);
  const data = await response.json();
  return data;
}
