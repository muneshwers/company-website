<script>
// @ts-nocheck

    import brandLogo from "$lib/assets/brand-logo.webp";
	import Navigation from "../Navigation.svelte";
	import Footer from "../Footer.svelte";
    import ship from "$lib/assets/ship-solid.svg";
    import anchor from "$lib/assets/anchor-solid.svg";
    import truck from "$lib/assets/truck-solid.svg";
    import truckRamp from "$lib/assets/truck-ramp-box-solid.svg";
    import warehouse from "$lib/assets/warehouse-solid.svg";
    import dolly from "$lib/assets/dolly-solid.svg";
    import oil from "$lib/assets/oil-well-solid.svg";
    import box from "$lib/assets/box-solid.svg";
    import boxOpen from "$lib/assets/box-open-solid.svg";

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
        <div class="hero-text uppercase text-white absolute bottom-40  left-16 w-9/12 leading-[120px] flex flex-col">
            <div class="individual-hero-text logo w-36 h-36">
                <img src={brandLogo} alt="Muneshwers Limited Logo" class="h-full w-full">
            </div>
            <div>
                <p class="individual-hero-text text-[60px]">Muneshwers Shipping Service</p>
            </div>
        </div>
        <div class="buttons flex flex-row gap-4 h-[8vh] absolute bottom-16 left-16 text-white w-[50%]">
            <button class="bg-slate-700 w-[25%] rounded-lg p-5 text-center h-full flex items-center justify-center hover:bg-slate-500 hover:duration-150">Request a Quote</button>
            <button class="bg-slate-700 w-[25%] rounded-lg p-5 text-center h-full flex items-center justify-center hover:bg-slate-500 hover:duration-150">Contact Sales</button>
        </div>
    </div>
    <Navigation activePage="services"/>
</div>
<div class="introduction-section flex flex-col justify-center items-center">
    <div class="shipping-header mt-5 justify-center relative flex h-[143px]">
        <div class="intro-details">
            {#if y > 200}
            <div class="intro-text mt-8 text-center uppercase flex flex-col text-[50px] text-[#4876B6]">
                <p>Ship with the Fastest growing port in Guyana</p>
            </div>
            {/if}
            
        </div>
    </div>
    <div class="services shipping-image w-[100%] ">
         {#if y > 300}
         <div class="list-row mt-5 flex flex-row justify-center gap-5">
            <div class="service w-[25%] h-[139px] bg-white rounded-[10px] shadow flex flex-row items-center gap-5">
                <div class="icon-container ml-8 p-5 bg-[#F5F5F5] rounded-md">
                    <img src={ship} alt="Hero landing page" class="object-fill w-[50px] h-[50px]" />
                </div>
                <div class="service-name text-xl">Shipping Agency</div>
            </div>
            <div class="service w-[25%] h-[139px] bg-white rounded-[10px] shadow flex flex-row items-center gap-5">
                <div class="icon-container ml-8 p-5 bg-[#F5F5F5] rounded-md">
                    <img src={anchor} alt="Hero landing page" class="object-fill w-[50px] h-[50px]" />
                </div>
                <div class="service-name text-xl">Vessel Handling</div>
            </div>
            <div class="service w-[25%] h-[139px] bg-white rounded-[10px] shadow flex flex-row items-center gap-5">
                <div class="icon-container ml-8 p-5 bg-[#F5F5F5] rounded-md">
                    <img src={truck} alt="Hero landing page" class="object-fill w-[50px] h-[50px]" />
                </div>
                <div class="service-name text-xl">Inland Haulage</div>
            </div>
        </div>
        <div class="list-row mt-5 flex flex-row justify-center gap-5">
            <div class="service w-[25%] h-[139px] bg-white rounded-[10px] shadow flex flex-row items-center gap-5">
                <div class="icon-container ml-8 p-5 bg-[#F5F5F5] rounded-md">
                    <img src={truckRamp} alt="Hero landing page" class="object-fill w-[50px] h-[50px]" />
                </div>
                <div class="service-name text-xl">Dangerous Cargo Handling</div>
            </div>
            <div class="service w-[25%] h-[139px] bg-white rounded-[10px] shadow flex flex-row items-center gap-5">
                <div class="icon-container ml-8 p-5 bg-[#F5F5F5] rounded-md">
                    <img src={warehouse} alt="Hero landing page" class="object-fill w-[50px] h-[50px]" />
                </div>
                <div class="service-name text-xl">Warehousing for LCL Cargo</div>
            </div>
            <div class="service w-[25%] h-[139px] bg-white rounded-[10px] shadow flex flex-row items-center gap-5">
                <div class="icon-container ml-8 p-5 bg-[#F5F5F5] rounded-md">
                    <img src={dolly} alt="Hero landing page" class="object-fill w-[50px] h-[50px]" />
                </div>
                <div class="service-name text-xl">Husbandry</div>
            </div>
        </div>
        <div class="list-row mt-5 flex flex-row justify-center gap-5">
            <div class="service w-[25%] h-[139px] bg-white rounded-[10px] shadow flex flex-row items-center gap-5">
                <div class="icon-container ml-8 p-5 bg-[#F5F5F5] rounded-md">
                    <img src={oil} alt="Hero landing page" class="object-fill w-[50px] h-[50px]" />
                </div>
                <div class="service-name text-xl w-[60%]">Oil & Gas Support Services</div>
            </div>
            <div class="service w-[25%] h-[139px] bg-white rounded-[10px] shadow flex flex-row items-center gap-5">
                <div class="icon-container ml-8 p-5 bg-[#F5F5F5] rounded-md">
                    <img src={box} alt="Hero landing page" class="object-fill w-[50px] h-[50px]" />
                </div>
                <div class="service-name text-xl">Customs Brokerage</div>
            </div>
            <div class="service w-[25%] h-[139px] bg-white rounded-[10px] shadow flex flex-row items-center gap-5">
                <div class="icon-container ml-8 p-5 bg-[#F5F5F5] rounded-md">
                    <img src={boxOpen} alt="Hero landing page" class="object-fill w-[50px] h-[50px]" />
                </div>
                <div class="service-name text-xl">Destuffing of Cargo</div>
            </div>
        </div>
        {/if}
        
        
    </div>
 
</div>
<div class="entrance h-[70vh]"></div>
<Footer />

<svelte:window bind:scrollY={y} />
