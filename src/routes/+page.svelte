<script>
    import Header from "../lib/components/Header.svelte";
    import Footer from "../lib/components/Footer.svelte";

    export let data
    // console.log(data.homepages)
</script>

<svelte:head>
    <title>INK</title>
</svelte:head>

<Header />

<main>

<!-- HEADER  -->

    <section class="header-main">
        <div class="hero-title">
            <h1 class="hero-heading" aria-label="Where the real legends begin">
                <div class="hero-title-where slide-first" aria-hidden="true">
                    <span>W</span>
                    <span>H</span>
                    <span>E</span>
                    <span>R</span>
                    <span>E</span>
                </div>
                <div class="hero-title-the-real slide-first" aria-hidden="true">
                    <div>
                        <span>T</span>
                        <span>H</span>
                        <span>E</span>
                    </div>
                    <div>
                        <span>R</span>
                        <span>E</span>
                        <span>A</span>
                        <span>L</span>
                    </div>
                </div>
                <div class="hero-title-legends" aria-hidden="true">
                    <span>L</span>
                    <span>E</span>
                    <span>G</span>
                    <span>E</span>
                    <span>N</span>
                    <span>D</span>
                    <span>S</span>
                </div>
                <div class="hero-title-begin slide-second" aria-hidden="true">
                    <span>B</span>
                    <span>E</span>
                    <span>G</span>
                    <span>I</span>
                    <span>N.</span>
                </div>
            </h1>
        </div>
        <!-- <div class="hero-video">
            <video class="hero-video video" playsinline autoplay muted loop>
                <source src="/Temporary-video.mp4" type="video/mp4">
            </video>
        </div> -->

    </section>

<!-- INTRO ABOUT  -->

    <section class="intro-about">
        <div class="intro">
            <p class="intro-text">
                We are dedicated to providing these children with a second chance in life,ensuring
                they have access to education, shelter, nutrition, and an opportunity to pursue their dreams of
                becomingtop football players.
            </p>
            <a href="/about" class="intro-about-button">ABOUT US</a>
        </div>
    </section>

