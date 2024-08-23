<script>
// @ts-nocheck

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
    import briefcase from "../../briefcase-solid.svg";
    import linkedinIcon from "../../icons8-linkedin.svg";
    import tiktokIcon from "../../icons8-tiktok.svg";
    import parallaxShipping from "../../parallaxshipping.jpg";
    import staffOne from "../../worker1.jpg";
    import staffTwo from "../../worker2.jpg";
    import shippingService from "../../GYS05795.jpg"
    import travelService from "../../travel.jpg";
    import store1Service from "../../store1.jpg";
    import store2Service from "../../events1.jpg";
    import location from "$lib/assets/location-dot-solid.svg";
    import email from "$lib/assets/envelope-solid.svg";
    import phone from "$lib/assets/phone-solid.svg";
	import Joint from "../Joint.svelte";
	import Navigation from "../Navigation.svelte";
	import Footer from "../Footer.svelte";
	import Jobcard from "../Jobcard.svelte";

    $: jvToggle = false;

    let y;

    let jobs = [
        {
            title: "Mechanic",
            company: "Muneshwers Shipping",
            type: "Full-time",
            location: "Water Street, Georgetown",
            description: "The Mechanic performed standard preventive maintenance and repairs relative to all plants, equipment and vehicles He/she conducts regular/scheduled maintenance, diagnostic and necessary adjustment and repairs to avoid or prevent unnecessary downtime, ensuring safe and efficient operations of all diesel and gasoline engines.",
            responsibilities: [
                "Determines vehicle condition by conducting inspections and diagnostic tests; identifying worn and damaged parts.",
                "Install and replace faulty parts and upgrading component as require (this involves, correcting and vehicle deficiencies by removing, repairing, adjusting, overhauling, assembling, disassembling, and replacing major assemblies, sub-assemblies, components, parts, or systems)",
                "Verifies equipment performance by conducting test drives",
                "Maintains equipment appearance by ensuring the necessary cleaning and washing are done after repairs",
                "Maintains equipment records by annotating services and repairs (this involves, damaged/faulty and replacement parts be accounted for)",
                "Contains costs by evaluating service and parts options as much as possible",
                "Updates job knowledge by participating in educational opportunities; reading technical and regulation publications.",
                "Ensure workspace is keep clean (this involves, regularly tidy up and keep work environment devoid of oil and grease spillages)",
                "Perform all task assigned guided by safety precautions and guidelines",
                "Any other related duties assigned",
            ],
            requirements: [
                "Certificate in mechanical or automotive engineer/ heavy duty machinery.",
                "Ability to interpret circuit diagrams and specification manuals.",
                "Knowledge of both petrol and diesel engines.",
                "Knowledge of safety measures and guidelines relative to equipment, plants and vehicles.",
                "Ability to identify all mechanical components.",
                "Ability to read and write legibly.",
                "Ability to operate necessary testers and related devices.",
                "Ability to test drive vehicles and operate other related equipment and machines.",
            ],
        },
        {
            title: "Brokerage Clerk",
            company: "Muneshwers Shipping",
            type: "Full-time",
            location: "Water Street, Georgetown",
            description: "Applications are invited from suitably qualified persons to fill the position of a brokerage clerk at Muneshwers Limited.",
            responsibilities: [
                "Determines vehicle condition by conducting inspections and diagnostic tests; identifying worn and damaged parts.",
                "Install and replace faulty parts and upgrading component as require (this involves, correcting and vehicle deficiencies by removing, repairing, adjusting, overhauling, assembling, disassembling, and replacing major assemblies, sub-assemblies, components, parts, or systems)",
                "Verifies equipment performance by conducting test drives",
                "Maintains equipment appearance by ensuring the necessary cleaning and washing are done after repairs",
                "Maintains equipment records by annotating services and repairs (this involves, damaged/faulty and replacement parts be accounted for)",
                "Contains costs by evaluating service and parts options as much as possible",
                "Updates job knowledge by participating in educational opportunities; reading technical and regulation publications.",
                "Ensure workspace is keep clean (this involves, regularly tidy up and keep work environment devoid of oil and grease spillages)",
                "Perform all task assigned guided by safety precautions and guidelines",
                "Any other related duties assigned",
            ],
            requirements: [
                "Certificate in mechanical or automotive engineer/ heavy duty machinery.",
                "Ability to interpret circuit diagrams and specification manuals.",
                "Knowledge of both petrol and diesel engines.",
                "Knowledge of safety measures and guidelines relative to equipment, plants and vehicles.",
                "Ability to identify all mechanical components.",
                "Ability to read and write legibly.",
                "Ability to operate necessary testers and related devices.",
                "Ability to test drive vehicles and operate other related equipment and machines.",
            ],
        },
        {
            title: "IT Technician",
            company: "Muneshwers Limited",
            type: "Full-time",
            location: "Water Street, Georgetown",
            description: "The IT Technician ensures all computer devices are operable and adequate for the user. He/she performs maintenance, upgrade and repairs to all computer systems and peripheral devices, and ensure procurement of suitable spares for ongoing IT operations.",
            responsibilities: [
                "Determines vehicle condition by conducting inspections and diagnostic tests; identifying worn and damaged parts.",
                "Install and replace faulty parts and upgrading component as require (this involves, correcting and vehicle deficiencies by removing, repairing, adjusting, overhauling, assembling, disassembling, and replacing major assemblies, sub-assemblies, components, parts, or systems)",
                "Verifies equipment performance by conducting test drives",
                "Maintains equipment appearance by ensuring the necessary cleaning and washing are done after repairs",
                "Maintains equipment records by annotating services and repairs (this involves, damaged/faulty and replacement parts be accounted for)",
                "Contains costs by evaluating service and parts options as much as possible",
                "Updates job knowledge by participating in educational opportunities; reading technical and regulation publications.",
                "Ensure workspace is keep clean (this involves, regularly tidy up and keep work environment devoid of oil and grease spillages)",
                "Perform all task assigned guided by safety precautions and guidelines",
                "Any other related duties assigned",
            ],
            requirements: [
                "Certificate in mechanical or automotive engineer/ heavy duty machinery.",
                "Ability to interpret circuit diagrams and specification manuals.",
                "Knowledge of both petrol and diesel engines.",
                "Knowledge of safety measures and guidelines relative to equipment, plants and vehicles.",
                "Ability to identify all mechanical components.",
                "Ability to read and write legibly.",
                "Ability to operate necessary testers and related devices.",
                "Ability to test drive vehicles and operate other related equipment and machines.",
            ],
        },
        {
            title: "Industrial Electrician",
            company: "Muneshwers Limited",
            type: "Full-time",
            location: "Water Street, Georgetown",
            description: "The Industrial Electrician installs, services and repairs wiring, conduits, fixtures and other electrical devices and systems within the Company. He/she ensures that all installations are done to the required standard. He/she conducts regular maintenance, diagnostic and repairs necessary to avoid or prevent unnecessary downtime, ensuring safe and efficient operations of all electrical systems.",
            responsibilities: [
                "Determines vehicle condition by conducting inspections and diagnostic tests; identifying worn and damaged parts.",
                "Install and replace faulty parts and upgrading component as require (this involves, correcting and vehicle deficiencies by removing, repairing, adjusting, overhauling, assembling, disassembling, and replacing major assemblies, sub-assemblies, components, parts, or systems)",
                "Verifies equipment performance by conducting test drives",
                "Maintains equipment appearance by ensuring the necessary cleaning and washing are done after repairs",
                "Maintains equipment records by annotating services and repairs (this involves, damaged/faulty and replacement parts be accounted for)",
                "Contains costs by evaluating service and parts options as much as possible",
                "Updates job knowledge by participating in educational opportunities; reading technical and regulation publications.",
                "Ensure workspace is keep clean (this involves, regularly tidy up and keep work environment devoid of oil and grease spillages)",
                "Perform all task assigned guided by safety precautions and guidelines",
                "Any other related duties assigned",
            ],
            requirements: [
                "Certificate in mechanical or automotive engineer/ heavy duty machinery.",
                "Ability to interpret circuit diagrams and specification manuals.",
                "Knowledge of both petrol and diesel engines.",
                "Knowledge of safety measures and guidelines relative to equipment, plants and vehicles.",
                "Ability to identify all mechanical components.",
                "Ability to read and write legibly.",
                "Ability to operate necessary testers and related devices.",
                "Ability to test drive vehicles and operate other related equipment and machines.",
            ],
        },
        {
            title: "Auto-Electrician",
            company: "Muneshwers Limited",
            type: "Full-time",
            location: "Water Street, Georgetown",
            description: "The Auto-Electrician ensures a standard preventive measure relative to all auto electrical plants, equipment and machines. He/she conducts regular/scheduled maintenance, diagnostic and repairs necessary to avoid or prevent unnecessary downtime, ensuring safe and efficient operations of all auto systems.",
            responsibilities: [
                "Determines vehicle condition by conducting inspections and diagnostic tests; identifying worn and damaged parts.",
                "Install and replace faulty parts and upgrading component as require (this involves, correcting and vehicle deficiencies by removing, repairing, adjusting, overhauling, assembling, disassembling, and replacing major assemblies, sub-assemblies, components, parts, or systems)",
                "Verifies equipment performance by conducting test drives",
                "Maintains equipment appearance by ensuring the necessary cleaning and washing are done after repairs",
                "Maintains equipment records by annotating services and repairs (this involves, damaged/faulty and replacement parts be accounted for)",
                "Contains costs by evaluating service and parts options as much as possible",
                "Updates job knowledge by participating in educational opportunities; reading technical and regulation publications.",
                "Ensure workspace is keep clean (this involves, regularly tidy up and keep work environment devoid of oil and grease spillages)",
                "Perform all task assigned guided by safety precautions and guidelines",
                "Any other related duties assigned",
            ],
            requirements: [
                "Certificate in mechanical or automotive engineer/ heavy duty machinery.",
                "Ability to interpret circuit diagrams and specification manuals.",
                "Knowledge of both petrol and diesel engines.",
                "Knowledge of safety measures and guidelines relative to equipment, plants and vehicles.",
                "Ability to identify all mechanical components.",
                "Ability to read and write legibly.",
                "Ability to operate necessary testers and related devices.",
                "Ability to test drive vehicles and operate other related equipment and machines.",
            ],
        },
        {
            title: "Sales Associate",
            company: "Muneshwers Events and Home Goods",
            type: "Full-time",
            location: "Water Street, Georgetown",
            description: "The Sales Associate (Stores) assists in making an effective contribution to the retail sales team objectives through efficient professional and accurate sales and support service on the Sale Floor operations with a strong focus on customer care and interest in product knowledge. The Sales Associate (Stores) accompanies customers and provides any assistance needed during shopping and ensures that the customer is adequately informed about product information and promotions.",
            responsibilities: [
                "Determines vehicle condition by conducting inspections and diagnostic tests; identifying worn and damaged parts.",
                "Install and replace faulty parts and upgrading component as require (this involves, correcting and vehicle deficiencies by removing, repairing, adjusting, overhauling, assembling, disassembling, and replacing major assemblies, sub-assemblies, components, parts, or systems)",
                "Verifies equipment performance by conducting test drives",
                "Maintains equipment appearance by ensuring the necessary cleaning and washing are done after repairs",
                "Maintains equipment records by annotating services and repairs (this involves, damaged/faulty and replacement parts be accounted for)",
                "Contains costs by evaluating service and parts options as much as possible",
                "Updates job knowledge by participating in educational opportunities; reading technical and regulation publications.",
                "Ensure workspace is keep clean (this involves, regularly tidy up and keep work environment devoid of oil and grease spillages)",
                "Perform all task assigned guided by safety precautions and guidelines",
                "Any other related duties assigned",
            ],
            requirements: [
                "Certificate in mechanical or automotive engineer/ heavy duty machinery.",
                "Ability to interpret circuit diagrams and specification manuals.",
                "Knowledge of both petrol and diesel engines.",
                "Knowledge of safety measures and guidelines relative to equipment, plants and vehicles.",
                "Ability to identify all mechanical components.",
                "Ability to read and write legibly.",
                "Ability to operate necessary testers and related devices.",
                "Ability to test drive vehicles and operate other related equipment and machines.",
            ],
        },
        {
            title: "Cashier",
            company: "Muneshwers Events and Home Goods",
            type: "Full-time",
            location: "Water Street, Georgetown",
            description: "The cashier is responsible for receiving all payments for goods purchased. He/she ensures that the day’s sales are accurately transacted and accounted for on a daily basis.",
            responsibilities: [
                "Determines vehicle condition by conducting inspections and diagnostic tests; identifying worn and damaged parts.",
                "Install and replace faulty parts and upgrading component as require (this involves, correcting and vehicle deficiencies by removing, repairing, adjusting, overhauling, assembling, disassembling, and replacing major assemblies, sub-assemblies, components, parts, or systems)",
                "Verifies equipment performance by conducting test drives",
                "Maintains equipment appearance by ensuring the necessary cleaning and washing are done after repairs",
                "Maintains equipment records by annotating services and repairs (this involves, damaged/faulty and replacement parts be accounted for)",
                "Contains costs by evaluating service and parts options as much as possible",
                "Updates job knowledge by participating in educational opportunities; reading technical and regulation publications.",
                "Ensure workspace is keep clean (this involves, regularly tidy up and keep work environment devoid of oil and grease spillages)",
                "Perform all task assigned guided by safety precautions and guidelines",
                "Any other related duties assigned",
            ],
            requirements: [
                "Certificate in mechanical or automotive engineer/ heavy duty machinery.",
                "Ability to interpret circuit diagrams and specification manuals.",
                "Knowledge of both petrol and diesel engines.",
                "Knowledge of safety measures and guidelines relative to equipment, plants and vehicles.",
                "Ability to identify all mechanical components.",
                "Ability to read and write legibly.",
                "Ability to operate necessary testers and related devices.",
                "Ability to test drive vehicles and operate other related equipment and machines.",
            ],
        },
        {
            title: "Welders",
            company: "Muneshwers Shipping",
            type: "Full-time",
            location: "Water Street, Georgetown",
            description: "The Mechanic performed standard preventive maintenance and repairs relative to all plants, equipment and vehicles He/she conducts regular/scheduled maintenance, diagnostic and necessary adjustment and repairs to avoid or prevent unnecessary downtime, ensuring safe and efficient operations of all diesel and gasoline engines.",
            responsibilities: [
                "Determines vehicle condition by conducting inspections and diagnostic tests; identifying worn and damaged parts.",
                "Install and replace faulty parts and upgrading component as require (this involves, correcting and vehicle deficiencies by removing, repairing, adjusting, overhauling, assembling, disassembling, and replacing major assemblies, sub-assemblies, components, parts, or systems)",
                "Verifies equipment performance by conducting test drives",
                "Maintains equipment appearance by ensuring the necessary cleaning and washing are done after repairs",
                "Maintains equipment records by annotating services and repairs (this involves, damaged/faulty and replacement parts be accounted for)",
                "Contains costs by evaluating service and parts options as much as possible",
                "Updates job knowledge by participating in educational opportunities; reading technical and regulation publications.",
                "Ensure workspace is keep clean (this involves, regularly tidy up and keep work environment devoid of oil and grease spillages)",
                "Perform all task assigned guided by safety precautions and guidelines",
                "Any other related duties assigned",
            ],
            requirements: [
                "Certificate in mechanical or automotive engineer/ heavy duty machinery.",
                "Ability to interpret circuit diagrams and specification manuals.",
                "Knowledge of both petrol and diesel engines.",
                "Knowledge of safety measures and guidelines relative to equipment, plants and vehicles.",
                "Ability to identify all mechanical components.",
                "Ability to read and write legibly.",
                "Ability to operate necessary testers and related devices.",
                "Ability to test drive vehicles and operate other related equipment and machines.",
            ],
        },
        {
            title: "Hauler Driver",
            company: "Paragon Transportation and Lifting Services",
            type: "Full-time",
            location: "Water Street, Georgetown",
            description: "The Mechanic performed standard preventive maintenance and repairs relative to all plants, equipment and vehicles He/she conducts regular/scheduled maintenance, diagnostic and necessary adjustment and repairs to avoid or prevent unnecessary downtime, ensuring safe and efficient operations of all diesel and gasoline engines.",
            responsibilities: [
                "Determines vehicle condition by conducting inspections and diagnostic tests; identifying worn and damaged parts.",
                "Install and replace faulty parts and upgrading component as require (this involves, correcting and vehicle deficiencies by removing, repairing, adjusting, overhauling, assembling, disassembling, and replacing major assemblies, sub-assemblies, components, parts, or systems)",
                "Verifies equipment performance by conducting test drives",
                "Maintains equipment appearance by ensuring the necessary cleaning and washing are done after repairs",
                "Maintains equipment records by annotating services and repairs (this involves, damaged/faulty and replacement parts be accounted for)",
                "Contains costs by evaluating service and parts options as much as possible",
                "Updates job knowledge by participating in educational opportunities; reading technical and regulation publications.",
                "Ensure workspace is keep clean (this involves, regularly tidy up and keep work environment devoid of oil and grease spillages)",
                "Perform all task assigned guided by safety precautions and guidelines",
                "Any other related duties assigned",
            ],
            requirements: [
                "Certificate in mechanical or automotive engineer/ heavy duty machinery.",
                "Ability to interpret circuit diagrams and specification manuals.",
                "Knowledge of both petrol and diesel engines.",
                "Knowledge of safety measures and guidelines relative to equipment, plants and vehicles.",
                "Ability to identify all mechanical components.",
                "Ability to read and write legibly.",
                "Ability to operate necessary testers and related devices.",
                "Ability to test drive vehicles and operate other related equipment and machines.",
            ],
        },
    ]
