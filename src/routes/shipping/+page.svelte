<script>
// @ts-nocheck

    import brandLogo from "$lib/assets/brand-logo.webp";
    import mllogo from "$lib/assets/logo.png";
	import Navigation from "../Navigation.svelte";
	import Footer from "../Footer.svelte";
    import ship from "$lib/assets/shippingagency.jpg";
    import anchor from "$lib/assets/vesselhandling.jpg";
    import truck from "$lib/assets/GYS09655.jpg";
    import truckRamp from "$lib/assets/dangerouscargo.jpg";
    import warehouse from "$lib/assets/warehousing.png";
    import dolly from "$lib/assets/oilandgassupport.jpg";
    import oil from "$lib/assets/oilandgassupport.jpg";
    import box from "$lib/assets/customsbrokerage.jpg";
    import boxOpen from "$lib/assets/container2.jpg";
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
        <div class="hero-text uppercase text-white absolute bottom-48  left-16 w-9/12 leading-[120px] flex flex-col">
            <div class="individual-hero-text logo w-36 h-36">
                <img src={mllogo} alt="Muneshwers Limited Logo" class="h-full w-full">
            </div>
            <div>
                <p class="individual-hero-text text-[60px]">Muneshwers</p>
            </div>
            <div>
                <p class="individual-hero-text text-[60px]">Shipping Service</p>
            </div>
        </div>
        <div class="buttons flex flex-row gap-4 h-[8vh] absolute bottom-20 left-16 text-white w-[50%]">
            <a href="/contact">
                <button class="bg-[#4876B6] border-2 border-[#4876B6] text-white w-[170px] h-[50px] uppercase hover:scale-105 py-2 text-center text-md flex items-center justify-center hover:scale hover:border-[#4876B6]  hover:duration-150 font-bold">Request a Quote</button>
            </a>
            <a href="/contact">
                <button class="bg-[#4876B6] border-2 border-[#4876B6] text-white w-[170px] h-[50px] uppercase hover:scale-105 py-2 text-center text-md flex items-center justify-center hover:scale hover:border-[#4876B6]  hover:duration-150 font-bold">Contact Sales</button>
            </a>
        </div>
    </div>
    <Navigation activePage="services"/>