<!-- PLAYER CARDS -->

    <section class="playerCards">
        {#each data.homepages as homepage }
            <div class="playerHead">
                <h2 class="legendsTitle">{homepage.playerCards.title} 
                    <span>{homepage.playerCards.subTitle}</span>
                </h2>
            </div>
        {/each}

        <ul>
            {#each data.homepages as homepage }
                <li>
                    <img src="{homepage.playerCards.imgPlayer[0].url}"  alt="player1">
                </li>
                <li>
                    <img src="{homepage.playerCards.imgPlayer[0].url}"  alt="player1">
                </li>
                <li>
                    <img src="{homepage.playerCards.imgPlayer[0].url}"  alt="player1">
                </li>
                <li>
                    <img src="{homepage.playerCards.imgPlayer[0].url}"  alt="player1">
                </li>
                <li>
                    <img src="{homepage.playerCards.imgPlayer[0].url}"  alt="player1">
                </li>
                <li>
                    <img src="{homepage.playerCards.imgPlayer[0].url}"  alt="player1">
                </li>
                <li>
                    <img src="{homepage.playerCards.imgPlayer[0].url}"  alt="player1">
                </li>
            {/each}
        </ul>

        <div class="btn-wrap legends-btn">
            <button class="news-prev-btn" onclick="prevBtn()">
                <svg width="50" height="56" viewBox="0 0 50 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path class="carroussel-button"
                        d="M49.8779 2.96158C48.6231 10.7315 47.8388 18.5687 46.5289 26.3357C45.6401 31.6034 45.1725 36.9415 44.4812 42.2443C44.0165 45.8088 43.6098 49.3879 42.9621 52.9203C42.3231 56.394 41.9484 56.5579 38.7883 55.2322C33.8883 53.1778 29.0377 51.0063 24.1464 48.9197C17.5734 46.1161 10.9859 43.3476 4.40129 40.5645C4.31415 40.5264 4.2183 40.503 4.12826 40.4679C1.3883 39.3714 0.0192805 37.3151 0.0212169 34.2988V23.4824H0.00379026C0.00379026 19.3911 -0.00782227 15.2998 0.00960504 11.2085C0.0183187 8.68588 0.285537 8.25568 2.6237 7.85183C9.08342 6.73389 15.5925 5.86762 22.0145 4.57117C25.9908 3.76638 30.002 3.20157 33.9783 2.42311C38.3323 1.56857 42.7036 0.801817 47.0866 0.114085C49.6803 -0.292702 50.3019 0.327715 49.8779 2.96158Z"
                        fill="white" />
                    <path
                        d="M24.4777 20.9999L26 22.6449L21.0553 27.9999L26 33.3549L24.4777 34.9999L18 27.9999L24.4777 20.9999Z"
                        fill="#051A1A" />
                </svg>
            </button>
            <button class="news-next-btn" onclick="nextBtn()">
                <svg width="50" height="56" viewBox="0 0 50 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path class="carroussel-button"
                        d="M0.122151 53.0384C1.37692 45.2685 2.16116 37.4313 3.47111 29.6643C4.3599 24.3966 4.82752 19.0585 5.5188 13.7557C5.98353 10.1912 6.39019 6.61206 7.03791 3.07975C7.67691 -0.394031 8.0516 -0.557926 11.2118 0.767788C16.1117 2.82221 20.9623 4.99371 25.8536 7.08032C32.4266 9.88392 39.0141 12.6524 45.5987 15.4355C45.6859 15.4736 45.7817 15.497 45.8718 15.5321C48.6117 16.6286 49.9807 18.6849 49.9788 21.7012L49.9788 32.5177L49.9962 32.5177C49.9962 36.6089 50.0078 40.7002 49.9904 44.7915C49.9817 47.3141 49.7145 47.7443 47.3763 48.1482C40.9166 49.2661 34.4075 50.1324 27.9855 51.4288C24.0092 52.2336 19.998 52.7984 16.0217 53.5769C11.6677 54.4314 7.29639 55.1982 2.91342 55.8859C0.319656 56.2927 -0.301914 55.6723 0.122151 53.0384Z"
                        fill="white" />
                    <path 
                        d="M22.5223 20.9999L21 22.6449L25.9447 27.9999L21 33.3549L22.5223 34.9999L29 27.9999L22.5223 20.9999Z"
                        fill="#051A1A" />
                </svg>
            </button>
        </div>
    </section>


<!-- NUMBER STATS-->

    <section class="numbers">

        {#each data.homepages as homepage }

            <div class="text-area">
                <h2 class="numbers-header">{homepage.growingNumbers.titleNumbers}  
                    <span class="yellow">{homepage.growingNumbers.titleNumbers2}</span> 
                    <span>{homepage.growingNumbers.titleNumbers3}</span> 
                </h2>
                <p>{homepage.growingNumbers.textNumbers}</p>
            </div>

            <div class="numbers-flex">
                <div class="numbers-wrapper">
                    <div class="children-saved shapes">
                        <div class="single-number-wrapper">
                            <div class="stats-numbers nr358">{homepage.growingNumbers.numberChilderenSaved}</div>
                        </div>
                        <svg style="--ratio: 691/1440" viewBox="0 0 691 376" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M684.891 143.32C662.595 190.92 666.685 172.221 666.608 226.409C666.556 258 667.439 289.577 667.841 321.168C667.893 325.482 667.737 329.823 667.439 334.124C667.023 340.05 663.816 343.558 657.972 344.858C638.585 349.159 619.236 353.603 599.849 357.918C575.839 363.258 551.764 368.339 527.818 373.914C520.897 375.526 514.054 376.136 507.275 374.629C486.511 370.003 465.241 369.782 444.269 367.053C398.444 361.075 352.449 356.436 306.519 351.342C276.055 347.963 245.539 344.637 215.101 341.063C193.701 338.555 172.028 338.1 150.823 333.396C141.2 331.252 131.085 331.031 121.177 330.55C100.01 329.55 79.3375 323.923 58.0672 323.949C51.99 323.962 46.1075 322.364 40.1602 321.246C32.8753 319.869 30.0055 315.84 30.0574 308.68C30.2133 289.642 30.1094 270.605 30.1094 251.554H29.8756C29.8756 235.116 29.7068 218.664 29.9406 202.226C30.0704 192.87 27.9668 184.449 23.0842 176.34C16.3837 165.242 10.4363 153.69 4.22925 142.293C2.99563 140.032 1.24259 137.693 1.03482 135.289C-0.54941 117.161 -0.00401476 98.9945 0.632276 80.8407C0.775116 76.8382 3.43714 74.6681 7.17697 73.8494C9.70914 73.3036 12.2803 72.7969 14.8514 72.6149C38.1215 70.8866 61.0928 66.6763 84.4278 65.1169C101.153 63.9863 117.775 60.4257 134.578 59.4381C157.458 58.1126 179.936 53.3306 202.869 52.239C219.217 51.4593 235.423 47.8597 251.772 46.7291C275.042 45.1048 297.936 40.3356 321.297 39.2961C337.23 38.5943 353.02 35.1897 368.953 33.9941C393.068 32.1618 416.844 27.5617 441.036 26.3402C455.255 25.6254 469.37 23.0394 483.538 21.48C516.144 17.8805 548.816 14.8137 581.371 10.7333C605.355 7.71848 629.56 6.7049 653.414 2.42958C662.309 0.844206 671.516 1.1171 680.567 0.441367C687.06 -0.039444 690.28 2.97535 690.618 9.35584C690.709 11.0842 690.929 12.8125 690.929 14.5408C690.955 50.0168 690.903 85.5058 690.981 120.995C690.994 129.052 688.215 136.225 684.891 143.32Z"
                                fill="" />
                            <path
                                d="M684.891 143.32C662.595 190.92 666.685 172.221 666.608 226.409C666.556 258 667.439 289.577 667.841 321.168C667.893 325.482 667.737 329.823 667.439 334.124C667.023 340.05 663.816 343.558 657.972 344.858C638.585 349.159 619.236 353.603 599.849 357.918C575.839 363.258 551.764 368.339 527.818 373.914C520.897 375.526 514.054 376.136 507.275 374.629C486.511 370.003 465.241 369.782 444.269 367.053C398.444 361.075 352.449 356.436 306.519 351.342C276.055 347.963 245.539 344.637 215.101 341.063C193.701 338.555 172.028 338.1 150.823 333.396C141.2 331.252 131.085 331.031 121.177 330.55C100.01 329.55 79.3375 323.923 58.0672 323.949C51.99 323.962 46.1075 322.364 40.1602 321.246C32.8753 319.869 30.0055 315.84 30.0574 308.68C30.2133 289.642 30.1094 270.605 30.1094 251.554H29.8756C29.8756 235.116 29.7068 218.664 29.9406 202.226C30.0704 192.87 27.9668 184.449 23.0842 176.34C16.3837 165.242 10.4363 153.69 4.22925 142.293C2.99563 140.032 1.24259 137.693 1.03482 135.289C-0.54941 117.161 -0.00401476 98.9945 0.632276 80.8407C0.775116 76.8382 3.43714 74.6681 7.17697 73.8494C9.70914 73.3036 12.2803 72.7969 14.8514 72.6149C38.1215 70.8866 61.0928 66.6763 84.4278 65.1169C101.153 63.9863 117.775 60.4257 134.578 59.4381C157.458 58.1126 179.936 53.3306 202.869 52.239C219.217 51.4593 235.423 47.8597 251.772 46.7291C275.042 45.1048 297.936 40.3356 321.297 39.2961C337.23 38.5943 353.02 35.1897 368.953 33.9941C393.068 32.1618 416.844 27.5617 441.036 26.3402C455.255 25.6254 469.37 23.0394 483.538 21.48C516.144 17.8805 548.816 14.8137 581.371 10.7333C605.355 7.71848 629.56 6.7049 653.414 2.42958C662.309 0.844206 671.516 1.1171 680.567 0.441367C687.06 -0.039444 690.28 2.97535 690.618 9.35584C690.709 11.0842 690.929 12.8125 690.929 14.5408C690.955 50.0168 690.903 85.5058 690.981 120.995C690.994 129.052 688.215 136.225 684.891 143.32Z"
                                class="filled" />
                        </svg>
                        <div class="background-color"></div>
                        <p>{homepage.growingNumbers.titleChilderSaved}</p>
                    </div>

                    <div class="talents-discovered shapes">
                        <clipPath id="talents-discovered-clip">
                            <svg style="--ratio: 254/1440" viewBox="0 0 254 332" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M253.872 25.5571C253.859 67.9724 253.872 110.401 253.872 152.829H253.846C253.846 198.285 253.885 243.741 253.82 289.184C253.794 304.31 253.626 304.765 238.614 308.235C212.526 314.264 186.335 319.813 160.195 325.622C151.767 327.493 143.431 329.832 134.938 331.353C126.212 332.912 124.082 331.314 123.407 322.282C122.758 313.667 123.082 304.973 122.965 296.318C122.913 292.433 123.069 288.508 122.641 284.649C121.732 276.241 119.589 274.097 111.382 273.317C107.526 272.954 103.604 273.084 99.7083 273.071C72.4517 273.058 45.195 273.175 17.9384 273.019C3.19987 272.941 2.00524 270.952 0.849529 256.593C-1.16323 231.747 2.86225 208.512 15.9127 186.94C24.1715 173.296 26.8985 158.43 26.5089 142.277C25.6908 107.672 26.2102 73.0274 26.3011 38.396C26.3531 23.5559 28.6386 21.7236 43.481 20.1642C76.9836 16.6556 110.447 12.7181 143.924 8.93661C147.794 8.50778 151.65 7.71509 155.52 7.6761C182.413 7.44219 208.864 2.45219 235.602 0.554934C238.186 0.373006 240.783 -0.0688378 243.354 0.00913152C251.249 0.230044 253.301 2.06234 253.833 9.97622C254.184 15.1482 253.872 20.3591 253.872 25.5571Z"
                                    fill="#FFDA1D" />
                                <path
                                    d="M253.872 25.5571C253.859 67.9724 253.872 110.401 253.872 152.829H253.846C253.846 198.285 253.885 243.741 253.82 289.184C253.794 304.31 253.626 304.765 238.614 308.235C212.526 314.264 186.335 319.813 160.195 325.622C151.767 327.493 143.431 329.832 134.938 331.353C126.212 332.912 124.082 331.314 123.407 322.282C122.758 313.667 123.082 304.973 122.965 296.318C122.913 292.433 123.069 288.508 122.641 284.649C121.732 276.241 119.589 274.097 111.382 273.317C107.526 272.954 103.604 273.084 99.7083 273.071C72.4517 273.058 45.195 273.175 17.9384 273.019C3.19987 272.941 2.00524 270.952 0.849529 256.593C-1.16323 231.747 2.86225 208.512 15.9127 186.94C24.1715 173.296 26.8985 158.43 26.5089 142.277C25.6908 107.672 26.2102 73.0274 26.3011 38.396C26.3531 23.5559 28.6386 21.7236 43.481 20.1642C76.9836 16.6556 110.447 12.7181 143.924 8.93661C147.794 8.50778 151.65 7.71509 155.52 7.6761C182.413 7.44219 208.864 2.45219 235.602 0.554934C238.186 0.373006 240.783 -0.0688378 243.354 0.00913152C251.249 0.230044 253.301 2.06234 253.833 9.97622C254.184 15.1482 253.872 20.3591 253.872 25.5571Z"
                                    class="filled" />
                            </svg>
                            <div class="stats-numbers nr12">{homepage.growingNumbers.numberTalents}</div>
                            <p>{homepage.growingNumbers.titleTalents}</p>
                    </div>

                    <div class="new-partners shapes">
                        <clipPath id="new-partners-clip">
                            <svg style="--ratio: 445/1440" viewBox="0 0 445 282" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M444.252 60.5536C443.473 75.2118 443.188 90.078 440.409 104.424C436.279 125.762 436.877 147.489 433.241 168.788C429.241 192.218 430.046 216.18 424.995 239.532C423.19 247.888 424.099 256.802 423.086 265.366C421.385 279.673 419.45 281.532 405.166 281.778C386.142 282.103 367.118 281.857 348.082 281.857V281.921C329.058 281.921 310.021 282.142 290.997 281.844C277.207 281.636 276.311 280.336 276.518 266.86C276.778 249.551 277.298 232.255 280.583 215.18C281.076 212.646 281.362 210.034 281.492 207.448C282.167 194.791 279.271 191.36 266.325 190.087C257.741 189.229 249.08 188.449 240.51 188.033C218.902 186.981 197.813 181.965 176.153 181.172C158.922 180.548 141.781 177.637 124.601 175.792C89.8647 172.076 55.1155 168.398 20.3792 164.695C17.3666 164.383 14.3669 163.98 11.3542 163.707C4.57581 163.083 1.4593 158.912 0.900924 152.596C0.537329 148.295 0.342547 143.942 0.576286 139.641C2.77084 99.8632 2.62798 60.0598 2.77082 20.2565C2.84873 -0.45738 3.73176 -1.30198 24.145 1.07608C65.7376 5.92317 107.291 11.1471 148.884 15.9422C178.893 19.3989 209.033 21.7509 238.938 25.8573C259.469 28.6642 280.18 29.3139 300.646 33.2904C314.917 36.0583 329.876 35.2916 344.42 37.7476C367.404 41.6201 390.882 41.5291 413.775 46.4931C420.021 47.8576 426.722 47.0649 433.137 47.8186C441.902 48.8582 444.707 51.7431 444.252 60.5536Z"
                                    fill="white" />
                                <path
                                    d="M444.252 60.5536C443.473 75.2118 443.188 90.078 440.409 104.424C436.279 125.762 436.877 147.489 433.241 168.788C429.241 192.218 430.046 216.18 424.995 239.532C423.19 247.888 424.099 256.802 423.086 265.366C421.385 279.673 419.45 281.532 405.166 281.778C386.142 282.103 367.118 281.857 348.082 281.857V281.921C329.058 281.921 310.021 282.142 290.997 281.844C277.207 281.636 276.311 280.336 276.518 266.86C276.778 249.551 277.298 232.255 280.583 215.18C281.076 212.646 281.362 210.034 281.492 207.448C282.167 194.791 279.271 191.36 266.325 190.087C257.741 189.229 249.08 188.449 240.51 188.033C218.902 186.981 197.813 181.965 176.153 181.172C158.922 180.548 141.781 177.637 124.601 175.792C89.8647 172.076 55.1155 168.398 20.3792 164.695C17.3666 164.383 14.3669 163.98 11.3542 163.707C4.57581 163.083 1.4593 158.912 0.900924 152.596C0.537329 148.295 0.342547 143.942 0.576286 139.641C2.77084 99.8632 2.62798 60.0598 2.77082 20.2565C2.84873 -0.45738 3.73176 -1.30198 24.145 1.07608C65.7376 5.92317 107.291 11.1471 148.884 15.9422C178.893 19.3989 209.033 21.7509 238.938 25.8573C259.469 28.6642 280.18 29.3139 300.646 33.2904C314.917 36.0583 329.876 35.2916 344.42 37.7476C367.404 41.6201 390.882 41.5291 413.775 46.4931C420.021 47.8576 426.722 47.0649 433.137 47.8186C441.902 48.8582 444.707 51.7431 444.252 60.5536Z"
                                    class="filled" />
                            </svg>
                            <div class="stats-numbers nr04">{homepage.growingNumbers.numberPartners}</div>
                            <p>{homepage.growingNumbers.titlePartners}</p>
                    </div>

                    <div class="clubs-invested shapes">
                        <clipPath id="clubs-invested-clip">
                            <svg style="--ratio: 470/1440" viewBox="0 0 470 348" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M469.69 138.387C469.677 166.079 469.69 193.758 469.664 221.437C469.664 225.336 469.573 229.234 469.352 233.107C469.04 238.396 466.794 241.683 461.041 242.944C443.745 246.751 426.591 251.143 409.359 255.172C375.298 263.138 341.224 271.013 307.163 278.927C274.349 286.542 241.534 294.17 208.707 301.759C173.789 309.841 138.858 317.872 103.927 325.916C74.904 332.608 45.8943 339.379 16.8457 345.954C1.71762 349.372 -0.386035 347.436 1.18521 332.413C2.08121 323.811 3.13307 315.221 4.05504 306.632C8.74281 263.229 13.4955 219.826 18.0145 176.397C19.1312 165.65 19.2091 154.799 20.2869 144.053C21.4946 132.006 23.3255 131.24 35.1424 128.901C58.8799 124.222 82.4486 118.765 106.082 113.58C138.13 106.536 170.218 99.6751 202.175 92.2551C216.446 88.9544 217.394 87.304 217.537 72.8407C217.719 54.245 217.381 35.6364 217.563 17.0407C217.706 2.39546 219.485 0.537237 234.054 0.277339C249.611 -0.0215433 265.181 -0.0215686 280.737 0.251324C295.775 0.524216 297.398 2.34346 297.645 18.0023C297.839 30.5424 297.476 43.0954 297.813 55.6225C298.177 69.1112 300.696 70.6836 313.578 67.7467C358.625 57.4808 403.697 47.3447 448.77 37.1697C449.186 37.0658 449.614 36.9749 450.03 36.8969C468.092 33.5832 469.638 34.7788 469.677 52.7507C469.729 81.3004 469.69 109.837 469.69 138.387Z"
                                    fill="#163A3A" />
                                <path
                                    d="M469.69 138.387C469.677 166.079 469.69 193.758 469.664 221.437C469.664 225.336 469.573 229.234 469.352 233.107C469.04 238.396 466.794 241.683 461.041 242.944C443.745 246.751 426.591 251.143 409.359 255.172C375.298 263.138 341.224 271.013 307.163 278.927C274.349 286.542 241.534 294.17 208.707 301.759C173.789 309.841 138.858 317.872 103.927 325.916C74.904 332.608 45.8943 339.379 16.8457 345.954C1.71762 349.372 -0.386035 347.436 1.18521 332.413C2.08121 323.811 3.13307 315.221 4.05504 306.632C8.74281 263.229 13.4955 219.826 18.0145 176.397C19.1312 165.65 19.2091 154.799 20.2869 144.053C21.4946 132.006 23.3255 131.24 35.1424 128.901C58.8799 124.222 82.4486 118.765 106.082 113.58C138.13 106.536 170.218 99.6751 202.175 92.2551C216.446 88.9544 217.394 87.304 217.537 72.8407C217.719 54.245 217.381 35.6364 217.563 17.0407C217.706 2.39546 219.485 0.537237 234.054 0.277339C249.611 -0.0215433 265.181 -0.0215686 280.737 0.251324C295.775 0.524216 297.398 2.34346 297.645 18.0023C297.839 30.5424 297.476 43.0954 297.813 55.6225C298.177 69.1112 300.696 70.6836 313.578 67.7467C358.625 57.4808 403.697 47.3447 448.77 37.1697C449.186 37.0658 449.614 36.9749 450.03 36.8969C468.092 33.5832 469.638 34.7788 469.677 52.7507C469.729 81.3004 469.69 109.837 469.69 138.387Z"
                                    class="filled" />
                            </svg>
                            <div class="stats-numbers nr08">{homepage.growingNumbers.numberClubs}</div>
                            <p>{homepage.growingNumbers.titleClubs}</p>
                    </div>
                </div>
            </div>
        {/each}
    </section>

<!-- SPONSOR INTRO-->

    <section class="sponsors">
        <div class="sponsor-center-text">
            <h2>We become the <br> biggest club with <br> impact of Brasil</h2>
            <p class="mobile-sponsor-text">Football is more than a game. In the favela areas of Rio de Janeiro,
                where
                danger and violence are a constant threat, football can be a lifeline for young kids.</p>
            <p class="desktop-sponsor-text">Football is more than a game. In the favela areas of Rio de <br>
                Janeiro,
                where danger and violence are a constant threat, <br> football can be a lifeline for young kids.</p>
            <button class="sponsor-button">
                Become a sponsor <svg width="6" height="11" viewBox="0 0 6 11" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.1417 0.25L0 1.48375L3.7085 5.5L0 9.51625L1.1417 10.75L6 5.5L1.1417 0.25Z"
                        fill="#051A1A" />
                </svg>
            </button>
        </div>
    </section>

<!-- STORY INTRO-->

    <section class="story">
        <div class="story-wrapper">
            <div class="story-quote">
                <h2>Get to know us <br><span class="yellow">better.</span>Watch our <br> story</h2>
            </div>
            <div class="story-text">
                <p>Dui neque pellentesque posuere aenean sit nibh lectus nec a. Enim in praesent felis massa dui
                    dolor
                    purus aliquam. Pretium tortor eu sed molestie.</p>
            </div>
        </div>
        <div class="story-video">
            <video width="100%" height="100%" loop muted autoplay>
                <source src="/Temporary-video.mp4" type="video/mp4">
            </video>
        </div>
        <div class="scroll-marquee-wrapper">
            <p id="legends-marquee">Where the real <span class="yellow">legends</span> begin</p>
        </div>
    </section>

<!-- UP TO DATE NEWS-->

    <section class="news">
        <h2>Stay up to date</h2>
        <div class="news-card-section">
            <article class="news-card">
                <div class="news-card-img-container">
                    <img src="/card/image254.png" alt="">
                </div>  
                <h3>Iaculis nulla a nam pharetra augue congue.</h3>
            </article>
            <article class="news-card">
                <div class="news-card-img-container">
                    <img src="/card/image253.png" alt="">
                </div>
                <h3>Iaculis nulla a nam pharetra augue congue.</h3>
            </article>
            <article class="news-card">
                <div class="news-card-img-container">
                    <img src="/card/image252.png" alt="">
                </div>    
                <h3>Iaculis nulla a nam pharetra augue congue.</h3>
            </article>
            <article class="news-card">
                <div class="news-card-img-container">
                    <img src="/card/image254.png" alt="">
                </div>    
                <h3>Iaculis nulla a nam pharetra augue congue.</h3>
            </article>
            <article class="news-card">
                <div class="news-card-img-container">
                    <img src="/card/image252.png" alt="">
                </div>
                <h3>Iaculis nulla a nam pharetra augue congue.</h3>
            </article>
        </div>
        
        <div class="btn-wrap">
            <button class="news-prev-btn" onclick="prevBtn()">
                <svg width="50" height="56" viewBox="0 0 50 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path class="carroussel-button"
                        d="M49.8779 2.96158C48.6231 10.7315 47.8388 18.5687 46.5289 26.3357C45.6401 31.6034 45.1725 36.9415 44.4812 42.2443C44.0165 45.8088 43.6098 49.3879 42.9621 52.9203C42.3231 56.394 41.9484 56.5579 38.7883 55.2322C33.8883 53.1778 29.0377 51.0063 24.1464 48.9197C17.5734 46.1161 10.9859 43.3476 4.40129 40.5645C4.31415 40.5264 4.2183 40.503 4.12826 40.4679C1.3883 39.3714 0.0192805 37.3151 0.0212169 34.2988V23.4824H0.00379026C0.00379026 19.3911 -0.00782227 15.2998 0.00960504 11.2085C0.0183187 8.68588 0.285537 8.25568 2.6237 7.85183C9.08342 6.73389 15.5925 5.86762 22.0145 4.57117C25.9908 3.76638 30.002 3.20157 33.9783 2.42311C38.3323 1.56857 42.7036 0.801817 47.0866 0.114085C49.6803 -0.292702 50.3019 0.327715 49.8779 2.96158Z"
                        fill="white" />
                    <path
                        d="M24.4777 20.9999L26 22.6449L21.0553 27.9999L26 33.3549L24.4777 34.9999L18 27.9999L24.4777 20.9999Z"
                        fill="#051A1A" />
                </svg>
            </button>
            <button class="news-next-btn" onclick="nextBtn()">
                <svg width="50" height="56" viewBox="0 0 50 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path class="carroussel-button"
                        d="M0.122151 53.0384C1.37692 45.2685 2.16116 37.4313 3.47111 29.6643C4.3599 24.3966 4.82752 19.0585 5.5188 13.7557C5.98353 10.1912 6.39019 6.61206 7.03791 3.07975C7.67691 -0.394031 8.0516 -0.557926 11.2118 0.767788C16.1117 2.82221 20.9623 4.99371 25.8536 7.08032C32.4266 9.88392 39.0141 12.6524 45.5987 15.4355C45.6859 15.4736 45.7817 15.497 45.8718 15.5321C48.6117 16.6286 49.9807 18.6849 49.9788 21.7012L49.9788 32.5177L49.9962 32.5177C49.9962 36.6089 50.0078 40.7002 49.9904 44.7915C49.9817 47.3141 49.7145 47.7443 47.3763 48.1482C40.9166 49.2661 34.4075 50.1324 27.9855 51.4288C24.0092 52.2336 19.998 52.7984 16.0217 53.5769C11.6677 54.4314 7.29639 55.1982 2.91342 55.8859C0.319656 56.2927 -0.301914 55.6723 0.122151 53.0384Z"
                        fill="white" />
                    <path 
                        d="M22.5223 20.9999L21 22.6449L25.9447 27.9999L21 33.3549L22.5223 34.9999L29 27.9999L22.5223 20.9999Z"
                        fill="#051A1A" />
                </svg>
            </button>
        </div>
    </section>

</main>

<Footer />

<style>

    /* :root {
        --charcoal: #051A1A;
        --candelLight: #FFDA1D;
        --justWhite: #FFFFFF;
        --jungleGreen: #163A3A;
        --plantGreen: #179446;
        --pictonBlue: #3DBAE1;
        --copy-font: 'Apercu pro', sans-serif;
        --paragraph-font: 'Jubilat', serif;
        --header-font: 'Kirang Haerang', sans-serif;
        --link-hover-color: #FFDA1D;
        --button-hover-color: #FFFFFF;
        --top-nav-sponsor-button-hover-color: #051A1A;
    } */


    /* ============== HEADER - SECTION START ============== */

    .header-main {
        display: flex;
        width: 100%;
        margin: 2em;
    }

    .hero-title {
        display: flex;
        flex-direction: column;
        width: 40%;
        transform: rotate(-2deg);
    }

    .hero-heading {
        font-weight: normal;
    }

    .hero-title span {
        font-size: clamp(36px, 9vw, 128px);
        font-family: 'Kirang Haerang';
        text-transform: uppercase;
        display: flex;
        height: fit-content;
        line-height: 62%;
    }

    .hero-title-where,
    .hero-title-the-real,
    .hero-title-the-real div,
    .hero-title-legends,
    .hero-title-begin {
        display: flex;
        align-items: flex-end;
    }

    .hero-title-the-real {
        width: fit-content;
        margin: 0 0 0 auto;
        gap: 2vw;
    }

    .hero-title-where span:nth-of-type(1),
    .hero-title-where span:nth-of-type(2),
    .hero-title-the-real>div:nth-of-type(2) span:nth-of-type(2) {
        font-size: clamp(2rem, 11.5vw, 168px);
    }

    .hero-title-legends {
        color: var(--candelLight);
    }

    .hero-title-legends span {
        font-size: clamp(40px, 10vw, 144px);
    }

    .hero-title-legends span:nth-of-type(1),
    .hero-title-legends span:nth-of-type(7) {
        font-size: clamp(36px, 9vw, 128px);
    }


    .hero-title-legends span:nth-of-type(4) {
        font-size: clamp(29px, 7.2vw, 104px);
    }

    .hero-title-begin {
        width: fit-content;
        margin: 0 0 0 auto;
    }

    .hero-title-begin span:nth-of-type(2),
    .hero-title-begin span:nth-of-type(3) {
        font-size: clamp(32px, 7.8vw, 112px);
    }

    /* ============== HEADER END ============== */

    /* ============== INTRO ABOUT - SECTION START ==============*/

    .intro {
        width: 100%;
        height: 75vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;

        background-image: url(/intro-mask.svg);
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center center;

        margin: 12vw 0 0 0;
        padding: 0 14vw;
    }

    .intro-text {
        display: flex;
        flex-direction: column;
        color: var(--charcoal);
        font-family: 'Jubilat';
        font-size: clamp(2vw, 4vw, 57px);
        line-height: 96%;
    }

    .intro-about-button {
        font-family: 'Apercu';
        font-weight: 700;
        line-height: 140%;
        font-size: 16px;
        width: fit-content;
        border: none;
        text-decoration: none;
        outline: none;
        color: var(--charcoal);
        background-color: var(--justWhite);
        border-radius: 40px;
        padding: 5px 10px;
        margin: 1em 0;
        transition: 0.2s ease-in-out;
    }

    .intro-about-button:hover{
        background-color: var(--pictonBlue);
        color: var(--justWhite);
        transform: scale(1.02);
    }

    @media (min-width: 600px){

        .intro-text  {
            font-size: 1.5em;
        }

    }


    @media (min-width: 800px){

        .intro-text {
            font-size: 1.7em;
        }
    }

    @media (min-width: 1000px){

        .intro-text {
            font-size: 2em;
        }

    }

    @media (min-width: 1000px){

        .intro-text {
            font-size: 2.7em;
        }

        .intro-about-button {
            font-size: 20px;
            margin: 2em 0;
        }
    }

    @media (min-width: 1500px){

        .header-main{
            margin: 5em;
        }

        .intro-text {
            font-size: 2.5em;
        }

        .intro-about-button {
            font-size: 22px;
            margin: 2.2em 0;
        }
    }

/* ============== PLAYER CARDS - SECTION START ============== */

    .playerHead{
        display: flex;
        flex-direction: row;
        color: var(--justWhite);
        font-size: 2.5em;
        font-weight: normal;
        justify-content: center;
        overflow: hidden;
        padding: 2em 0;
    }

    .legendsTitle{
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .legendsTitle span{
        padding-left: .2em;
        color: var(--candelLight);
    }


    .playerCards ul{
        display: flex;
        gap: .5em;
        padding: 0 2em ;
        overflow: hidden;
    }
    
    .legends-btn{
        margin: 2em 0;
    }


/* ============== NUMBERS - SECTION START ============== */

    .yellow{
        color: var(--candelLight);
    }

    .numbers {
        padding: 4em 6em 0 6em;

    }

    .text-area {
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        justify-content: space-between;
        padding-bottom: 2em;

    }

    .numbers-header {
        max-width: 50%;
        font-size: 3em;
    }

    .text-area p {
        max-width: 35%;
        border-left: solid 1px var(--candelLight);
        height: max-content;
        padding-left: 1%;
    }

    .shapes {
        width: max-content;
        height: max-content;
    }

    .numbers-flex {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }

    .numbers-wrapper {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
        grid-column-gap: 0px;
        grid-row-gap: 0px;
        padding: 10%;
        padding-left: 20%;
    }

    .numbers-wrapper svg {
        width: calc(var(--ratio) * 100vw);
        height: auto;
        overflow: visible;
    }

    .stats-numbers {
        font-family: var(--paragraph-font);
        font-size: 10vw;
    }

    .numbers-wrapper p {
        font-size: clamp(13px, 1.1vw, 85px);
    }

    .children-saved {
        position: relative;
        grid-area: 1 / 1 / 2 / 2;
        clip-path: url(#children-saved-clip);
        color: var(--pictonBlue);
    }

    .children-saved path {
        fill: none;
        stroke: currentColor;
        stroke-width: 5px;
    }


    .children-saved p {
        position: absolute;
        bottom: 7%;
        right: 8%;
        transform: rotate(-12.2deg);
        color: var(--justWhite);
    }

    .single-number-wrapper {
        position: absolute;
        top: 14%;
        left: 7%;
        min-width: 20em;
    }

    .nr358 {
        transform: rotate(-6.5deg);
        color: var(--justWhite);
    }

    }

    .talents-discovered p {
        position: absolute;
        bottom: 7%;
        right: 27%;
        color: var(--charcoal);
        max-width: 20%;
        transform: rotate(-11deg);
    }

    .nr12 {
        position: absolute;
        top: 2%;
        right: 5%;
        color: var(--candelLight);
        mix-blend-mode: difference;
    }

    .new-partners {
        position: relative;
        grid-area: 2 / 1 / 3 / 2;
        clip-path: url(#new-partners-clip);
        color: var(--justWhite);
        transform: translateX(7%) translateY(-10%);
    }

    .new-partners p {
        position: absolute;
        bottom: 4%;
        right: 11%;
        color: var(--charcoal);
    }

    .nr04 {
        position: absolute;
        top: 15%;
        right: 6%;
        transform: rotate(6deg);
        color: var(--justWhite);
        mix-blend-mode: difference;
    }

    .clubs-invested {
        position: relative;
        grid-area: 2 / 2 / 3 / 3;
        clip-path: url(#clubs-invested-clip);
        transform: translateX(-44%) translateY(-28%);
        color: var(--jungleGreen);
    }

    .clubs-invested p {
        position: absolute;
        bottom: 10%;
        left: 5%;
        transform: rotate(-13deg);
        color: var(--justWhite);
    }

    .nr08 {
        position: absolute;
        top: 15%;
        right: 5%;
        transform: rotate(-10deg);
        color: var(--justWhite);
    }

    svg .filled {
        fill: currentColor;
        clip-path: inset(calc(var(--variable) * 100%) 0 0 0);
    }


    @media only screen and (max-width: 600px) {

        .numbers {
            padding: 2em;
        }

        .text-area {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            align-items: flex-start;
            margin-top: 20%;
        }

        .numbers-header {
            max-width: 100%;
            font-size: 2.5em;
        }

        .text-area p {
            margin-left: 0;
            margin-top: 10%;
            max-width: 90%;
            border: none;
            padding-left: 0;
        }

        .numbers-wrapper {
            transform: rotate(90deg);
            max-height: 100vw;
            margin-bottom: 100%;
            padding-left: 100%;
        }

        .numbers-wrapper svg {
            min-width: calc(var(--ratio) * 190vw);
        }

        .numbers-wrapper p {
            transform: rotate(270deg);
        }

        .single-number-wrapper {
            position: absolute;
            top: 14%;
            left: 7%;
            min-height: 10em;
            min-width: 8em;
        }

        .nr358 {
            transform: rotate(270deg) translateX(-60%) translateY(-60%);
        }

        .nr04 {
            transform: rotate(276deg) translateX(-20%);
        }

        .nr08 {
            transform: rotate(265deg) translateX(0%);
        }

        .nr12 {
            transform: rotate(270deg) translateX(-20%) translateY(0%);
        }

        .new-partners p {
            left: 0;
            transform: rotate(270deg) translateX(82%) translateY(-680%);
        }

        .clubs-invested p {
            transform: rotate(274deg) translateX(40%) translateY(-180%);
        }

        .children-saved p {
            transform: rotate(270deg) translateX(60%) translateY(240%);
        }

        svg .filled {
            fill: currentColor;
            clip-path: inset(0 0 0 calc(var(--variable) * 100%));
        }
    }

/* ============== NUMBERS - SECTION END ============== */

/* ============== SPONSORS - SECTION START ============== */

    .sponsors {
        width: 100%;
        height: 75vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;

        background-image: url(/blue-mask.svg);
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center center;

        padding: 0 14vw;
    }

    .sponsor-center-text {
        text-align: center;
        max-width: 600px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .sponsors>.sponsor-center-text>h2 {
        font-weight: 200;
        line-height: 0.9em;
        font-size: clamp(24px, 4.1vw, 60px);
    }

    .sponsors>.sponsor-center-text>p {
        padding-top: 2rem;
        padding-bottom: 2rem;
    }


    @media only screen and (min-width: 1441px) {

        .sponsors {
            background-repeat: no-repeat;

            background-position: center center;
            align-items: center;
            display: flex;
            height: 75vw;
            width: 100vw;
        }
    }

/* ============== SPONSORS - SECTION END ============== */

/* ============== STORY - SECTION START ============== */

    .story-wrapper {
        display: grid;
        padding-top: 14em;
        grid-template-columns: 3fr 2fr;
        grid-template-rows: 1fr;
        grid-template-areas: "story-quote story-text";
    }

    .story-quote>h2 {
        grid-area: story-quote;
        line-height: 90%;
        font-weight: 200;
    }

    .story-text {
        grid-area: story-text;
        display: flex;
        align-items: end;
        justify-content: flex-end;
    }

    .story-text p {
        font-size: 0.85em;
        max-width: 58%;
        border-left: solid 2px var(--candelLight);
        padding-left: 1.5em;
        margin: 0;
    }

    .mobile-sponsor-text {
        display: none;
    }

    .desktop-sponsor-text {
        display: block;
    }

    .story-video {
        margin-top: 7em;
        display: flex;
        justify-content: center;
    }

    .story-video video {
        background-image: url(./story-shape.svg);
        margin-bottom: 12em;
        width: fit-content;
        width: 75vw;
    }

    .scroll-marquee-wrapper {
        --x: 0;
        max-width: 100vw;
        overflow: hidden;

    }

    #legends-marquee {
        display: block;
        font-size: 8em;
        font-family: var(--paragraph-font);
        white-space: nowrap;
        width: max-content;
        margin-bottom: 0%;
        transform: translateX(calc((-100% + 100vw) * var(--x)));
    }


    @media only screen and (max-width: 375px){
        .story-text p {
            font-size: 0.85em;
            max-width: 100%;
            border-left: solid 2px var(--candelLight);
            padding-left: 1.5em;
            margin-top: 1.5em;
        }
    }

    @media only screen and (min-width: 376px) and (max-width: 440px){
        .story-quote>h2 {
            grid-area: story-quote;
            line-height: 90%;
            font-weight: 200;
            font-size: 2.5em;
        }

        .story-text p {
            font-size: 0.85em;
            max-width: 100%;
            border-left: solid 2px var(--candelLight);
            padding-left: 1.5em;
            margin-top: 2em;
        }
    }

    @media only screen and (min-width: 441px) and (max-width: 515px){
        .story-quote>h2 {
            grid-area: story-quote;
            line-height: 90%;
            font-weight: 200;
            font-size: 3em;
        }
    }

    @media only screen and (max-width: 780px){
        .story-video {
            margin-top: 0.5em;
            display: flex;
            justify-content: center;
        }

        .story-video video {
            margin-bottom: 12em;
            width: 150vw;
        }
    }

    @media only screen and (min-width: 441px) and (max-width: 515px) {
        .story-quote>h2 {
            grid-area: story-quote;
            line-height: 90%;
            font-weight: 200;
            font-size: 3em;
        }
    }

    @media only screen and (max-width: 780px) {
        .story-video {
            margin-top: 0.5em;
            display: flex;
            justify-content: center;
        }

        .story-video video {
            margin-bottom: 12em;
            width: 150vw;
        }
    }

    @media only screen and (max-width: 1055px) {
    .story-wrapper {
        display: grid;
        padding-top: 14em;
        grid-template-columns: 1fr;
        grid-template-rows: 2fr;
        grid-template-areas:
            "story-quote"
            "story-text";
        }
    }

/* ============== STORY SECTION END MOBILE ============== */

/* ============== UP TO DATE NEWS - SECTION START ============== */

    .news>h2 {
        font-family: var(--paragraph-font);
        font-weight: 200;
        line-height: 0.9em;
        text-align: center;
        font-size: clamp(24px, 3.8vw, 50px);
    }

    .news{
        width: 100%;
        height: 93vw;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        background-image: url(/stay-up-to-date-bg.svg);
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center center;
        padding: 0;
    }

    .news-card-section{
        display: flex;
        flex-direction: row;
        padding: 0 0 0 4rem;
        overflow: hidden;
        width: 100%;
        margin: 4% 0 2% 0;
        transition: 0.2 ease-in;
        scroll-behavior: smooth;
        scroll-snap-type: mandatory;
    }

    .news-card {
        background-image: url(/card/newsBody.svg);
        background-repeat: no-repeat;
        background-size: contain; 
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-right: 2rem;
        width: clamp(200px, 28%, 28%);
        height: clamp(250px, 31vw, 31vw);
        flex: 0 0 auto; 
        overflow: hidden;
        padding: clamp(0.5rem, 1vw, 1vw);
    }
    .news-card > h3{
        font-size: clamp(16px, 1.5vw, 24px);
        font-weight: 400;
        font-family:var(--paragraph-font);
        color: var(--charcoal);
        padding: clamp(0.5rem, 1vw, 1vw);
    }

    .news-card-img-container{
        width: 100%;
        height: 60%;
        overflow: hidden;
        border-radius: 5px;
    }

    .news-card .news-card-img-container > img{
        border-radius: 5px;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: top;
    } 

    .btn-wrap {
        text-align: center;
        width: 100%;
    }

    .btn-wrap>button {
        background-color: transparent;
        border: none;
    }

    .btn-wrap button svg:hover .carroussel-button{
        cursor: pointer;
        fill: var(--candelLight);
    }


</style>