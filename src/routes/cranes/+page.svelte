<script>

    import heroImage from "$lib/assets/GYS06897_1.webp";
    import brandLogo from "$lib/assets/cranes.webp";
	import Navigation from "../Navigation.svelte";
	import Footer from "../Footer.svelte";

</script>

<svelte:head>
	<title>Muneshwers Limited</title>
	<meta name="description" content="Muneshwers Limited" />
</svelte:head>
<div class="landing-top relative">
    <!-- <div class="scroll-watcher"></div> -->
    <div class="hero-image h-screen relative">
        <img src={heroImage} alt="Hero landing page" class="object-cover h-full w-full">
        <div class="image-cover h-full w-full opacity-30 bg-[#3A3A3A] absolute top-0"></div>
        <div class="hero-text uppercase text-white text-[70px] absolute bottom-20  left-16 w-9/12 leading-[120px] flex flex-col">
            <div class="individual-hero-text logo w-80 h-26">
                <img src={brandLogo} alt="Muneshwers Limited Logo" class="h-full w-full">
            </div>
            <div>
                <p class="individual-hero-text">Cranes Guyana</p>
            </div>
            <div>
                <p class="individual-hero-text">Inc.</p>
            </div>
        </div>
    </div>
    <Navigation activePage="jvs"/>
</div>
<div class="introduction-section flex flex-col justify-center">
    <div class="intro-header mt-7 justify-center relative">
        Introduction
    </div>
</div>
<Footer />