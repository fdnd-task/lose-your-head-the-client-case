<script>
  import { onMount } from 'svelte';
  import { Chart } from 'chart.js';
  import ChartDataLabels from 'chartjs-plugin-datalabels';

  export let data;
  export let result = data.scans;

  let chart;

  let results = result.result.slice(1); // Skips the first item

  let errorTitles = results.map(item => item.title);
  let errorAmounts = results.map(item => item.amount);

  Chart.register(ChartDataLabels);

  onMount(() => {
    const rootStyles = getComputedStyle(document.documentElement);
    const colorBlue = rootStyles.getPropertyValue('--color-blue');
    const colorLightBlue = rootStyles.getPropertyValue('--color-lightblue');
    const fontFamily = rootStyles.getPropertyValue('--font-family-regular');
    const colorBlack = rootStyles.getPropertyValue('--color-black');

    const data = {
      labels: errorTitles,
      datasets: [{
        label: 'Fouten',
        data: errorAmounts,
        borderColor: colorBlue,
        backgroundColor: colorLightBlue,
        borderWidth: 3,
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
            text: 'Type fouten' // X-axis label
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
        datalabels: {  // Enable the datalabels plugin
          color: colorBlack,
          anchor: 'center',
          align: 'center',
          font: {
            family: fontFamily,
            weight: 'bold'
          },
          formatter: (value) => value  // Display the data value on the bar
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

    const ctx = document.getElementById('bar-chart').getContext('2d');
    chart = new Chart(ctx, {
      type: 'bar',
      data: data,
      options: options
    });
  });
</script>

<h2>Soorten foutmeldingen</h2>
<canvas id="bar-chart" width="800" height="250" aria-label="Soorten fouten grafiek">
  <ul>
    {#each results as item}
      <li>{item.title}: {item.amount}</li>
    {/each}
  </ul>
</canvas>

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