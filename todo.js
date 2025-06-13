function addNote(title = "New Note", content = "Click to edit...") {
  const note = document.createElement("div");
  note.className = "note yellow";
  note.contentEditable = false;

  note.innerHTML = `
    <button class="delete-btn" onclick="this.parentElement.remove()">×</button>
    <h3 contenteditable="true">${title}</h3>
    <p contenteditable="true">${content}</p>
  `;

  const wall = document.getElementById("wall");
  const addBtn = wall.querySelector(".add-note");
  wall.insertBefore(note, addBtn);
}
function deleteNote(btn) {
  const note = btn.parentElement;
  note.classList.add('deleting');
  setTimeout(() => note.remove(), 300);
}