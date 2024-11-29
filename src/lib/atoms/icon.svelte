<script>
    export let data = 0;

    // Extract hours and minutes
    let hours = Math.floor(data / 100) % 12;
    let minutes = data % 100;

    // Calculate the rotation for the hour and minute hands
    let hour = hours * 30 + minutes * 0.5; // 30° per hour + 0.5° per minute
    let minute = minutes * 6; // 6° per minute
  </script>

  <div class="icon">
    <div class="arrow-hour" style="rotate:{hour}deg" />
    <div class="arrow-minute" style="rotate:{minute}deg" />
  </div>

  <style>
    .icon {
      --scale: 5;
      border-radius: 50%;
      border: 2px solid #fe0170;
      height: 20px;
      margin: 1px;
      position: relative;
      width: 20px;
    }

    .arrow-hour,
    .arrow-minute {
      background: #fe0170;
      border-radius: 100px;
      height: 40%;
      left: 50%;
      position: absolute;
      top: calc(50% - 2px);
      transform-origin: 0px 2px;
      transform: translate(-50%, -50%);
      width: 2px;
    }
  </style>
