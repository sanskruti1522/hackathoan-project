import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
  onValue
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

/* FIREBASE CONFIG */
const firebaseConfig = {
  apiKey: "AIzaSyDhG1KgIG_uR2VbgW_iT2a-KfhIV7Qa9O4",
  authDomain: "teachersathi-b36f1.firebaseapp.com",
  databaseURL: "https://teachersathi-b36f1-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "teachersathi-b36f1",
  storageBucket: "teachersathi-b36f1.firebasestorage.app",
  messagingSenderId: "466622965381",
  appId: "1:466622965381:web:66617a21f684deb401ebec"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

document.addEventListener("DOMContentLoaded", () => {
  const table = document.getElementById("attendanceTable");
  const saveBtn = document.getElementById("saveBtn");
  const toast = document.getElementById("toast");
  const card = document.getElementById("addCard");

  /* LOAD ATTENDANCE */
  onValue(ref(db, "attendance"), (snapshot) => {
    table.innerHTML = "";

    if (!snapshot.exists()) {
      table.innerHTML = `<tr><td colspan="3">No Attendance Found</td></tr>`;
      return;
    }

    snapshot.forEach(dateSnap => {
      const date = dateSnap.key;

      dateSnap.forEach(studentSnap => {
        const student = studentSnap.key;
        const status = studentSnap.val().status;

        table.innerHTML += `
          <tr>
            <td>${student}</td>
            <td>${date}</td>
            <td>${status}</td>
          </tr>
        `;
      });
    });
  });

  /* SAVE ATTENDANCE WITH EFFECT */
  window.addAttendance = function () {
    const student = document.getElementById("student").value.trim();
    const date = document.getElementById("date").value;
    const status = document.getElementById("status").value;

    if (student === "" || date === "") {
      alert("Student नाव आणि Date टाका");
      return;
    }

    saveBtn.innerText = "Saving...";
    saveBtn.classList.add("loading");
    saveBtn.disabled = true;

    set(ref(db, `attendance/${date}/${student}`), {
      status: status
    }).then(() => {

      saveBtn.innerText = "Saved ✅";
      saveBtn.classList.remove("loading");
      saveBtn.classList.add("success");
      card.classList.add("success");

      toast.classList.add("show");
      document.getElementById("student").value = "";

      setTimeout(() => {
        saveBtn.innerText = "Save";
        saveBtn.classList.remove("success");
        saveBtn.disabled = false;
        toast.classList.remove("show");
        card.classList.remove("success");
      }, 2000);

    }).catch(err => {
      alert(err.message);
      saveBtn.innerText = "Save";
      saveBtn.classList.remove("loading");
      saveBtn.disabled = false;
    });
  };

  window.go = function (page) {
    window.location.href = page;
  };
});
