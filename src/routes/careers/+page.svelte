<script>
// @ts-nocheck

    import heroImage from "$lib/assets/careers.webp";
    import brandLogo from "$lib/assets/brand-logo.webp";
	import Joint from "../Joint.svelte";
	import Navigation from "../Navigation.svelte";
	import Footer from "../Footer.svelte";
	import Jobcard from "../Jobcard.svelte";
    import { onMount } from "svelte";

    $: jvToggle = false;
    let y;
    let innerWidth;
    let innerHeight;
    let navVisibility;
    let navigationBar;
    let elementDistance;

    export let data;

    onMount(() => {
        navigationBar = document.getElementById("navigationBar");
        elementDistance = Math.round((y/innerHeight)*100)/100;
    })

    const windowHeightCheck = () => {
        elementDistance = Math.round((y/innerHeight)*100)/100;
        if(elementDistance > 0.005) {
            navVisibility = 1 - (elementDistance + 0.5);
            navigationBar.style.backgroundColor = "rgba(61, 57, 56, 0.98)";
        } else {
            navigationBar.style.backgroundColor = "rgba(61, 57, 56, 0)";
        }        
    }


    // console.log("Jobs list on client: ", data.jobsList);

</script>

<svelte:head>
	<title>Muneshwers Limited</title>
	<meta name="description" content="Muneshwers Limited" />
</svelte:head>
<div class="landing-top relative">
    <div class="hero-image h-[50vh] relative">
        <img src={heroImage} alt="Hero landing page" class="object-cover h-full w-full">
        <div class="image-cover h-full w-full opacity-30 bg-[#3A3A3A] absolute top-0"></div>
        <div class="hero-text uppercase text-white text-[70px] max-[1415px]:text-[50px] max-[600px]:text-[40px] absolute bottom-20 left-16 max-[600px]:left-5 w-9/12 leading-[120px] flex flex-col">
            
            <div class="flex flex-row items-center gap-6">
                <div class="individual-hero-text logo w-36 max-[600px]:w-24 h-36 max-[600px]:h-24">
                    <img src={brandLogo} alt="Muneshwers Limited Logo" class="h-full w-full">
                </div>
                <p class="individual-hero-text">Careers</p>
            </div>
        </div>
    </div>
    <Navigation activePage="careers" {innerWidth} />
</div>
<div class="introduction-section flex flex-col justify-center">
    <div class="career-header my-10 justify-center relative flex h-[150px] max-[600px]:h-[200px]">
            <div class="intro-details">
                {#if innerWidth <= 600}
                <div class="intro-text mt-8 text-center uppercase flex flex-col text-[50px] max-[600px]:text-[26px] text-[#4876B6] items-center">
                    <p>Choose the career that's</p>
                </div>
                <div class="intro-text mt-2 text-center uppercase flex flex-col text-[50px] max-[600px]:text-[24px] text-[#4876B6] items-center">
                    <p>right for you!</p>
                </div>
                <div class="intro-subtext mt-4 text-center text-[#3D3938] text-[28px] max-[600px]:text-[18px] raleway-light flex flex-col items-center">
                    <p>Choose from our list of available job</p>
                </div>
                <div class="intro-subtext mt-1 text-center text-[#3D3938] text-[28px] max-[600px]:text-[18px] raleway-light flex flex-col items-center">
                    <p> opportunities below.</p>
                </div>
                {/if}
                {#if innerWidth > 600}
                <div class="intro-text mt-8 text-center uppercase flex flex-col text-[50px] max-[600px]:text-[24px] text-[#4876B6] items-center">
                    <p>Choose the career that's right for you!</p>
                </div>
                <div class="intro-subtext text-center text-[#3D3938] text-[28px] max-[600px]:text-[18px] raleway-light flex flex-col items-center">
                    <p>Choose from our list of available job opportunities below.</p>
                </div>
                {/if}
                
            </div>
    </div>
    <div class="benefits text-justify text-[18px] raleway-light flex flex-col items-center">
        <p class="w-9/12  max-[600px]:w-10/12">
            We are looking for vibrant, skilled, and passionate individuals to add value to
            our brand. In addition to competitive pay, we provide many other benefits
            and possibilities for advancement, including:
        </p>
        <ul class="list-disc w-9/12 mt-5">
            <li>Discounts from our Events and Home Goods stores</li>
            <li>Holiday bonuses</li>
            <li>Performance incentives for our drivers</li>
            <li>Great retirement plan</li>
            <li>Great Medical Insurance coverage</li>
            <li>Training with international consultants for our operational staff</li>
            <li>Career growth and development on the job</li>
        </ul>
    </div>
</div>
<div class="jobs-section flex flex-row">
    <div class="job-listings flex flex-col justify-center items-center mt-10">
        {#each data.newJobs as job}
            <Jobcard jobDetails={job} {innerWidth}/>
        {/each}
    </div>
</div>

<Footer />

<svelte:window bind:scrollY={y} bind:innerWidth bind:innerHeight  on:scroll={() => windowHeightCheck()} />


