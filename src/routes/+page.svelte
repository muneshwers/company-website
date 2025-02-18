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
    import parallaxCareerMobile from "$lib/assets/GYS05909_MOD.webp";
    import staffOne from "$lib/assets/worker1.webp";
    import staffTwo from "$lib/assets/worker2.webp";
    import shippingService from "$lib/assets/shippingimage.webp";
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
    import shippingStaffMobile from "$lib/assets/GYS00823_MOD.webp";
    import elements from "$lib/assets/elements.gif";
    import storeStaff from "$lib/assets/IMG_4167_MOD.webp";
	import Heroslider from "./Heroslider.svelte";

    $: jvToggle = false;
    $: serviceToggle = false;
    let innerWidth;
    let innerHeight;
    let y;
    let opacity; //Only for home
    let navVisibility;
    let heroHomeImageCont; //Only for home
    let navigationBar;
    let elementDistance;
    let trackY = [0,0]; //Only for home
    let firstPageLoad = true;
    let firstScrollCounter = 0;
    
    let element;
    let intersecting;
    let threshold;

    let heroHomeImage;
    let introHeader;
    let bentoContainer;
    let infoText;
    let infoImage;
    let infoText2;
    let infoText3;
    let infoImage2;
    let jvHeader;
    let careersHeader;

    

    // if(innerWidth <= 1415) {
    //     shippingStaff = shippingStaffMobile
    // }

    

    let slideCount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    
    onMount(() => {
        heroHomeImageCont = document.getElementById("heroHomeImage");
        navigationBar = document.getElementById("navigationBar");
        elementDistance = 0;
        firstPageLoad = true;
        opacity = 1;
        trackY[0] = y;
        windowHeightCheck();
    })

    //Checks window height and changes opacity of header and hero image on scroll
    const windowHeightCheck = () => {
        elementDistance = Math.round((y/innerHeight)*100)/100;

        if ((firstPageLoad && elementDistance > 0.005) || firstScrollCounter <= 3) {
            firstPageLoad = false;
            firstScrollCounter++;
            navigationBar.style.backgroundColor = "rgba(61, 57, 56, 0)";
            heroHomeImageCont.style.opacity = 1;
            return;
        }

        if(elementDistance > 0.005) {
            firstScrollCounter++;
            navVisibility = 1 - (elementDistance + 0.5);
            navigationBar.style.backgroundColor = "rgba(61, 57, 56, 0.98)";
        } else if(elementDistance < 0.005) {
            firstScrollCounter++;
            navigationBar.style.backgroundColor = "rgba(61, 57, 56, 0)";
        }

        if(elementDistance > 0.5) {
            firstPageLoad = false;
            firstScrollCounter++;
            opacity = 1 - (elementDistance + 0.05);
            heroHomeImageCont.style.opacity = opacity;
            // console.log("Actual Opacity: ", opacity);
        } else {
            firstScrollCounter++;
            heroHomeImageCont.style.opacity = 1;
        }
       
        trackY[0] = y;
        
    }

    


    

</script>

<svelte:head>
	<title>Muneshwers Limited</title>
	<meta name="description" content="Muneshwers Limited" />
