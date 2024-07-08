<script>
    import mllogo from "../logo.png";
    import heroImage from "../hero-image.jpeg";
    import grid from "../grid.svg";
    import arrowright from "../arrowright.svg";
    import trucking from "../trucking.png";
    import shipping from "../new_shipping.png";
    import wharf from "../wharf.png";
</script>

<svelte:head>
	<title>Muneshwers Limited</title>
	<meta name="description" content="Muneshwers Limited" />
</svelte:head>
<div class="landing-top relative">
    <div class="scroll-watcher"></div>
    <div class="hero-image h-screen relative">
        <img src={heroImage} alt="Hero landing page" class="object-cover h-full w-full">
        <div class="hero-text uppercase text-white text-[86px] absolute bottom-16 left-16 w-9/12 leading-[120px]">
            <span>Solutions streamlined to fit</span>
            <span>your business and personal</span>
            <span>needs</span>
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
<div class="introduction-section flex flex-col justify-center">
    <div class="intro-header mt-7 justify-center relative">
        <img src={grid} alt="mesh grid" class="h-auto w-full">
        <div class="intro-details flex items-center absolute top-16 bottom-16 left-16 w-11/12 justify-between">
            <div class="intro-icon-box flex justify-center items-center">
                <div class="intro-icon"></div>
            </div>
            <div class="intro-details w-3/4">
                <div class="intro-text text-right uppercase flex text-[76px] text-[#4876B6]">
                    Discover which service is right for you!
                </div>
                <div class="intro-subtext text-right text-[#3D3938] text-[28px] raleway-light">
                    Choose from our shipping, transportation, travel service or explore our stores for your needs.
                </div>
            </div>
            
        </div>
    </div>
    <div class="services flex flex-row h-[683px] justify-between items-center mb-28">
        <div class="images-card relative w-1/2 h-5/6 ml-5">
            <div class="image-above top-0 left-20 absolute w-[357px] h-[363px] z-50">
                <img src={trucking} alt="Paragon Transportation" class="rounded-sm object-cover w-full h-full">
            </div>
            <div class="image-below top-52 right-28 absolute w-[508px] h-[320px]">
                <img src={shipping} alt="Muneshwers Shipping" class="rounded-sm object-cover w-full h-full">
            </div>
        </div>
        <div class="services-link w-1/2 relative">
            <div class="services-text flex flex-row items-center text-4xl gap-8 uppercase ml-32" >
                Explore Services
                <span>
                    <img src={arrowright} alt="Arrow Right">
                </span>
            </div>
            <div class="w-96 h-px left-[3px] top-[71px] absolute bg-slate-500 ml-32"></div>
        </div>
    </div>
</div>
<div class="parallax-container">
    <img src={wharf} alt="" class="w-screen wharf-image">
</div>

