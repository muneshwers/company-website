<script>
// @ts-nocheck
    import IntersectionObserver from "svelte-intersection-observer";
    import brandLogo from "$lib/assets/brand-logo.webp";
    import gybiImage from "$lib/assets/DJI_0353.jpg";
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
    let innerWidth;

    let ourOriginHeader;
    let ourOrigin;
    let ninetiesHeader;
    let firstStore;
    let newHead;
    let twentyTensHeader;
    let portFacility;
    let shotOfBuilding;
    let nowHeader;
    let ourPresentBerth;
    let oilAndGasHeader;
    let gysbiFacility;

</script>

<svelte:head>
	<title>Muneshwers Limited</title>
	<meta name="description" content="Muneshwers Limited" />
</svelte:head>
<div class="landing-top relative">
    <!-- <div class="scroll-watcher"></div> -->
    <div class="hero-image h-[100vh] relative">
        <enhanced:img src="$lib/assets/DJI_0364.webp" alt="Hero landing page" class="object-cover h-full w-full" />
        <div class="image-cover h-full w-full opacity-30 bg-[#3A3A3A] absolute top-0"></div>
        <div class="hero-text uppercase text-white absolute bottom-20 text-[60px] max-[600px]:text-[50px] max-[600px]:text-[40px] left-16 max-[600px]:left-5 w-9/12 leading-[120px] flex flex-col">
            <div class="individual-hero-text logo w-36 h-36">
                <img src={brandLogo} alt="Muneshwers Limited Logo" class="h-full w-full">
            </div>
            <div>
                <p class="individual-hero-text">About</p>
            </div>
            <div>
                <p class="individual-hero-text">Muneshwers</p>
            </div>
        </div>
    </div>
    <Navigation activePage="about" {innerWidth} />
