<script>
    import mllogo from "../logo.png";
    import heroImage from "../hero-image.jpeg";
    import grid from "../grid.svg";
</script>

<svelte:head>
	<title>Muneshwers Limited</title>
	<meta name="description" content="Muneshwers Limited" />
</svelte:head>
<div class="landing-top relative">
    <div class="hero-image h-screen relative">
        <img src={heroImage} alt="Hero landing page" class="object-cover h-full w-full">
        <div class="hero-text uppercase text-white text-[86px] absolute bottom-16 left-16 w-9/12 leading-[120px]">
            Solutions streamlined to fit your business and personal needs
        </div>
    </div>
    <div class="navigationBar w-full p-5 fixed top-0 left-0 right-0 flex flex-row items-center justify-between">
        <div class="company-info flex flex-row items-center gap-2">
            <div class="logo w-16 h-16">
                <img src={mllogo} alt="Muneshwers Limited Logo" class="h-full w-full">
            </div>
            <div class="company-name the-seasons-light text-white text-[24px]">
                Mun<span class="the-seasons-italic">e</span>shw<span class="the-seasons-italic">e</span>rs Limit<span class="the-seasons-italic">e</span>d
            </div>
        </div>
        <div class="menu-items flex flex-row text-white gap-5 text-[20px] mr-5">
            <div class="item-active">
                Home
            </div>
            <div class="item">
                Stores 
            </div>
            <div class="item">
                Careers
            </div>
            <div class="item">
                Services
            </div>
            <div class="item">
                About
            </div>
            <div class="item">
                Contact
            </div>
        </div>
    </div>
</div>
<div class="introduction-section flex justify-center">
    <div class="intro-header mt-7 justify-center">
        <img src={grid} alt="mesh grid" class="h-auto w-full">
        <div class="icon"></div>
        <div class="intro-text">
            Discover which service is right for you!
        </div>
    </div>
    
</div>