</script>

<svelte:head>
	<title>Muneshwers Limited</title>
	<meta name="description" content="Muneshwers Limited" />
</svelte:head>
<div class="landing-top relative">
    <div class="hero-image h-[50vh] relative">
        <img src={heroImage} alt="Hero landing page" class="object-cover h-full w-full">
        <div class="image-cover h-full w-full opacity-30 bg-[#3A3A3A] absolute top-0"></div>
        <div class="hero-text uppercase text-white text-[70px] absolute bottom-20  left-16 w-9/12 leading-[120px] flex flex-col">
            
            <div class="flex flex-row items-center gap-6">
                <div class="individual-hero-text logo w-36 h-36">
                    <img src={brandLogo} alt="Muneshwers Limited Logo" class="h-full w-full">
                </div>
                <p class="individual-hero-text">Careers</p>
            </div>
        </div>
    </div>
    <Navigation activePage="careers"/>
</div>
<div class="introduction-section flex flex-col justify-center">
    <div class="career-header my-10 justify-center relative flex h-[150px]">
            <div class="intro-details">
                <div class="intro-text mt-8 text-center uppercase flex flex-col text-[50px] text-[#4876B6] items-center">
                    <p>Choose the career that's right for you!</p>
                </div>
                <div class="intro-subtext text-center text-[#3D3938] text-[28px] raleway-light flex flex-col items-center">
                    <p>Choose from our list of available job opportunities below.</p>
                </div>
            </div>
    </div>
    <div class="benefits text-justify text-[18px] raleway-light flex flex-col items-center">
        <p class="w-9/12">
            We are looking for vibrant, skilled, and passionate individuals to add value to
            our brand. In addition to competitive pay, we provide many other benefits
            and possibilities for advancement, including:
        </p>
        <ul class="list-disc w-9/12 mt-5">
            <li>Discounts from our Events and Home Goods stores</li>
            <li>Holiday bonuses</li>
            <li>Performance incentives for our drivers</li>
            <li>Great retirement plan</li>
            <li>Great Medical Insurance coverage</li>
            <li>Training with international consultants for our operational staff</li>
            <li>Career growth and development on the job</li>
        </ul>
    </div>
</div>
<div class="jobs-section flex flex-row">
    <div class="job-listings flex flex-col justify-center items-center mt-10">
        {#each jobs as job}
            <Jobcard jobDetails={job}/>
        {/each}
    </div>
</div>

<Footer />

<svelte:window bind:scrollY={y} />

