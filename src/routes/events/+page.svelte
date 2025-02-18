<script>
    import IntersectionObserver from "svelte-intersection-observer";
    import heroImage from "$lib/assets/eventsheader.webp";
    import brandLogo from "$lib/assets/events_logo.png";
    import whitelogo from "$lib/assets/logo.png";
    import parallaxCareer from "$lib/assets/IMG_4064.png";
	import Footer from "../Footer.svelte";
	import Navigation from "../Navigation.svelte";
    import flatpickr from "flatpickr";
	import { onMount } from "svelte";

    export let data;

    let calendar;
    let y;
    let innerWidth;
    let innerHeight;
    let navVisibility;
    let navigationBar;
    let elementDistance;

    //Current Date and Month
    let selectedDate = (new Date()).toISOString().split('T')[0];
    let selectedMonth = selectedDate.substring(0, 7);

    //List all holidays
    let allHolidaysDates = data.eventsList.map((holiday) => ({
        holiDate: holiday.form.start
    }))

    let defaultImage = "/src/lib/assets/landscape-placeholder.svg";

    //Intersection Observer
    let collectionsBody;
    let infoText;
    let floralHeader;
    let floralSubheader;
    let floralImage;
    let floralCard;
    let careerHeader;

    //Calendar Variables
    let weekTitle = "Upcoming Events for the Months"
    let eventName = "No Events Today";
    let headerImage = defaultImage;
    let image1 = defaultImage;
    let image2 = defaultImage;
    let image3 = defaultImage;
    let image4 = defaultImage;
    let image5 = defaultImage;
    let image6 = defaultImage;
    let image7 = defaultImage;

    let displayEventMonth = [];
    let monthEvents = data.eventsList.filter((holiday) => holiday.form.start.substring(0, 7) == selectedMonth );
    if(!monthEvents) {
        console.log("No events for this month!");
    } else {
        displayEventMonth = monthEvents.map((item) => ({
            name: item.form.title,
            date: item.form.start,
        }))
    }

    console.log("Day Only: ", selectedDate.substring(5, 7));

    let selectedEvent = data.eventsList.find((holiday) => holiday.form.start.substring(5, 7) >= selectedDate.substring(5, 7));
    if (!selectedEvent) {
        console.log("No event found");
    } else {
        // console.log("Selected Event: ", selectedEvent);
        eventName = "Our " + selectedEvent.form.title + " Collection";
        headerImage = selectedEvent.form.headerImage;
        image1 = selectedEvent.form.image1;
        image2 = selectedEvent.form.image2;
        image3 = selectedEvent.form.image3;
        image4 = selectedEvent.form.image4;
        image5 = selectedEvent.form.image5;
        image6 = selectedEvent.form.image6;
        image7 = selectedEvent.form.image7;
    }
    

    //landscape-placeholder

    


    onMount(() => {
        navigationBar = document.getElementById("navigationBar");
        elementDistance = Math.round((y/innerHeight)*100)/100;
        let date = (new Date()).toISOString().split('T')[0];
        calendar = flatpickr(".datepicker-inline", {
            enableTime: true,
            dateFormat : 'Y-m-d',
            altInput: true,
            altFormat: 'F j, Y',
            inline : true,
            defaultDate : selectedDate,
            enableTime : false,
            disable: [
                function (date) {
                    const datesList = allHolidaysDates;
                    const formattedDate = (date).toISOString().split('T')[0];
                    const findMatch = datesList.find((holiday) => holiday.holiDate == formattedDate);
                    if(!findMatch) return true;
                    return false;
                }
            ],
            onMonthChange: (selectedDates, dateStr, instance) => {
                // console.log("Check information: ", selectedDates, " : ", dateStr, " : ", instance);
                let selectedMonth = (instance.currentMonth+1) <= 9 ? instance.currentYear+"-"+"0"+(instance.currentMonth+1) : instance.currentYear+"-"+(instance.currentMonth+1);
                monthEvents = data.eventsList.filter((holiday) => holiday.form.start.substring(0, 7) == selectedMonth );
                if(monthEvents.length < 1) {
                    eventName = "No Events Today";
                    headerImage = defaultImage;
                    image1 = defaultImage;
                    image2 = defaultImage;
                    image3 = defaultImage;
                    image4 = defaultImage;
                    image5 = defaultImage;
                    image6 = defaultImage;
                    image7 = defaultImage;
                    displayEventMonth = [{
                        name: "No events for",
                        date: selectedMonth
                    }]
                    // console.log("No events for the month");
                    return console.log("No events for this month!");
                } else {
                    displayEventMonth = monthEvents.map((item) => ({
                        name: item.form.title,
                        date: item.form.start,
                    }));
                    weekTitle = "Events for the Selected Month";
                    // console.log("Selected Month Events: ", monthEvents);
                    // console.log("Displayed Month Events: ", displayEventMonth);
                }
            },
            onChange : (selectedDates, dateStr, instance) => {
                selectedDate = dateStr;
                // console.log("Selected Date: ", selectedDate);

                selectedEvent = data.eventsList.find((holiday) => holiday.form.start == selectedDate );
                // console.log("Selected Event: ", selectedEvent);
                if (!selectedEvent) {
                    eventName = "No Events Today";
                    headerImage = defaultImage;
                    image1 = defaultImage;
                    image2 = defaultImage;
                    image3 = defaultImage;
                    image4 = defaultImage;
                    image5 = defaultImage;
                    image6 = defaultImage;
                    image7 = defaultImage;
                    return console.log("No event found");
                };

                eventName = "Our " + selectedEvent.form.title + " Collection" ?? "No Events This Month";
                headerImage = selectedEvent.form.headerImage;
                image1 = selectedEvent.form.image1;
                image2 = selectedEvent.form.image2;
                image3 = selectedEvent.form.image3;
                image4 = selectedEvent.form.image4;
                image5 = selectedEvent.form.image5;
                image6 = selectedEvent.form.image6;
                image7 = selectedEvent.form.image7;
                

            }
        })


        
    });


    const focusEvent = (eventDate) => {
        selectedDate = eventDate;
        selectedEvent = data.eventsList.find((holiday) => holiday.form.start == eventDate );
        // console.log("Selected Event: ", selectedEvent);
        if (!selectedEvent) {
            eventName = "No Events Today";
            headerImage = defaultImage;
            image1 = defaultImage;
            image2 = defaultImage;
            image3 = defaultImage;
            image4 = defaultImage;
            image5 = defaultImage;
            image6 = defaultImage;
            image7 = defaultImage;
            return console.log("No event found");
        };
        eventName = "Our " + selectedEvent.form.title + " Collection" ?? "No Events This Month";
        headerImage = selectedEvent.form.headerImage;
        image1 = selectedEvent.form.image1;
        image2 = selectedEvent.form.image2;
        image3 = selectedEvent.form.image3;
        image4 = selectedEvent.form.image4;
        image5 = selectedEvent.form.image5;
        image6 = selectedEvent.form.image6;
        image7 = selectedEvent.form.image7;
        calendar.setDate(selectedDate);
    }

    const windowHeightCheck = () => {
        elementDistance = Math.round((y/innerHeight)*100)/100;
        if(elementDistance > 0.005) {
            navVisibility = 1 - (elementDistance + 0.5);
            navigationBar.style.backgroundColor = "rgba(61, 57, 56, 0.98)";
        } else {
            navigationBar.style.backgroundColor = "rgba(61, 57, 56, 0)";
        }        
    }

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
        <div class="hero-text uppercase text-white text-[70px] max-[1415px]:text-[50px] max-[600px]:text-[40px] absolute bottom-20  left-16 max-[600px]:left-5 w-9/12 leading-[120px] flex flex-col">
            <div class="individual-hero-text logo w-36 h-36">
                <img src={brandLogo} alt="Muneshwers Limited Logo" class="h-full w-full">
            </div>
            {#if innerWidth <= 600}
            <div>
                <p class="individual-hero-text">Muneshwers</p>
            </div>
            <div>
                <p class="individual-hero-text">Events Store</p>
            </div>
            <div class="mt-5">
                <p class="individual-hero-text text-[#ffe3ea] text-2xl font-medium font-['Raleway'] uppercase">Best quality at an even</p>
            </div>
            <div class="mt-1">
                <p class="individual-hero-text text-[#ffe3ea] text-2xl font-medium font-['Raleway'] uppercase"> better price</p>
            </div>
            {/if}
            {#if innerWidth > 600}
            <div>
                <p class="individual-hero-text">Muneshwers Events Store</p>
            </div>
            <div class="mt-5">
                <p class="individual-hero-text text-[#ffe3ea] text-2xl font-medium font-['Raleway'] uppercase">Best quality at an even better price</p>
            </div>
            {/if}
            
        </div>
    </div>
    <Navigation activePage="services" {innerWidth} />
</div>
<div class="introduction-section flex flex-col items-center justify-center mb-20">
    <div class="shipping-header my-12 justify-center items-center relative flex flex-col w-[90%]">
        <div class="event-title text-[#df839c] text-center text-[30px] font-medium font-['Raleway'] uppercase mb-8">{eventName}</div>

        <!-- {#if innerWidth <= 1415}
        {/if}
        {#if innerWidth > 1415}
        {/if} -->
        <div class="main-event flex flex-row max-[600px]:flex-col gap-8">
            <div class="w-1/2 max-[600px]:w-full">
                <div class="datepicker-inline"></div>
                <div class="upcoming ml-5 mt-5 mb-2 text-[21px] font-['Raleway'] text-[#df839c]">{weekTitle}</div>
                {#each displayEventMonth as eventDay}
                    <button class="test1 ml-5 p-3 text-left w-[90%] font-['Raleway'] hover:bg-[#fce0e8] cursor-pointer duration-[300ms]" on:click={()=>focusEvent(eventDay.date)}>{eventDay.name} - {eventDay.date}</button>
                {/each}
            </div>
            
            <div class="event-image h-[60vh]">
                <img src={headerImage} class="w-[820px] max-[600px]:w-[100%] h-[100%] object-cover max-[600px]:object-cover rounded-lg" alt="main" />
            </div>
        </div>
    </div>
    <div class="event-products grid grid-cols-7 max-[600px]:grid-cols-2 gap-4 justify-center">
        <img class="w-40 h-40 object-cover rounded-md" src={image1} alt="featured products"/>
        <img class="w-40 h-40 object-cover rounded-md" src={image2} alt="featured products"/>
        <img class="w-40 h-40 object-cover rounded-md" src={image3} alt="featured products"/>
        <img class="w-40 h-40 object-cover rounded-md" src={image4} alt="featured products"/>
        <img class="w-40 h-40 object-cover rounded-md" src={image5} alt="featured products"/>
        <img class="w-40 h-40 object-cover rounded-md" src={image6} alt="featured products"/>
        <img class="w-40 h-40 object-cover rounded-md" src={image7} alt="featured products"/>
    </div>
</div>
<div class="collections w-full flex flex-col items-center my-12">
    <div class="collections-header intro-details">
        <div class="intro-text-2 text-center text-[#df839c] text-[40px] max-[600px]:text-[25px] font-medium font-['Raleway'] uppercase">OUR COLLECTIONS</div>
    </div>
    <IntersectionObserver element={collectionsBody} let:intersecting>
    <div class="grid grid-cols-6  max-[600px]:grid-cols-3 gap-3 mt-8 h-[160px] max-[600px]:h-[490px]" bind:this={collectionsBody}>
        {#if intersecting}
        <div class="service w-[235px]  max-[600px]:w-[120px] h-[77px]  max-[600px]:h-[120px] bg-white rounded-xl shadow-lg flex flex-row  max-[600px]:flex-col items-center p-5 gap-5  max-[600px]:gap-3">
            <enhanced:img class="w-12 h-12 rounded-lg" src="$lib/assets/kitchenware.webp" alt=""/>
            <div class=" text-black text-[15px]  max-[600px]:text-[12px] font-normal font-['Raleway'] uppercase tracking-wide">Kitchenware</div>
        </div>
        <div class="service w-[235px]  max-[600px]:w-[120px] h-[77px]  max-[600px]:h-[120px] bg-white rounded-xl shadow-lg flex flex-row  max-[600px]:flex-col items-center p-5 gap-5  max-[600px]:gap-3">
            <enhanced:img class="w-12 h-12 rounded-lg" src="$lib/assets/costumes.webp" alt=""/>
            <div class=" text-black text-[15px]  max-[600px]:text-[12px] font-normal font-['Raleway'] uppercase tracking-wide">Costumes</div>
        </div>
        <div class="service w-[235px]  max-[600px]:w-[120px] h-[77px]  max-[600px]:h-[120px] bg-white rounded-xl shadow-lg flex flex-row  max-[600px]:flex-col items-center p-5 gap-5  max-[600px]:gap-3">
            <enhanced:img class="w-12 h-12 rounded-lg" src="$lib/assets/gardening.webp" alt=""/>
            <div class=" text-black text-[15px]  max-[600px]:text-[12px] font-normal font-['Raleway'] uppercase tracking-wide">Gardening</div>
        </div>
        <div class="service w-[235px]  max-[600px]:w-[120px] h-[77px]  max-[600px]:h-[120px] bg-white rounded-xl shadow-lg flex flex-row  max-[600px]:flex-col items-center p-5 gap-5  max-[600px]:gap-3">
            <enhanced:img class="w-12 h-12 rounded-lg" src="$lib/assets/stationary.webp" alt=""/>
            <div class=" text-black text-[15px]  max-[600px]:text-[12px] font-normal font-['Raleway'] uppercase tracking-wide">Stationary</div>
        </div>
        <div class="service w-[235px]  max-[600px]:w-[120px] h-[77px]  max-[600px]:h-[120px] bg-white rounded-xl shadow-lg flex flex-row  max-[600px]:flex-col items-center p-5 gap-5  max-[600px]:gap-3">
            <enhanced:img class="w-12 h-12 rounded-lg" src="$lib/assets/floral.webp" alt=""/>
            <div class=" text-black text-[15px]  max-[600px]:text-[12px] font-normal font-['Raleway'] uppercase tracking-wide">Floral Arrangement</div>
        </div>
        <div class="service w-[235px]  max-[600px]:w-[120px] h-[77px]  max-[600px]:h-[120px] bg-white rounded-xl shadow-lg flex flex-row  max-[600px]:flex-col items-center p-5 gap-5  max-[600px]:gap-3">
            <enhanced:img class="w-12 h-12 rounded-lg" src="$lib/assets/decorations.webp" alt=""/>
            <div class=" text-black text-[15px]  max-[600px]:text-[12px] font-normal font-['Raleway'] uppercase tracking-wide">Decoration</div>
        </div>
        <div class="service w-[235px]  max-[600px]:w-[120px] h-[77px]  max-[600px]:h-[120px] bg-white rounded-xl shadow-lg flex flex-row  max-[600px]:flex-col items-center p-5 gap-5  max-[600px]:gap-3">
            <enhanced:img class="w-12 h-12 rounded-lg" src="$lib/assets/cleaning.webp" alt=""/>
            <div class=" text-black text-[15px]  max-[600px]:text-[12px] font-normal font-['Raleway'] uppercase tracking-wide">Cleaning Supplies</div>
        </div>
        <div class="service w-[235px]  max-[600px]:w-[120px] h-[77px]  max-[600px]:h-[120px] bg-white rounded-xl shadow-lg flex flex-row  max-[600px]:flex-col items-center p-5 gap-5  max-[600px]:gap-3">
            <enhanced:img class="w-12 h-12 rounded-lg" src="$lib/assets/household.webp" alt=""/>
            <div class=" text-black text-[15px]  max-[600px]:text-[12px] font-normal font-['Raleway'] uppercase tracking-wide">Household Supplies</div>
        </div>
        <div class="service w-[235px]  max-[600px]:w-[120px] h-[77px]  max-[600px]:h-[120px] bg-white rounded-xl shadow-lg flex flex-row  max-[600px]:flex-col items-center p-5 gap-5  max-[600px]:gap-3">
            <enhanced:img class="w-12 h-12 rounded-lg" src="$lib/assets/babyproducts.webp" alt=""/>
            <div class=" text-black text-[15px]  max-[600px]:text-[12px] font-normal font-['Raleway'] uppercase tracking-wide">Baby Products</div>
        </div>
        <div class="service w-[235px]  max-[600px]:w-[120px] h-[77px]  max-[600px]:h-[120px] bg-white rounded-xl shadow-lg flex flex-row  max-[600px]:flex-col items-center p-5 gap-5  max-[600px]:gap-3">
            <enhanced:img class="w-12 h-12 rounded-lg" src="$lib/assets/bakingsupplies.webp" alt=""/>
            <div class=" text-black text-[15px]  max-[600px]:text-[12px] font-normal font-['Raleway'] uppercase tracking-wide">Baking Supplies</div>
        </div>
        <div class="service w-[235px]  max-[600px]:w-[120px] h-[77px]  max-[600px]:h-[120px] bg-white rounded-xl shadow-lg flex flex-row  max-[600px]:flex-col items-center p-5 gap-5  max-[600px]:gap-3">
            <enhanced:img class="w-12 h-12 rounded-lg" src="$lib/assets/fabrics.webp" alt=""/>
            <div class=" text-black text-[15px]  max-[600px]:text-[12px] font-normal font-['Raleway'] uppercase tracking-wide">Fabrics</div>
        </div>
        <div class="service w-[235px]  max-[600px]:w-[120px] h-[77px]  max-[600px]:h-[120px] bg-white rounded-xl shadow-lg flex flex-row  max-[600px]:flex-col items-center p-5 gap-5  max-[600px]:gap-3">
            <enhanced:img class="w-12 h-12 rounded-lg" src="$lib/assets/hardware.webp" alt=""/>
            <div class=" text-black text-[15px]  max-[600px]:text-[12px] font-normal font-['Raleway'] uppercase tracking-wide">Hardware</div>
        </div>
        {/if}
        
    </div>
    </IntersectionObserver>
    
</div>
<div class="parallax-container relative">
    <div class="object-cover w-screen bg-[#FFEDF2] h-[200vh] p-14 flex flex-col items-center">
        
        <div class="intro-details mt-10 max-[600px]:mt-5 h-[65px]" bind:this={floralHeader}>
        <IntersectionObserver element={floralHeader} let:intersecting>
            {#if intersecting}
                {#if innerWidth <= 600}
                <div class="intro-text-2 text-center text-[#df839c] text-[24px] font-semibold font-['Raleway'] uppercase tracking-widest">CUSTOM </div>
                <div class="intro-text-2 text-center text-[#df839c] text-[24px] font-semibold font-['Raleway'] uppercase tracking-widest">FLORAL ARRANGEMENTS</div>
                {/if}
                {#if innerWidth > 600}
                <div class="intro-text-2 text-center text-[#df839c] text-[45px] max-[600px]:text-[28px] font-semibold font-['Raleway'] uppercase tracking-widest">CUSTOM FLORAL ARRANGEMENTS</div>
                {/if}
            
            {/if}
        </IntersectionObserver>
        </div>
        <div class="intro-details h-[35px] max-[600px]:h-[55px] mt-2 max-[600px]:mt-3" bind:this={floralSubheader}>
            <IntersectionObserver element={floralSubheader} let:intersecting>
            {#if intersecting}
                {#if innerWidth <= 600}
                    <div class="intro-text-2 text-center text-[#df839c] text-[18px] font-light font-['Raleway']">We make custom floral arrangement for all</div>
                    <div class="intro-text-2 text-center text-[#df839c] text-[18px] font-light font-['Raleway']">your birthdays, graduations, and weddings.</div>
                {/if}
                {#if innerWidth > 600}
                    <div class="intro-text-2 w-[1039px] text-center text-[#df839c] text-[24px] font-light font-['Raleway']">We make custom floral arrangement for all your birthdays, graduations, and weddings.</div>
                {/if}
            
            {/if}
            </IntersectionObserver>

        </div>
        <div class="h-[600px] mt-20 max-[600px]:w-[98vw]" bind:this={floralImage}>
            <IntersectionObserver element={floralImage} let:intersecting>
            {#if intersecting}
            <enhanced:img class="service w-[1300px] max-[600px]:w-[98%] h-[600px] max-[600px]:ml-auto max-[600px]:mr-auto rounded-2xl object-cover" src="$lib/assets/eventsservice.webp" alt=""/>
            {/if}
            </IntersectionObserver>
        </div>
        
        <div class="grid grid-cols-3 max-[600px]:grid-cols-2 mt-16 gap-10 max-[600px]:gap-3 max-[600px]:w-[95vw]" bind:this={floralCard}>
            <IntersectionObserver element={floralCard} let:intersecting>
                {#if intersecting}
                <enhanced:img class="service w-[400px] max-[600px]:w-[600px] h-[360px] rounded-2xl object-cover" src="$lib/assets/flowerDisplay1.webp" alt=""/>
                <enhanced:img class="service w-[400px] max-[600px]:w-[600px] h-[360px] rounded-2xl object-cover" src="$lib/assets/flowerDisplay2.webp" alt=""/>
                <enhanced:img class="service w-[400px] max-[600px]:w-[600px] h-[360px] rounded-2xl object-cover" src="$lib/assets/flowerDisplay3.webp" alt=""/>
                <enhanced:img class="service w-[400px] max-[600px]:w-[600px] h-[360px] rounded-2xl object-cover" src="$lib/assets/flowerDisplay4.webp" alt=""/>
                <enhanced:img class="service w-[400px] max-[600px]:w-[600px] h-[360px] rounded-2xl object-cover" src="$lib/assets/flowerDisplay5.webp" alt=""/>
                <enhanced:img class="service w-[400px] max-[600px]:w-[600px] h-[360px] rounded-2xl object-cover" src="$lib/assets/flowerDisplay6.webp" alt=""/>
                {/if}
            </IntersectionObserver>
            
        </div>
        
    </div>
</div>
<div class="introduction-section flex flex-col justify-center">
    <div class="careers-header mt-12 mb-12 max-[600px]:mt-12 max-[600px]:mb-3 justify-center relative flex h-[143px]" bind:this={careerHeader}>
        <IntersectionObserver element={careerHeader} let:intersecting>
            {#if intersecting}
                <div class="intro-details">
                    {#if innerWidth <= 600}
                        <div class="intro-text mt-2 text-center uppercase flex flex-col text-[28px] text-[#df839c] items-center">
                            <p>Interested in a career?</p>
                        </div>
                        <div class="intro-subtext text-center text-[#3D3938] text-[16px] raleway-light flex flex-col items-center">
                            <p>Check out our list of job openings and see which</p>
                        </div>
                        <div class="intro-subtext text-center text-[#3D3938] text-[16px] raleway-light flex flex-col items-center">
                            <p> is the right path for you.</p>
                        </div>
                    {/if}
                    {#if innerWidth > 600}
                        <div class="intro-text mt-8 text-center uppercase flex flex-col text-[67px] md:max-[600px]:text-[24px] text-[#df839c]">
                            <p>Interested in a career with us?</p>
                        </div>
                        <div class="intro-subtext text-center text-[#3D3938] text-[28px] max-[600px]:text-[16px] raleway-light flex flex-col items-center">
                            <p>Check out our list of job openings and see which is the right path for you.</p>
                        </div>
                    {/if}
                </div>
                <!-- <div class="intro-details">
                    <div class="intro-text mt-8 text-center uppercase flex flex-col text-[67px] text-[#df839c]">
                        <p>Interested in a career with us?</p>
                    </div>
                    <div class="intro-subtext text-center text-[#3D3938] text-[28px] raleway-light flex flex-col items-center">
                        <p>Check out our list of job openings and see which is the right path for you.</p>
                    </div>
                </div> -->
            {/if}
        </IntersectionObserver>
        
    </div>
    <div class="parallax-container relative">
        <img src={parallaxCareer} alt="" class="object-cover w-screen h-1/2 career-image">
        <div class="services flex flex-row justify-between items-center mb-10 absolute top-96 max-[600px]:top-32 right-28">
            <div class="services-link relative cursor-pointer text-white">
                <a href="/careers">
                    <div class="services-text flex flex-row items-center text-5xl max-[600px]:text-[30px] gap-8 uppercase ml-32 hover:tracking-widest hover:duration-150 duration-150" >
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
                <div class="w-[500px] max-[600px]:w-[230px] h-px left-[3px] top-[71px] absolute bg-white ml-32"></div>
            </div>
        </div>
    </div>
    
</div>
<div class="subscribe-section flex flex-col items-center mt-20 mb-10">
    <div class="w-[95%] h-[380px] max-[600px]:h-[580px] bg-[#df839c] rounded-xl p-10 flex flex-row max-[600px]:flex-col items-center">
        {#if innerWidth <= 600}
            <div class="right-subscribe">
                <img class="w-[100px] h-[90px] object-cover" src={whitelogo} alt=""/>
            </div>
            <form method="POST" class="left-subscribe">
                <div class=" text-white text-[28px] font-medium font-['Raleway'] leading-[60px] text-center">SUBSCRIBE TO OUR NEWSLETTER</div>
                <div class=" text-white text-[18px] font-light font-['Raleway'] leading-9">Stay in the loop whenever we make important announcements that you might want to know about</div>
                <div class="subscribe-field mt-16 flex flex-col gap-5 items-center">
                    <input type="text" name="emailaddress" id="emailaddress" class="w-[90%] h-[55px] bg-white rounded-xl  p-5 outline-[#ee4270] outline-8 placeholder:font-['Raleway'] text-[#b74363]" placeholder="johndoe@example.com"/>
                    <button type="submit" class="w-[150px] h-[55px] bg-[#b74363] rounded-xl text-center text-white text-[18px] font-bold font-['Raleway'] leading-9 uppercase">Subscribe</button>
                </div>
            </form>
            
        {/if}
        {#if innerWidth > 600}
            <form method="POST" class="left-subscribe">
                <div class=" text-white text-[40px] font-medium font-['Raleway'] leading-[60px]">SUBSCRIBE TO OUR NEWSLETTER</div>
                <div class=" text-white text-[24px] font-light font-['Raleway'] leading-9">Stay in the loop whenever we make important announcements that you might want to know about</div>
                <div class="subscribe-field mt-16 flex flex-row gap-5">
                    <input type="text" name="emailaddress" id="emailaddress" class="w-[663px] h-[55px] bg-white rounded-xl  p-5 outline-[#ee4270] outline-8 placeholder:font-['Raleway'] text-[#b74363]" placeholder="johndoe@example.com"/>
                    <button type="submit" class="w-[197px] h-[55px] bg-[#b74363] rounded-xl text-center text-white text-[20px] font-bold font-['Raleway'] leading-9 uppercase">Subscribe</button>
                </div>
            </form>
            <div class="right-subscribe">
                <img class="w-[400px] h-[300px] object-cover" src={whitelogo} alt=""/>
            </div>
        {/if}
            
        </div>
</div>
<div class="contact-section flex flex-col justify-center items-center h-[30vh] max-[600px]:w-[100vw] mb-10">
    {#if y > 1250}
        <div class="contact-header my-7 p-10 bg-gray-200 w-[80%] max-[600px]:w-[90%] rounded-md">
            <div class="row flex flex-row gap-2 text-normal p-2">
                <div class="contact-title font-medium">Telephone:</div>
                <div class="contact-details text-gray-500">+592-632-0736</div>
            </div>
            <div class="row flex flex-row gap-2 text-normal p-2">
                <div class="contact-title font-medium">Email:</div>
                <div class="contact-details text-gray-500">info@muneshwers.store</div>
            </div>
            <div class="row flex flex-row gap-2 text-normal p-2">
                <div class="contact-title font-medium">Address:</div>
                <a href="https://maps.app.goo.gl/7z3UmUJdoz8pFR2HA" target="_blank">
                    <div class="contact-details text-gray-500 underline">19-20 Water St, Georgetown, Guyana</div>
                </a>
                
            </div>
        </div>
    {/if}
    
</div>
<Footer />

<svelte:window bind:scrollY={y} bind:innerWidth bind:innerHeight on:scroll={() => windowHeightCheck()} />