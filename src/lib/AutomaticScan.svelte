<script>
  import { onMount } from "svelte";
  import Chart from "chart.js/auto";
  export let result = data.scans;

  let chart;

  let percentage = result.score;

// const centerTextPlugin = {
//   id: 'centerText',
//   beforeDraw: function (chart) {
//     const { width, height, ctx } = chart;
//     const fontSize = (height / 114).toFixed(2);  // Adjust the font size based on chart size
//     const text = `${result.score}%`;  // Text to display in the center
//     const textX = Math.round((width - ctx.measureText(text).width) / 2);  // Calculate x position
//     const textY = height / 2;  // y position for vertically centering

//     ctx.save();  // Save the current drawing state
//     ctx.font = `${fontSize}em Arial`;  // Font size and font family
//     ctx.fillStyle = '#000';  // Text color
//     ctx.textBaseline = "middle";  // Align text vertically to the middle
//     ctx.fillText(text, textX, textY);  // Draw the text
//     ctx.restore();  // Restore the original drawing state
//   }
// };

    // Chart.register(centerTextPlugin);


  onMount(() => {
    const rootStyles = getComputedStyle(document.documentElement);
    const colorBlue = rootStyles.getPropertyValue("--color-blue");
    const colorLightBlue = rootStyles.getPropertyValue("--color-lightblue");
    const fontFamily = rootStyles.getPropertyValue("--font-family-regular");
    const colorBlack = rootStyles.getPropertyValue("--color-black");

    const data = {
      datasets: [
        {
          label: "Percentage",
          data: [percentage, 100 - percentage],
          backgroundColor: ['blue', 'lightblue'],
          borderWidth: 0,
          borderRadius: [0, 100],
          cutout: "70%",
        },
      ],
    };

    const options = {
      plugins: {
        datalabels: {
          display: false,     
        },
        // centerText: true,
        tooltip: {
          enabled: false, // Enable tooltips
        },
      },
      responsive: false,
      maintainAspectRatio: true,
    };

    const ctx = document.getElementById("doughnut-chart").getContext("2d");
    chart = new Chart(ctx, {
      type: "doughnut",
      data: data,
      options: options,
    });
  });
  // let chartCanvas;
  // let percentage = result.score;

  // const data = {
  //   datasets: [
  //     {
  //       data: [percentage, 100 - percentage],
  //       backgroundColor: ["#4caf50", "#e0e0e0"],
  //       borderWidth: 0,
  //       cutout: "80%",
  //     },
  //   ],
  // };

  // const options = {
  //   rotation: 0, // Startpunt van de cirkel
  //   circumference: 360, // Halve cirkel (180 graden)
  //   plugins: {
  //     tooltip: { enabled: false }, // Tooltips uitschakelen
  //   },
  //   responsive: true,
  // };

  // // Grafiek genereren bij het mounten van de component
  // onMount(() => {
  //   new Chart(chartCanvas, {
  //     type: "doughnut",
  //     data: data,
  //     options: options,
  //   });
  // });
</script>

<section>
  <div>
    <h2>{result.title}</h2>
    <p>{result.description}</p>
  </div>
  <canvas id="doughnut-chart" height="150" width="150"></canvas>
</section>

<style>

  section {
    background-color: var(--color-background-section);
    border-radius: var(--section-border-radius);
    box-shadow: var(--box-shadow);
    padding: var(--average-padding);
    grid-area: 1 / 1 / 2 / 2;
    display: flex;
  }

  canvas {
    max-width: 100%;
    height: auto;
  }

  h2 {
    margin-bottom: 50px;
  }

  div {
    padding-right: 160px;
  }

</style>
