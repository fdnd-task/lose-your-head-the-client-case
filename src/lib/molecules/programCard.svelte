<script>
  // General imports
  import { onMount } from "svelte";

  // data import
  export let status = "";
  export let imgSrc = "";
  export let programName = "Unnamed Program";
  export let time = "00:00 - 00:00";
  export let programLink = "/";

  // Time splitting
  let parts = time.split(" - ");
  let tempstart = parseInt(parts[0].replace(":", ""));
  let tempend = parseInt(parts[1].replace(":", ""));

  // Calc zodat de grid niet te groot wordt
  const start = tempstart / 2.001953;
  const end = tempend / 2.001953;

  const updateStatus = () => {
    const date = new Date();
    const currentTime = date.getHours() * 100 + date.getMinutes();
    status = tempstart <= currentTime && currentTime <= tempend ? "active" : "";
  };

  onMount(() => {
    updateStatus();
    setInterval(updateStatus, 60000);
  });
</script>

<a
  class="card {status}"
  href={programLink}
  style="--start:{start}; --end:{end}"
>
  <picture class="image">
    <source
      srcset={imgSrc
        ? `https://fdnd-agency.directus.app/assets/${imgSrc}?format=webp&height=96&width=96`
        : "/path/to/default/image.jpg"}
      alt={programName}
    />
    <source
      srcset={imgSrc
        ? `https://fdnd-agency.directus.app/assets/${imgSrc}?format=jpg&height=96&width=96`
        : "/path/to/default/image.jpg"}
      alt={programName}
    />
    <img
      loading="lazy"
      src={imgSrc
        ? `https://fdnd-agency.directus.app/assets/${imgSrc}?format=jpeg&height=96&width=96`
        : "/path/to/default/image.jpg"}
      alt={programName}
    />
  </picture>

  <article class="content">
    <div class="title-wrapper">
      <h2>{programName}</h2>
    </div>

    <div class="events">
      <div class="time-stamp">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1.33301 8.00004C1.33301 4.32671 4.32634 1.33337 7.99967 1.33337C11.673 1.33337 14.6663 4.32671 14.6663 8.00004C14.6663 11.6734 11.673 14.6667 7.99967 14.6667C4.32634 14.6667 1.33301 11.6734 1.33301 8.00004ZM2.66634 8.00004C2.66634 10.94 5.05967 13.3334 7.99967 13.3334C10.9397 13.3334 13.333 10.94 13.333 8.00004C13.333 5.06004 10.9397 2.66671 7.99967 2.66671C5.05967 2.66671 2.66634 5.06004 2.66634 8.00004ZM7.33301 8.27337V4.00004H8.66634V7.72671L11.1397 10.1934L10.193 11.14L7.33301 8.27337Z"
            fill="#8B8B8B"
          />
        </svg>
        <span>{time}</span>
      </div>

      <div class="visit-url">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_208_1034)">
            <path
              d="M5.13683 2.47016C4.87729 2.7297 4.87715 3.15045 5.13651 3.41016L8.82085 7.09956C9.21092 7.49016 9.2107 8.12295 8.82037 8.51329L5.13713 12.1965C4.87748 12.4562 4.87748 12.8772 5.13713 13.1368C5.39667 13.3963 5.81744 13.3965 6.07713 13.1371L10.7057 8.51377C11.0966 8.12331 11.0968 7.48984 10.7061 7.09915L6.07715 2.47016C5.81749 2.2105 5.39649 2.2105 5.13683 2.47016Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_208_1034">
              <rect
                width="6.74667"
                height="11.6067"
                fill="white"
                transform="translate(4.66699 2)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  </article>
</a>

<style>
  :root {
    --calc: calc(2rem - 1rem);
  }

  .card {
    display: block;
    border-radius: 8px;
    background-color: #ffffff;
    box-shadow: 0px 8px 16px rgba(30, 30, 30, 0.08);
    display: flex;
    grid-column-start: calc(var(--start) + 1);
    grid-column-end: calc(var(--end) + 1);
    margin-right: 8px;
    color: #1e1e1e;
    container-type: inline-size;
    height: auto;
    border-style: solid;
    border-width: 2px;
    border-color: #fff;
  }

  /* prefference */
  @media (prefers-reduced-motion) {
    .card {
      border-right: 2px solid #e8e8e8;
      border-radius: 0;
      box-shadow: none;
      text-overflow: ellipsis;
      overflow: hidden;
      width: 100%;
    }

    .card:hover,
    .card.active:hover {
      border-color: #e8e8e8;
      box-shadow: none !important;
      background-color: #e8e8e8;
    }

    .card.active:hover {
      border-color: #fe0170;
    }

    h2 {
      animation: none !important;
    }
  }

  .card.active {
    box-shadow: 0px 0px 0px 2px inset transparent;
    border-color: #fe0170;
  }

  .card:hover,
  .card.active:hover {
    box-shadow: 0px 8px 16px rgba(30, 30, 30, 0.16);
  }

  picture {
    padding: 0 var(--calc);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    max-width: 100px;
  }

  .content:after {
    display: none;
    position: absolute;
    content: "";
    width: 2px;
    background-color: #e8e8e8;
    height: calc(100% - 4px);
    inset: 0;
    top: 2px;
  }

  img {
    width: 48px;
    height: 48px;
    object-fit: cover;
    border-radius: 9999px;
  }

  .card .content {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: var(--calc);
    gap: 0.75rem;
    width: 100%;
    left: -10px;
  }

  .card .title-wrapper {
    max-width: 100%;
    overflow: hidden;
  }

  .card h2 {
    white-space: nowrap;
    font-size: 1.4rem;
    font-weight: 700;
    color: inherit;
    line-height: 1.1;
    display: inline-block;
    width: 100%;
  }

  .events {
    display: flex;
    gap: 16px;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    position: relative;
  }

  .time-stamp {
    align-items: center;
    color: color-mix(inherit 50%, #8b8b8b 50%);
    display: flex;
    gap: 8px;
  }

  .time-stamp path {
    fill: #5a5a5a;
  }

  .visit-url {
    display: none;
    height: 24px;
    width: 24px;
    background-color: #fe0170;
    border-radius: 999px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @keyframes scrolling-left {
    0% {
      transform: translateX(0%);
    }
    70% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }

  @keyframes teleport-back {
    0%,
    20% {
      transform: translateX(0%);
    }
    70% {
      transform: translateX(-100%);
    }
    80% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(0%);
    }
  }

  @container (width < 400px) {
    picture {
      display: none;
    }

    .content:after {
      display: none;
    }
  }

  @container (width < 200px) {
    h2 {
      animation:
        scrolling-left 20s linear infinite,
        teleport-back 20s linear infinite;
    }

    .visit-url {
      position: absolute;
      right: 0;
      bottom: 0;
    }

    .visit-url {
      display: none;
    }

    .time-stamp svg {
      display: none;
    }
  }

  @container (width > 400px) {
    .events {
      max-width: 12rem;
    }

    .card .content .events,
    .card .content .title-wrapper {
      position: sticky;
      max-width: fit-content;
      left: 0;
    }
  }

  @media (min-width: 40em) {
    :root {
      --calc: calc(2rem - 0rem);
    }

    .visit-url {
      display: flex;
    }

    @container (width > 500px) {
      .card .content {
        left: -33px;
      }
    }
  }
</style>
