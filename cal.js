const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const monthSelect = document.getElementById("month");
const yearSelect = document.getElementById("year");
const calendar = document.getElementById("calendar");
const reminderBox = document.getElementById("reminderBox");
const reminderInput = document.getElementById("reminderInput");
const reminderList = document.getElementById("reminderList");
const selectedDateEl = document.getElementById("selectedDate");

let selectedDate = null;
let reminders = {};

function populateSelectors() {
  for (let i = 0; i < 12; i++) {
    let option = document.createElement("option");
    option.value = i;
    option.text = monthNames[i];
    monthSelect.appendChild(option);
  }

  for (let y = 2000; y <= 2100; y++) {
    let option = document.createElement("option");
    option.value = y;
    option.text = y;
    yearSelect.appendChild(option);
  }

  const now = new Date();
  monthSelect.value = now.getMonth();
  yearSelect.value = now.getFullYear();
  renderCalendar();
}

function renderCalendar() {
  calendar.innerHTML = "";
  const year = parseInt(yearSelect.value);
  const month = parseInt(monthSelect.value);

  const firstDay = new Date(year, month, 1).getDay();
  const totalDays = new Date(year, month + 1, 0).getDate();

  // Weekdays
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  days.forEach(d => {
    const day = document.createElement("div");
    day.className = "day";
    day.innerText = d;
    calendar.appendChild(day);
  });

  for (let i = 0; i < firstDay; i++) {
    calendar.appendChild(document.createElement("div"));
  }

  for (let d = 1; d <= totalDays; d++) {
    const date = document.createElement("div");
    date.className = "date";
    date.innerText = d;
    date.addEventListener("click", () => selectDate(d));
    calendar.appendChild(date);
  }
}

function selectDate(day) {
  const month = parseInt(monthSelect.value);
  const year = parseInt(yearSelect.value);
  selectedDate = `${year}-${month + 1}-${day}`;
  selectedDateEl.textContent = selectedDate;
  updateReminderList();
}

function addReminder() {
  const text = reminderInput.value.trim();
  if (!selectedDate || !text) return;
  if (!reminders[selectedDate]) reminders[selectedDate] = [];
  reminders[selectedDate].push(text);
  reminderInput.value = "";
  updateReminderList();
}

function updateReminderList() {
  reminderList.innerHTML = "";
  if (!selectedDate || !reminders[selectedDate]) return;

  reminders[selectedDate].forEach((text, index) => {
    const li = document.createElement("li");
    li.textContent = text;
    const del = document.createElement("button");
    del.textContent = "❌";
    del.onclick = () => {
      reminders[selectedDate].splice(index, 1);
      updateReminderList();
    };
    li.appendChild(del);
    reminderList.appendChild(li);
  });
}

monthSelect.addEventListener("change", renderCalendar);
yearSelect.addEventListener("change", renderCalendar);

populateSelectors();
