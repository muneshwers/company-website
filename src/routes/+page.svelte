<script>
// @ts-nocheck

    // @ts-ignore
    import mllogo from "../logo.png";
    import heroImage from "../hero-image.jpeg";
    import grid from "../grid.svg";
    import paragonTrasport from "../paragon-transport-logo-text.png";
    import gysbi from "../gysbi.png";
    import cranes from "../cranes.png";
    import barges from "../barges.png";
    import harbourtugs from "../harbourtugs.png";
    import constructionLogo from "../construction-logo-black.png"
    import brandLogo from "../brand-logo.png";
    import textLogo from "../text-logo.png";
    import facebookIcon from "../icons8-facebook.svg";
    import instagramIcon from "../icons8-instagram.svg";
    import linkedinIcon from "../icons8-linkedin.svg";
    import tiktokIcon from "../icons8-tiktok.svg";
    import parallaxShipping from "../parallaxshipping.jpg";
    import staffOne from "../worker1.jpg";
    import staffTwo from "../worker2.jpg";
    import shippingService from "../GYS05795.jpg"
    import travelService from "../travel.jpg";
    import store1Service from "../home_goods.jpg";
    import store2Service from "../event_decoration.jpg";
    import truckingService from "../GYS05822.jpg"
	import Navigation from "./Navigation.svelte";
    import { onMount } from "svelte";
	import Footer from "./Footer.svelte";

    $: jvToggle = false;
    $: serviceToggle = false;
    
    let y;

    if(y > 200) {
        console.log("Appeared")
    } 
    if(y < 200) {
        console.log("Disappeared")
    }

</script>

<svelte:head>
	<title>Muneshwers Limited</title>
	<meta name="description" content="Muneshwers Limited" />
</svelte:head>
<div class="landing-top relative">
    <!-- <div class="scroll-watcher"></div> -->
    <div class="hero-image h-screen relative">
        <img src={heroImage} alt="Hero landing page" class="object-cover h-full w-full">
        <div class="image-cover h-full w-full opacity-30 bg-[#3A3A3A] absolute top-0"></div>
        <div class="hero-text uppercase text-white text-[70px] absolute bottom-20  left-16 w-9/12 leading-[120px] flex flex-col">
            <div class="individual-hero-text logo w-36 h-36">
                <img src={brandLogo} alt="Muneshwers Limited Logo" class="h-full w-full">
            </div>
            <div>
                <p class="individual-hero-text">Solutions streamlined to fit</p>
            </div>
            <div>
                <p class="individual-hero-text">your business and personal</p>
            </div>
            <div>
                <p class="individual-hero-text">needs</p>
            </div>
        </div>
        <a href="#introduction">
            <div class="scroll-down flex flex-col absolute bottom-10 right-14">
                <div class="w-[58px] h-[58px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="58" height="58" viewBox="0 0 58 58" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 16.9167L29 31.4167L43.5 16.9167L48.3334 21.75L29 41.0833L9.66669 21.75L14.5 16.9167Z" fill="white"/>
                    </svg>
                </div>
                <div class="w-[58px] h-[58px] mt-[-30px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="58" height="58" viewBox="0 0 58 58" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 16.9167L29 31.4167L43.5 16.9167L48.3334 21.75L29 41.0833L9.66669 21.75L14.5 16.9167Z" fill="white"/>
                    </svg>
                </div>
                <div class="w-[58px] h-[58px]  mt-[-30px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="58" height="58" viewBox="0 0 58 58" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 16.9167L29 31.4167L43.5 16.9167L48.3334 21.75L29 41.0833L9.66669 21.75L14.5 16.9167Z" fill="white"/>
                    </svg>
                </div>
            </div>
        </a>
        
    </div>
    <Navigation activePage="home"/>
    
