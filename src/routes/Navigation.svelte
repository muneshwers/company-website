<script>
	import Joint from "./Joint.svelte";
    import Services from "./Services.svelte";
    import mllogo from "../logo.png";

    export let activePage;

    $: jvToggle = false;
    $: serviceToggle = false;

    let activityCheck = {
        home: false,
        stores: false,
        jointVentures: false,
        careers: false,
        services: false,
        about: false,
        contact: false
    }

    if(activePage == 'home') {
        activityCheck.home = true;
    }
    if(activePage == 'stores') {
        activityCheck.stores = true;
    }
    if(activePage == 'jvs') {
        activityCheck.jointVentures = true;
    }
    if(activePage == 'careers') {
        activityCheck.careers = true;
    }
    if(activePage == 'services') {
        activityCheck.services = true;
    }
    if(activePage == 'about') {
        activityCheck.about = true;
    }
    if(activePage == 'contact') {
        activityCheck.contact = true;
    }

</script>
<div class="navigationBar z-50 w-full p-5 fixed top-0 left-0 right-0 flex flex-row items-center justify-between">
    <a href="/">
        <div class="company-info flex flex-row items-center gap-2">
            <div class="logo w-16 h-16">
                <img src={mllogo} alt="Muneshwers Limited Logo" class="h-full w-full">
            </div>
            <div class="company-name the-seasons-light text-white text-[24px]">
                Mun<span class="the-seasons-italic">e</span>shw<span class="the-seasons-italic">e</span>rs Limit<span class="the-seasons-italic">e</span>d
            </div>
        </div>
    </a>
    
    <div class="menu-items flex flex-row text-white gap-6 text-[20px] mr-5">
        <a href="/">
            <div class="{activityCheck.home ? "item-active": "item"}">
                Home
            </div>
        </a>
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="dropdown relative" on:mouseenter={() => {serviceToggle = true}} on:mouseleave={() => {serviceToggle = false}} on:click={() => serviceToggle=true}>
            <div class="{activityCheck.services ? "item-active": "item"}">
                Services
            </div>
            {#if serviceToggle}
                <Services />
            {/if}
            
        </div>
        <a href="/careers">
            <div class="{activityCheck.careers ? "item-active": "item"}">
                Careers
            </div>
        </a>
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="dropdown relative" on:mouseenter={() => {jvToggle = true}} on:mouseleave={() => {jvToggle = false}} on:click={() => jvToggle=true}>
            <div class="{activityCheck.jointVentures ? "item-active": "item"}">
                Joint Ventures 
            </div>
            {#if jvToggle}
                <Joint />
            {/if}
            
        </div>
        <div class="{activityCheck.about ? "item-active": "item"}">
            About
        </div>
        <div class="{activityCheck.contact ? "item-active": "item"}">
            Contact
        </div>
    </div>
</div>