<script>
    import { onMount } from 'svelte';

    export let status = "";
    export let imgSrc = "";  // Default image if no image is passed
    export let programName = "Unnamed Program";
    export let time = "00:00 - 00:00";
    export let programLink = "/";
    // export let i = 0;

    let wrapper;
    let wrapper2;
    let text;
    let isOverflowing = false;

    // Parse the start and end time
    let parts = time.split(" - ");
    let start = parseInt(parts[0].replace(":", ""));
    let end = parseInt(parts[1].replace(":", ""));

    start = start / 2.001953;
    end = end / 2.001953;

    // Current time in hh:mm format
    const d = new Date();
    const currentTime = d.getHours() * 100 + d.getMinutes();

    // Convert program times to numbers for comparison
    const startTime = parseInt(parts[0].replace(":", ""));
    const endTime = parseInt(parts[1].replace(":", ""));

    // Check if current time falls between program start and end
    if (startTime <= currentTime && currentTime <= endTime) {
        status = "active";
    }

    function checkWidth() {
        if (wrapper2.clientWidth < 400) {
            wrapper2.classList.add('narrow');
        } else {
            wrapper2.classList.remove('narrow');
        }
    }

    // Check if text overflows to apply animation
    onMount(() => {
        if (text.scrollWidth > wrapper.clientWidth) {
            isOverflowing = true;
            console.log("Overflowing");
        }

        // Check on mount
        checkWidth();

        // Add an event listener to handle resizing dynamically
        window.addEventListener('resize', checkWidth);

        // Clean up the event listener when the component is destroyed
        return () => {
            window.removeEventListener('resize', checkWidth);
        };
    });
</script>

<a class="card {status}" href={programLink} style="--start:{start}; --end:{end}" bind:this={wrapper2}>
    <picture class="image">
        <img loading="lazy" src={imgSrc ? `https://fdnd-agency.directus.app/assets/${imgSrc}` : '/path/to/default/image.jpg'} alt={programName} />
    </picture>

    <article class="content">
        <div class="title-wrapper" bind:this={wrapper}>
            <h2 class:overflowing={isOverflowing} bind:this={text}>{programName}</h2>
        </div>

        <div class="time-stamp">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.33301 8.00004C1.33301 4.32671 4.32634 1.33337 7.99967 1.33337C11.673 1.33337 14.6663 4.32671 14.6663 8.00004C14.6663 11.6734 11.673 14.6667 7.99967 14.6667C4.32634 14.6667 1.33301 11.6734 1.33301 8.00004ZM2.66634 8.00004C2.66634 10.94 5.05967 13.3334 7.99967 13.3334C10.9397 13.3334 13.333 10.94 13.333 8.00004C13.333 5.06004 10.9397 2.66671 7.99967 2.66671C5.05967 2.66671 2.66634 5.06004 2.66634 8.00004ZM7.33301 8.27337V4.00004H8.66634V7.72671L11.1397 10.1934L10.193 11.14L7.33301 8.27337Z" fill="#8B8B8B"/>
            </svg>
            <span>{time}</span>
        </div>
    </article>

    <div class="visit-url">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_208_1034)">
                <path d="M5.13683 2.47016C4.87729 2.7297 4.87715 3.15045 5.13651 3.41016L8.82085 7.09956C9.21092 7.49016 9.2107 8.12295 8.82037 8.51329L5.13713 12.1965C4.87748 12.4562 4.87748 12.8772 5.13713 13.1368C5.39667 13.3963 5.81744 13.3965 6.07713 13.1371L10.7057 8.51377C11.0966 8.12331 11.0968 7.48984 10.7061 7.09915L6.07715 2.47016C5.81749 2.2105 5.39649 2.2105 5.13683 2.47016Z" fill="white"/>
            </g>
            <defs>
                <clipPath id="clip0_208_1034">
                    <rect width="6.74667" height="11.6067" fill="white" transform="translate(4.66699 2)"/>
                </clipPath>
            </defs>
        </svg>
    </div>
</a>



<style>

    /* Red: FE0170 */
    /* Blue: 0091FF */
    /* Text-color: 1E1E1E */
    /* Dattime color: 8B8B8B */
    /* line: E8E8E8 */


    .card {
        display: block;
        border-radius: 8px;
        background-color: #FFFFFF;
        box-shadow: 0px 8px 16px rgba(30, 30, 30, 0.08);
        display: flex;
        grid-column-start: calc(var(--start) + 1);
        grid-column-end: calc(var(--end) + 1);
        margin-right: 8px;
        position: relative;

    }

    @media (max-width: 400px) {
    .card picture {
        display: none;
    }

    .content:after {
        display: none;
    }
}

    .card.active {
        box-shadow: 0px 0px 0px 2px inset #FE0170;
    }

    picture {
        padding: 0 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100px;
        max-width: 100px;
    }

    .content:after {
        position: absolute;
        content: "";
        width: 2px;
        background-color: #E8E8E8;
        height: calc(100% - 4px);
        inset: 0;
        top: 2px;
    }

    .card .time-stamp {
        /* display: none  !important; */
    }

    img {
        width: 48px;
        height: 48px;
        object-fit: cover;
        border-radius: 9999px
    }

    .card .content {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 2rem;
        gap: .75rem;
        width: 100%;
    }

    .card .title-wrapper {
        max-width: 100%;
        overflow: hidden;
        /* height: 20px; */
    }

    .card h2 {
        white-space: nowrap;
        font-size: 1.4rem;
        font-weight: 700;
        color: #1E1E1E;
        line-height: 1.1;
        display: inline-block;
    }

    .overflowing {
    animation: scrolling-left 20s linear infinite, teleport-back 20s linear infinite;
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
    0%, 20% {
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






    /* When the card is narrow (less than 400px in width) */
    .card.narrow picture,
    .card.narrow .content:after {
        display: none;
    }

    .card .time-stamp {
        align-items: center;
        color: #5a5a5a;
        display: flex;
        gap: 8px;
    }

    .card .time-stamp path {
        fill: #5a5a5a;
    }

    .visit-url {
        /* display: none !important; */
        position: absolute;
        right: 2rem;
        bottom: 2rem;
        height: 24px;
        width: 24px;
        background-color: #FE0170;
        border-radius: 999px;
        display: flex;
        align-items: center;
        justify-content: center;

    }

    .time-stamp svg {
        display: none;
    }


</style>
