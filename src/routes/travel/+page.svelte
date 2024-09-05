<script>
// @ts-nocheck

    import brandLogo from "$lib/assets/brand-logo.webp";

    import ship from "$lib/assets/ship-solid.svg";
    import anchor from "$lib/assets/anchor-solid.svg";
    import truck from "$lib/assets/truck-solid.svg";
    import truckRamp from "$lib/assets/truck-ramp-box-solid.svg";
    import warehouse from "$lib/assets/warehouse-solid.svg";
    import dolly from "$lib/assets/dolly-solid.svg";
    import oil from "$lib/assets/oil-well-solid.svg";
    import box from "$lib/assets/box-solid.svg";
    import boxOpen from "$lib/assets/box-open-solid.svg";

	import Navigation from "../Navigation.svelte";
	import Footer from "../Footer.svelte";

    let y;

</script>

<svelte:head>
	<title>Muneshwers Limited</title>
	<meta name="description" content="Muneshwers Limited" />
</svelte:head>
<div class="landing-top relative">
    <!-- <div class="scroll-watcher"></div> -->
    <div class="hero-image h-[100vh] relative">
        <enhanced:img src="$lib/assets/travelimage.webp" alt="Hero landing page" class="object-cover h-full w-full" />
        <div class="image-cover h-full w-full opacity-30 bg-[#3A3A3A] absolute top-0"></div>
        <div class="hero-text uppercase text-white text-[70px] absolute bottom-20  left-16 w-9/12 leading-[120px] flex flex-col">
            <div class="individual-hero-text logo w-36 h-36">
                <img src={brandLogo} alt="Muneshwers Limited Logo" class="h-full w-full">
            </div>
            <div>
                <p class="individual-hero-text text-[60px]">Muneshwers</p>
            </div>
            <div>
                <p class="individual-hero-text text-[60px]">Travel Service</p>
            </div>
        </div>
    </div>
    <Navigation activePage="services"/>
</div>
<div class="introduction-section flex flex-col justify-center">
    <div class="shipping-header mt-5 justify-center relative flex h-[143px]">
        <div class="intro-details">
            {#if y > 200}
            <div class="intro-text mt-8 text-center uppercase flex flex-col text-[50px] text-[#4876B6]">
                <p>#1 Travel Agency in Guyana for almost 3 decades</p>
            </div>
            {/if}
            
        </div>
    </div>

</div>
<div class="services shipping-image w-[100%] ">
    {#if y > 200}
         <div class="list-row my-5 flex flex-row justify-center gap-10">
            <div class="service w-[220px] h-64 relative shadow rounded-[10px]">
                <div class="w-[220px] h-64 left-0 top-0 absolute bg-white rounded-[10px] shadow flex flex-col items-center">
                    <enhanced:img class="w-[200px] h-[200px] object-cover rounded-[10px] mt-[7pt]" src="$lib/assets/newyork.webp" alt=""/>
                    <div class="w-[139px] h-[35px] text-center text-black text-2xl font-normal font-['Playfair Display'] leading-9">USA</div>
                </div>
            </div>
            <div class="service w-[220px] h-64 relative shadow rounded-[10px]">
                <div class="w-[220px] h-64 left-0 top-0 absolute bg-white rounded-[10px] shadow flex flex-col items-center">
                    <enhanced:img class="w-[200px] h-[200px] object-cover rounded-[10px] mt-[7pt]" src="$lib/assets/trinidad.webp" alt=""/>
                    <div class="w-[139px] h-[35px] text-center text-black text-2xl font-normal font-['Playfair Display'] leading-9">Trinidad</div>
                </div>
            </div>
            <div class="service w-[220px] h-64 relative shadow rounded-[10px]">
                <div class="w-[220px] h-64 left-0 top-0 absolute bg-white rounded-[10px] shadow flex flex-col items-center">
                    <enhanced:img class="w-[200px] h-[200px] object-cover rounded-[10px] mt-[7pt]" src="$lib/assets/barbados.webp" alt=""/>
                    <div class="w-[139px] h-[35px] text-center text-black text-2xl font-normal font-['Playfair Display'] leading-9">Barbados</div>
                </div>
            </div>
            <div class="service w-[220px] h-64 relative shadow rounded-[10px]">
                <div class="w-[220px] h-64 left-0 top-0 absolute bg-white rounded-[10px] shadow flex flex-col items-center">
                    <enhanced:img class="w-[200px] h-[200px] object-cover rounded-[10px] mt-[7pt]" src="$lib/assets/panama.webp" alt=""/>
                    <div class="w-[139px] h-[35px] text-center text-black text-2xl font-normal font-['Playfair Display'] leading-9">Panama</div>
                </div>
            </div>
            <div class="service w-[220px] h-64 relative shadow rounded-[10px]">
                <div class="w-[220px] h-64 left-0 top-0 absolute bg-white rounded-[10px] shadow flex flex-col items-center">
                    <enhanced:img class="w-[200px] h-[200px] object-cover rounded-[10px] mt-[7pt]" src="$lib/assets/newyork.webp" alt=""/>
                    <div class="w-[139px] h-[35px] text-center text-black text-2xl font-normal font-['Playfair Display'] leading-9">USA</div>
                </div>
            </div>
        </div>
    {/if}

        
    </div>
<Footer />

<svelte:window bind:scrollY={y} />