document.getElementById("subjectForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("subjectName").value.trim();
  const grade = document.getElementById("subjectGrade").value.trim();

  if (!name || !grade) return;

  const card = document.createElement("div");
  card.classList.add("subject-card");

  card.innerHTML = `
    <button class="remove-btn">&times;</button>
    <h3>${name}</h3>
    <p>Grade: ${grade}</p>
  `;

  document.getElementById("subjectCardsContainer").appendChild(card);

  document.getElementById("subjectName").value = "";
  document.getElementById("subjectGrade").value = "";

  card.querySelector(".remove-btn").addEventListener("click", () => {
    card.remove();
  });
});
