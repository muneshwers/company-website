<script>
// @ts-nocheck

    // @ts-ignore
    import IntersectionObserver from "svelte-intersection-observer";
    import mllogo from "$lib/assets/logo.png";
    import heroImage from "$lib/assets/hero-image.webp";
    import constructionLogo from "$lib/assets/construction-logo-black.png";
    import brandLogo from "$lib/assets/brand-logo.png";
    import textLogo from "$lib/assets/text-logo.png";
    import parallaxShipping from "$lib/assets/parallaxshipping.webp";
    import newParallax from "$lib/assets/GYS05767.webp";
    import parallaxStore from "$lib/assets/DJI_0374.webp";
    import parallaxCareer from "$lib/assets/GYS05909.webp";
    import staffOne from "$lib/assets/worker1.webp";
    import staffTwo from "$lib/assets/worker2.webp";
    import shippingService from "$lib/assets/shippingimage.webp"
    import travelService from "$lib/assets/travelimage.webp";
    import store1Service from "$lib/assets/homegoods2.webp";
    import store2Service from "$lib/assets/event_decoration.webp";
    import truckingService from "$lib/assets/GYS05822.webp";
	import Navigation from "./Navigation.svelte";
    import { onDestroy, onMount } from "svelte";
    import { crossfade, fade } from "svelte/transition";
    import { quintIn, quintInOut, quintOut } from "svelte/easing";
	import Footer from "./Footer.svelte";
	import Jvslide from "./Jvslide.svelte";
    import Carousel from 'svelte-carousel';
    import upright from "$lib/assets/white.svg";
    import shippingStaff from "$lib/assets/GYS00823.webp";
    import storeStaff from "$lib/assets/IMG_4167_MOD.webp";


    $: jvToggle = false;
    $: serviceToggle = false;
    
    let element;
    let intersecting;
    
    let introHeader;
    let bentoContainer;
    let infoText;
    let infoText2;
    let jvHeader;
    let careersHeader;

    let slideCount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    let carouselPhotos = [shippingStaff, storeStaff]

    let i = 0;

    function next() {
        let heroImage = document.getElementById("heroImage")
        heroImage.classList.add("fade-out")
        setTimeout(() => {
            i = (i+1) % carouselPhotos.length;
        }, 500)
    }

    let timer;
    onMount(() => {
        timer = setInterval(next, 5000);
    });
    onDestroy(() => {
        clearInterval(timer);
    });

    $: src = carouselPhotos[i];
    

</script>

<svelte:head>
	<title>Muneshwers Limited</title>
	<meta name="description" content="Muneshwers Limited" />