</div>
<div class="introduction-section flex flex-col justify-center items-center">
    <div class="shipping-header mt-5 justify-center relative flex h-[143px] max-[600px]:h-[15vh]">
        <IntersectionObserver element={ourOriginHeader} let:intersecting>
        <div class="intro-details" bind:this={ourOriginHeader}>
            {#if intersecting}
            <div class="history-text playfair-display-regular mt-8 text-center flex flex-col text-[50px] text-[#000000]">
                <p>Our Origin</p>
            </div>
            {/if}
            
        </div>
        </IntersectionObserver>
        
    </div>
 
</div>
<div bind:this={ourOrigin} class="h-[50vh] max-[600px]:h-[100vh]">
    <IntersectionObserver element={ourOrigin} let:intersecting>
        {#if intersecting}
            <div class="slide slide-left h-[50vh] max-[600px]:h-[100vh] mt-10 max-[600px]:mt-3 flex max-[600px]:flex-col justify-center items-center gap-36  max-[600px]:gap-10">
                <div class="col article-section w-[30%] max-[600px]:w-[80%]">
                    <div class="article-details mt-5 raleway-regular text-lg  max-[600px]:text-sm">
                        <p>
                            In the 1920s, a young cane cutter working the fields in the countryside of Guyana injured his back and had to seek another trade to support his wife and children. 
                            He became a tailor and later, started to trade in dry goods. From that, he branched off into hardware items and in 1950, moved his family from Port Mourant, Berbice, to the capital city of Georgetown. 
                            From here, the origin of Muneshwers Limited (ML) begins.
                        </p>
                    </div>
                </div>
                <div class="col article-image-section w-[20%] max-[600px]:w-[80%] h-[100%] flex flex-col items-center justify-center">
                    <div class="article-image-header">
                        <enhanced:img src="$lib/assets/FOTO-ANTIGUA-2.webp" alt="Hero landing page" class="object-cover h-full w-full rounded-lg" />
                    </div>
                    <div class="article-image-caption flex flex-col items-center mt-2">
                        <p>Founder of Muneshwers Ltd</p>
                        <p>Somwaru Muneshwer</p>
                    </div>
                </div>
            </div>
        {/if}
    </IntersectionObserver>

</div>

<div class="introduction-section flex flex-col justify-center items-center">
    <div class="shipping-header mt-5 justify-center relative flex h-[143px] max-[600px]:h-[15vh]">
        <IntersectionObserver element={ninetiesHeader} let:intersecting>
            <div class="intro-details" bind:this={ninetiesHeader}>
                {#if intersecting}
                <div class="history-text playfair-display-regular mt-8 text-center flex flex-col text-[50px] max-[600px]:text-[30px] text-[#000000]">
                    <p>60's - 90's</p>
                </div>
                {/if}
            </div>
        </IntersectionObserver>
        
    </div>
</div>
<div bind:this={firstStore} class="h-[50vh] max-[600px]:h-[65vh]">
    <IntersectionObserver element={firstStore} let:intersecting>
        {#if intersecting}
            <div class="slide slide-right h-[50vh] max-[600px]:h-[65vh] mb-36 max-[600px]:mb-5 flex max-[600px]:flex-col justify-center items-center gap-36 max-[600px]:gap-9">
                <div class="col article-image-section w-[20%] max-[600px]:w-[90%] h-[100%] max-[600px]:h-[60vh] flex flex-col items-center relative justify-center">
                    <div class="article-image-header ">
                        <enhanced:img src="$lib/assets/admin-ajax.webp" alt="building 1" class="object-cover h-[300px] max-[600px]:h-[200px] w-[250px] rounded-lg absolute top-0 left-0" />
                    </div>
                    <div class="article-image-header">
                        <enhanced:img src="$lib/assets/FOTOS-ANTIGUAS-4.webp" alt="building 2" class="object-cover h-[300px] max-[600px]:h-[200px] w-[250px] rounded-lg absolute top-10 max-[600px]:top-24 max-[600px]:right-0" />
                    </div>
                    <div class="article-image-caption flex flex-col items-center mt-5 max-[1415px]:mt-10 max-[600px]:mt-1 absolute bottom-[-40px] max-[1415px]:bottom-[-100px] max-[600px]:bottom-1 max-[390px]:bottom-[-10%] left-[45px] max-[600px]:left-8 w-[300px]">
                        <p>First store in Georgetown, and Second</p>
                        <p>store on Water Street</p>
                    </div>
                </div>
                <div class="col article-section w-[30%] max-[1415px]:w-[80%]">
                    <div class="article-details mt-5 max-[1415px]:mt-24 max-[600px]:mt-1 raleway-regular text-lg max-[600px]:text-sm">
                        <p>
                            In the 1950s and 60s, ML established itself as one of the leading importers, wholesalers and retailers of builders’ hardware in the country. 
                            But during the 70s, the country took a downward turn and the company suspended trading activities in 1978; only returning to Guyana when the economy opened up once more in the 1990s.
                        </p>
                    </div>
                </div>
                
            </div>
        {/if}
    </IntersectionObserver>

</div>

<div bind:this={newHead} class="h-[50vh] max-[600px]:h-[80vh]">
    <IntersectionObserver element={newHead} let:intersecting>
        {#if intersecting}
            <div class="slide slide-left h-[50vh] max-[600px]:h-[80vh] flex max-[600px]:flex-col justify-center items-center gap-36 max-[600px]:gap-9">
                <div class="col article-section w-[30%] max-[600px]:w-[80%]">
                    <div class="article-details mt-5 raleway-regular text-lg max-[600px]:text-sm">
                        <p>
                            The new head of the company, Amarnath, son of the founder, successfully bid for a government owned property 
                            that comprised of a hardware store and a port facility and Muneshwers Limited was reborn.
                        </p>
                    </div>
                </div>
                <div class="col article-image-section w-[20%] max-[600px]:w-[80%] h-[100%] max-[600px]:h-[50%] flex flex-col items-center justify-center">
                    <div class="article-image-header">
                        <enhanced:img src="$lib/assets/DOS-REUNION.webp" alt="Hero landing page" class="object-cover h-full w-full rounded-lg" />
                    </div>
                    <div class="article-image-caption flex flex-col items-center mt-2 max-[600px]:text-sm">
                        <p>Somwaru Muneshwer and his only son,</p>
                        <p class="text-center">Amarnath, the current head of the company</p>
                    </div>
                </div>
            </div>
        {/if}
    </IntersectionObserver>

</div>

<div class="introduction-section flex flex-col justify-center items-center">
    <div class="shipping-header mt-5 justify-center relative flex h-[143px] max-[600px]:h-[15vh]">
        <IntersectionObserver element={twentyTensHeader} let:intersecting>
            <div class="intro-details" bind:this={twentyTensHeader}>
                {#if intersecting}
                <div class="history-text playfair-display-regular mt-8 text-center flex flex-col text-[50px] text-[#000000]">
                    <p>2000's - 2010's</p>
                </div>
                {/if}
            </div>
        </IntersectionObserver>
        
    </div>
</div>
<div bind:this={portFacility} class="h-[50vh] max-[600px]:h-[60vh]">
    <IntersectionObserver element={portFacility} let:intersecting>
        {#if intersecting}
            <div class="slide slide-right h-[50vh] max-[600px]:h-[60vh] flex max-[600px]:flex-col justify-center items-center gap-36 max-[600px]:gap-10">
                <div class="col article-image-section w-[20%] max-[600px]:w-[80%] h-[100%] flex flex-col items-center relative justify-center">
                    <div class="article-image-header">
                        <enhanced:img src="$lib/assets/PUERTO.webp" alt="Hero landing page" class="object-cover h-full w-full rounded-lg" />
                    </div>
                    <div class="article-image-caption flex flex-col items-center mt-2">
                        <p>Port facility on Water Street in 1991</p>
                    </div>
                </div>
                <div class="col article-section w-[30%] max-[600px]:w-[80%]">
                    <div class="article-details mt-5 raleway-regular text-lg max-[600px]:text-sm">
                        <p>
                            The shipping department, managed by Robin, grandson of the founder, and representing the third generation of the company 
                            experienced rapid growth in its first four years but then suffered some severe setbacks
                            as shipping lines left for other facilities.
                        </p>
                    </div>
                </div>
                
            </div>
        {/if}
    </IntersectionObserver>

</div>

<div bind:this={shotOfBuilding} class="h-[50vh] max-[600px]:h-[80vh]">
    <IntersectionObserver element={shotOfBuilding} let:intersecting>
        {#if intersecting}
            <div class="slide slide-left h-[60vh] max-[600px]:h-[80vh] flex max-[600px]:flex-col justify-center items-center gap-36">
                <div class="col article-section w-[30%] max-[600px]:w-[80%]">
                    <div class="article-details mt-5 raleway-regular text-lg max-[600px]:text-sm">
                        <p>
                            In 2003, the company was razed to the ground by a fire and had to restart again. 
                            Another store was activated to keep the business afloat and that became later known as Guyana’s #1 Events Store.
                        </p>
                    </div>
                </div>
                <div class="col article-image-section w-[20%] max-[600px]:w-[80%] h-[100%] max-[600px]:h-[20vh] flex flex-col items-center justify-center">
                    <div class="article-image-header">
                        <enhanced:img src="$lib/assets/FOTO-INCENDIO.webp" alt="Hero landing page" class="object-cover h-full w-full rounded-lg" />
                    </div>
                    <div class="article-image-caption flex flex-col items-center mt-2">
                        <p>Shot of the building on fire in 2003</p>
                    </div>
                </div>
            </div>
        {/if}
    </IntersectionObserver>

</div>

<div class="introduction-section flex max-[600px]:flex-col justify-center items-center max-[600px]:h-[15vh]">
    <div class="shipping-header mb-5 justify-center relative flex">
        <IntersectionObserver element={nowHeader} let:intersecting>
            <div class="intro-details" bind:this={nowHeader}>
                {#if y > 2500}
                <div class="history-text playfair-display-regular text-center flex flex-col text-[50px] text-[#000000]">
                    <p>2010's - Now</p>
                </div>
                {/if}
            </div>
        </IntersectionObserver>

    </div>
</div>
<div bind:this={ourPresentBerth} class="h-[50vh] max-[600px]:h-[100vh]">
    <IntersectionObserver element={ourPresentBerth} let:intersecting>
        {#if intersecting}
            <div class="slide slide-right h-[50vh] max-[600px]:h-[100vh] flex max-[600px]:flex-col justify-center items-center gap-36">
                <div class="col article-image-section w-[20%] max-[600px]:w-[80%] h-[100%] max-[600px]:h-[30vh] flex flex-col items-center justify-center">
                    <div class="article-image-header">
                        <enhanced:img src="$lib/assets/Muneshwers.webp" alt="Hero landing page" class="object-cover h-full w-full rounded-lg" />
                    </div>
                    <div class="article-image-caption flex flex-col items-center">
                        <p>Our present berth</p>
                    </div>
                </div>
                <div class="col article-section w-[30%] max-[600px]:w-[80%]">
                    <div class="article-details raleway-regular text-lg max-[600px]:text-sm">
                        <p>
                            In 2013, the company acquired a 30 acre facility in Georgetown, the capital city. 
                            The initial vision was to accommodate the expanding shipping business. However, with the recent discovery of oil, 
                            Muneshwers pivoted to building the facility to accomodate Exxon as their premier Shore Base in Guyana. 
                            This was a monumental entrepreneurial risk. The company paid an astronomical sum for the 30 acres 
                            and competition was tough within and out of the country. 
                            
                        </p>
                    </div>
                </div>
                
            </div>
        {/if}
    </IntersectionObserver>

</div>

<div class="introduction-section flex flex-col justify-center items-center max-[600px]:h-[15vh]">
    <div class="shipping-header mt-10 justify-center relative flex">
        <IntersectionObserver element={oilAndGasHeader} let:intersecting>
        <div class="intro-details" bind:this={oilAndGasHeader}>
            {#if intersecting}
            <div class="history-text playfair-display-regular text-center flex flex-col text-[50px] text-[#000000]">
                <p>Oil and Gas</p>
            </div>
            {/if}
        </div>
        </IntersectionObserver>

    </div>
</div>
<div bind:this={gysbiFacility} class="h-[70vh] max-[600px]:h-[80vh]">
    <IntersectionObserver element={gysbiFacility} let:intersecting>
    {#if intersecting}
        <div class="slide slide-left h-[70vh] max-[600px]:h-[80vh] mb-36 max-[600px]:mb-16 mt-24 flex max-[600px]:flex-col justify-center items-center gap-16">
            <div class="col article-section w-[30%] max-[600px]:w-[80%]">
                <div class="article-details raleway-regular text-lg max-[600px]:text-sm">
                    <p>
                        But, because of great partnerships, a bigger facility, and experience, GYSBI, a Muneshwers Joint Venture into Oil and Gas, 
                        emerged with a 20 year contract from Exxon. And now it stands as the largest local oil and gas company in Guyana.
                    </p>
                    <p class="mt-5">
                        Presently, Muneshwers Limited is #1 in Oil and Gas, Events, Travel Service and is the fastest growing company in shipping. 
                        With our 8 joint ventures, we are leaders in heavy lift transportation, barge solutions and are currently on a new frontier into construction.
                    </p>
                </div>
            </div>
            <div class="col article-image-section w-[45%] max-[600px]:w-[80%] h-[100%] flex flex-col items-center justify-center">
                <div class="article-image-header">
                    <img src={gybiImage} alt="Hero landing page" class="object-contain h-full w-full rounded-lg" />
                </div>
                <div class="article-image-caption flex flex-col items-center">
                    <p>GYSBI Facility, Houston</p>
                </div>
            </div>
        </div>
    {/if}
    </IntersectionObserver>

</div>


{#if innerWidth > 600}
    <div class="push-up h-[30vh]"></div>
{/if}

<Footer />

<svelte:window bind:scrollY={y} bind:innerWidth />
