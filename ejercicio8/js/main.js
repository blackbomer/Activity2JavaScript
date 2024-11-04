const data = {
    labels: ["Socialistas", "Liberales", "Animalistas", "Centristas", "Ecologistas"],
    datasets: [{
      label: "Votos",
      data: [0, 0, 0, 0, 0], 
      backgroundColor: ["#ff6384", "#36a2eb", "#ffcd56", "#c9cbcf", "#4bc0c0"],
      hoverOffset: 4,
    }],
  };
  
const config = {
  type: "pie",
   data: data,
    options: {
      responsive: true,
      
      plugins: {
        legend: {
          position: "top",
        },
        tooltip: {
          callbacks: {
            label: function (tooltipItem) {
              return `${tooltipItem.label}: ${tooltipItem.raw}`;
            },
          },
        },
      },
    },
};
  
const votesChart = new Chart(document.getElementById("votesChart"), config);
  
function vote(index) {
  data.datasets[0].data[index] += 1;
  votesChart.update();
}
  
function resetVotes() {
  data.datasets[0].data = [0, 0, 0, 0, 0];
  votesChart.update();
}
  