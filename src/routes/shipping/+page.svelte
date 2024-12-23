<script>
// @ts-nocheck
    import IntersectionObserver from "svelte-intersection-observer";
    import brandLogo from "$lib/assets/brand-logo.webp";
    import mllogo from "$lib/assets/logo.png";
	import Navigation from "../Navigation.svelte";
	import Footer from "../Footer.svelte";
    import ship from "$lib/assets/GYS00850.webp";
    import anchor from "$lib/assets/vesselhandling.webp";
    import location from "$lib/assets/location-dot-solid.svg";
    import phone from "$lib/assets/phone-solid.svg";
    import port from "$lib/assets/anchor-solid-white.svg";
    import vessel from "$lib/assets/ship-solid-white.svg";
    import warehouse from "$lib/assets/warehouse-solid-white.svg";
    import heavy from "$lib/assets/weight-hanging-solid-white.svg";
    import truck from "$lib/assets/truck-front-solid-white.svg";
    import vehicle from "$lib/assets/car-solid-white.svg";
    import container from "$lib/assets/icons8-container-white.png";
    import size from "$lib/assets/up-right-and-down-left-from-center-solid.svg";
    import mrrobin from "$lib/assets/mrrobin.png";
    import mrc from "$lib/assets/mrc.png";
    import rajiv from "$lib/assets/rajiv.png";
    import chabi from "$lib/assets/chabi.png";
    import chester from "$lib/assets/chester.png";
    import gaj from "$lib/assets/gaj.png";
    import romona from "$lib/assets/romona.png";
    import shane from "$lib/assets/shane.png";
    import houston from "$lib/assets/DJI_0179_MOD.jpg";
    import waterstreet from "$lib/assets/DJI_0439.jpg";
    import { onMount } from "svelte";

    // import ship from "$lib/assets/ship-solid.svg";
    // import anchor from "$lib/assets/anchor-solid.svg";
    // import truck from "$lib/assets/truck-solid.svg";
    // import truckRamp from "$lib/assets/truck-ramp-box-solid.svg";
    // import warehouse from "$lib/assets/warehouse-solid.svg";
    // import dolly from "$lib/assets/dolly-solid.svg";
    // import oil from "$lib/assets/oil-well-solid.svg";
    // import box from "$lib/assets/box-solid.svg";
    // import boxOpen from "$lib/assets/box-open-solid.svg";

    let y;
    let innerWidth;
    let innerHeight;
    let navVisibility;
    let navigationBar;
    let elementDistance;

    let introHeader;
    let bentoContainer;
    let aboutShipping;
    let meetHeader;
    let meetSeniors;
    let meetJuniors;
    let facilitiesHeader;
    let facilitiesContainer;

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
    <div class="hero-image h-[100vh] relative">
        <enhanced:img src="$lib/assets/shipping2.webp" alt="Hero landing page" class="object-cover h-full w-full" />
        <div class="image-cover h-full w-full opacity-30 bg-[#3A3A3A] absolute top-0"></div>
        <div class="hero-text uppercase text-white absolute bottom-48 text-[60px] max-[1415px]:text-[50px] max-[600px]:text-[40px] left-16 max-[600px]:left-5 w-9/12 leading-[120px] flex flex-col">
            <div class="individual-hero-text logo w-36 h-36">
                <img src={mllogo} alt="Muneshwers Limited Logo" class="h-full w-full">
            </div>
            <div>
                <p class="individual-hero-text">Muneshwers</p>
            </div>
            <div>
                <p class="individual-hero-text">Shipping Service</p>
            </div>
        </div>
        <div class="buttons flex flex-row gap-4 h-[8vh] absolute bottom-20 left-16 max-[600px]:left-5 text-white w-[50%]">
            <!-- <a href="/contact">
                <button class="bg-[#4876B6] border-2 border-[#4876B6] text-white w-[170px] h-[50px] uppercase hover:scale-105 py-2 text-center text-md flex items-center justify-center hover:scale hover:border-[#4876B6]  hover:duration-150 font-bold">Request a Quote</button>
            </a> -->
            <a href="/contact">
                <button class="bg-[#0000009d] border hover:border-2 rounded-md border-[#0000009d] backdrop-blur-md text-white w-[170px] h-[50px] uppercase hover:scale-105 py-2 text-center text-md flex items-center justify-center hover:scale hover:border-[#4876B6]  hover:duration-150 font-bold">Contact Sales</button>
            </a>
        </div>
    </div>
    <Navigation activePage="services" {innerWidth} />
