<script>
    import mllogo from "../../logo.png";
    import heroImage from "$lib/assets/eventsheader.webp";
    import grid from "../../grid.svg";
    import paragonTrasport from "../../paragon-transport.png";
    import gysbi from "../../gysbi.png";
    import cranes from "../../cranes.png";
    import barges from "../../barges.png";
    import harbourtugs from "../../harbourtugs.png";
    import brandLogo from "$lib/assets/events_logo.png";
    import whitelogo from "$lib/assets/logo.png";
    import event1 from "$lib/assets/event1.jpg";
    import event2 from "$lib/assets/event2.jpg";
    import event3 from "$lib/assets/event3.jpg";
    import event4 from "$lib/assets/event4.jpg";
    import event5 from "$lib/assets/event5.jpg";
    import event6 from "$lib/assets/event6.jpg";
    import event7 from "$lib/assets/event7.jpg";
    import halloweenbucket from "$lib/assets/halloweenbucket.jpg";
    import parallaxCareer from "$lib/assets/GYS01426.jpg";
	import Footer from "../Footer.svelte";
	import Navigation from "../Navigation.svelte";
    import flatpickr from "flatpickr";
	import { onMount } from "svelte";

    let calendar;

    onMount(() => {
        let date = (new Date()).toISOString().split('T')[0];
        calendar = flatpickr(".datepicker-inline", {
            enableTime: true,
            dateFormat : 'Y-m-d',
            altInput: true,
            altFormat: 'F j, Y',
            inline : true,
            defaultDate : date,
            enableTime : false,
        })
    })


    let y;
</script>

<svelte:head>
	<title>Muneshwers #1 Events Store</title>
	<meta name="description" content="Muneshwers Limited" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css">

</svelte:head>

<div class="landing-top relative">
    <div class="hero-image h-screen relative">
        <img src={heroImage} alt="Hero landing page" class="object-cover h-full w-full">
        <div class="image-cover h-full w-full opacity-30 bg-[#3A3A3A] absolute top-0"></div>
        <div class="hero-text uppercase text-white text-[70px] absolute bottom-20  left-16 w-9/12 leading-[120px] flex flex-col">
            <div class="individual-hero-text logo w-36 h-36">
                <img src={brandLogo} alt="Muneshwers Limited Logo" class="h-full w-full">
            </div>
            <div>
                <p class="individual-hero-text">Muneshwers Events Store</p>
            </div>
            <div class="mt-5">
                <p class="individual-hero-text text-[#ffe3ea] text-2xl font-medium font-['Raleway'] uppercase">Best quality at an even better price</p>
            </div>
        </div>
    </div>
    <Navigation activePage="services"/>
</div>
<div class="introduction-section flex flex-col items-center justify-center mb-20">
    <div class="shipping-header my-12 justify-center items-center relative flex flex-col w-[90%]">
        <div class="event-title text-[#df839c] text-[30px] font-medium font-['Raleway'] uppercase mb-8 ml-14">Our Halloween Collection</div>
        <div class="main-event flex flex-row gap-8">
            <div class="datepicker-inline"></div>
            <div class="event-image">
                <img src={halloweenbucket} class="w-[820px] h-[51vh] object-cover" alt="main" />
            </div>
        </div>
    </div>
    <div class="event-products grid grid-cols-7 gap-4 justify-center">
        <img class="w-40 h-40 object-cover" src={event1} alt="featured products"/>
        <img class="w-40 h-40 object-cover" src={event2} alt="featured products"/>
        <img class="w-40 h-40 object-cover" src={event3} alt="featured products"/>
        <img class="w-40 h-40 object-cover" src={event4} alt="featured products"/>
        <img class="w-40 h-40 object-cover" src={event5} alt="featured products"/>
        <img class="w-40 h-40 object-cover" src={event6} alt="featured products"/>
        <img class="w-40 h-40 object-cover" src={event7} alt="featured products"/>
    </div>
