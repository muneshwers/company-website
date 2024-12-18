<script>
// @ts-nocheck

    import brandLogo from "$lib/assets/brand-logo.webp";
    import travelService from "$lib/assets/travelservice2.jpg";

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
    let innerWidth;

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
        <div class="hero-text uppercase text-white text-[60px] max-[600px]:text-[50px] max-[600px]:text-[40px] absolute bottom-20  left-16 max-[600px]:left-5 w-9/12 leading-[120px] flex flex-col">
            <div class="individual-hero-text logo w-36 h-36">
                <img src={brandLogo} alt="Muneshwers Limited Logo" class="h-full w-full">
            </div>
            <div>
                <p class="individual-hero-text">Muneshwers</p>
            </div>
            <div>
                <p class="individual-hero-text">Travel Service</p>
            </div>
        </div>
    </div>
    <Navigation activePage="services" {innerWidth} />
</div>
<div class="introduction-section flex flex-col justify-center">
    <div class="shipping-header mt-5 justify-center relative flex h-[143px]">
        <div class="intro-details">
            {#if y > 200}
            <div class="intro-text mt-8 text-center uppercase flex flex-col text-[50px] max-[600px]:text-[25px] text-[#4876B6]">
                <p>#1 Travel Agency in Guyana</p>
            </div>
            {/if}
            
        </div>
    </div>

</div>
<div class="services shipping-image w-[100%] max-[600px]:h-[600px]">
    {#if y > 200}
         <div class="list-row my-5 grid grid-cols-5 max-[600px]:grid-cols-2 justify-center gap-5 mx-auto">
            <div class="service w-[220px] max-[600px]:w-[160px] h-64 max-[600px]:h-48 relative shadow rounded-[10px] mx-auto">
                <div class="w-[220px] max-[600px]:w-[160px] h-64 max-[600px]:h-48 left-0 top-0 absolute bg-white rounded-[10px] shadow flex flex-col items-center">
                    <enhanced:img class="w-[200px] max-[600px]:w-[140px] h-[200px] max-[600px]:h-[140px] object-cover rounded-[10px] mt-[7pt]" src="$lib/assets/newyork.webp" alt=""/>
                    <div class="w-[139px] h-[35px] text-center text-black text-2xl font-normal font-['Playfair Display'] leading-9">USA</div>
                </div>
            </div>
            <div class="service w-[220px] max-[600px]:w-[160px] h-64 max-[600px]:h-48 relative shadow rounded-[10px] mx-auto">
                <div class="w-[220px] max-[600px]:w-[160px] h-64 max-[600px]:h-48 left-0 top-0 absolute bg-white rounded-[10px] shadow flex flex-col items-center">
                    <enhanced:img class="w-[200px] max-[600px]:w-[140px] h-[200px] max-[600px]:h-[140px] object-cover rounded-[10px] mt-[7pt]" src="$lib/assets/trinidad.webp" alt=""/>
                    <div class="w-[139px] h-[35px] text-center text-black text-2xl font-normal font-['Playfair Display'] leading-9">Trinidad</div>
                </div>
            </div>
            <div class="service w-[220px] max-[600px]:w-[160px] h-64 max-[600px]:h-48 relative shadow rounded-[10px] mx-auto">
                <div class="w-[220px] max-[600px]:w-[160px] h-64 max-[600px]:h-48 left-0 top-0 absolute bg-white rounded-[10px] shadow flex flex-col items-center">
                    <enhanced:img class="w-[200px] max-[600px]:w-[140px] h-[200px] max-[600px]:h-[140px] object-cover rounded-[10px] mt-[7pt]" src="$lib/assets/barbados.webp" alt=""/>
                    <div class="w-[139px] h-[35px] text-center text-black text-2xl font-normal font-['Playfair Display'] leading-9">Barbados</div>
                </div>
            </div>
            <div class="service w-[220px] max-[600px]:w-[160px] h-64 max-[600px]:h-48 relative shadow rounded-[10px] mx-auto">
                <div class="w-[220px] max-[600px]:w-[160px] h-64 max-[600px]:h-48 left-0 top-0 absolute bg-white rounded-[10px] shadow flex flex-col items-center">
                    <enhanced:img class="w-[200px] max-[600px]:w-[140px] h-[200px] max-[600px]:h-[140px] object-cover rounded-[10px] mt-[7pt]" src="$lib/assets/panama.webp" alt=""/>
                    <div class="w-[139px] h-[35px] text-center text-black text-2xl font-normal font-['Playfair Display'] leading-9">Panama</div>
                </div>
            </div>
            <div class="service w-[220px] max-[600px]:w-[160px] h-64 max-[600px]:h-48 relative shadow rounded-[10px] mx-auto">
                <div class="w-[220px] max-[600px]:w-[160px] h-64 max-[600px]:h-48 left-0 top-0 absolute bg-white rounded-[10px] shadow flex flex-col items-center">
                    <enhanced:img class="w-[200px] max-[600px]:w-[140px] h-[200px] max-[600px]:h-[140px] object-cover rounded-[10px] mt-[7pt]" src="$lib/assets/newyork.webp" alt=""/>
                    <div class="w-[139px] h-[35px] text-center text-black text-2xl font-normal font-['Playfair Display'] leading-9">USA</div>
                </div>
            </div>
        </div>
    {/if}

    
</div>
<div class="entrance h-[70vh] mt-36 flex flex-row max-[600px]:flex-col justify-center items-center gap-10">
    {#if y > 800}
    <div class="col article w-[30%] max-[600px]:w-[90%]">
        <div class="article-title text-4xl max-[600px]:text-2xl sf_pro_bold uppercase">
            About the Travel Service
        </div>
        <div class="article-details mt-5 raleway-regular text-lg max-[600px]:text-base">
            <p>
                Muneshwers Travel Service was inherited from the Government of Guyana and was called GNG travel before changing its name ot Muneshwers travel service. It quickly attracted travel agents to work for us because we were paying a commission of 50%. We are the number 1 (#1) travel agency in Guyana for almost 3 decades. Muneshwers Limited still has a very visible presence in this challenging industry because we are known for quality work.
            </p>
        </div>
    </div>
    <div class="col article-image w-[45%] max-[600px]:w-[90%] h-[100%]">
        <enhanced:img src="$lib/assets/DJI_0364.webp" alt="Hero landing page" class="object-cover h-full w-full rounded-lg" />
    </div>
    {/if}
</div>
<div class="contact-section flex flex-col justify-center items-center h-[50vh] max-[600px]:h-[45vh]">
    {#if y > 1250}
        <div class="contact-header my-7 max-[600px]:my-5 p-10 bg-gray-200 w-[80%] max-[600px]:w-[95%] rounded-md">
            <div class="row flex flex-row gap-2 text-normal p-2">
                <div class="contact-title font-medium">Telephone:</div>
                <div class="contact-details text-gray-500">+592-226-1487 / +592-227-440 / +592-227-8570</div>
            </div>
            <div class="row flex flex-row gap-2 text-normal p-2">
                <div class="contact-title font-medium">Email:</div>
                <div class="contact-details text-gray-500">travel@muneshwers.com</div>
            </div>
        </div>
    {/if}
    
</div>
<Footer />

<svelte:window bind:scrollY={y} bind:innerWidth />