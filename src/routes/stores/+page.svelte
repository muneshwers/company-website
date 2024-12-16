<script>
    import heroImage from "$lib/assets/DJI_0374.webp";
    import grid from "$lib/assets/grid.svg";
    import construction from "$lib/assets/construction.png";
	import Navigation from "../Navigation.svelte";
    import Footer from "../Footer.svelte";
 
    $: jvToggle = false;

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
        <div class="hero-text uppercase text-white text-[70px] max-[1415px]:text-[50px] max-[600px]:text-[40px] absolute bottom-20 left-16 max-[1415px]:left-5 w-9/12 leading-[120px] flex flex-col">
            <div>
                <p class="individual-hero-text">Muneshwers</p>
            </div>
            <div>
                <p class="individual-hero-text">Hardware</p>
            </div>
        </div>
    </div>
    <Navigation activePage="stores" {innerWidth} />
</div>
<div class="introduction-section flex flex-col justify-center">
    <div class="intro-header mt-7 max-[600px]:mt-1 max-[600px]:mb-7 justify-center relative">
        <img src={grid} alt="mesh grid" class="h-auto max-[600px]:h-full w-full">
        <div class="intro-details flex items-center absolute top-16 max-[600px]:top-5 bottom-16 left-16 max-[600px]:left-8 w-11/12 justify-between">
            <div class="construction-icon-box flex justify-center items-center w-12 h-12">
                <img src={construction} alt="Hero landing page" class="object-cover h-5 w-5">
                <!-- <div class="construction-icon"></div> -->
            </div>
            <div class="intro-details w-3/4">
                <div class="intro-text text-right uppercase flex flex-col text-[76px] max-[1415px]:text-[50px] max-[600px]:text-[20px] text-[#4876B6]">
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