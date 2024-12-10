<script>

    import heroImage from "$lib/assets/GYS06897_1.webp";
    import grid from "$lib/assets/grid.svg";
    import brandLogo from "$lib/assets/cranes.webp";
	import Navigation from "../Navigation.svelte";
	import Footer from "../Footer.svelte";

    let innerWidth;
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
    <Navigation activePage="jvs" {innerWidth} />
</div>
<div class="introduction-section flex flex-col justify-center">
    <div class="intro-header mt-7 justify-center relative">
        <img src={grid} alt="mesh grid" class="h-auto w-full">
        <div class="intro-details flex items-center absolute top-16 bottom-16 left-16 w-11/12 justify-between">
            <div class="construction-icon-box flex justify-center items-center">
                <div class="construction-icon"></div>
            </div>
            <div class="intro-details w-3/4">
                <div class="intro-text text-right uppercase flex flex-col text-[76px] text-[#4876B6]">
                    <div class="text-right flex flex-row-reverse">
                        <p class="intro-text-indiv text-right">Under Construction</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<Footer />

<svelte:window bind:innerWidth />