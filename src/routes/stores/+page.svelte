<script>
    import mllogo from "../../logo.png";
    import heroImage from "../../DJI_0374.jpg";
    import grid from "../../grid.svg";
    import brandLogo from "../../brand-logo.png";
    import textLogo from "../../text-logo.png";
    import facebookIcon from "../../icons8-facebook.svg";
    import instagramIcon from "../../icons8-instagram.svg";
    import linkedinIcon from "../../icons8-linkedin.svg";
    import tiktokIcon from "../../icons8-tiktok.svg";
 
    $: jvToggle = false;
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
            <div>
                <p class="individual-hero-text">Muneshwers</p>
            </div>
            <div>
                <p class="individual-hero-text">Home Goods</p>
            </div>
            <div>
                <p class="individual-hero-text">Events</p>
            </div>
        </div>
    </div>
    <div class="navigationBar z-50 w-full p-5 fixed top-0 left-0 right-0 flex flex-row items-center justify-between">
        <div class="company-info flex flex-row items-center gap-2">
            <div class="logo w-16 h-16">
                <img src={mllogo} alt="Muneshwers Limited Logo" class="h-full w-full">
            </div>
            <div class="company-name the-seasons-light text-white text-[24px]">
                Mun<span class="the-seasons-italic">e</span>shw<span class="the-seasons-italic">e</span>rs Limit<span class="the-seasons-italic">e</span>d
            </div>
        </div>
        <div class="menu-items flex flex-row text-white gap-6 text-[20px] mr-5">
            
            <a href="/">
                <div class="item">
                    Home
                </div>
            </a>
            <a href="/stores">
                <div class="item-active">
                    Stores
                </div>
            </a>
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div class="dropdown relative" on:mouseenter={() => {jvToggle = true}} on:mouseleave={() => {jvToggle = false}} on:click={() => jvToggle=true}>
                <div class="item">
                    Joint Ventures 
                </div>
                {#if jvToggle}
                    <div class="js-list p-5 bg-slate-50 opacity-75 top-19 right-[360px] w-[200px] fixed rounded-lg text-black text-sm poppins-regular">
                    <a href="/transport">
                        <div class="item-option p-1 cursor-pointer mt-1">
                            Paragon Transport
                        </div>
                    </a>
                    <a href="https://www.gysbi.gy/">
                        <div class="item-option p-1 cursor-pointer mt-3 ">
                            Guyana Shore Base Inc
                        </div>
                    </a>
                    <a href="/barges">
                        <div class="item-option p-1 cursor-pointer mt-3 ">
                            Barge Solutions Guyana Inc
                        </div>
                    </a>
                    <a href="/harbourtugs">
                        <div class="item-option p-1 cursor-pointer mt-3 ">
                            Harbour Tugs Guyana Inc
                        </div>
                    </a>
                    <a href="/cranes">
                        <div class="item-option p-1 cursor-pointer mt-3 ">
                            Cranes Guyana Inc
                        </div>
                    </a>
                    <a href="/construction">
                        <div class="item-option p-1 cursor-pointer mt-3 ">
                            Paragon Construction
                        </div>
                    </a>
                    
                </div>
                {/if}
                
            </div>
            <a href="/careers">
                <div class="item">
                    Careers
                </div>
            </a>
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
<div class="footer h-[450px] bg-[#EDEBE5]">
    <div class="footer-top flex flex-row gap-4 p-10">
        <div class="site-info w-1/5">
            <div class="site-name flex flex-row w-full">
                <img src={brandLogo} alt="Muneshwers Shipping" class="object-cover w-[150px] h-[100px]">
                <img src={textLogo} alt="Muneshwers Shipping" class="object-cover w-[200px] h-[100px]">
            </div>
            <div class="site-tagline playfair-display-regular text-[18px] ml-4 mt-2">
                Offering solutions, not excuses...
            </div>
            <div class="social-media h-2/3 w-full flex flex-col gap-4 mt-7 raleway-light" >
                <a href="https://www.facebook.com/profile.php?id=100087564355386" target="_blank" class="social-link flex flex-row items-center gap-2">
                    <img src={facebookIcon} alt="Muneshwers Shipping" class="object-cover w-[30px] h-[30px]">
                    <div class="social-name">Muneshwers Shipping</div>
                </a>
                <a href="https://www.instagram.com/muneshwersshipping/" target="_blank" class="social-link flex flex-row items-center gap-2">
                    <img src={instagramIcon} alt="Muneshwers Shipping" class="object-cover w-[30px] h-[30px]">
                    <div class="social-name">@muneshwersshipping</div>
                </a>
                <a href="https://www.tiktok.com/@muneshwersshipping/" target="_blank" class="social-link flex flex-row items-center gap-2 ">
                    <img src={tiktokIcon} alt="Muneshwers Shipping" class="object-cover w-[30px] h-[30px]">
                    <div class="social-name">@muneshwersshipping</div>
                </a>
                <a href="https://www.linkedin.com/company/muneshwers-limited/" target="_blank" class="social-link flex flex-row items-center gap-2">
                    <img src={linkedinIcon} alt="Muneshwers Shipping" class="object-cover w-[30px] h-[30px]">
                    <div class="social-name">Muneshwers Limited</div>
                </a>
            </div>
        </div>
        <div class="company-info">
            <div class="footer-section w-2/3">
                <div class="footer-section-title poppins-medium text-2xl">
                    Address
                </div>
                <div class="footer-section-info poppins-light mt-4">
                    45-47 Water Street, Georgetown, Guyana
                </div>
            </div>
            <div class="footer-section mt-12 w-2/3">
                <div class="footer-section-title poppins-medium text-2xl">
                    Contact Info
                </div>
                <div class="footer-section-info poppins-light mt-4 flex flex-col gap-4">
                    <div class="info-number">
                        +592-227-7417/18
                    </div>
                    <div class="info-email">
                        info@muneshwers.com
                    </div>
                </div>
            </div>
        </div>
        
    </div>
    <div class="footer-bottom"></div>
</div>

