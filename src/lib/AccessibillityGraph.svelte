<script>
  import { onMount } from 'svelte';
  import { Chart } from 'chart.js';

  let chart;



  onMount(() => {
    const rootStyles = getComputedStyle(document.documentElement);
    const colorBlue = rootStyles.getPropertyValue('--color-blue');
    const colorLightBlue = rootStyles.getPropertyValue('--color-lightblue');
    const fontFamily = rootStyles.getPropertyValue('--font-family-regular');
    const colorBlack = rootStyles.getPropertyValue('--color-black');

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
          tickColor: colorBlack,
          ticks: {
            stepSize: 20,
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
          backgroundColor: '#FFFFFF',  // Tooltip background color
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
      maintainAspectRatio: true,
      onHover: (event, elements) => {
        const canvas = event.native.target;
        if (elements.length) {
          canvas.style.cursor = 'pointer'; // Set cursor to pointer when hovering over a data point
        } else {
          canvas.style.cursor = 'default'; // Reset cursor when not hovering over a data point
        }
      }
    };

    const ctx = document.getElementById('line-chart').getContext('2d');
    chart = new Chart(ctx, {
      type: 'line',
      data: data,
      options: options
    });
  });
</script>

<div class="title-container">
  <h2 class="title">Toegankelijkheid</h2>
  <div class="year-nav-container">
    <button class="year-nav-button">
      <svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 1L2.20676 4.02601C1.51868 4.77143 1.49766 5.91393 2.15785 6.68416L5 10" stroke="#5D666A" stroke-width="2" stroke-linecap="round"/>
      </svg>
    </button>
    <span class="current-year">2024</span>
    <button class="year-nav-button">
      <svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1L3.79324 4.02601C4.48132 4.77143 4.50234 5.91393 3.84215 6.68416L1 10" stroke="#5D666A" stroke-width="2" stroke-linecap="round"/>
      </svg>
    </button>
  </div>
</div>

<canvas id="line-chart" width="800" height="250"></canvas>

<style>
  canvas {
    max-width: 100%;
    height: auto;

    @media screen and (max-width: 500px) {
      height: 350px;
      
    }
  }

  .title-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 50px;
  }

  .year-nav-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
</style>