</div>
<div class="introduction-section flex flex-col justify-center items-center">
    <div class="shipping-header mt-5 justify-center relative flex h-[143px]">
        <div class="intro-details">
            {#if y > 200}
            <div class="intro-text mt-8 text-center uppercase flex flex-col text-[50px] text-[#4876B6]">
                <p>Our Services</p>
            </div>
            {/if}
            
        </div>
    </div>
    <div class="services shipping-image w-[95%] flex items-center justify-center">
         {#if y > 300}
         <div class="grid-container mt-5 ">
            <div class="grid grid-cols-4 gap-2 h-[100%]">
                <div class="service h-full w-full  rounded-md">
                    <img src={ship} alt="Hero landing page" class=" w-full h-full object-cover" />
                </div>
                <div class="service h-full w-full rounded-md">
                    <img src={anchor} alt="Hero landing page" class="w-full h-full object-cover" />
                </div>
                <div class="service h-full w-full rounded-md row-span-2 col-span-2">
                    <img src={truck} alt="Hero landing page" class="w-full h-full object-cover" />
                </div>
                <div class="service h-full w-full rounded-md col-span-2">
                    <img src={warehouse} alt="Hero landing page" class="w-full h-full object-cover" />
                </div>
                <div class="service h-full w-full rounded-md">
                    <img src={box} alt="Hero landing page" class="w-full h-full object-cover" />
                </div>
                <div class="service h-full w-full rounded-md  col-span-3">
                    <img src={boxOpen} alt="Hero landing page" class="w-full h-full object-cover" />
                </div>
            </div>
         </div>
        {/if}
    </div>
    <!-- <div class="services shipping-image w-[100%] ">
         {#if y > 300}
         <div class="list-row mt-5 flex flex-row justify-center gap-5">
            <div class="service w-[25%] h-[139px] bg-white rounded-[10px] shadow flex flex-row items-center gap-8">
                <div class="icon-container ml-8 p-5 bg-[#F5F5F5] rounded-md">
                    <img src={ship} alt="Hero landing page" class="object-fill w-[50px] h-[50px]" />
                </div>
                <div class="service-name text-xl sf_pro_bold">Shipping Agency</div>
            </div>
            <div class="service w-[25%] h-[139px] bg-white rounded-[10px] shadow flex flex-row items-center gap-8">
                <div class="icon-container ml-8 p-5 bg-[#F5F5F5] rounded-md">
                    <img src={anchor} alt="Hero landing page" class="object-fill w-[50px] h-[50px]" />
                </div>
                <div class="service-name text-xl sf_pro_bold">Vessel Handling</div>
            </div>
            <div class="service w-[25%] h-[139px] bg-white rounded-[10px] shadow flex flex-row items-center gap-8">
                <div class="icon-container ml-8 p-5 bg-[#F5F5F5] rounded-md">
                    <img src={truck} alt="Hero landing page" class="object-fill w-[50px] h-[50px]" />
                </div>
                <div class="service-name text-xl sf_pro_bold">Inland Haulage</div>
            </div>
        </div>
        <div class="list-row mt-5 flex flex-row justify-center gap-5">
            <div class="service w-[25%] h-[139px] bg-white rounded-[10px] shadow flex flex-row items-center gap-8">
                <div class="icon-container ml-8 p-5 bg-[#F5F5F5] rounded-md">
                    <img src={truckRamp} alt="Hero landing page" class="object-fill w-[50px] h-[50px]" />
                </div>
                <div class="service-name text-xl sf_pro_bold">Dangerous Cargo Handling</div>
            </div>
            <div class="service w-[25%] h-[139px] bg-white rounded-[10px] shadow flex flex-row items-center gap-8">
                <div class="icon-container ml-8 p-5 bg-[#F5F5F5] rounded-md">
                    <img src={warehouse} alt="Hero landing page" class="object-fill w-[50px] h-[50px]" />
                </div>
                <div class="service-name text-xl sf_pro_bold">Warehousing for LCL Cargo</div>
            </div>
            <div class="service w-[25%] h-[139px] bg-white rounded-[10px] shadow flex flex-row items-center gap-8">
                <div class="icon-container ml-8 p-5 bg-[#F5F5F5] rounded-md">
                    <img src={dolly} alt="Hero landing page" class="object-fill w-[50px] h-[50px]" />
                </div>
                <div class="service-name text-xl sf_pro_bold">Husbandry</div>
            </div>
        </div>
        <div class="list-row mt-5 flex flex-row justify-center gap-5">
            <div class="service w-[25%] h-[139px] bg-white rounded-[10px] shadow flex flex-row items-center gap-8">
                <div class="icon-container ml-8 p-5 bg-[#F5F5F5] rounded-md">
                    <img src={oil} alt="Hero landing page" class="object-fill w-[50px] h-[50px]" />
                </div>
                <div class="service-name text-xl w-[60%] sf_pro_bold">Oil & Gas Support Services</div>
            </div>
            <div class="service w-[25%] h-[139px] bg-white rounded-[10px] shadow flex flex-row items-center gap-8">
                <div class="icon-container ml-8 p-5 bg-[#F5F5F5] rounded-md">
                    <img src={box} alt="Hero landing page" class="object-fill w-[50px] h-[50px]" />
                </div>
                <div class="service-name text-xl sf_pro_bold">Customs Brokerage</div>
            </div>
            <div class="service w-[25%] h-[139px] bg-white rounded-[10px] shadow flex flex-row items-center gap-8">
                <div class="icon-container ml-8 p-5 bg-[#F5F5F5] rounded-md">
                    <img src={boxOpen} alt="Hero landing page" class="object-fill w-[50px] h-[50px]" />
                </div>
                <div class="service-name text-xl sf_pro_bold">Destuffing of Cargo</div>
            </div>
        </div>
        {/if}
    </div> -->
 
</div>
<div class="entrance h-[70vh] my-36 flex justify-center items-center gap-10">
    {#if y > 800}
    <div class="col article w-[30%]">
        <div class="article-title text-4xl sf_pro_bold uppercase">
            Connecting Guyana to the world through Shipping
        </div>
        <div class="article-details mt-5 raleway-regular text-lg">
            <p>
                Muneshwers Limited is one of the largest ports in Guyana with over 40% market share in container traffic. First concrete pier in Guyana.
            </p>
            <p class="mt-3">
                We are the shipping agent and terminal operator for Maersk, Tropical Shipping and Mediterranean Shipping Company. Maersk and Mediterranean Shipping Company (MSC) are two of the largest shipping lines in the world and market leaders in Guyana.
            </p>
        </div>
    </div>
    <div class="col article-image w-[45%]">
        <enhanced:img src="$lib/assets/DJI_0398.webp" alt="Hero landing page" class="object-cover h-full w-full rounded-lg" />
    </div>
    {/if}
</div>
<div class="customers mt-3 flex flex-col justify-center items-center w-[100%]">
        <div class="intro-details  relative ">
            {#if y > 1000}
            <div class="intro-text my-8 text-center uppercase flex flex-col text-[50px] text-[#4876B6]">
                <p>Our Clients</p>
            </div>
            {/if}
        </div>
        <div class="customer-list grid grid-cols-5 gap-4 items-center justify-center mb-5">
            <div class="w-[220px] h-[220px] justify-center items-center inline-flex">
                <div class="w-[220px] h-[220px] bg-white rounded-[10px] shadow justify-center items-center inline-flex">
                    <enhanced:img class="w-[120px] h-[120px] object-contain" src="$lib/assets/ramps.webp" alt="client-logo"/>
                </div>
            </div>
            <div class="w-[220px] h-[220px] justify-center items-center inline-flex">
                <div class="w-[220px] h-[220px] bg-white rounded-[10px] shadow justify-center items-center inline-flex">
                    <enhanced:img class="w-[120px] h-[120px] object-contain" src="$lib/assets/gafoors.webp" alt="client-logo"/>
                </div>
            </div>
            <div class="w-[220px] h-[220px] justify-center items-center inline-flex">
                <div class="w-[220px] h-[220px] bg-white rounded-[10px] shadow justify-center items-center inline-flex">
                    <enhanced:img class="w-[120px] h-[120px] object-contain" src="$lib/assets/banks.webp" alt="client-logo"/>
                </div>
            </div>
            <div class="w-[220px] h-[220px] justify-center items-center inline-flex">
                <div class="w-[220px] h-[220px] bg-white rounded-[10px] shadow justify-center items-center inline-flex">
                    <enhanced:img class="w-[120px] h-[120px] object-contain" src="$lib/assets/pascargo.webp" alt="client-logo"/>
                </div>
            </div>
            <div class="w-[220px] h-[220px] justify-center items-center inline-flex">
                <div class="w-[220px] h-[220px] bg-white rounded-[10px] shadow justify-center items-center inline-flex">
                    <enhanced:img class="w-[120px] h-[120px] object-contain" src="$lib/assets/massy.webp" alt="client-logo"/>
                </div>
            </div>
            <div class="w-[220px] h-[220px] justify-center items-center inline-flex">
                <div class="w-[220px] h-[220px] bg-white rounded-[10px] shadow justify-center items-center inline-flex">
                    <enhanced:img class="w-[120px] h-[120px] object-contain" src="$lib/assets/unicomer.webp" alt="client-logo"/>
                </div>
            </div>
            <div class="w-[220px] h-[220px] justify-center items-center inline-flex">
                <div class="w-[220px] h-[220px] bg-white rounded-[10px] shadow justify-center items-center inline-flex">
                    <enhanced:img class="w-[120px] h-[120px] object-contain" src="$lib/assets/suri.webp" alt="client-logo"/>
                </div>
            </div>
            <div class="w-[220px] h-[220px] justify-center items-center inline-flex">
                <div class="w-[220px] h-[220px] bg-white rounded-[10px] shadow justify-center items-center inline-flex">
                    <enhanced:img class="w-[120px] h-[120px] object-contain" src="$lib/assets/ansa.webp" alt="client-logo"/>
                </div>
            </div>
            <div class="w-[220px] h-[220px] justify-center items-center inline-flex">
                <div class="w-[220px] h-[220px] bg-white rounded-[10px] shadow justify-center items-center inline-flex">
                    <enhanced:img class="w-[120px] h-[120px] object-contain" src="$lib/assets/laparkan.webp" alt="client-logo"/>
                </div>
            </div>
            <div class="w-[220px] h-[220px] justify-center items-center inline-flex">
                <div class="w-[220px] h-[220px] bg-white rounded-[10px] shadow justify-center items-center inline-flex">
                    <enhanced:img class="w-[120px] h-[120px] object-contain" src="$lib/assets/torginol.webp" alt="client-logo"/>
                </div>
            </div>
            <div class="w-[220px] h-[220px] justify-center items-center inline-flex">
                <div class="w-[220px] h-[220px] bg-white rounded-[10px] shadow justify-center items-center inline-flex">
                    <enhanced:img class="w-[120px] h-[120px] object-contain" src="$lib/assets/toucan.webp" alt="client-logo"/>
                </div>
            </div>
            <div class="w-[220px] h-[220px] justify-center items-center inline-flex">
                <div class="w-[220px] h-[220px] bg-white rounded-[10px] shadow justify-center items-center inline-flex">
                    <enhanced:img class="w-[120px] h-[120px] object-contain" src="$lib/assets/dsl.webp" alt="client-logo"/>
                </div>
            </div>
            <div class="w-[220px] h-[220px] justify-center items-center inline-flex">
                <div class="w-[220px] h-[220px] bg-white rounded-[10px] shadow justify-center items-center inline-flex">
                    <enhanced:img class="w-[120px] h-[120px] object-contain" src="$lib/assets/tropical.webp" alt="client-logo"/>
                </div>
            </div>
            <div class="w-[220px] h-[220px] justify-center items-center inline-flex">
                <div class="w-[220px] h-[220px] bg-white rounded-[10px] shadow justify-center items-center inline-flex">
                    <enhanced:img class="w-[120px] h-[120px] object-contain" src="$lib/assets/nhl.webp" alt="client-logo"/>
                </div>
            </div>
            <div class="w-[220px] h-[220px] justify-center items-center inline-flex">
                <div class="w-[220px] h-[220px] bg-white rounded-[10px] shadow justify-center items-center inline-flex">
                    <enhanced:img class="w-[120px] h-[120px] object-contain" src="$lib/assets/desinco.webp" alt="client-logo"/>
                </div>
            </div>
            <div class="w-[220px] h-[220px] justify-center items-center inline-flex">
                <div class="w-[220px] h-[220px] bg-white rounded-[10px] shadow justify-center items-center inline-flex">
                    <enhanced:img class="w-[120px] h-[120px] object-contain" src="$lib/assets/dsingh.webp" alt="client-logo"/>
                </div>
            </div>
            <div class="w-[220px] h-[220px] justify-center items-center inline-flex">
                <div class="w-[220px] h-[220px] bg-white rounded-[10px] shadow justify-center items-center inline-flex">
                    <enhanced:img class="w-[120px] h-[120px] object-contain" src="$lib/assets/saipem.webp" alt="client-logo"/>
                </div>
            </div>
            <div class="w-[220px] h-[220px] justify-center items-center inline-flex">
                <div class="w-[220px] h-[220px] bg-white rounded-[10px] shadow justify-center items-center inline-flex">
                    <enhanced:img class="w-[120px] h-[120px] object-contain" src="$lib/assets/maersk.webp" alt="client-logo"/>
                </div>
            </div>
            <div class="w-[220px] h-[220px] justify-center items-center inline-flex">
                <div class="w-[220px] h-[220px] bg-white rounded-[10px] shadow justify-center items-center inline-flex">
                    <enhanced:img class="w-[120px] h-[120px] object-contain" src="$lib/assets/msc.webp" alt="client-logo"/>
                </div>
            </div>
        </div>
        
    </div>
<Footer />

<svelte:window bind:scrollY={y} />