</svelte:head>
<div class="landing-top relative max-w-[100%]">
    <!-- <div class="scroll-watcher"></div> -->
     <IntersectionObserver element={introHeader} let:intersecting>
        <div id="heroHomeImage" class="hero-home-image h-screen relative max-w-[100%]" bind:this={heroHomeImage}>
 
            <Heroslider {innerWidth} />
            <div class="image-cover h-full w-full opacity-30 bg-[#3A3A3A] absolute top-0"></div>
            <div class="hero-text uppercase text-white text-[70px] max-[1415px]:text-[50px] max-[600px]:text-[40px] absolute bottom-20 max-[1415px]:bottom-28 left-16 max-[1415px]:left-5 w-9/12 leading-[120px] flex flex-col">
                <div class="individual-hero-text logo w-36 h-36">
                    <img src={brandLogo} alt="Muneshwers Limited Logo" class="h-full w-full">
                </div>
                {#if innerWidth <= 1415}
                    <div>
                        <p class="individual-hero-text">Rooted in</p>
                    </div>
                    <div>
                        <p class="individual-hero-text">Family</p>
                    </div>
                    <div>
                        <p class="individual-hero-text">Grown with</p>
                    </div>
                    <div>
                        <p class="individual-hero-text">Excellence</p>
                    </div>

                {/if}
                {#if innerWidth > 1415}
                    <div>
                        <p class="individual-hero-text">Rooted in Family,</p>
                    </div>
                    <div>
                        <p class="individual-hero-text">Grown with </p>
                    </div>
                    <div>
                        <p class="individual-hero-text">Excellence</p>
                    </div>
                    
                {/if}
            </div>
            <a href="#scroll-down">
                <div class="scroll-down flex flex-col absolute bottom-10 right-14 max-[600px]:right-10 animate-bounce" id="scroll-down">
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
    </IntersectionObserver>
    
    <Navigation activePage="home" {innerWidth}/>
</div>
<IntersectionObserver element={infoText} bind:intersecting>
<div class="next-info-section mt-16 w-full flex flex-col items-start justify-center h-[40vh]" bind:this={infoText}>
    {#if intersecting}
        {#if innerWidth <= 1415}
            <div class="relative">
                <span class="absolute bottom-[-30%] opacity-65">
                    <img src={elements} alt="floating triangles" class="h-[30vh] w-[55vw]">
                </span>
                <div class="title-text raleway-bold text-[75px] text-[#4876B6] tracking-wide uppercase ml-60 max-[600px]:ml-3">
                    Leaders
                </div>
                <div class="title-text raleway-medium text-[20px] text-[#4876B6] uppercase ml-60 max-[600px]:ml-3">
                    in retail
                </div>
            </div>
            
        {/if}
        {#if innerWidth > 1415}
            <div class="relative">
                <span class="absolute bottom-0 opacity-65">
                    <img src={elements} alt="floating triangles" class="h-[40vh] w-[20vw]">
                </span>
                <div class="title-text raleway-bold text-[120px] text-[#4876B6] tracking-wide uppercase ml-32 max-[600px]:ml-3">
                    Leaders
                </div>
                <div class="title-text raleway-medium text-[30px] text-[#4876B6] uppercase ml-32 max-[600px]:ml-3">
                    in retail
                </div>
            </div>
            
        {/if}
        
    {/if}
    
</div>
</IntersectionObserver>

<div class="parallax-container relative">
    
    {#if innerWidth <= 1415}
        <IntersectionObserver element={infoImage} bind:intersecting>
            <enhanced:img src="$lib/assets/DJI_0374.webp" alt="" class="object-cover w-screen h-screen wharf-image" />
        </IntersectionObserver>
        <div class="wharf-text uppercase text-white text-[28px] absolute bottom-32 left-16 max-[1415px]:left-10">
            Guyana #1 Events Store - July 26, 2024 - Water Street, Georgetown, Guyana
        </div>
    {/if}
    {#if innerWidth > 1415}
        <enhanced:img src="$lib/assets/DJI_0374.webp" alt="" class="object-cover w-screen max-[1415px]:h-screen wharf-image" />
        <div class="wharf-text uppercase text-white text-[28px] absolute bottom-96 left-16 max-[1415px]:left-10">
            Guyana #1 Events Store - July 26, 2024 - Water Street, Georgetown, Guyana
        </div>
    {/if}
</div>
<IntersectionObserver element={infoText2} let:intersecting>
<div class="next-info-section mt-16 w-full flex flex-col items-start justify-center h-[40vh]" bind:this={infoText2}>
    {#if intersecting}
        {#if innerWidth <= 1415}
            <div class="relative">
                <span class="absolute bottom-[-30%] opacity-65">
                    <img src={elements} alt="floating triangles" class="h-[30vh] w-[55vw]">
                </span>
                <div class="title-text raleway-bold text-[70px] text-[#4876B6] tracking-wide uppercase ml-60 max-[600px]:ml-3">
                    Decades
                </div>
                <div class="title-text raleway-medium text-[20px] text-[#4876B6] uppercase ml-60 max-[600px]:ml-3">
                    in shipping
                </div>
            </div>
            
        {/if}
        {#if innerWidth > 1415}
            <div class="relative">
                <span class="absolute bottom-0 opacity-65">
                    <img src={elements} alt="floating triangles" class="triangles h-[40vh] w-[20vw]">
                </span>
                <div class="title-text raleway-bold text-[120px] text-[#4876B6] tracking-wide uppercase ml-32 max-[600px]:ml-3">
                    Decades
                </div>
                <div class="title-text raleway-medium text-[30px] text-[#4876B6] uppercase ml-32 max-[600px]:ml-3">
                    in shipping
                </div>
            </div>
            
        {/if}
    {/if}
    
</div>
</IntersectionObserver>
<div class="parallax-container relative">
    {#if innerWidth <= 1415}
        <enhanced:img src="$lib/assets/GYS05767.webp" alt="" class="object-cover w-screen h-screen wharf-image" />
        <div class="wharf-text uppercase text-white text-[28px] absolute bottom-24 left-16 max-[1415px]:left-10">
            BBC Echo Vessel - July 10, 2024 - Water Street, Georgetown, Guyana
        </div>
    {/if}
    {#if innerWidth > 1415}
        <enhanced:img src="$lib/assets/GYS05767.webp" alt="" class="object-cover w-screen max-[1415px]:h-screen wharf-image" />
        <div class="wharf-text uppercase text-white text-[28px] absolute bottom-52 left-16 max-[1415px]:left-10">
            BBC Echo Vessel - July 10, 2024 - Water Street, Georgetown, Guyana
        </div>
    {/if}
</div>

<div class="introduction-section flex flex-col justify-center bg-[#CEE9FD] bg-gradient-to-b from-white via-[#CEE9FD]/10 to-white" id="introduction">
    <IntersectionObserver element={introHeader} let:intersecting>
        <div class="intro-header mt-5 justify-center relative flex h-[143px]" bind:this={introHeader}>
            {#if intersecting}
                <div class="intro-details">
                    {#if innerWidth <= 600}
                        <div class="intro-text mt-8 text-center uppercase flex flex-col max-[600px]:text-[25px] text-[#4876B6]">
                            <p>Explore Our Services</p>
                        </div>
                    {/if}
                    {#if innerWidth > 600 && innerWidth <= 1415}
                        <div class="intro-text mt-8 text-center uppercase flex flex-col text-[50px] text-[#4876B6]">
                            <p>Explore Our Services</p>
                        </div>
                    {/if}
                    {#if innerWidth > 1415}
                        <div class="intro-text mt-8 text-center uppercase flex flex-col text-[70px] text-[#4876B6]">
                            <p>Explore Our Services</p>
                        </div>
                    {/if}
                    
                    <!-- <div class="intro-subtext text-center text-[#3D3938] text-[28px] raleway-light flex flex-col items-center">
                        <p>Choose from our shipping, transportation, travel service or explore our stores for your needs.</p>
                    </div> -->
                </div>
            {/if}
        </div>
    </IntersectionObserver>
    


    <div class="services mt-5 w-full h-[140lvh] max-[600px]:h-[100vh] flex flex-col items-center">
        
         <IntersectionObserver element={bentoContainer} let:intersecting>
            
            <div class="bento-container h-full w-[90vw] max-[600px]:w-[95vw] flex flex-col gap-6 max-[600px]:gap-3" bind:this={bentoContainer}>
                {#if intersecting}
                <div class="bento-row flex gap-6 max-[600px]:gap-3 justify-center">
                    <div class="service bento-large h-[65lvh] max-[600px]:h-[50vh] bg-slate-400 rounded-md hover:scale-125">
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
                    <div class="service bento-small w-fit h-[65lvh] max-[600px]:h-[50vh] bg-slate-400 rounded-md hover:scale-125">
                        <a href="/travel">
                            <div class="w-fit h-full">
                                <enhanced:img alt="" class="w-full h-full object-cover scale-100" src="$lib/assets/travelserviceHeader.webp" />
                                <div class="w-full h-full absolute top-0 right-0 bg-[#00000086] opacity-0 hover:opacity-100 hover:duration-[300ms] flex items-center justify-center text-[24px] text-[#ffffff]">
                                    <div>Travel Service</div>
                                    <img src={upright} alt="" width="25px" height="25px">
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="bento-row flex gap-6 max-[600px]:gap-3 justify-center">
                    <div class="service bento-small w-[68%] h-[70lvh] max-[600px]:h-[50vh] bg-slate-400 rounded-md hover:scale-125">
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
                    <div class="service bento-large-home w-fit h-[70lvh] max-[600px]:h-[50vh] bg-slate-400 rounded-md hover:scale-125">
                        <a href="/stores">
                            <div class="w-fit h-full">
                                <enhanced:img alt="" class="w-full h-full object-cover max-[600px]:object-cover" src="$lib/assets/GYS06308.webp" />
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


<div class="joint-ventures-section h-1/2 flex flex-col items-center">
    <IntersectionObserver element={jvHeader} let:intersecting>
    <div class="jv-heading flex flex-row items-left my-24 max-[600px]:mt-10 max-[600px]:mb-5 w-10/12">
        <div class="jv-right flex flex-row" bind:this={jvHeader}>
            {#if intersecting}
                <div class="right-text justify-items-end poppins-light text-[#4876B6] text-[50px] max-[600px]:text-[24px]">
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
    <div class="careers-header my-5 max-[600px]:my-2 justify-center relative flex h-[200px] max-[600px]:h-[100px]" bind:this={careersHeader}>
        {#if intersecting}
            <div class="intro-details">
                {#if innerWidth <= 600}
                    <div class="intro-text mt-2 text-center uppercase flex flex-col text-[28px] text-[#4876B6] items-center">
                        <p>Interested in a career?</p>
                    </div>
                    <div class="intro-subtext text-center text-[#3D3938] text-[16px] raleway-light flex flex-col items-center">
                        <p>Check out our list of job openings and see which</p>
                    </div>
                    <div class="intro-subtext text-center text-[#3D3938] text-[16px] raleway-light flex flex-col items-center">
                        <p> is the right path for you.</p>
                    </div>
                {/if}
                {#if innerWidth > 600}
                    <div class="intro-text mt-8 text-center uppercase flex flex-col text-[67px] md:max-[600px]:text-[24px] text-[#4876B6]">
                        <p>Interested in a career with us?</p>
                    </div>
                    <div class="intro-subtext text-center text-[#3D3938] text-[28px] max-[600px]:text-[16px] raleway-light flex flex-col items-center">
                        <p>Check out our list of job openings and see which is the right path for you.</p>
                    </div>
                {/if}
                
            </div>
        {/if}
    </div>
    </IntersectionObserver>
    
    <div class="parallax-container relative">
        {#if innerWidth <= 600}
            <img src={parallaxCareerMobile} alt="" class="object-cover w-screen h-[70vh] career-image">
        {/if}
        {#if innerWidth > 600}
            <img src={parallaxCareer} alt="" class="object-cover w-screen career-image">
        {/if}
        
        <div class="services flex flex-row justify-between items-center mb-10 absolute bottom-96 max-[600px]:bottom-32 right-28">
            <div class="services-link relative cursor-pointer text-white">
                <a href="/careers">
                    <div class="services-text flex flex-row items-center text-5xl max-[600px]:text-[30px] gap-8 uppercase ml-32 hover:tracking-widest hover:duration-150 duration-150" >
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
                <div class="w-[500px] max-[600px]:w-[230px] h-px left-[3px] top-[71px] absolute bg-white ml-32"></div>
            </div>
        </div>
    </div>
    
</div>
<div class="locations p-10">
    <div class="locationsHeader text-4xl raleway-medium">
        Our Locations
    </div>
    <div class="locationsDetails mt-10 grid grid-cols-5 max-[600px]:grid-cols-2 gap-2">
        <div class="company-section">
            <div class="locationHead w-fit h-[20vh]">
                <div class="locationCompany text-2xl raleway-regular">
                    Muneshwers Shipping
                </div>
                <div class="locationAddress mt-4 raleway-light">
                    45-47 Water Street, Georgetown, Guyana
                </div>
            </div>
            <div class="location w-fit">
                <div class="locationOpening mt-4">
                    <div class="locationOpeningTitle mb-4 text-2xl raleway-regular">
                        Opening Hours
                    </div>
                    <div class="locationOpeningHours raleway-light">
                        Mon-Fri: 8am - 3pm
                    </div>
                </div>
                <div class="locationTelephone mt-5 raleway-light">
                    TEL:+592-227-7417/18
                </div>
            </div>
        </div>

        <div class="company-section">
            <div class="locationHead w-fit h-[20vh]">
                <div class="locationCompany text-2xl raleway-regular">
                    Muneshwers Houston Terminal
                </div>
                <div class="locationAddress mt-4 raleway-light">
                    YY Houston, Greater Georgetown, Guyana
                </div>
            </div>
            <div class="location w-fit">
                <div class="locationOpening mt-4">
                    <div class="locationOpeningTitle mb-4 text-2xl raleway-regular">
                        Opening Hours
                    </div>
                    <div class="locationOpeningHours raleway-light">
                        Mon-Fri: 8am - 4pm
                    </div>
                </div>
                <div class="locationTelephone mt-5 raleway-light">
                    TEL:+592-227-7417/18
                </div>
            </div>
        </div>
        <div class="company-section">
            <div class="locationHead w-fit h-[20vh]">
                <div class="locationCompany text-2xl raleway-regular">
                    Muneshwers Guyana's #1 Events Store
                </div>
                <div class="locationAddress mt-4 raleway-light">
                    19-20 Water and Commerce Street, Georgetown, Guyana
                </div>
            </div>
            <div class="location w-fit">
                <div class="locationOpening mt-4">
                    <div class="locationOpeningTitle mb-4 text-2xl raleway-regular">
                        Opening Hours
                    </div>
                    <div class="locationOpeningHours raleway-light">
                        Mon-Fri: 8am - 4:30pm
                    </div>
                </div>
                <div class="locationTelephone mt-5 raleway-light">
                    TEL:+592-632-0736
                </div>
            </div>
        </div>
        <div class="company-section">
            <div class="locationHead w-fit h-[20vh]">
                <div class="locationCompany text-2xl raleway-regular">
                    Muneshwers Hardware Store
                </div>
                <div class="locationAddress mt-4 raleway-light">
                    45-47 Water Street, Georgetown, Guyana
                </div>
            </div>
            <div class="location w-fit">
                <div class="locationOpening mt-4">
                    <div class="locationOpeningTitle mb-4 text-2xl raleway-regular">
                        Opening Hours
                    </div>
                    <div class="locationOpeningHours raleway-light flex flex-col">
                        <span>Mon-Fri: 8am - 4:30pm</span>
                        <span>Sat: 8am - 2pm</span>
                    </div>
                </div>
                <div class="locationTelephone mt-5 raleway-light">
                    TEL:+592-227-4407
                </div>
            </div>
        </div>
        <div class="company-section">
            <div class="locationHead w-fit h-[20vh]">
                <div class="locationCompany text-2xl raleway-regular">
                    Muneshwers Travel Service
                </div>
                <div class="locationAddress mt-4 raleway-light">
                    45-47 Water Street, Georgetown, Guyana
                </div>
            </div>
            <div class="location w-fit">
                <div class="locationOpening mt-4">
                    <div class="locationOpeningTitle mb-4 text-2xl raleway-regular">
                        Opening Hours
                    </div>
                    <div class="locationOpeningHours raleway-light flex flex-col">
                        <span>Mon-Fri: 8am - 5pm</span>
                        <span>Sat: 8am - 2pm</span>
                    </div>
                </div>
                <div class="locationTelephone mt-5 raleway-light">
                    TEL:+592-226-1487 / +592-227-3666
                </div>
            </div>
        </div>
    </div>
</div>
<Footer />

<svelte:window bind:innerWidth bind:innerHeight bind:scrollY={y} on:scroll={() => windowHeightCheck()}/>