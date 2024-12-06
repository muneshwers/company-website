<script>
    import shipping from "$lib/assets/GYS00823.webp";
    import stores from "$lib/assets/IMG_4167_MOD.webp";

    export let slideImage;

    let slideChoice;

    console.log("Slide info: ", slideImage.slideId)

    if(slideImage.slideId == 1) {
        slideChoice = shipping;
    } else {
        slideChoice = stores
    }

</script>

<img class="object-cover w-full h-screen" src={slideChoice} alt="Hero of staff" />
