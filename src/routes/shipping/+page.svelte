<script>
    import heroImage from "$lib/assets/image9.webp";
    import brandLogo from "../../brand-logo.png";
	import Navigation from "../Navigation.svelte";
	import Footer from "../Footer.svelte";

</script>

<svelte:head>
	<title>Muneshwers Limited</title>
	<meta name="description" content="Muneshwers Limited" />
</svelte:head>
<div class="landing-top relative">
    <!-- <div class="scroll-watcher"></div> -->
    <div class="hero-image h-[50vh] relative">
        <enhanced:img src="$lib/assets/shipping2.webp" alt="Hero landing page" class="object-cover h-full w-full" />
        <div class="image-cover h-full w-full opacity-30 bg-[#3A3A3A] absolute top-0"></div>
        <div class="hero-text uppercase text-white text-[60px] absolute bottom-20  left-16 w-9/12 leading-[120px] flex flex-col">
            <div class="flex flex-row items-center gap-6">
                <div class="individual-hero-text logo w-36 h-36">
                    <img src={brandLogo} alt="Muneshwers Limited Logo" class="h-full w-full">
                </div>
                <p class="individual-hero-text">Shipping Service</p>
            </div>
        </div>
    </div>
    <Navigation activePage="services"/>
</div>
<div class="introduction-section flex flex-col justify-center">
    <div class="intro-header my-12 justify-center relative flex h-[143px]">
        <div class="intro-details">
            <div class="intro-text mt-8 text-center uppercase flex flex-col text-[60px] text-[#4876B6]">
                <p>Discover which service is right for you</p>
            </div>
            <div class="intro-subtext text-center text-[#3D3938] text-[28px] raleway-light flex flex-col items-center">
                <p>Choose from our shipping, transportation, travel service or explore our stores for your needs.</p>
            </div>
        </div>
    </div>

</div>
<Footer />

