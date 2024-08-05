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
	import Joint from "../Joint.svelte";
	import Navigation from "../Navigation.svelte";
 
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
    <Navigation activePage="stores"/>
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

