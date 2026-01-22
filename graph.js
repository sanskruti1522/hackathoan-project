// PIE CHART
new Chart(document.getElementById("pieChart"), {
    type: "pie",
    data: {
        labels: ["Completed", "Pending", "Overdue"],
        datasets: [{
            data: [60, 25, 15],
            backgroundColor: ["#00c9a7", "#f9d423", "#ff4d4d"]
        }]
    }
});

// BAR CHART
new Chart(document.getElementById("barChart"), {
    type: "bar",
    data: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
        datasets: [{
            label: "Attendance",
            data: [12, 19, 8, 15, 22],
            backgroundColor: "#00c9a7"
        }]
    }
});

// LINE CHART
// new Chart(document.getElementById("lineChart"), {
//     type: "line",
//     data: {
//         labels: ["Jan", "Feb", "Mar", "Apr", "May"],
//         datasets: [{
//             label: "User Growth",
//             data: [200, 400, 650, 900, 1245],
//             borderColor: "#1f2235",
//             fill: false
//         }]
//     }
// });
