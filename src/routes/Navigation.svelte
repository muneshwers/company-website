<script>
	import Joint from "./Joint.svelte";
    import Services from "./Services.svelte";
    import mllogo from "$lib/assets/logo.png";
    import burgerMenu from "$lib/assets/burger-menu.svg";
    import {fade, slide} from "svelte/transition";

    export let activePage;
    export let innerWidth;

    $: jvToggle = false;
    $: serviceToggle = false;

    $: sideBarToggle = false;

    

    console.log(innerWidth);

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

    const toggle = () => {
        if (!sideBarToggle) {
            sideBarToggle = true;
            return
        }
        sideBarToggle = false;
    }

    const serviceToggleFunc = () => {
        if (!serviceToggle) {
            serviceToggle = true;
            return
        }
        serviceToggle = false;
    }

</script>


<div class="navigationBar z-[90] w-[100vw] p-5 fixed top-0 left-0 right-0 flex flex-row items-center justify-between" id="navigationBar">
    <a href="/">
        <div class="company-info flex flex-row items-center gap-2">
            <div class="logo w-10 h-10">
                <img src={mllogo} alt="Muneshwers Limited Logo" class="h-full w-full">
            </div>
            <div class="company-name the-seasons-light text-white text-[24px]">
                Mun<span class="the-seasons-italic">e</span>shw<span class="the-seasons-italic">e</span>rs Limit<span class="the-seasons-italic">e</span>d
            </div>
        </div>
    </a>
    {#if innerWidth < 720}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <!-- svelte-ignore a11y-missing-attribute -->
        <a on:click={() => toggle()}>
            <img src={burgerMenu} alt="menu icon" class="h-6 w-6">
        </a>
        {#if sideBarToggle}
            <!-- svelte-ignore a11y-click-events-have-key-events -->
             <!-- svelte-ignore a11y-no-static-element-interactions -->
            <div class="sideBarBackground fixed right-0 top-0 bg-transparent w-full h-[100svh]" on:click={() => sideBarToggle=false}></div>
            <div class="sideBarMenu fixed p-10 rounded-md right-1 top-2 bg-[#3d3938fa] w-72 h-[100svh] z-[91]" transition:slide={{duration: 500, axis: 'x'}} >
                <div class="menu-items flex flex-col text-white gap-6 text-[20px] mr-5" transition:fade={{duration: 300}}>
                    <a href="/">
                        <div class="{activityCheck.home ? "item-active": "item-mobile"}">
                            Home
                        </div>
                    </a>
                    <!-- svelte-ignore a11y-no-static-element-interactions -->
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <div class="dropdown relative" on:click={() => serviceToggleFunc()}>
                        <div class="{activityCheck.services ? "item-active": "item-mobile"}">
                            Services
                        </div>
                        {#if serviceToggle}
                            <div class="js-list p-5 opacity-75 mr-10 w-[190px] rounded-lg text-white text-sm poppins-regular flex flex-col">
                                <!--right-[380px]-->
                                <a href="/shipping">
                                    <div class="item-option p-1 cursor-pointer mt-1">
                                        Shipping
                                    </div>
                                </a>
                                <a href="/travel">
                                    <div class="item-option p-1 cursor-pointer mt-3 ">
                                        Travel
                                    </div>
                                </a>
                                <a href="/events">
                                    <div class="item-option p-1 cursor-pointer mt-3 ">
                                        Events Store
                                    </div>
                                </a>
                                <a href="/stores">
                                    <div class="item-option p-1 cursor-pointer mt-3 ">
                                        Home Goods Store
                                    </div>
                                </a>
                            </div>
                        {/if}
                        
                    </div>
                    <a href="/careers">
                        <div class="{activityCheck.careers ? "item-active": "item-mobile"}">
                            Careers
                        </div>
                    </a>
                    <!-- svelte-ignore a11y-no-static-element-interactions -->
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <!-- <div class="dropdown relative" on:mouseenter={() => {jvToggle = true}} on:mouseleave={() => {jvToggle = false}} on:click={() => jvToggle=true}>
                        <div class="{activityCheck.jointVentures ? "item-active": "item"}">
                            Joint Ventures 
                        </div>
                        {#if jvToggle}
                            <Joint />
                        {/if}
                        
                    </div> -->
                    <a href="/about">
                        <div class="{activityCheck.about ? "item-active": "item-mobile"}">
                            About
                        </div>
                    </a>
                    
                    <a href="/contact">
                        <div class="{activityCheck.contact ? "item-active": "item-mobile"}">
                            Contact
                        </div>
                    </a>
        </div>
            </div>
        {/if}
        
    {/if}
    {#if innerWidth >= 720}
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
            <!-- <div class="dropdown relative" on:mouseenter={() => {jvToggle = true}} on:mouseleave={() => {jvToggle = false}} on:click={() => jvToggle=true}>
                <div class="{activityCheck.jointVentures ? "item-active": "item"}">
                    Joint Ventures 
                </div>
                {#if jvToggle}
                    <Joint />
                {/if}
                
            </div> -->
            <a href="/about">
                <div class="{activityCheck.about ? "item-active": "item"}">
                    About
                </div>
            </a>
            
            <a href="/contact">
                <div class="{activityCheck.contact ? "item-active": "item"}">
                    Contact
                </div>
            </a>
        </div>
    {/if}
    
</div>