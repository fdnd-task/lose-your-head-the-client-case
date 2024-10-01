<script>
    import { onMount } from 'svelte';
    import Chart from 'chart.js/auto';
    export let scans = data.scans;


    let chartCanvas;
    let percentage = scans[0].result[0].amount; // Het percentage dat je wilt weergeven
 
    // Data en configuratie voor de Doughnut chart
    const data = {
      datasets: [
        {
          data: [percentage, 100 - percentage], // Gedeelte gevuld en het restant
          backgroundColor: ['#4caf50', '#e0e0e0'], // Kleur voor gevuld en leeg deel
          borderWidth: 0, // Geen randen om de delen
          cutout: '80%' // Maakt de cirkel meer als een progress bar
        }
      ]
    };
 
    const options = {
      rotation: 0, // Startpunt van de cirkel
      circumference: 360, // Halve cirkel (180 graden)
      plugins: {
        tooltip: { enabled: false }, // Tooltips uitschakelen
      },
      responsive: true,
    };
 
    // Grafiek genereren bij het mounten van de component
    onMount(() => {
      new Chart(chartCanvas, {
        type: 'doughnut',
        data: data,
        options: options
      });
    });


  </script>
 
  <!-- Het canvas-element waar de grafiek op wordt weergegeven -->
  <div style="position: relative; display: inline-block; text-align: center;">
    <canvas bind:this={chartCanvas}></canvas>
    <!-- Het percentage in het midden van de cirkel -->
    <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 24px;">
      {percentage}%
    </div>
  </div>
 
  <style>
    canvas {
      width: 150px;
      height: 150px;
    }
  </style>