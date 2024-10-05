<script>
  import { onMount } from 'svelte';
  import Chart from "chart.js/auto";

  export let resultsheet = data.scans;
  let chart;
 
  import ChartDataLabels from 'chartjs-plugin-datalabels';

  Chart.register(ChartDataLabels);

  console.log(resultsheet[5].score)
 
  let August = resultsheet[0].score;
  let September = resultsheet[1].score;
  let October = resultsheet[2].score;
  let November = resultsheet[3].score;
  let December = resultsheet[4].score;
 
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
        data: [, , , , , , , August, September, October, November, December],
        borderColor: colorBlue,
        backgroundColor: colorLightBlue,
        fill: true,
        tension: 0
      }]
    };
 
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
              return value + '%';
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
          enabled: true,
          titleAlign: 'center',
          bodyAlign: 'center',
          backgroundColor: '#FFFFFF',
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
              return tooltipItem.raw + '%';
            }
          },
        },
        legend: {
          display: false
        },
        datalabels: {
          color: colorBlack,
          anchor: 'center',
          align: 'top',
          font: {
            family: fontFamily,
            weight: 'bold'
          },
          formatter: (value) => value + '%'
        },
      },
      responsive: true,
      maintainAspectRatio: true,
      onHover: (event, elements) => {
        const canvas = event.native.target;
        if (elements.length) {
          canvas.style.cursor = 'pointer';
        } else {
          canvas.style.cursor = 'default';
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

<section>
  <div>
    <h2>Toegankelijkheid</h2>
    <nav>
      <button>
        <svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 1L2.20676 4.02601C1.51868 4.77143 1.49766 5.91393 2.15785 6.68416L5 10" stroke="#5D666A" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </button>
      <span>2024</span>
      <button>
        <svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L3.79324 4.02601C4.48132 4.77143 4.50234 5.91393 3.84215 6.68416L1 10" stroke="#5D666A" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </button>
    </nav>
  </div>
  
  <canvas id="line-chart" 
    width="800" 
    height="250" 
    aria-label="Grafiek van scanresultaten van een jaar"
  >
    <ul>
      {#each resultsheet as item}
        <li>{item.title}: {item.amount}</li>
      {/each}
    </ul>
  </canvas>
</section>

<style>

  section {
    background-color: var(--color-background-section);
    border-radius: var(--section-border-radius);
    box-shadow: var(--box-shadow);
    padding: var(--average-padding);
    grid-area: 3 / 1 / 4 / 3;
  }
  
  canvas {
    max-width: 100%;
    height: auto;
    @media screen and (max-width: 500px) {
      height: 350px;
    }
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 50px;
  }

  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
</style>
