export async function sendToDeepseek(message) {
  const res = await fetch("http://localhost:5000/api/deepseek", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message }),
  });

  if (!res.ok) {
    const errData = await res.json();
    throw new Error(errData.error || "Server error");
  }

  return res.json();
}