</div>
<div class="collections w-full flex flex-col items-center my-12">
    <div class="collections-header intro-details">
        <div class="intro-text-2 text-center text-[#df839c] text-[40px] font-medium font-['Raleway'] uppercase">OUR COLLECTIONS</div>
    </div>
    <div class="grid grid-cols-6 gap-3 mt-8">
        {#if y > 800}
        <div class="service w-[235px] h-[77px] bg-white rounded-xl shadow-lg flex flex-row items-center p-5 gap-5">
            <enhanced:img class="w-12 h-12 rounded-lg" src="$lib/assets/kitchenware.webp" alt=""/>
            <div class=" text-black text-[15px] font-normal font-['Raleway'] uppercase tracking-wide">Kitchenware</div>
        </div>
        <div class="service w-[235px] h-[77px] bg-white rounded-xl shadow-lg flex flex-row items-center p-5 gap-5">
            <enhanced:img class="w-12 h-12 rounded-lg" src="$lib/assets/costumes.webp" alt=""/>
            <div class=" text-black text-[15px] font-normal font-['Raleway'] uppercase tracking-wide">Costumes</div>
        </div>
        <div class="service w-[235px] h-[77px] bg-white rounded-xl shadow-lg flex flex-row items-center p-5 gap-5">
            <enhanced:img class="w-12 h-12 rounded-lg" src="$lib/assets/gardening.webp" alt=""/>
            <div class=" text-black text-[15px] font-normal font-['Raleway'] uppercase tracking-wide">Gardening</div>
        </div>
        <div class="service w-[235px] h-[77px] bg-white rounded-xl shadow-lg flex flex-row items-center p-5 gap-5">
            <enhanced:img class="w-12 h-12 rounded-lg" src="$lib/assets/stationary.webp" alt=""/>
            <div class=" text-black text-[15px] font-normal font-['Raleway'] uppercase tracking-wide">Stationary</div>
        </div>
        <div class="service w-[235px] h-[77px] bg-white rounded-xl shadow-lg flex flex-row items-center p-5 gap-5">
            <enhanced:img class="w-12 h-12 rounded-lg" src="$lib/assets/floral.webp" alt=""/>
            <div class=" text-black text-[15px] font-normal font-['Raleway'] uppercase tracking-wide">Floral Arrangement</div>
        </div>
        <div class="service w-[235px] h-[77px] bg-white rounded-xl shadow-lg flex flex-row items-center p-5 gap-5">
            <enhanced:img class="w-12 h-12 rounded-lg" src="$lib/assets/decorations.webp" alt=""/>
            <div class=" text-black text-[15px] font-normal font-['Raleway'] uppercase tracking-wide">Decoration</div>
        </div>
        <div class="service w-[235px] h-[77px] bg-white rounded-xl shadow-lg flex flex-row items-center p-5 gap-5">
            <enhanced:img class="w-12 h-12 rounded-lg" src="$lib/assets/cleaning.webp" alt=""/>
            <div class=" text-black text-[15px] font-normal font-['Raleway'] uppercase tracking-wide">Cleaning Supplies</div>
        </div>
        <div class="service w-[235px] h-[77px] bg-white rounded-xl shadow-lg flex flex-row items-center p-5 gap-5">
            <enhanced:img class="w-12 h-12 rounded-lg" src="$lib/assets/household.webp" alt=""/>
            <div class=" text-black text-[15px] font-normal font-['Raleway'] uppercase tracking-wide">Household Supplies</div>
        </div>
        <div class="service w-[235px] h-[77px] bg-white rounded-xl shadow-lg flex flex-row items-center p-5 gap-5">
            <enhanced:img class="w-12 h-12 rounded-lg" src="$lib/assets/babyproducts.webp" alt=""/>
            <div class=" text-black text-[15px] font-normal font-['Raleway'] uppercase tracking-wide">Baby Products</div>
        </div>
        <div class="service w-[235px] h-[77px] bg-white rounded-xl shadow-lg flex flex-row items-center p-5 gap-5">
            <enhanced:img class="w-12 h-12 rounded-lg" src="$lib/assets/bakingsupplies.webp" alt=""/>
            <div class=" text-black text-[15px] font-normal font-['Raleway'] uppercase tracking-wide">Baking Supplies</div>
        </div>
        <div class="service w-[235px] h-[77px] bg-white rounded-xl shadow-lg flex flex-row items-center p-5 gap-5">
            <enhanced:img class="w-12 h-12 rounded-lg" src="$lib/assets/fabrics.webp" alt=""/>
            <div class=" text-black text-[15px] font-normal font-['Raleway'] uppercase tracking-wide">Fabrics</div>
        </div>
        <div class="service w-[235px] h-[77px] bg-white rounded-xl shadow-lg flex flex-row items-center p-5 gap-5">
            <enhanced:img class="w-12 h-12 rounded-lg" src="$lib/assets/decorations.webp" alt=""/>
            <div class=" text-black text-[15px] font-normal font-['Raleway'] uppercase tracking-wide">Hardware</div>
        </div>
        {/if}
        
    </div>
</div>
<div class="parallax-container relative">
    <div class="object-cover w-screen bg-[#FFEDF2] h-[320vh] p-14 flex flex-col items-center">
        <div class="intro-details ">
            {#if y > 1200}
            <div class="intro-text-2 text-center text-[#df839c] text-[45px] font-semibold font-['Raleway'] uppercase tracking-widest mt-10">CUSTOM FLORAL ARRANGEMENTS</div>
            {/if}
        </div>
        <div class="intro-details">
            {#if y > 1200}
            <div class="intro-text-2 w-[1039px] text-center text-[#df839c] text-[24px] font-light font-['Raleway'] mt-2">We make custom floral arrangement for all your birthdays, graduations, and weddings.</div>
            {/if}
        </div>
        {#if y > 1200}
        <enhanced:img class="service w-[1300px] h-[600px] rounded-2xl mt-20 object-cover" src="$lib/assets/eventsservice.webp" alt=""/>
        {/if}
        <div class="grid grid-cols-3 mt-20 gap-2">
            <enhanced:img class="w-[430px] h-[360px] rounded-2xl object-cover" src="$lib/assets/flower1.webp" alt=""/>
            <enhanced:img class="w-[430px] h-[360px] rounded-2xl object-cover" src="$lib/assets/flower2.webp" alt=""/>
            <enhanced:img class="w-[430px] h-[360px] rounded-2xl object-cover" src="$lib/assets/flower3.webp" alt=""/>
            <enhanced:img class="w-[430px] h-[360px] rounded-2xl object-cover" src="$lib/assets/flower4.webp" alt=""/>
            <enhanced:img class="w-[430px] h-[360px] rounded-2xl object-cover" src="$lib/assets/flower5.webp" alt=""/>
            <enhanced:img class="w-[430px] h-[360px] rounded-2xl object-cover" src="$lib/assets/flower6.webp" alt=""/>
        </div>
        <div class="w-[100%] h-[380px] mt-40 bg-[#df839c] rounded-xl p-10 flex flex-row items-center">
            <div class="left-subscribe">
                <div class=" text-white text-[40px] font-medium font-['Raleway'] leading-[60px]">SUBSCRIBE TO OUR NEWSLETTER</div>
                <div class=" text-white text-[24px] font-light font-['Raleway'] leading-9">Stay in the loop whenever we make important announcements that you might want to know about</div>
                <div class="subscribe-field mt-16 flex flex-row gap-5">
                    <input type="text" class="w-[663px] h-[55px] bg-white rounded-xl  p-5 outline-[#ee4270] outline-8 placeholder:font-['Raleway'] text-[#b74363]" placeholder="johndoe@example.com"/>
                    <button type="submit" class="w-[197px] h-[55px] bg-[#b74363] rounded-xl text-center text-white text-[20px] font-bold font-['Raleway'] leading-9 uppercase">Subscribe</button>
                </div>
            </div>
            <div class="right-subscribe">
                <img class="w-[400px] h-[300px] object-cover" src={whitelogo} alt=""/>
            </div>
        </div>
    </div>
</div>
<div class="introduction-section flex flex-col justify-center">
    <div class="careers-header my-12 justify-center relative flex h-[143px]">
        {#if y > 2300}
            <div class="intro-details">
                <div class="intro-text mt-8 text-center uppercase flex flex-col text-[67px] text-[#df839c]">
                    <p>Interested in a career with us?</p>
                </div>
                <div class="intro-subtext text-center text-[#3D3938] text-[28px] raleway-light flex flex-col items-center">
                    <p>Check out our list of job openings and see which is the right path for you.</p>
                </div>
            </div>
        {/if}
    </div>
    <div class="parallax-container relative">
        <img src={parallaxCareer} alt="" class="object-cover w-screen h-1/2 career-image">
        <div class="services  flex flex-row h-[600px] justify-between items-center mb-10 absolute bottom-40 right-28">
            <div class="services-link relative cursor-pointer text-white">
                <a href="/careers">
                    <div class="services-text flex flex-row items-center text-5xl gap-8 uppercase ml-32 hover:tracking-widest hover:duration-150 duration-150" >
                    Explore Careers
                    <span>
                        <svg class="h-8 w-8" width="53" height="38" viewBox="0 0 53 38" xmlns="http://www.w3.org/2000/svg" fill="#ffffff">
                            <path id="Arrow 1" d="M51.7678 20.7678C52.7441 19.7915 52.7441 18.2085 51.7678 17.2322L35.8579 1.32233C34.8816 0.34602 33.2986 0.34602 32.3223 1.32233C31.346 2.29864 31.346 3.88155 32.3223 4.85786L46.4645 19L32.3223 33.1421C31.346 34.1184 31.346 35.7014 32.3223 36.6777C33.2986 37.654 34.8816 37.654 35.8579 36.6777L51.7678 20.7678ZM0 21.5H50V16.5H0V21.5Z" fill="#ffffff"/>
                        </svg>
                        <!-- <img src={arrowright} alt="Arrow Right" class="h-8 w-8 "> -->
                         <!--Signed Commit Check-->
                    </span>
                </div>
                </a>
                <div class="w-[500px] h-px left-[3px] top-[71px] absolute bg-white ml-32"></div>
            </div>
        </div>
    </div>
    
</div>
<Footer />

<svelte:window bind:scrollY={y} />