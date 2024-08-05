<script>
    import mllogo from "../logo.png";
    import heroImage from "../hero-image.jpeg";
    import grid from "../grid.svg";
    import paragonTrasport from "../paragon-transport.png";
    import gysbi from "../gysbi.png";
    import cranes from "../cranes.png";
    import barges from "../barges.png";
    import harbourtugs from "../harbourtugs.png";
    import brandLogo from "../brand-logo.png";
    import textLogo from "../text-logo.png";
    import facebookIcon from "../icons8-facebook.svg";
    import instagramIcon from "../icons8-instagram.svg";
    import linkedinIcon from "../icons8-linkedin.svg";
    import tiktokIcon from "../icons8-tiktok.svg";
    import parallaxShipping from "../parallaxshipping.jpg";
    import staffOne from "../worker1.jpg";
    import staffTwo from "../worker2.jpg";
    import shippingService from "../GYS05795.jpg"
    import travelService from "../travel.jpg";
    import store1Service from "../store1.jpg";
    import store2Service from "../events1.jpg";
    import { spring } from 'svelte/motion';
	import Joint from "./Joint.svelte";
	import Services from "./Services.svelte";
	import Navigation from "./Navigation.svelte";

    $: jvToggle = false;
    $: serviceToggle = false;


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
            <div class="individual-hero-text logo w-36 h-36">
                <img src={brandLogo} alt="Muneshwers Limited Logo" class="h-full w-full">
            </div>
            <div>
                <p class="individual-hero-text">Solutions streamlined to fit</p>
            </div>
            <div>
                <p class="individual-hero-text">your business and personal</p>
            </div>
            <div>
                <p class="individual-hero-text">needs</p>
            </div>
        </div>
        <div class="scroll-down flex flex-col absolute bottom-10 right-14">
                <div class="w-[58px] h-[58px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="58" height="58" viewBox="0 0 58 58" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 16.9167L29 31.4167L43.5 16.9167L48.3334 21.75L29 41.0833L9.66669 21.75L14.5 16.9167Z" fill="white"/>
                    </svg>
                </div>
                <div class="w-[58px] h-[58px] mt-[-30px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="58" height="58" viewBox="0 0 58 58" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 16.9167L29 31.4167L43.5 16.9167L48.3334 21.75L29 41.0833L9.66669 21.75L14.5 16.9167Z" fill="white"/>
                    </svg>
                </div>
                <div class="w-[58px] h-[58px]  mt-[-30px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="58" height="58" viewBox="0 0 58 58" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 16.9167L29 31.4167L43.5 16.9167L48.3334 21.75L29 41.0833L9.66669 21.75L14.5 16.9167Z" fill="white"/>
                    </svg>
                </div>
            </div>
    </div>
    <Navigation activePage="home"/>
    
</div>
<div class="introduction-section flex flex-col justify-center">
    <div class="intro-header my-12 justify-center relative">
        <div class="intro-details">
            <div class="intro-text mt-8 text-center uppercase flex flex-col text-[67px] text-[#4876B6]">
                Discover which service is right for you!
            </div>
            <div class="intro-subtext mr-8 text-center text-[#3D3938] text-[28px] raleway-light">
                Choose from our shipping, transportation, travel service or explore our stores for your needs.
            </div>
        </div>
    </div>
    <div class="services flex justify-center items-center mb-7 mt-10 w-[full]">
        <div class="flex flex-row gap-8 relative h-[120vh] w-full">
            <div class=" service-container w-[275px] h-[700px] absolute cursor-pointer rounded-2xl">
                <img alt="" class="w-full h-full rounded-2xl object-cover" src={shippingService} />
                <div class="absolute top-0 left-0 w-full h-full bg-[#00000086] opacity-0 rounded-2xl hover:opacity-100 hover:duration-[300ms] flex items-center justify-center text-[24px] text-[#ffffff]">
                    Shipping
                </div>
            </div>
            <div class="service-container-low w-[275px] h-[700px] absolute left-[20.5%] cursor-pointer">
                <img alt="" class="w-full h-full rounded-2xl object-cover cursor-pointer" src={travelService} />
                <div class="absolute top-0 left-0 w-full h-full bg-[#00000086] opacity-0 rounded-2xl hover:opacity-100 hover:duration-[300ms] flex items-center justify-center text-[24px] text-[#ffffff]">
                    Travel
                </div>
            </div>
            <div class="service-container w-[275px] h-[700px] absolute right-[40.7%] cursor-pointer">
                <img alt="" class="w-full h-full rounded-2xl  object-cover cursor-pointer" src={store1Service} />
                <div class="absolute top-0 left-0 w-full h-full bg-[#00000086] opacity-0 rounded-2xl hover:opacity-100 hover:duration-[300ms] flex items-center justify-center text-[24px] text-[#ffffff]">
                    Home Goods
                </div>
            </div>
            <div class="service-container-low w-[275px] h-[700px] absolute right-[20.5%] cursor-pointer">
                <img alt="" class="w-full h-full rounded-2xl  object-cover cursor-pointer" src={store1Service} />
                <div class="absolute top-0 left-0 w-full h-full bg-[#00000086] opacity-0 rounded-2xl hover:opacity-100 hover:duration-[300ms] flex items-center justify-center text-[24px] text-[#ffffff]">
                    Hardware
                </div>
            </div>
            <div class="service-container w-[275px] h-[700px] absolute right-0 cursor-pointer">
                <img alt="" class="w-full h-full rounded-2xl left-full  object-cover cursor-pointer" src={store2Service} />
                <div class="absolute top-0 left-0 w-full h-full bg-[#00000086] opacity-0 rounded-2xl hover:opacity-100 hover:duration-[300ms] flex items-center justify-center text-[24px] text-[#ffffff]">
                    Events
                </div>
            </div>
            <!-- <div class="service-container w-[250px] h-[700px]">
                <img alt="" class="w-full h-full rounded-2xl left-5/5 " src="https://via.placeholder.com/250x700" />
            </div> -->
        </div>
    </div>
