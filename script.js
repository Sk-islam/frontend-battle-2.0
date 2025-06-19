// Wait for the DOM to load
window.addEventListener("DOMContentLoaded", () => {
  // Loader hide after 2.5s
  const loader = document.getElementById("loader");
  setTimeout(() => {
    loader.style.display = "none";
  }, 2500);

  // Dark mode toggle
  const darkModeToggle = document.getElementById("darkModeToggle");
  if (darkModeToggle) {
    darkModeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark");
    });
  }

  // Chart.js Setup
  const ctx = document.getElementById("carbonChart").getContext("2d");
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Proj A", "Proj B", "Proj C", "Proj D", "Proj E", "Proj F"],
      datasets: [
        {
          label: "2025 Target",
          data: [549, 875, 506, 550, 881, 607],
          backgroundColor: "#6b3d3d",
        },
        {
          label: "2030 Target",
          data: [278, 617, 36, 539, 269, 528],
          backgroundColor: "#d49f9f",
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            stepSize: 100,
          },
        },
      },
    },
  });
});
