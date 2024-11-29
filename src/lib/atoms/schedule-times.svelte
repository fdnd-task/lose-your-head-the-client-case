<!--!
  For every time with 1 hour it shows the time,
  except for the last it shows 23:59!
-->
<div class="schedule-times">
    {#each Array(24) as _, i}
      <!-- style="--start: {i * 50}; --end: {i * 50 + 50};" -->
      <div
        class="schedule-time-outer"
        style="--start: {i * 50}; --end: {i * 50 + 50};"
      >
        <div class="schedule-times__time">
          {i === 23 ? "23:59" : i < 10 ? `0${i}:00` : `${i}:00`}
        </div>

        {#if i < 23}
          <div
            class="dotted-line"
            style="--start: {i * 50 * 2}; --end: {i * 50 + 50};"
          ></div>
        {/if}
      </div>
    {/each}
  </div>

  <style>
    .schedule-times {
      display: grid;
      grid-template-columns: repeat(calc(2359 / 2.001953), 3px);
      margin-left: calc(100px + 20px);
      position: relative;
    }

    .schedule-time-outer {
      align-items: center;
      display: flex;
      grid-column-end: calc(var(--end) + 1);
      grid-column-start: calc(var(--start) + 1);
      position: relative;
    }

    .schedule-times__time {
      position: relative;
    }

    /* Last item will be a little bigger because it ends on 23:59 */
    .schedule-time-outer:nth-last-child(2) {
      grid-column-end: calc(var(--end) + 11);
    }

    .schedule-time-outer:last-child {
      align-items: flex-end;
      grid-column-start: calc(var(--start) + 1 + 10);
    }

    .dotted-line {
      border-top: 3px dotted black;
      height: 3px;
      margin: 0 8px;
      top: 50%;
      width: -webkit-fill-available;
    }
  </style>