</div>
<div class="introduction-section flex flex-col justify-center" id="introduction">
    <div class="intro-header my-12 justify-center relative flex h-[143px]">
        {#if y > 200}
            <div class="intro-details">
                <div class="intro-text mt-8 text-center uppercase flex flex-col text-[67px] text-[#4876B6]">
                    <p>Discover which service is right for you!</p>
                </div>
                <div class="intro-subtext text-center text-[#3D3938] text-[28px] raleway-light flex flex-col items-center">
                    <p>Choose from our shipping, transportation, travel service or explore our stores for your needs.</p>
                </div>
            </div>
        {/if}
    </div>
    
    
    <div class="services flex justify-center items-center mt-10 w-full">
        <div class="flex flex-row gap-8 relative h-[110vh] w-[97%]">
            <div class=" service-container w-[275px] h-[700px] absolute cursor-pointer rounded-2xl">
                <a href="/shipping">
                    <img alt="" class="w-full h-full rounded-2xl object-cover" src={shippingService} />
                    <div class="absolute top-0 left-0 w-full h-full bg-[#00000086] opacity-0 rounded-2xl hover:opacity-100 hover:duration-[300ms] flex items-center justify-center text-[24px] text-[#ffffff]">
                        Shipping
                    </div>
                </a>
            </div>
            <div class="service-container-low w-[275px] h-[700px] absolute left-[20.5%] cursor-pointer">
                <a href="/travel">
                    <img alt="" class="w-full h-full rounded-2xl object-cover cursor-pointer" src={travelService} />
                    <div class="absolute top-0 left-0 w-full h-full bg-[#00000086] opacity-0 rounded-2xl hover:opacity-100 hover:duration-[300ms] flex items-center justify-center text-[24px] text-[#ffffff]">
                        Travel
                    </div>
                </a>
            </div>
            <div class="service-container w-[275px] h-[700px] absolute right-[40.7%] cursor-pointer">
                <a href="/stores">
                    <img alt="" class="w-full h-full rounded-2xl  object-cover cursor-pointer" src={store1Service} />
                    <div class="absolute top-0 left-0 w-full h-full bg-[#00000086] opacity-0 rounded-2xl hover:opacity-100 hover:duration-[300ms] flex items-center justify-center text-[24px] text-[#ffffff]">
                        Home Goods
                    </div>
                </a>
            </div>
            <div class="service-container-low w-[275px] h-[700px] absolute right-[20.5%] cursor-pointer">
                <a href="/transport">
                    <img alt="" class="w-full h-full rounded-2xl  object-cover cursor-pointer" src={truckingService} />
                    <div class="absolute top-0 left-0 w-full h-full bg-[#00000086] opacity-0 rounded-2xl hover:opacity-100 hover:duration-[300ms] flex items-center justify-center text-[24px] text-[#ffffff]">
                        Trucking
                    </div>
                </a>
            </div>
            <div class="service-container w-[275px] h-[700px] absolute right-0 cursor-pointer">
                <a href="/stores">
                    <img alt="" class="w-full h-full rounded-2xl left-full  object-cover cursor-pointer" src={store2Service} />
                    <div class="absolute top-0 left-0 w-full h-full bg-[#00000086] opacity-0 rounded-2xl hover:opacity-100 hover:duration-[300ms] flex items-center justify-center text-[24px] text-[#ffffff]">
                        Events
                    </div>
                </a>
            </div>
        </div>
    </div>
</div>
<div class="next-info-section mt-16 w-full flex items-center justify-center">
    <div class="title-text raleway-regular text-[37px] text-[#4876B6]">
        100% Guyanese owned business with years of experience in the shipping industry.
    </div>
</div>
<div class="parallax-container relative">
    <img src={parallaxShipping} alt="" class="object-cover w-screen wharf-image">
    <div class="wharf-text uppercase text-white text-[28px] absolute bottom-52 left-16 ">
        BBC Echo Vessel - July 10, 2024 - Water Street, Georgetown, Guyana
    </div>
</div>
<div class="joint-ventures-section h-1/2 mb-24 flex flex-col items-center">
    <div class="jv-heading flex flex-row items-left my-24 w-10/12">
        <div class="jv-right flex flex-row">
            {#if y > 2100}
                <div class="right-text justify-items-end poppins-light text-[#4876B6] text-[50px]">
                    <p>Explore our joint ventures</p>
                </div>
            {/if}

        </div>
    </div>
    <div class="jv-container w-full">
        <div class="w-full h-[334px] bg-white border border-[#4876b6] flex justify-center">
            <a href="/transport" class="jv-card w-[14.2%] h-[332px] bg-white border border-[#4876b6] flex justify-center items-center">
                <div >
                    <img class="w-[150px] h-[150px]" src={paragonTrasport} alt="jv logos" />
                </div>
            </a>
            <a href="/cranes" class="jv-card w-[14.2%] h-[332px] bg-white border border-[#4876b6] flex justify-center items-center">
                <div>
                    <img class="w-[150px] h-[40px]" src={cranes} alt="jv logos" />
                </div>
            </a>
            <a href="/barges" class="jv-card w-[14.2%] h-[332px] bg-white border border-[#4876b6] flex justify-center items-center">
                <div>
                    <img class="w-[150px] h-[150px]" src={barges} alt="jv logos" />
                </div>
            </a>
            <a href="/" class="jv-card w-[14.2%] h-[332px] bg-white border border-[#4876b6] flex justify-center items-center">
                <div>
                    <img class="w-[150px] h-[150px]" src={brandLogo} alt="jv logos" />
                </div>
            </a>
            <a href="https://www.gysbi.gy/" target="_blank" class="jv-card w-[14.2%] h-[332px] bg-white border border-[#4876b6] flex justify-center items-center">
                <div>
                    <img class="w-[150px] h-[150px]" src={gysbi} alt="jv logos" />
                </div>
            </a>
            <a href="/harbourtugs" class="jv-card w-[14.2%] h-[332px] bg-white border border-[#4876b6] flex justify-center items-center">
                <div>
                    <img class="w-[150px] h-[150px]" src={harbourtugs} alt="jv logos" />
                </div>
            </a>
            <a href="/construction" class="jv-card w-[14.2%] h-[332px] bg-white border border-[#4876b6] flex justify-center items-center">
                <div>
                    <img class="w-[150px] h-[150px]" src={constructionLogo} alt="jv logos" />
                </div>
            </a>
            
        </div>
        
    </div>
</div>
<div class="introduction-section flex flex-col justify-center">
    <div class="intro-header my-12 justify-center relative flex h-[143px]">
        {#if y > 2800}
            <div class="intro-details">
                <div class="intro-text mt-8 text-center uppercase flex flex-col text-[67px] text-[#4876B6]">
                    <p>Interested in a career with us?</p>
                </div>
                <div class="intro-subtext text-center text-[#3D3938] text-[28px] raleway-light flex flex-col items-center">
                    <p>Check out our list of job openings and see which is the right path for you.</p>
                </div>
            </div>
        {/if}
    </div>
    <div class="services flex flex-row h-[683px] justify-between items-center mb-10">
        <div class="images-card relative w-1/2 h-5/6 ml-5">
            <div class="image-above top-0 left-20 absolute w-[357px] h-[363px] z-30">
                <img src={staffTwo} alt="Paragon Transportation" class="rounded-sm object-cover w-full h-full">
            </div>
            <div class="image-below top-52 right-28 absolute w-[508px] h-[320px]">
                <img src={staffOne} alt="Muneshwers Shipping" class="rounded-sm object-cover w-full h-full">
            </div>
        </div>
        <div class="services-link w-1/2 relative cursor-pointer hover:text-[#4876B6]">
            <a href="/careers">
                <div class="services-text flex flex-row items-center text-4xl gap-8 uppercase ml-32 hover:tracking-widest hover:duration-150 duration-150" >
                Explore Careers
                <span>
                    <svg class="h-8 w-8" width="53" height="38" viewBox="0 0 53 38" xmlns="http://www.w3.org/2000/svg">
                        <path id="Arrow 1" d="M51.7678 20.7678C52.7441 19.7915 52.7441 18.2085 51.7678 17.2322L35.8579 1.32233C34.8816 0.34602 33.2986 0.34602 32.3223 1.32233C31.346 2.29864 31.346 3.88155 32.3223 4.85786L46.4645 19L32.3223 33.1421C31.346 34.1184 31.346 35.7014 32.3223 36.6777C33.2986 37.654 34.8816 37.654 35.8579 36.6777L51.7678 20.7678ZM0 21.5H50V16.5H0V21.5Z" fill="black"/>
                    </svg>
                    <!-- <img src={arrowright} alt="Arrow Right" class="h-8 w-8 "> -->
                </span>
            </div>
            </a>
            
            <div class="w-[420px] h-px left-[3px] top-[71px] absolute bg-slate-500 ml-32"></div>
        </div>
    </div>
</div>
<Footer />

<svelte:window bind:scrollY={y} />
