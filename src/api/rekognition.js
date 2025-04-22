export const compareFace = async (imageKey) => {
  const res = await fetch(`${process.env.API_BASE_URL}/compare`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ imageKey }),
  });

  return res.json();
};
