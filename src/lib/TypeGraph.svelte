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

    const labels = ["Contrast", "Structureel", "Alt-teksten", "Aria-labels"];

    const data = {
      labels: labels,
      datasets: [{
        label: 'Fouten',
        data: [12, 19, 23, 75],
        borderColor: colorBlue,
        backgroundColor: colorLightBlue,
        borderWidth: 3
      }]
    };

    const options = {
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: false,
            text: 'Aantal' // Y-axis label
          },
          grid: {
            display: false
          }
        },
        x: {
          title: {
            display: false,
            text: 'Categories' // X-axis label
          },
          grid: {
            display: false
          }
        }
      },
      plugins: {
        legend: {
          display: false,
        },
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
            size: 16,
            weight: 'bold',
            family: fontFamily
          },
          titleColor: colorBlue,
          bodyFont: {
            size: 14,
            weight: 'normal',
            family: fontFamily
          },
          bodyColor: colorBlue,
        },
      },
      onHover: (event, elements) => {
        const canvas = event.native.target;
        if (elements.length) {
          canvas.style.cursor = 'pointer'; // Set cursor to pointer when hovering over a data point
        } else {
          canvas.style.cursor = 'default'; // Reset cursor when not hovering over a data point
        }
      }
    };

    const ctx = document.getElementById('bar-chart').getContext('2d');
    chart = new Chart(ctx, {
      type: 'bar',
      data: data,
      options: options
    });
  });
</script>

<h2>Soorten foutmeldingen</h2>
<canvas id="bar-chart" width="800" height="250"></canvas>
<style>
  canvas {
    max-width: 100%;
    height: auto;

    @media screen and (max-width: 500px) {
      height: 350px;
      
    }
  }

  h2 {
    margin-bottom: 50px;
  }
</style>