<section>
    <nav>
        <ul>
            <li><a href=""> 
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_171_3265)">
                <path d="M12.01 3L3 9.66234V22H9V15.0909H15V22H21V9.66234L12.01 3Z" />
                </g>
                <defs>
                <clipPath id="clip0_171_3265">
                <rect width="18" height="19" fill="white" transform="translate(3 3)"/>
                </clipPath>
                </defs>
                </svg> 
                Home </a>
            </li>
            <li><a href=""> 
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_171_3265)">
                <path d="M12.01 3L3 9.66234V22H9V15.0909H15V22H21V9.66234L12.01 3Z" />
                </g>
                <defs>
                <clipPath id="clip0_171_3265">
                <rect width="18" height="19" fill="white" transform="translate(3 3)"/>
                </clipPath>
                </defs>
                </svg> 
                Radio </a>
            </li>
            <li><a href=""> 
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_171_3265)">
                <path d="M12.01 3L3 9.66234V22H9V15.0909H15V22H21V9.66234L12.01 3Z" />
                </g>
                <defs>
                <clipPath id="clip0_171_3265">
                <rect width="18" height="19" fill="white" transform="translate(3 3)"/>
                </clipPath>
                </defs>
                </svg> 
                Explore </a>
            </li>
            <li><a href=""> 
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_171_3265)">
                <path d="M12.01 3L3 9.66234V22H9V15.0909H15V22H21V9.66234L12.01 3Z" />
                </g>
                <defs>
                <clipPath id="clip0_171_3265">
                <rect width="18" height="19" fill="white" transform="translate(3 3)"/>
                </clipPath>
                </defs>
                </svg> 
                Meer </a>
            </li>
        </ul>
    </nav>
</section>

<style>
    section {
        border-top: 1px solid #EDEDED;
        position: absolute;
        width: 100%;
        background-color: var(--light);
        bottom: 0;
    }

    @media only screen and (min-width: 960px) {
        section {
            display: none;
        }
    }

    section nav ul {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: 1fr;
        grid-column-gap: 1em;
        grid-row-gap: 0px;
        justify-items: center;
    }

    section nav ul li {
        width: 100%;
    }

    section nav ul li a {
        padding: 2em 0em;
        display: flex;
        flex-direction: column;
        gap: 0.5em;
        align-items: center;
        color: var(--grey);
        font-weight: 700;
        text-transform: uppercase;
        font-size: 3vw;
        font-family: var(--font-family);
    }

    @media only screen and (min-width: 500px) {
        section nav ul li a {
            font-size: 16px;
        }
    }

    section nav ul li a:focus, 
    section nav ul li a:active {
        color: var(--primary-color);
    }

    section nav ul li a:focus svg,
    section nav ul li a:active svg {
        fill: var(--primary-color);
    }

    section nav ul a svg {
        width: 9vw;
        fill: var(--grey);
    }

    @media only screen and (min-width: 500px) {
        section nav ul a svg {
            width: 34px;
        }
    }
</style>
