async function apiPost(url) {
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data),
      redirect: "follow"
    });
    const answer = await res.json();
    return answer;
  } catch (err) {
    console.log(err);
  }
}
