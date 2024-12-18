<script>
    import shippingStaff from "$lib/assets/GYS00823.webp";
    import shippingStaffMobile from "$lib/assets/GYS00823_MOD.webp";
    import storeStaff from "$lib/assets/IMG_4167_MOD.webp";
    import { onMount, onDestroy } from "svelte";

    export let innerWidth;

    console.log("Inner Width: ", innerWidth);

    let carouselPhotos = [shippingStaff, storeStaff];
    let carouselPhotosMobile = [shippingStaffMobile, storeStaff];

    let i = 0;

    function next() {
        let heroImage = document.getElementById("heroImage")
        heroImage.classList.add("fade-out")
        setTimeout(() => {
            i = (i+1) % carouselPhotos.length;
        }, 500)
    }

    let timer;
    onMount(() => {
        timer = setInterval(next, 5000);
    });
    onDestroy(() => {
        clearInterval(timer);
    });

    $: src = carouselPhotos[i];
    $: mobileSrc = carouselPhotosMobile[i];
</script>
<div>
    {#if innerWidth <= 600}
        {#key mobileSrc}
            <img id="heroImage" class="fade-in opacity-100 object-cover w-full h-screen" src={mobileSrc} alt="Hero of staff" />
        {/key}
    {/if}
    {#if innerWidth > 600}
        {#key src}
            <img id="heroImage" class="fade-in object-cover w-full h-screen" {src} alt="Hero of staff" />
        {/key}
    {/if}
    
</div>