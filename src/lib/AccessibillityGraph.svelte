<script>
  import { onMount } from 'svelte';
  import { Chart } from 'chart.js';

  let chart;



  onMount(() => {
    const rootStyles = getComputedStyle(document.documentElement);
    const colorBlue = rootStyles.getPropertyValue('--color-blue');
    const colorLightBlue = rootStyles.getPropertyValue('--color-lightblue');
    const fontFamily = rootStyles.getPropertyValue('--font-family-regular');

    const months = ['jan', 'feb', 'mar', 'apr', 'mei', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'];
    const data = {
      labels: months,
      datasets: [{
        data: [20, 30, 40, 60, 80, 50, 70, 90],
        borderColor: colorBlue,
        backgroundColor: colorLightBlue,
        fill: true,
        tension: 0
      }]
    };

    // Chart options
    const options = {
      pointHoverRadius: 8,
      pointHoverBorderWidth: 3,
      pointHoverBackgroundColor: '#FFFFFF',
      pointHitRadius: 10,
      scales: {
        y: {
          grid: {
            display: false
          },
          beginAtZero: true,
          max: 100,
          ticks: {
            callback: function(value) {
              return value + '%';  // Display percentages on y-axis
            }
          }
        },
        x: {
          grid: {
            display: false
          }
        }
      },
      plugins: {
        tooltip: {
          enabled: true,  // Enable tooltips
          titleAlign: 'center',
          bodyAlign: 'center',
          backgroundColor: colorLightBlue,  // Tooltip background color
          borderWidth: 2,
          borderColor: colorBlue,
          padding: 10,
          displayColors: false,
          titleFont: {
            size: 14,
            weight: 'normal',
            family: fontFamily
          },
          titleColor: colorBlue,
          bodyFont: {
            size: 16,
            weight: 'bold',
            family: fontFamily
          },
          bodyColor: colorBlue,
          callbacks: {
            label: function(tooltipItem) {
              return tooltipItem.raw + '%';  // Display percentages in tooltips
            }
          },
        },
        legend: {
          display: false  // Hide the legend
        }
      },
      responsive: true,
      maintainAspectRatio: false
    };

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