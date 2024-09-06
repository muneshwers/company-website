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
        <enhanced:img src="$lib/assets/DJI_0364.webp" alt="Hero landing page" class="object-cover h-full w-full" />
        <div class="image-cover h-full w-full opacity-30 bg-[#3A3A3A] absolute top-0"></div>
        <div class="hero-text uppercase text-white absolute bottom-20  left-16 w-9/12 leading-[120px] flex flex-col">
            <div class="individual-hero-text logo w-36 h-36">
                <img src={brandLogo} alt="Muneshwers Limited Logo" class="h-full w-full">
            </div>
            <div>
                <p class="individual-hero-text text-[60px]">About</p>
            </div>
            <div>
                <p class="individual-hero-text text-[60px]">Muneshwers</p>
            </div>
        </div>
    </div>
    <Navigation activePage="about"/>
</div>
<div class="introduction-section flex flex-col justify-center items-center">
    <div class="shipping-header mt-5 justify-center relative flex h-[143px]">
        <div class="intro-details">
            {#if y > 200}
            <div class="intro-text mt-8 text-center uppercase flex flex-col text-[50px] text-[#4876B6]">
                <p>Our Origin</p>
            </div>
            {/if}
            
        </div>
    </div>
 
</div>
{#if y > 300}
    <div class="slide slide-left h-[50vh] mb-36 mt-10 flex justify-center items-center gap-36">
        <div class="col article-section w-[30%]">
            <div class="article-details mt-5 raleway-regular text-lg">
                <p>
                    Almost a hundred years ago, a young cane cutter working the fields in the countryside of Guyana injured his back and had to seek another trade to support his wife and children, He became a tailor and later, started to trade in dry goods. From that, he branched off into hardware items and in 1950, moved his family to the capital city of Georgetown. From here, the origin of Muneshwers Limited (ML) begins.
                </p>
            </div>
        </div>
        <div class="col article-image-section w-[20%]  h-[100%] flex flex-col items-center justify-center">
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
{#if y > 700}
    <div class="slide slide-right h-[50vh] my-36 flex justify-center items-center gap-36">
        <div class="col article-image-section w-[20%]  h-[100%] flex flex-col items-center relative justify-center">
            <div class="article-image-header ">
                <enhanced:img src="$lib/assets/admin-ajax.webp" alt="Hero landing page" class="object-cover h-[300px] w-[250px] rounded-lg absolute top-0 left-0" />
            </div>
            <div class="article-image-header">
                <enhanced:img src="$lib/assets/FOTOS-ANTIGUAS-4.webp" alt="Hero landing page" class="object-cover h-[300px] w-[250px] rounded-lg absolute top-10 " />
            </div>
            <div class="article-image-caption flex flex-col items-center mt-10 absolute bottom-[-40px] left-[45px] w-[300px]">
                <p>First store in Georgetown, and Second</p>
                <p>store on Water Street</p>
            </div>
        </div>
        <div class="col article-section w-[30%]">
            <div class="article-details mt-5 raleway-regular text-lg">
                <p>
                    In the 1950s and 60s, ML established itself as one of the leading importers, wholesalers and retailers of builders’ hardware in the country. But during the 70s, the country took a downward turn and the company suspended trading activities in 1978; only returning to Guyana when the economy opened up once more in the 1990s.
                </p>
            </div>
        </div>
        
    </div>
{/if}
{#if y > 1150}
    <div class="slide slide-left h-[50vh] mb-36 flex justify-center items-center gap-36">
        <div class="col article-section w-[30%]">
            <div class="article-details mt-5 raleway-regular text-lg">
                <p>
                    The new head of the company, Amarnath, son of the founder, successfully bid for a government owned property that comprised of a hardware store and a port facility and Muneshwers Limited was reborn.
                </p>
                <p class="mt-5">
                    The shipping department, managed by Robin, grandson of the founder, and representing the third generation of the company experienced rapid growth in its first four years but then suffered some severe setbacks as shipping lines left for other facilities. In 2003, the company was razed to the ground by a fire and had to restart again. Another store was activated to keep the business afloat and that became later known as store 2, now Guyana’s #1 Events Store.
                </p>
            </div>
        </div>
        <div class="col article-image-section w-[20%]  h-[100%] flex flex-col items-center justify-center">
            <div class="article-image-header">
                <enhanced:img src="$lib/assets/DOS-REUNION.webp" alt="Hero landing page" class="object-cover h-full w-full rounded-lg" />
            </div>
            <div class="article-image-caption flex flex-col items-center mt-2">
                <p>Somwaru Muneshwer and his only son,</p>
                <p class="text-center">Amarnath, the current head of the company</p>
            </div>
        </div>
    </div>
{/if}
{#if y > 1600}
    <div class="slide h-[30vh] mb-36 flex justify-center items-center gap-36">
        <div class="col slide-right article-image-section w-[20%] h-[100%] justify-center">
            <div class="article-image-header">
                <enhanced:img src="$lib/assets/FOTO-INCENDIO.webp" alt="Hero landing page" class="object-contain h-full w-full rounded-lg" />
            </div>
            <div class="article-image-caption flex flex-col items-center mt-2">
                <p>Shot of the building on fire in 2003</p>
            </div>
        </div>
        <div class="col slide-left  article-image-section w-[20%] h-[100%] flex flex-col items-center justify-center">
            <div class="article-image-header">
                <enhanced:img src="$lib/assets/PUERTO.webp" alt="Hero landing page" class="object-contain h-full w-full rounded-lg" />
            </div>
            <div class="article-image-caption flex flex-col items-center mt-2">
                <p>Port facility on Water Street in 1991</p>
            </div>
        </div>
    </div>
{/if}
{#if y > 2100}
    <div class="slide slide-left h-[50vh] mb-36 flex justify-center items-center gap-36">
        <div class="col article-section w-[30%]">
            <div class="article-details raleway-regular text-lg">
                <p>
                    In 2013, the company acquired a 30 acre facility on the outskirts of the capital city to accommodate its expanding shipping business. This was a monumental entrepreneurial risk, given the astronimical sum the compnay had to pay and the fact that the site was largely an abandoned timber facility, but with the discovery of oil in Guyana, ML develoepd the space to be a shore base facility.
                </p>
            </div>
        </div>
        <div class="col article-image-section w-[20%]  h-[100%] flex flex-col items-center justify-center">
            <div class="article-image-header">
                <enhanced:img src="$lib/assets/Muneshwers.webp" alt="Hero landing page" class="object-cover h-full w-full rounded-lg" />
            </div>
            <div class="article-image-caption flex flex-col items-center">
                <p>Our present berth</p>
            </div>
        </div>
    </div>
{/if}



<div class="push-up h-[30vh]"></div>
<Footer />

<svelte:window bind:scrollY={y} />