</svelte:head>
<div class="landing-top relative max-w-[100%]">
    <!-- <div class="scroll-watcher"></div> -->
    <div class="hero-home-image h-screen relative max-w-[100%]">

        {#key src}
            <img id="heroImage" class="fade-in object-cover w-full h-screen" {src} alt="Hero of staff" />
        {/key}
        <!-- <enhanced:img src="$lib/assets/GYS00823.webp" alt="Hero landing page" class="object-cover h-full w-full" /> -->
        <div class="image-cover h-full w-full opacity-30 bg-[#3A3A3A] absolute top-0"></div>
        <div class="hero-text uppercase text-white text-[70px] absolute bottom-20 left-16 w-9/12 leading-[120px] flex flex-col">
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
        <a href="#scroll-down">
            <div class="scroll-down flex flex-col absolute bottom-10 right-14 animate-bounce" id="scroll-down">
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
<div class="introduction-section flex flex-col justify-center bg-[#CEE9FD] bg-gradient-to-b from-white via-[#CEE9FD]/10 to-white" id="introduction">
    <IntersectionObserver element={introHeader} let:intersecting>
        <div class="intro-header mt-5 justify-center relative flex h-[143px]" bind:this={introHeader}>
            {#if intersecting}
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
    </IntersectionObserver>
    

    <div class="services mt-5 w-full h-[140lvh] flex flex-col items-center">
        
         <IntersectionObserver element={bentoContainer} let:intersecting>
            
            <div class="bento-container h-full w-[90vw] flex flex-col gap-6" bind:this={bentoContainer}>
                {#if intersecting}
                <div class="bento-row flex gap-6 justify-center">
                    <div class="service bento-large h-[65lvh] bg-slate-400 rounded-md hover:scale-125">
                        <a href="/shipping">
                        <div class="w-fit h-full">
                            <enhanced:img alt="" class="w-full h-full object-cover service-image" src="$lib/assets/shipping2.webp" />
                            <div class="w-full h-full absolute top-0 right-0 bg-[#00000086] opacity-0 hover:opacity-100 hover:duration-[300ms] flex items-center justify-center text-[24px] text-[#ffffff]">
                                <div>Shipping</div>
                                <img src={upright} alt="" width="25px" height="25px">
                            </div>
                        </div>
                    </a>
                    </div>
                    <div class="service bento-small w-fit h-[65lvh] bg-slate-400 rounded-md hover:scale-125">
                        <a href="/travel">
                            <div class="w-fit h-full">
                                <enhanced:img alt="" class="w-full h-full object-cover" src="$lib/assets/travelimage.webp" />
                                <div class="w-full h-full absolute top-0 right-0 bg-[#00000086] opacity-0 hover:opacity-100 hover:duration-[300ms] flex items-center justify-center text-[24px] text-[#ffffff]">
                                    <div>Travel</div>
                                    <img src={upright} alt="" width="25px" height="25px">
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="bento-row flex gap-6 justify-center">
                    <div class="service bento-small w-[68%] h-[70lvh] bg-slate-400 rounded-md hover:scale-125">
                        <a href="/events">
                            <div class="w-full h-full">
                                <enhanced:img alt="" class="w-full h-full object-cover" src="$lib/assets/eventsservice.webp" />
                                <div class="w-full h-full absolute top-0 right-0 bg-[#00000086] opacity-0 hover:opacity-100 hover:duration-[300ms] flex items-center justify-center text-[24px] text-[#ffffff]">
                                    <div>Events</div>
                                    <img src={upright} alt="" width="25px" height="25px">
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="service bento-large-home w-fit h-[70lvh] bg-slate-400 rounded-md hover:scale-125">
                        <a href="/stores">
                            <div class="w-fit h-full">
                                <enhanced:img alt="" class="w-full h-full object-contain" src="$lib/assets/homegoods2.webp" />
                                <div class="w-full h-full absolute top-0 right-0 bg-[#00000086] opacity-0 hover:opacity-100 hover:duration-[300ms] flex items-center justify-center text-[24px] text-[#ffffff]">
                                    <div>Home Goods</div>
                                    <img src={upright} alt="" width="25px" height="25px">
                                </div>
                            </div>
                        </a>
                    </div>
                    
                </div>
                {/if}
            </div>
            
         </IntersectionObserver>
        
        
        
    </div>
    
</div>
<IntersectionObserver element={infoText} let:intersecting>
<div class="next-info-section mt-16 w-full flex items-center justify-center" bind:this={infoText}>
    {#if intersecting}
        <div class="title-text raleway-regular text-[37px] text-[#4876B6] uppercase">
            Our Events and Home Goods stores has everything you need.
        </div>
    {/if}
    
</div>
</IntersectionObserver>

<div class="parallax-container relative">
    <enhanced:img src="$lib/assets/DJI_0374.webp" alt="" class="object-cover w-screen wharf-image" />
    <div class="wharf-text uppercase text-white text-[28px] absolute bottom-96 left-16 ">
        Guyana #1 Events Store - July 26, 2024 - Water Street, Georgetown, Guyana
    </div>
</div>
<IntersectionObserver element={infoText2} let:intersecting>
<div class="next-info-section mt-16 w-full flex items-center justify-center" bind:this={infoText2}>
    {#if intersecting}
        <div class="title-text raleway-regular text-[30px] text-[#4876B6] uppercase">
            100% Guyanese owned business with years of experience in the shipping industry.
        </div>
    {/if}
    
</div>
</IntersectionObserver>
<div class="parallax-container relative">
    <enhanced:img src="$lib/assets/GYS05767.webp" alt="" class="object-cover w-screen wharf-image" />
    <div class="wharf-text uppercase text-white text-[28px] absolute bottom-52 left-16 ">
        BBC Echo Vessel - July 10, 2024 - Water Street, Georgetown, Guyana
    </div>
</div>
<div class="joint-ventures-section h-1/2 flex flex-col items-center">
    <IntersectionObserver element={jvHeader} let:intersecting>
    <div class="jv-heading flex flex-row items-left my-24 w-10/12">
        <div class="jv-right flex flex-row" bind:this={jvHeader}>
            {#if intersecting}
                <div class="right-text justify-items-end poppins-light text-[#4876B6] text-[50px]">
                    <p>Explore our joint ventures</p>
                </div>
            {/if}
        </div>
    </div>
    </IntersectionObserver>
    
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
    <IntersectionObserver element={careersHeader} let:intersecting>
    <div class="careers-header my-12 justify-center relative flex h-[143px]" bind:this={careersHeader}>
        {#if intersecting}
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
    </IntersectionObserver>
    
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