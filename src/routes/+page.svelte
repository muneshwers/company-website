<script>
// @ts-nocheck

    // @ts-ignore
    import mllogo from "../logo.png";
    import heroImage from "$lib/assets/hero-image.webp";
    import constructionLogo from "../construction-logo-black.png";
    import brandLogo from "../brand-logo.png";
    import textLogo from "../text-logo.png";
    import facebookIcon from "../icons8-facebook.svg";
    import instagramIcon from "../icons8-instagram.svg";
    import linkedinIcon from "../icons8-linkedin.svg";
    import tiktokIcon from "../icons8-tiktok.svg";
    import parallaxShipping from "$lib/assets/parallaxshipping.webp";
    import newParallax from "$lib/assets/GYS05767.webp";
    import parallaxStore from "$lib/assets/DJI_0374.webp";
    import parallaxCareer from "$lib/assets/GYS05909.webp";
    import staffOne from "$lib/assets/worker1.webp";
    import staffTwo from "$lib/assets/worker2.webp";
    import shippingService from "$lib/assets/shippingimage.webp"
    import travelService from "$lib/assets/travelimage.webp";
    import store1Service from "$lib/assets/home_goods.webp";
    import store2Service from "$lib/assets/event_decoration.webp";
    import truckingService from "$lib/assets/GYS05822.webp";
	import Navigation from "./Navigation.svelte";
    import { onMount } from "svelte";
	import Footer from "./Footer.svelte";
	import Jvslide from "./Jvslide.svelte";
    import Carousel from 'svelte-carousel'


    $: jvToggle = false;
    $: serviceToggle = false;
    
    let y;

    let slideCount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

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
    <div class="hero-home-image h-screen relative">
        <img src={parallaxShipping} alt="Hero landing page" class="object-cover h-full w-full">
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
        <a href="#introduction" id="scroll-down">
            <div class="scroll-down flex flex-col absolute bottom-10 right-14 animate-bounce">
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
    <div class="intro-header mt-5 justify-center relative flex h-[143px]">
        {#if y > 200}
            <div class="intro-details">
                <div class="intro-text mt-8 text-center uppercase flex flex-col text-[60px] text-[#4876B6]">
                    <p>Discover which service is right for you</p>
                </div>
                <!-- <div class="intro-subtext text-center text-[#3D3938] text-[28px] raleway-light flex flex-col items-center">
                    <p>Choose from our shipping, transportation, travel service or explore our stores for your needs.</p>
                </div> -->
            </div>
        {/if}
    </div>
    
    <div class="services flex justify-center items-center mt-5 w-full h-[70vh]">
        {#if y > 500}
            <div class="service w-[20%] h-[70vh] relative cursor-pointer hover:scale-125">
                <a href="/shipping">
                    <div class="w-full h-full">
                        <enhanced:img alt="" class="w-full h-[110vh] object-cover service-image" src="$lib/assets/shippingimage.webp" />
                        <div class="w-full h-full absolute top-0 right-0 bg-[#00000086] opacity-0 hover:opacity-100 hover:duration-[300ms] flex items-center justify-center text-[24px] text-[#ffffff]">
                            Shipping
                        </div>
                    </div>
                    
                </a>
            </div>
            <div class="service w-[20%] h-[70vh] relative cursor-pointer">
                <a href="/travel">
                    <div class="w-full h-full">
                        <enhanced:img alt="" class="w-full h-[110vh] object-cover" src="$lib/assets/travelimage.webp" />
                        <div class="w-full h-full absolute top-0 right-0 bg-[#00000086] opacity-0 hover:opacity-100 hover:duration-[300ms] flex items-center justify-center text-[24px] text-[#ffffff]">
                            Travel
                        </div>
                    </div>
                    
                </a>
                
            </div>
            <div class="service w-[20%] h-[70vh] relative cursor-pointer">
                <a href="/stores">
                    <div class="w-full h-full">
                        <enhanced:img alt="" class=" w-full h-[110vh] object-cover" src="$lib/assets/home_goods.webp" />
                        <div class="w-full h-full absolute top-0 right-0 bg-[#00000086] opacity-0 hover:opacity-100 hover:duration-[300ms] flex items-center justify-center text-[24px] text-[#ffffff]">
                            Home Goods
                        </div>
                    </div>
                    
                </a>
                
            </div>
            <div class="service w-[20%] h-[70vh] relative cursor-pointer">
                <a href="/transport">
                    <div class="w-full h-full">
                        <enhanced:img alt="" class="w-full h-[110vh] object-cover" src="$lib/assets/GYS05822.webp" />
                        <div class="w-full h-full absolute top-0 right-0 bg-[#00000086] opacity-0 hover:opacity-100 hover:duration-[300ms] flex items-center justify-center text-[24px] text-[#ffffff]">
                            Trucking
                        </div>
                    </div>
                    
                </a>
                
            </div>
            <div class="service w-[20%] h-[70vh] relative cursor-pointer">
                <a href="/stores">
                    <div class="w-full h-full">
                        <enhanced:img alt="" class="w-full h-[110vh] object-cover" src="$lib/assets/event_decoration.webp" />
                        <div class="w-full h-full absolute top-0 right-0 bg-[#00000086] opacity-0 hover:opacity-100 hover:duration-[300ms] flex items-center justify-center text-[24px] text-[#ffffff]">
                            Events
                        </div>
                    </div>
                    
                </a>
                
            </div>
        {/if}
        
    </div>
</div>
<div class="next-info-section mt-16 w-full flex items-center justify-center">
    <div class="title-text raleway-regular text-[37px] text-[#4876B6] uppercase">
        Our Events and Home Goods stores that has everything you need.
    </div>
</div>
<div class="parallax-container relative">
    <img src={parallaxStore} alt="" class="object-cover w-screen wharf-image">
    <div class="wharf-text uppercase text-white text-[28px] absolute bottom-96 left-16 ">
        Guyana #1 Events Store - July 26, 2024 - Water Street, Georgetown, Guyana
    </div>
</div>
<div class="next-info-section mt-16 w-full flex items-center justify-center">
    <div class="title-text raleway-regular text-[30px] text-[#4876B6] uppercase">
        100% Guyanese owned business with years of experience in the shipping industry.
    </div>
</div>
<div class="parallax-container relative">
    <img src={newParallax} alt="" class="object-cover w-screen wharf-image">
    <div class="wharf-text uppercase text-white text-[28px] absolute bottom-52 left-16 ">
        BBC Echo Vessel - July 10, 2024 - Water Street, Georgetown, Guyana
    </div>
</div>
<div class="joint-ventures-section h-1/2 flex flex-col items-center">
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
        <Carousel
            autoplayDuration={0}
            duration={13000}
            autoplay
            infinite={true}
            timingFunction="linear"
            dots={false}
            arrows={false}
            swiping={false}
        >
        {#each slideCount as slide}
            <Jvslide slideId={slide} />
        {/each}
        </Carousel>
    </div>
</div>
<div class="introduction-section flex flex-col justify-center">
    <div class="careers-header my-12 justify-center relative flex h-[143px]">
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
    <div class="parallax-container relative">
        <img src={parallaxCareer} alt="" class="object-cover w-screen career-image">
        <div class="services  flex flex-row h-[600px] justify-between items-center mb-10 absolute bottom-24 right-28">
            <div class="services-link relative cursor-pointer text-white">
                <a href="/careers">
                    <div class="services-text flex flex-row items-center text-5xl gap-8 uppercase ml-32 hover:tracking-widest hover:duration-150 duration-150" >
                    Explore Careers
                    <span>
                        <svg class="h-8 w-8" width="53" height="38" viewBox="0 0 53 38" xmlns="http://www.w3.org/2000/svg" fill="#ffffff">
                            <path id="Arrow 1" d="M51.7678 20.7678C52.7441 19.7915 52.7441 18.2085 51.7678 17.2322L35.8579 1.32233C34.8816 0.34602 33.2986 0.34602 32.3223 1.32233C31.346 2.29864 31.346 3.88155 32.3223 4.85786L46.4645 19L32.3223 33.1421C31.346 34.1184 31.346 35.7014 32.3223 36.6777C33.2986 37.654 34.8816 37.654 35.8579 36.6777L51.7678 20.7678ZM0 21.5H50V16.5H0V21.5Z" fill="#ffffff"/>
                        </svg>
                        <!-- <img src={arrowright} alt="Arrow Right" class="h-8 w-8 "> -->
                         <!--Signed Commit Check-->
                    </span>
                </div>
                </a>
                <div class="w-[500px] h-px left-[3px] top-[71px] absolute bg-white ml-32"></div>
            </div>
        </div>
    </div>
    
</div>
<Footer />

<svelte:window bind:scrollY={y} />
