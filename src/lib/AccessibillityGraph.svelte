<script>
  // export let data;

  import { onMount } from 'svelte';
  import { Chart } from 'chart.js';

  let chart;

  // Register required chart types and controllers

  // Data for the chart
  const months = ['jan', 'feb', 'mar', 'apr', 'mei', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'];

  const data = {
    labels: months,
    datasets: [{
      label: 'Monthly Percentages',
      data: [20, 30, 40, 60, 80, 50, 70, 90], // Example percentages
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      fill: true,
      tension: 0
    }]
  };

  // Chart options
  const options = {
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          callback: function(value) {
            return value + '%';  // Display percentages on y-axis
          }
        }
      }
    },
    responsive: true,
    maintainAspectRatio: false
  };

  onMount(() => {
    const ctx = document.getElementById('line-chart').getContext('2d');
    chart = new Chart(ctx, {
      type: 'line',
      data: data,
      options: options
    });
  });
</script>

<canvas id="line-chart" width="400" height="200"></canvas>

<style>
  canvas {
    max-width: 100%;
    height: auto;
  }
</style>