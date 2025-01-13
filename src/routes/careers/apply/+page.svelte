<script>
// @ts-nocheck

    import heroImage from "$lib/assets/careers.webp";
    import brandLogo from "$lib/assets/brand-logo.webp";
    import location from "$lib/assets/location-dot-solid.svg";
    import email from "$lib/assets/envelope-solid.svg";
    import phone from "$lib/assets/phone-solid.svg";
	import Joint from "../../Joint.svelte";
	import Navigation from "../../Navigation.svelte";
	import Footer from "../../Footer.svelte";
	import Jobcard from "../../Jobcard.svelte";
    import { onMount } from "svelte";

    $: jvToggle = false;

    let y;
    let innerWidth;
    let innerHeight;
    let navVisibility;
    let navigationBar;
    let elementDistance;

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

</script>

<svelte:head>
	<title>Muneshwers Limited</title>
	<meta name="description" content="Muneshwers Limited" />
</svelte:head>
<div class="landing-top relative">
    <!-- <div class="scroll-watcher"></div> -->
    <div class="hero-image h-[50vh] relative">
        <img src={heroImage} alt="Hero landing page" class="object-cover h-full w-full">
        <div class="image-cover h-full w-full opacity-30 bg-[#3A3A3A] absolute top-0"></div>
        <div class="hero-text uppercase text-white text-[70px] max-[1415px]:text-[50px] max-[600px]:text-[40px] absolute bottom-20  left-16 max-[600px]:left-5 w-9/12 leading-[120px] flex flex-col">
            
            <div class="flex flex-row items-center gap-6">
                <div class="individual-hero-text logo w-36 max-[600px]:w-24 h-36 max-[600px]:h-24">
                    <img src={brandLogo} alt="Muneshwers Limited Logo" class="h-full w-full">
                </div>
                <p class="individual-hero-text">Careers</p>
            </div>
        </div>
    </div>
    <Navigation activePage="careers" {innerWidth}/>
</div>
<div class="introduction-section flex flex-col justify-center">
    <div class="intro-header my-10 justify-center relative flex h-[150px]">
            <div class="intro-details">
                <div class="intro-text mt-8 text-center uppercase flex flex-col text-[50px] max-[600px]:text-[30px] text-[#4876B6] items-center">
                    <p>How to Apply</p>
                </div>
                <div class="intro-subtext text-center text-[#3D3938] text-[28px] max-[600px]:text-[18px] raleway-light flex flex-col items-center">
                    <p>Send us an email or visit our location.</p>
                </div>
            </div>
    </div>
    <div class="benefits text-justify text-[18px] max-[600px]:text-[18px] raleway-light flex flex-col items-center mb-48">
        <p class="w-[80%] text-center">
            Address applications to: The Human Resources Manager, Muneshwers Limited
        </p>
        <div class="application-location flex flex-row items-center gap-3 mt-5">
                <div class="location-icon">
                    <img src={location} alt="" width="10px" height="10px">
                </div>
                <div>45-47 Water Street, Georgetown</div>
            </div>
            <div class="application-phone flex flex-row items-center gap-3">
                <div class="phone-icon">
                    <img src={phone} alt="" width="10px" height="10px">
                </div>
                <div>+592-227-7417</div>
            </div>
            <div class="application-phone flex flex-row items-center gap-3">
                <div class="email-icon">
                    <img src={email} alt="" width="10px" height="10px">
                </div>
                <div class="hover:text-[#3b6fbd] underline"><a href="mailto:hr.clerk2@muneshwers.com?subject=Job%20Application">hr.clerk2@muneshwers.com</a></div>
            </div>
    </div>
</div>

<Footer />

<svelte:window bind:scrollY={y} bind:innerWidth bind:innerHeight  on:scroll={() => windowHeightCheck()} />