</div>
<div class="introduction-section flex flex-col justify-center items-center">
    <div class="shipping-header mt-5 justify-center relative flex h-[143px]">
        <IntersectionObserver element={introHeader} let:intersecting>
        <div class="intro-details" bind:this={introHeader}>
            {#if intersecting}
            <div class="intro-text mt-8 text-center uppercase flex flex-col text-[50px] text-[#4876B6]">
                <p>Our Services</p>
            </div>
            {/if}
            
        </div>
        </IntersectionObserver>
        
    </div>
    
    <div class="services shipping-image w-[95%] flex items-center justify-center"  bind:this={bentoContainer}>
        <IntersectionObserver once element={bentoContainer} let:intersecting>
        {#if intersecting}
         <div class="grid-container mt-5 ">
            <div class="grid grid-cols-4 gap-2 h-[100%]">
                <div class="service shipping-service grid-box h-full w-full rounded-md hover:scale-125">
                        <div class="w-fit h-full">
                            <enhanced:img src="$lib/assets/GYS00850.webp" alt="Hero landing page" class=" w-full h-full object-cover" />
                            <div class="w-full h-full absolute top-0 right-0 bg-[#00000086] opacity-0 hover:opacity-100 hover:duration-[300ms] flex items-center justify-center text-[24px] text-[#ffffff]">
                                <div>Shipping Agency</div>
                            </div>
                        </div>
                </div>
                <div class="service shipping-service grid-box h-full w-full rounded-md">
                    <div class="w-fit h-full">
                        <enhanced:img src="$lib/assets/vessell.webp" alt="Hero landing page" class=" w-full h-full object-cover" />
                        <div class="w-full h-full absolute top-0 right-0 bg-[#00000086] opacity-0 hover:opacity-100 hover:duration-[300ms] flex items-center justify-center text-[24px] text-[#ffffff]">
                            <div>Vessel Handling</div>
                        </div>
                    </div>
                </div>
                <div class="service shipping-service grid-box h-full w-full rounded-md row-span-2 col-span-2">
                    <div class="w-fit h-full">
                        <enhanced:img src="$lib/assets/GYS09655.webp" alt="Hero landing page" class=" w-full h-full object-cover" />
                        <div class="w-full h-full absolute top-0 right-0 bg-[#00000086] opacity-0 hover:opacity-100 hover:duration-[300ms] flex items-center justify-center text-[24px] text-[#ffffff]">
                            <div>Inland Haulage</div>
                        </div>
                    </div>
                </div>
                <div class="service shipping-service grid-box h-full w-full rounded-md col-span-2">
                    <div class="w-fit h-full">
                        <enhanced:img src="$lib/assets/warehousing.webp" alt="Hero landing page" class=" w-full h-full object-cover" />
                        <div class="w-full h-full absolute top-0 right-0 bg-[#00000086] opacity-0 hover:opacity-100 hover:duration-[300ms] flex items-center justify-center text-[24px] text-[#ffffff]">
                            <div>Warehousing</div>
                        </div>
                    </div>
                </div>
                <div class="service shipping-service grid-box h-full w-full rounded-md">
                    <div class="w-fit h-full">
                        <enhanced:img src="$lib/assets/GYS01288.webp" alt="Hero landing page" class=" w-full h-full object-cover" />
                        <div class="w-full h-full absolute top-0 right-0 bg-[#00000086] opacity-0 hover:opacity-100 hover:duration-[300ms] flex items-center justify-center text-[24px] text-[#ffffff]">
                            <div>Customs Brokerage</div>
                        </div>
                    </div>
                </div>
                <div class="service shipping-service grid-box h-full w-full rounded-md  col-span-2">
                    <div class="w-fit h-full">
                        <enhanced:img src="$lib/assets/GYS00964.webp" alt="Hero landing page" class=" w-full h-full object-cover" />
                        <div class="w-full h-full absolute top-0 right-0 bg-[#00000086] opacity-0 hover:opacity-100 hover:duration-[300ms] flex items-center justify-center text-[24px] text-[#ffffff]">
                            <div>Oil and Gas Support</div>
                        </div>
                    </div>
                </div>
                <div class="service shipping-service grid-box h-full w-full rounded-md">
                    <div class="w-fit h-full">
                        <enhanced:img src="$lib/assets/container2.webp" alt="Hero landing page" class=" w-full h-full object-cover" />
                        <div class="w-full h-full absolute top-0 right-0 bg-[#00000086] opacity-0 hover:opacity-100 hover:duration-[300ms] flex items-center justify-center text-[24px] text-[#ffffff]">
                            <div>Container Destuffing</div>
                        </div>
                    </div>
                </div>
            </div>
         </div>
        {/if}
        </IntersectionObserver> 
    </div>
    
 
</div>
<div class="entrance h-[70vh] max-[600px]:w-[100vw] my-36 flex flex-row max-[600px]:flex-col justify-center items-center gap-10" bind:this={aboutShipping}>
<IntersectionObserver element={aboutShipping} let:intersecting>
    {#if intersecting}
    <div class="col article w-[30%] max-[600px]:w-[90%]">
        <div class="article-title text-4xl max-[600px]:text-2xl sf_pro_bold uppercase">
            Connecting Guyana to the world through Shipping
        </div>
        <div class="article-details mt-5 raleway-regular text-lg max-[600px]:text-base">
            <p>
                Muneshwers Limited stands as one of the largest ports in Guyana, with just over 40% market share of the container cargo business. 
            </p>
            <p class="mt-3">
                We serve as the terminal operators for the first and second largest container lines in the world, MSC and Maersk respectively. As well as the the largest regional line, Tropical Shippjng.
            </p>
        </div>
    </div>
    <div class="col article-image w-[45%] max-[600px]:w-[90%]">
        <enhanced:img src="$lib/assets/DJI_0398.webp" alt="Hero landing page" class="object-cover h-full w-full rounded-lg" />
    </div>
    {/if}
</IntersectionObserver>
</div>


<div class="meet-the-team flex flex-col justify-center items-center">
    <div class="intro-details relative mb-16 h-[50px]" bind:this={meetHeader}>
        <IntersectionObserver element={meetHeader} let:intersecting>
        {#if intersecting}
        <div class="intro-text uppercase flex flex-col items-center text-[50px] max-[600px]:text-[35px] text-[#4876B6]">
            <p class="text-center w-full tracking-[3.20px] poppins-regular">Meet The Team</p>
        </div>
        {/if} 
        </IntersectionObserver>
    </div>
    
    <div class="level-0 grid grid-cols-3 max-[600px]:grid-cols-1 gap-8 max-[600px]:gap-0 h-[648px] max-[600px]:h-[1944px] max-[600px]:ml-4" bind:this={meetSeniors}>
        <IntersectionObserver element={meetSeniors} let:intersecting>
        {#if intersecting}
        <div class="service team-member w-[450px] max-[600px]:w-[95%] h-[648px]">
            <img class="w-[450px] h-[515px] object-cover" src={mrrobin} alt="Mr Robin Muneshwer" />
            <div class="w-96 h-[54px] mt-7 text-black text-[30px] font-normal font-['Raleway']">Mr. Robin Muneshwer</div>
            <div class="w-96 h-[54px] text-[#717171] text-[20px] font-light font-['Raleway']">Executive Director</div>
        </div>
        <div class="service team-member w-[450px] max-[600px]:w-[95%] h-[648px]">
            <img class="w-[450px] h-[515px] object-cover" src={mrc} alt="Mr Chandradatt Chintamani" />
            <div class="w-96 h-[54px] mt-7 text-black text-[30px] font-normal font-['Raleway']">Mr. Chandradatt Chintamani</div>
            <div class="w-96 h-[54px] text-[#717171] text-[20px] font-light font-['Raleway']">General Manager</div>
        </div>
        <div class="service team-member w-[450px] max-[600px]:w-[95%] h-[648px] ">
            <img class="w-[450px] h-[515px] object-cover" src={rajiv} alt="Mr Rajiv Muneshwer" />
            <div class="w-96 h-[54px] mt-7 text-black text-[30px] font-normal font-['Raleway']">Mr. Rajiv Muneshwer</div>
            <div class="w-96 h-[54px] text-[#717171] text-[20px] font-light font-['Raleway']">Chief Coordinator</div>
        </div>
        {/if}
        </IntersectionObserver>
        
    </div>
    
    <div class="level-1 grid grid-cols-5 max-[600px]:grid-cols-2 gap-2 max-[600px]:gap-1 my-32 h-[430px] max-[600px]:h-[990px] max-[600px]:w-[95%] max-[600px]:ml-[0px]" bind:this={meetJuniors}>
        <IntersectionObserver element={meetJuniors} let:intersecting>
            {#if intersecting}
            <div class="service team-member w-[280px] max-[600px]:w-[180px] h-[430px] max-[600px]:h-[380px]">
                <img class="w-[280px] max-[600px]:w-[180px] h-[307px] max-[600px]:h-[207px] object-cover" src={chester} alt="Marvin Chester"/>
                <div class="w-[280px] max-[600px]:w-[180px] h-[54px] max-[600px]:h-[60px] mt-6 text-black text-[27px] max-[600px]:text-[20px] font-normal font-['Raleway']">Marvin Chester</div>
                <div class="w-[280px] max-[600px]:w-[180px] h-[33px] text-[#717171] text-normal max-[600px]:text-[14px] font-light font-['Raleway']">Operations Manager</div>
            </div>
            <div class="service team-member w-[280px] max-[600px]:w-[180px] h-[430px] max-[600px]:h-[380px]">
                <img class="w-[280px] max-[600px]:w-[180px] h-[307px] max-[600px]:h-[207px] object-cover" src={chabi} alt="Chabiraj Ramcharran"/>
                <div class="w-[280px] max-[600px]:w-[180px] h-[54px] max-[600px]:h-[60px] mt-6 text-black text-[27px] max-[600px]:text-[20px] font-normal font-['Raleway']">Chabiraj Ramcharran</div>
                <div class="w-[280px] max-[600px]:w-[180px] h-[33px] text-[#717171] text-normal max-[600px]:text-[14px] font-light font-['Raleway']">Licensed Customs Brokerage Manager</div>
            </div>
            <div class="service team-member w-[280px] max-[600px]:w-[180px] h-[430px] max-[600px]:h-[380px]">
                <img class="w-[280px] max-[600px]:w-[180px] h-[307px] max-[600px]:h-[207px] object-cover" src={gaj} alt="Gajendranath Singh"/>
                <div class="w-[280px] max-[600px]:w-[180px] h-[54px] max-[600px]:h-[60px] mt-6 text-black text-[27px] max-[600px]:text-[20px] font-normal font-['Raleway']">Gajendranath Singh</div>
                <div class="w-[280px] max-[600px]:w-[180px] h-[33px] text-[#717171] text-normal max-[600px]:text-[14px] font-light font-['Raleway']">Facilities Manager</div>
            </div>
            <div class="service team-member w-[280px] max-[600px]:w-[180px] h-[430px] max-[600px]:h-[380px]">
                <img class="w-[280px] max-[600px]:w-[180px] h-[307px] max-[600px]:h-[207px] object-cover" src={shane} alt="Shane Rai"/>
                <div class="w-[280px] max-[600px]:w-[180px] h-[54px] max-[600px]:h-[60px] mt-6 text-black text-[27px] max-[600px]:text-[20px] font-normal font-['Raleway']">Shane Rai</div>
                <div class="w-[280px] max-[600px]:w-[180px] h-[33px] text-[#717171] text-normal max-[600px]:text-[14px] font-light font-['Raleway']">Business Development Manager</div>
            </div>
            <div class="service team-member w-[280px] max-[600px]:w-[180px] h-[430px] max-[600px]:h-[380px]">
                <img class="w-[280px] max-[600px]:w-[180px] h-[307px] max-[600px]:h-[207px] object-cover" src={romona} alt="Romona Arthur"/>
                <div class="w-[280px] max-[600px]:w-[180px] h-[54px] max-[600px]:h-[40px] mt-6 text-black text-[27px] max-[600px]:text-[20px] font-normal font-['Raleway']">Romona Arthur</div>
                <div class="w-[280px] max-[600px]:w-[180px] h-[33px] text-[#717171] text-normal max-[600px]:text-[14px] font-light font-['Raleway']">Logistics Manager</div>
            </div>
            {/if}
        </IntersectionObserver>
        
    </div>
</div>
<div class="our-facilities flex flex-col justify-center items-center">
    <div class="intro-details relative mb-16 h-[50px]" bind:this={facilitiesHeader}>
        
        <IntersectionObserver element={facilitiesHeader} let:intersecting>
            {#if intersecting}
            <div class="intro-text uppercase flex flex-col items-center text-[50px] max-[600px]:text-[35px] text-[#4876B6]">
                <p class="text-center w-full tracking-[3.20px] poppins-regular">Our Facilities</p>
            </div>
            {/if}
        </IntersectionObserver>
        
    </div>
    
    <div class="grid grid-cols-2 max-[600px]:grid-cols-1 gap-8 h-[770px] max-[600px]:h-[1400px]" bind:this={facilitiesContainer}>
        <IntersectionObserver element={facilitiesContainer} let:intersecting>
            {#if intersecting}
            <div class="w-[700px] max-[600px]:w-[370px] h-[770px] max-[600px]:h-[370px]">
                <div class="service facility-image cursor-pointer relative">
                    <img class="w-[700px] h-[450px] object-cover" src={houston} alt="Houston Terminal at YY" />
                    <div class="cover w-full h-full z-30 absolute p-10 top-0 right-0 bg-[#000000b0] opacity-0 hover:opacity-100 hover:duration-[300ms]">
                        <div class="w-[179px] h-9 mb-5 text-white text-[32px] font-medium font-['Raleway']">Services</div>
                        <div class="w-[100%] h-[3px] bg-white"></div>
                        <div class="grid grid-cols-3 max-[600px]:grid-cols-2 mt-5 gap-4 items-center justify-center">
                            <div class="service-option flex flex-row items-center gap-3">
                                <img src={container} class="w-[20px] h-[20px]" alt="size icon" />
                                <div class=" text-white text-sm font-light font-['Poppins']">Inland container facility</div>
                            </div>
                            <div class="service-option flex flex-row items-center gap-3">
                                <img src={vehicle} class="w-[20px] h-[20px]" alt="size icon" />
                                <div class=" text-white text-sm font-light font-['Poppins']">Vehicle storage</div>
                            </div>
                            <div class="service-option flex flex-row items-center gap-3">
                                <img src={warehouse} class="w-[20px] h-[20px]" alt="size icon" />
                                <div class=" text-white text-sm font-light font-['Poppins']">Warehousing complex</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-[583px] max-[600px]:w-[95%] h-[70px] mt-5 text-black text-[40px] max-[600px]:text-[30px] font-normal font-['Raleway']">Houston Inland Terminal</div>
                <div class="facility-details flex flex-row max-[600px]:flex-col gap-5 max-[600px]:gap-3">
                    <div class="acres flex flex-row items-center gap-3">
                        <img src={size} class="w-[15px] h-[15px]" alt="size icon" />
                        <div class="poppins-medium text-[14px] text-[#3f3f3f]">22 Acres</div>
                    </div>
                    <div class="location flex flex-row items-center gap-3">
                        <a href="https://maps.app.goo.gl/HJKQHFxm8z4vVpsp6" target="_blank">
                            <img src={location} class="w-[15px] h-[15px]" alt="size icon" />
                        </a>
                        <a href="https://maps.app.goo.gl/HJKQHFxm8z4vVpsp6" target="_blank">
                            <div class="poppins-medium text-[14px] text-[#3f3f3f] hover:text-[#3b6fbd] underline">YY, Houston, Greater Georgetown, Guyana</div>
                        </a>
                        
                    </div>
                    <div class="location flex flex-row items-center gap-2">
                        <a href="tel:592-227-7418;ext=3270" target="_blank">
                            <img src={phone} class="w-[15px] h-[15px]" alt="size icon" />
                        </a>
                        <a href="tel:592-227-7418" target="_blank">
                            <div class="poppins-medium text-[14px] text-[#3f3f3f] hover:text-[#3b6fbd] underline">+592-227-7418/17 Ext: 3270</div>
                        </a>
                    </div>
                </div>
            </div>
            <div class="w-[700px] max-[600px]:w-[370px] h-[770px] max-[600px]:h-[370px]">
                <div class="service facility-image cursor-pointer relative">
                    <img class="w-[700px] h-[450px] object-cover" src={waterstreet} alt="Houston Terminal at YY" />
                    <div class="cover w-full h-full z-30 absolute p-10 top-0 right-0 bg-[#000000b0] opacity-0 hover:opacity-100 hover:duration-[300ms]">
                        <div class="w-[179px] h-9 mb-5 text-white text-[32px] font-medium font-['Raleway']">Services</div>
                        <div class="w-[100%] h-[3px] bg-white"></div>
                        <div class="grid grid-cols-3 max-[600px]:grid-cols-2 mt-5 gap-4">
                            <div class="service-option flex flex-row items-center gap-3">
                                <img src={port} class="w-[20px] h-[20px]" alt="size icon" />
                                <div class=" text-white text-sm font-light font-['Poppins']">Terminal operations</div>
                            </div>
                            <div class="service-option flex flex-row items-center gap-3">
                                <img src={vessel} class="w-[20px] h-[20px]" alt="size icon" />
                                <div class=" text-white text-sm font-light font-['Poppins']">Vessel handling</div>
                            </div>
                            <div class="service-option flex flex-row items-center gap-3">
                                <img src={warehouse} class="w-[20px] h-[20px]" alt="size icon" />
                                <div class=" text-white text-sm font-light font-['Poppins']">Warehousing</div>
                            </div>
                            <div class="service-option flex flex-row items-center gap-3 col-span-2">
                                <img src={heavy} class="w-[20px] h-[20px]" alt="size icon" />
                                <div class=" text-white text-sm font-light font-['Poppins']">Heavy lifting areas and equipment</div>
                            </div>
                            <div class="service-option flex flex-row items-center gap-3">
                                <img src={truck} class="w-[20px] h-[20px]" alt="size icon" />
                                <div class=" text-white text-sm font-light font-['Poppins']">Inland transport</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-[583px] h-[70px] mt-5 text-black text-[40px] max-[600px]:text-[25px] font-normal font-['Raleway']">Muneshwers Pier Water Street</div>
                <div class="facility-details flex flex-row max-[600px]:flex-col gap-8 max-[600px]:gap-3 font-semibold">
                    <div class="acres flex flex-row items-center gap-3">
                        <img src={size} class="w-[15px] h-[15px]" alt="size icon" />
                        <div class="poppins-medium text-[14px] text-[#3f3f3f]">5 Acres</div>
                    </div>
                    <div class="location flex flex-row items-center gap-3">
                        <a href="https://maps.app.goo.gl/kLgCz1eizWcNzCHG8" target="_blank">
                            <img src={location} class="w-[15px] h-[15px]" alt="size icon" />
                        </a>
                        <a href="https://maps.app.goo.gl/kLgCz1eizWcNzCHG8" target="_blank">
                            <div class="poppins-medium text-[14px] text-[#3f3f3f] hover:text-[#3b6fbd] underline">45-47 Water Street, Georgetown, Guyana</div>
                        </a>
                    </div>
                    <div class="location flex flex-row items-center gap-2">
                        <a href="tel:592-227-7418" target="_blank">
                            <img src={phone} class="w-[15px] h-[15px]" alt="size icon" />
                        </a>
                        <a href="tel:592-227-7418" target="_blank">
                            <div class="poppins-medium text-[14px] text-[#3f3f3f] hover:text-[#3b6fbd] underline">+592-227-7418/17</div>
                        </a>
                    </div>
                </div>
            </div>
            {/if}
        </IntersectionObserver>

    </div>
    
    
</div>
<div class="customers flex flex-col justify-center items-center w-[100%]">
        <div class="intro-details  relative ">
            {#if y > 3200}
            <div class="intro-text my-8 text-center uppercase flex flex-col text-[50px] max-[600px]:text-[35px] text-[#4876B6]">
                <p>Our Local Clients</p>
            </div>
            {/if}
        </div>
        <div class="customer-list grid grid-cols-5 max-[600px]:grid-cols-3 gap-4 max-[600px]:gap-3 items-center justify-center mb-5">
            <div class="w-[220px] max-[600px]:w-[100px] h-[220px] max-[600px]:h-[100px] justify-center items-center inline-flex">
                <div class="w-[220px] max-[600px]:w-[100px] h-[220px] max-[600px]:h-[100px] bg-white rounded-[10px] shadow justify-center items-center inline-flex">
                    <enhanced:img class="w-[120px] h-[120px] object-contain" src="$lib/assets/ramps.webp" alt="client-logo"/>
                </div>
            </div>
            <div class="w-[220px] max-[600px]:w-[100px] h-[220px] max-[600px]:h-[100px] justify-center items-center inline-flex">
                <div class="w-[220px] max-[600px]:w-[100px] h-[220px] max-[600px]:h-[100px] bg-white rounded-[10px] shadow justify-center items-center inline-flex">
                    <enhanced:img class="w-[120px] h-[120px] object-contain" src="$lib/assets/gafoors.webp" alt="client-logo"/>
                </div>
            </div>
            <div class="w-[220px] max-[600px]:w-[100px] h-[220px] max-[600px]:h-[100px] justify-center items-center inline-flex">
                <div class="w-[220px] max-[600px]:w-[100px] h-[220px] max-[600px]:h-[100px] bg-white rounded-[10px] shadow justify-center items-center inline-flex">
                    <enhanced:img class="w-[120px] h-[120px] object-contain" src="$lib/assets/banks.webp" alt="client-logo"/>
                </div>
            </div>
            <div class="w-[220px] max-[600px]:w-[100px] h-[220px] max-[600px]:h-[100px] justify-center items-center inline-flex">
                <div class="w-[220px] max-[600px]:w-[100px] h-[220px] max-[600px]:h-[100px] bg-white rounded-[10px] shadow justify-center items-center inline-flex">
                    <enhanced:img class="w-[120px] h-[120px] object-contain" src="$lib/assets/pascargo.webp" alt="client-logo"/>
                </div>
            </div>
            <div class="w-[220px] max-[600px]:w-[100px] h-[220px] max-[600px]:h-[100px] justify-center items-center inline-flex">
                <div class="w-[220px] max-[600px]:w-[100px] h-[220px] max-[600px]:h-[100px] bg-white rounded-[10px] shadow justify-center items-center inline-flex">
                    <enhanced:img class="w-[120px] h-[120px] object-contain" src="$lib/assets/massy.webp" alt="client-logo"/>
                </div>
            </div>
            <div class="w-[220px] max-[600px]:w-[100px] h-[220px] max-[600px]:h-[100px] justify-center items-center inline-flex">
                <div class="w-[220px] max-[600px]:w-[100px] h-[220px] max-[600px]:h-[100px] bg-white rounded-[10px] shadow justify-center items-center inline-flex">
                    <enhanced:img class="w-[120px] h-[120px] object-contain" src="$lib/assets/unicomer.webp" alt="client-logo"/>
                </div>
            </div>
            <div class="w-[220px] max-[600px]:w-[100px] h-[220px] max-[600px]:h-[100px] justify-center items-center inline-flex">
                <div class="w-[220px] max-[600px]:w-[100px] h-[220px] max-[600px]:h-[100px] bg-white rounded-[10px] shadow justify-center items-center inline-flex">
                    <enhanced:img class="w-[120px] h-[120px] object-contain" src="$lib/assets/suri.webp" alt="client-logo"/>
                </div>
            </div>
            <div class="w-[220px] max-[600px]:w-[100px] h-[220px] max-[600px]:h-[100px] justify-center items-center inline-flex">
                <div class="w-[220px] max-[600px]:w-[100px] h-[220px] max-[600px]:h-[100px] bg-white rounded-[10px] shadow justify-center items-center inline-flex">
                    <enhanced:img class="w-[120px] h-[120px] object-contain" src="$lib/assets/ansa.webp" alt="client-logo"/>
                </div>
            </div>
            <div class="w-[220px] max-[600px]:w-[100px] h-[220px] max-[600px]:h-[100px] justify-center items-center inline-flex">
                <div class="w-[220px] max-[600px]:w-[100px] h-[220px] max-[600px]:h-[100px] bg-white rounded-[10px] shadow justify-center items-center inline-flex">
                    <enhanced:img class="w-[120px] h-[120px] object-contain" src="$lib/assets/laparkan.webp" alt="client-logo"/>
                </div>
            </div>
            <div class="w-[220px] max-[600px]:w-[100px] h-[220px] max-[600px]:h-[100px] justify-center items-center inline-flex">
                <div class="w-[220px] max-[600px]:w-[100px] h-[220px] max-[600px]:h-[100px] bg-white rounded-[10px] shadow justify-center items-center inline-flex">
                    <enhanced:img class="w-[120px] h-[120px] object-contain" src="$lib/assets/torginol.webp" alt="client-logo"/>
                </div>
            </div>
            <div class="w-[220px] max-[600px]:w-[100px] h-[220px] max-[600px]:h-[100px] justify-center items-center inline-flex">
                <div class="w-[220px] max-[600px]:w-[100px] h-[220px] max-[600px]:h-[100px] bg-white rounded-[10px] shadow justify-center items-center inline-flex">
                    <enhanced:img class="w-[120px] h-[120px] object-contain" src="$lib/assets/toucan.webp" alt="client-logo"/>
                </div>
            </div>
            <div class="w-[220px] max-[600px]:w-[100px] h-[220px] max-[600px]:h-[100px] justify-center items-center inline-flex">
                <div class="w-[220px] max-[600px]:w-[100px] h-[220px] max-[600px]:h-[100px] bg-white rounded-[10px] shadow justify-center items-center inline-flex">
                    <enhanced:img class="w-[120px] h-[120px] object-contain" src="$lib/assets/dsl.webp" alt="client-logo"/>
                </div>
            </div>
            <div class="w-[220px] max-[600px]:w-[100px] h-[220px] max-[600px]:h-[100px] justify-center items-center inline-flex">
                <div class="w-[220px] max-[600px]:w-[100px] h-[220px] max-[600px]:h-[100px] bg-white rounded-[10px] shadow justify-center items-center inline-flex">
                    <enhanced:img class="w-[120px] h-[120px] object-contain" src="$lib/assets/nhl.webp" alt="client-logo"/>
                </div>
            </div>
            <div class="w-[220px] max-[600px]:w-[100px] h-[220px] max-[600px]:h-[100px] justify-center items-center inline-flex">
                <div class="w-[220px] max-[600px]:w-[100px] h-[220px] max-[600px]:h-[100px] bg-white rounded-[10px] shadow justify-center items-center inline-flex">
                    <enhanced:img class="w-[120px] h-[120px] object-contain" src="$lib/assets/desinco.webp" alt="client-logo"/>
                </div>
            </div>
            <div class="w-[220px] max-[600px]:w-[100px] h-[220px] max-[600px]:h-[100px] justify-center items-center inline-flex">
                <div class="w-[220px] max-[600px]:w-[100px] h-[220px] max-[600px]:h-[100px] bg-white rounded-[10px] shadow justify-center items-center inline-flex">
                    <enhanced:img class="w-[120px] h-[120px] object-contain" src="$lib/assets/dsingh.webp" alt="client-logo"/>
                </div>
            </div>
            <div class="w-[220px] max-[600px]:w-[100px] h-[220px] max-[600px]:h-[100px] justify-center items-center inline-flex">
                <div class="w-[220px] max-[600px]:w-[100px] h-[220px] max-[600px]:h-[100px] bg-white rounded-[10px] shadow justify-center items-center inline-flex">
                    <enhanced:img class="w-[120px] max-[600px]:w-[80px] h-[120px] max-[600px]:h-[80px] object-contain" src="$lib/assets/saipem.webp" alt="client-logo"/>
                </div>
            </div>
        </div>
        <div class="intro-details  relative">
            {#if y > 3200}
            <div class="intro-text my-8 text-center uppercase flex flex-col text-[50px] max-[600px]:text-[30px] text-[#4876B6]">
                <p>Our Shipping Clients</p>
            </div>
            {/if}
        </div>
        <div class="client-list grid grid-cols-3 gap-4 items-center justify-center mb-16">
            <div class="w-[220px] max-[600px]:w-[100px] h-[220px] max-[600px]:h-[100px] justify-center items-center inline-flex">
                <div class="w-[220px] max-[600px]:w-[100px] h-[220px] max-[600px]:h-[100px] bg-white rounded-[200px] shadow-xl justify-center items-center inline-flex">
                    <enhanced:img class="w-[120px] max-[600px]:w-[80px] h-[120px] max-[600px]:h-[80px] object-contain" src="$lib/assets/tropical.webp" alt="client-logo"/>
                </div>
            </div>
            
            <div class="w-[220px] max-[600px]:w-[100px] h-[220px] max-[600px]:h-[100px] justify-center items-center inline-flex">
                <div class="w-[220px] max-[600px]:w-[100px] h-[220px] max-[600px]:h-[100px] bg-white rounded-[200px] shadow-xl justify-center items-center inline-flex">
                    <enhanced:img class="w-[120px] max-[600px]:w-[80px] h-[120px] max-[600px]:h-[80px] object-contain" src="$lib/assets/maersk.webp" alt="client-logo"/>
                </div>
            </div>
            <div class="w-[220px] max-[600px]:w-[100px] h-[220px] max-[600px]:h-[100px] justify-center items-center inline-flex">
                <div class="w-[220px] max-[600px]:w-[100px] h-[220px] max-[600px]:h-[100px] bg-white rounded-[200px] shadow-xl justify-center items-center inline-flex">
                    <enhanced:img class="w-[120px] max-[600px]:w-[80px] h-[120px] max-[600px]:h-[80px] object-contain" src="$lib/assets/msc.webp" alt="client-logo"/>
                </div>
            </div>
        </div>
        
    </div>
<Footer />

<svelte:window bind:scrollY={y} bind:innerWidth bind:innerHeight on:scroll={() => windowHeightCheck()} />
