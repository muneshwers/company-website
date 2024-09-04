<script>
    import mllogo from "../../logo.png";
    import heroImage from "../../careers.jpg";
    import grid from "../../grid.svg";
    import paragonTrasport from "../../paragon-transport.png";
    import gysbi from "../../gysbi.png";
    import cranes from "../../cranes.png";
    import barges from "../../barges.png";
    import harbourtugs from "../../harbourtugs.png";
    import brandLogo from "../../brand-logo.png";
    import textLogo from "../../text-logo.png";
    import facebookIcon from "../../icons8-facebook.svg";
    import instagramIcon from "../../icons8-instagram.svg";
    import linkedinIcon from "../../icons8-linkedin.svg";
    import tiktokIcon from "../../icons8-tiktok.svg";
    import parallaxShipping from "../../parallaxshipping.jpg";
    import staffOne from "../../worker1.jpg";
    import staffTwo from "../../worker2.jpg";
    import shippingService from "../../GYS05795.jpg"
    import travelService from "../../travel.jpg";
    import store1Service from "../../store1.jpg";
    import store2Service from "../../events1.jpg";
	import Joint from "../Joint.svelte";
	import Navigation from "../Navigation.svelte";
	import Footer from "../Footer.svelte";

    $: jvToggle = false;

</script>

<svelte:head>
	<title>Muneshwers Limited</title>
	<meta name="description" content="Muneshwers Limited" />
</svelte:head>
<div class="landing-top relative">
    <!-- <div class="scroll-watcher"></div> -->
    <div class="hero-image h-[50vh] relative">
        <enhanced:img src="$lib/assets/DJI_0045.webp" alt="Hero landing page" class="object-cover h-full w-full" />
        <div class="image-cover h-full w-full opacity-30 bg-[#3A3A3A] absolute top-0"></div>
        <div class="hero-text uppercase text-white text-[70px] absolute bottom-20  left-16 w-9/12 leading-[120px] flex flex-col">
            
            <div class="flex flex-row items-center gap-6">
                <div class="individual-hero-text logo w-36 h-36">
                    <img src={brandLogo} alt="Muneshwers Limited Logo" class="h-full w-full">
                </div>
                <p class="individual-hero-text">Contact Us</p>
            </div>
        </div>
    </div>
    <Navigation activePage="contact"/>
</div>
<div class="contact-section flex flex-col justify-center items-center">
    <div class="contact-header my-7 p-10 bg-gray-200 w-[80%] rounded-md">
        <div class="row flex flex-row gap-2 text-normal p-2">
            <div class="contact-title font-medium">Telephone:</div>
            <div class="contact-details text-gray-500">+592-227-7417/18</div>
        </div>
        <div class="row flex flex-row gap-2 text-normal p-2">
            <div class="contact-title font-medium">Address:</div>
            <div class="contact-details text-gray-500">45-47 Water Street, Georgetown, Guyana</div>
        </div>
        <div class="row flex flex-row gap-2 text-normal p-2">
            <div class="contact-title font-medium">Email:</div>
            <div class="contact-details text-gray-500">info@muneshwers.com</div>
        </div>
    </div>
</div>
<div class="p-10 flex justify-center items-center poppins-light text-[#4876B6] text-[48px]">
    <p class="w-[80%] contact-header-title">Send us a message</p>
</div>
<!-- <div class="container">
    <div class="form-body p-10">
        
    </div>
</div> -->
<div class="w-full h-full justify-center items-center inline-flex mb-10">
  <div class="w-[80%] h-[400px] bg-white rounded-[10px] shadow flex justify-center items-center">
    <form action="" class="flex flex-col gap-8 items-center justify-center text-lg w-[90%]">
        <div class="row flex flex-row justify-center gap-5 w-[100%]">
            <div class="input-group flex flex-row gap-10 items-center w-full">
                <label for="contact-name">Name:</label>
                <input type="text" name="contact-name" id="contact-name"  class="border-[3px] rounded-md w-[70%]"/>
            </div>
            <div class="input-group flex flex-row gap-5 items-center w-full">
                <label for="contact-email">Email Address:</label>
                <input type="text" name="contact-email" id="contact-email"  class="border-[3px] rounded-md  w-[70%]"/>
            </div>
        </div>
        <div class="row  w-[100%]">
            <div class="input-group flex flex-row justify-start gap-5 items-center">
                <label for="contact-message">Message:</label>
                <textarea name="contact-message" id="contact-message" class="border-[3px] rounded-md w-[34%]"></textarea>
            </div>
        </div>
        <div class="row  w-[100%]">
            <div class="input-group flex flex-row justify-start gap-5 items-center">
                <input type="button" value="Send" class="p-2 bg-slate-500 w-28 rounded-md cursor-pointer text-white">
            </div>
        </div>
    </form>
  </div>
</div>
<Footer />