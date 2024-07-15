<script>
    import mllogo from "../logo.png";
    import heroImage from "../hero-image.jpeg";
    import grid from "../grid.svg";
    import arrowright from "../arrowright.svg";
    import trucking from "../trucking.png";
    import shipping from "../new_shipping.png";
    import wharf from "../wharf.png";
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
</script>

<svelte:head>
	<title>Muneshwers Limited</title>
	<meta name="description" content="Muneshwers Limited" />
</svelte:head>
<div class="landing-top relative">
    <div class="scroll-watcher"></div>
    <div class="hero-image h-screen relative">
        <img src={heroImage} alt="Hero landing page" class="object-cover h-full w-full">
        <div class="image-cover h-full w-full bg-[#3A3A3A] opacity-30 absolute top-0"></div>
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
    <div class="services flex flex-row h-[600px] justify-between items-center mb-7">
        <div class="images-card relative w-1/2 h-5/6 ml-5">
            <div class="image-above top-0 left-20 absolute w-[357px] h-[363px] z-50">
                <img src={trucking} alt="Paragon Transportation" class="rounded-sm object-cover w-full h-full">
            </div>
            <div class="image-below top-52 right-28 absolute w-[508px] h-[320px]">
                <img src={shipping} alt="Muneshwers Shipping" class="rounded-sm object-cover w-full h-full">
            </div>
        </div>
        <div class="services-link w-1/2 relative">
            <div class="services-text flex flex-row items-center text-4xl gap-8 uppercase ml-32 cursor-pointer hover:text-[#4876B6]" >
                Explore Services
                <span>
                    <img src={arrowright} alt="Arrow Right" class="h-8 w-8">
                </span>
            </div>
            <div class="w-[420px] h-px left-[3px] top-[71px] absolute bg-slate-500 ml-32"></div>
        </div>
    </div>
</div>
<div class="parallax-container relative">
    <img src={wharf} alt="" class=" object-cover w-screen wharf-image">
    <div class="hero-text uppercase text-white text-[28px] absolute bottom-16 left-16 ">
        Tropic Express Vessel - May 20, 2024 - Water Street, Georgetown, Guyana
    </div>
</div>
<div class="joint-ventures-section h-1/2 mb-24 flex flex-col items-center">
    <div class="heading flex flex-row items-start my-24 w-10/12 justify-center">
        <div class="left flex flex-row items-center gap-4 w-2/5 px-8">
            <div class="w-9 h-9 bg-[#CDC6B2] rounded-lg"></div>
            <div class="left-text uppercase poppins-medium tracking-wide text-[#4876B6]">Joint Ventures</div>
        </div>
        <div class="right flex flex-row justify-end w-4/6">
            <div class="right-text justify-items-end poppins-light text-[#4876B6] text-[50px]">
                Explore our joint ventures with these amazing companies
            </div>
        </div>
    </div>
    <div class="bento-container">
        <div class="bento-box flex flex-col items-center">
            <div class="row flex flex-row justify-center w-10/12 gap-5">
                <div class="paragon-container w-[932px] h-[369px] bg-[#EBE9E0] rounded-2xl shadow flex items-center justify-center">
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
            <div class="image-above top-0 left-20 absolute w-[357px] h-[363px] z-50">
                <img src={trucking} alt="Paragon Transportation" class="rounded-sm object-cover w-full h-full">
            </div>
            <div class="image-below top-52 right-28 absolute w-[508px] h-[320px]">
                <img src={shipping} alt="Muneshwers Shipping" class="rounded-sm object-cover w-full h-full">
            </div>
        </div>
        <div class="services-link w-1/2 relative cursor-pointer hover:text-[#4876B6]">
            <div class="services-text flex flex-row items-center text-4xl gap-8 uppercase ml-32" >
                Explore Careers
                <span>
                    <img src={arrowright} alt="Arrow Right" class="h-8 w-8 ">
                </span>
            </div>
            <div class="w-[420px] h-px left-[3px] top-[71px] absolute bg-slate-500 ml-32"></div>
        </div>
    </div>
</div>
<div class="footer h-[400px] bg-[#EDEBE5]">
    <div class="footer-top flex flex-row gap-4 p-10">
        <div class="site-info w-1/5">
            <div class="site-name flex flex-row w-full">
                <img src={brandLogo} alt="Muneshwers Shipping" class="object-cover w-[150px] h-[100px]">
                <img src={textLogo} alt="Muneshwers Shipping" class="object-cover w-[200px] h-[100px]">
            </div>
            <div class="site-tagline playfair-display-regular text-[18px]">
                Offering solutions, not excuses...
            </div>
            <div class="social-media h-2/3 w-full flex flex-col gap-4 mt-4" >
                <img src={facebookIcon} alt="Muneshwers Shipping" class="object-cover w-[50px] h-[50px]">
                <img src={instagramIcon} alt="Muneshwers Shipping" class="object-cover w-[50px] h-[50px]">
                <img src={linkedinIcon} alt="Muneshwers Shipping" class="object-cover w-[50px] h-[50px]">
            </div>
        </div>
        <div class="company-info">

        </div>
        
    </div>
    <div class="footer-bottom"></div>
</div>