</div>
<div class="next-info-section mt-16 w-full flex items-center justify-center">
    <div class="title-text raleway-regular text-[35px] text-[#4876B6]">
        100% Guyanese owned business with years of experience in the shipping industry.
    </div>
</div>
<div class="parallax-container relative">
    <img src={parallaxShipping} alt="" class="object-cover w-screen wharf-image">
    <div class="wharf-text uppercase text-white text-[28px] absolute bottom-52 left-16 ">
        BBC Echo Vessel - July 10, 2024 - Water Street, Georgetown, Guyana
    </div>
</div>
<div class="joint-ventures-section h-1/2 mb-24 flex flex-col items-center">
    <div class="heading flex flex-row items-center my-24 w-10/12 justify-center">
        <div class="left flex flex-row items-center gap-4 w-2/5 px-8">
            <div class="left-text uppercase poppins-medium tracking-wide text-[#4876B6]">Joint Ventures</div>
        </div>
        <div class="right flex flex-row justify-end w-4/6">
            <div class="right-text justify-items-end poppins-light text-[#4876B6] text-[50px]">
                Explore our joint ventures
            </div>
        </div>
    </div>
    <div class="bento-container">
        <div class="bento-box flex flex-col items-center">
            <div class="row flex flex-row justify-center w-10/12 gap-5">
                <div class="jv-container paragon-container w-[932px] h-[369px] bg-[#EBE9E0] rounded-2xl shadow flex items-center justify-center">
                    <img src={paragonTrasport} alt="Paragon Transport Logo" class="h-2/2 w-4/5">
                </div>
                <div class="gysbi-container w-[571px] h-[369px] bg-[#EBE9E0] rounded-2xl shadow flex items-center justify-center">
                    <img src={gysbi} alt="Guyana Shore Base Inc Logo" class="h-2/2 w-4/5">
                </div>
            </div>
            <div class="row flex flex-row justify-center w-10/12 gap-5 mt-5">
                <div class="cranes-container w-[581px] h-[369px] bg-[#EBE9E0] rounded-2xl shadow flex items-center justify-center">
                    <img src={cranes} alt="Cranes Logo" class="h-2/2 w-4/5">
                </div>
                <div class="bsgi-container w-[600px] h-[369px] bg-[#EBE9E0] rounded-2xl shadow flex items-center justify-center">
                    <img src={barges} alt="Barge Solutions Guyana Inc Logo" class="h-2/2 w-4/5">
                </div>
                <div class="harbourtugs-container w-[288px] h-[369px] bg-[#EBE9E0] rounded-2xl shadow flex items-center justify-center">
                    <img src={harbourtugs} alt="Barge Solutions Guyana Inc Logo" class="h-2/2 w-4/5">
                </div>
            </div>
        </div>
    </div>
</div>
<div class="introduction-section flex flex-col justify-center">
    <div class="intro-header mt-7 justify-center relative">
        <img src={grid} alt="mesh grid" class="h-auto w-full">
        <div class="intro-details flex items-center absolute top-16 bottom-16 left-16 w-11/12 justify-between">
            <div class="intro-details w-3/4">
                <div class="intro-text text-left uppercase flex text-[76px] text-[#4876B6]">
                    Interested in a career with us?
                </div>
                <div class="intro-subtext text-left text-[#3D3938] text-[28px] raleway-light">
                    Check out our list of job openings and see which is the right path for you.
                </div>
            </div>
            
        </div>
    </div>
    <div class="services flex flex-row h-[683px] justify-between items-center mb-28">
        <div class="images-card relative w-1/2 h-5/6 ml-5">
            <div class="image-above top-0 left-20 absolute w-[357px] h-[363px] z-30">
                <img src={staffTwo} alt="Paragon Transportation" class="rounded-sm object-cover w-full h-full">
            </div>
            <div class="image-below top-52 right-28 absolute w-[508px] h-[320px]">
                <img src={staffOne} alt="Muneshwers Shipping" class="rounded-sm object-cover w-full h-full">
            </div>
        </div>
        <div class="services-link w-1/2 relative cursor-pointer hover:text-[#4876B6]">
            <a href="/careers">
                <div class="services-text flex flex-row items-center text-4xl gap-8 uppercase ml-32 hover:tracking-widest hover:duration-150 duration-150" >
                Explore Careers
                <span>
                    <svg class="h-8 w-8" width="53" height="38" viewBox="0 0 53 38" xmlns="http://www.w3.org/2000/svg">
                        <path id="Arrow 1" d="M51.7678 20.7678C52.7441 19.7915 52.7441 18.2085 51.7678 17.2322L35.8579 1.32233C34.8816 0.34602 33.2986 0.34602 32.3223 1.32233C31.346 2.29864 31.346 3.88155 32.3223 4.85786L46.4645 19L32.3223 33.1421C31.346 34.1184 31.346 35.7014 32.3223 36.6777C33.2986 37.654 34.8816 37.654 35.8579 36.6777L51.7678 20.7678ZM0 21.5H50V16.5H0V21.5Z" fill="black"/>
                    </svg>
                    <!-- <img src={arrowright} alt="Arrow Right" class="h-8 w-8 "> -->
                </span>
            </div>
            </a>
            
            <div class="w-[420px] h-px left-[3px] top-[71px] absolute bg-slate-500 ml-32"></div>
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

