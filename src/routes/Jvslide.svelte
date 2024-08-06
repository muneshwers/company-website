<script>
    import paragonTrasport from "../paragon-transport-logo-text.png";
    import gysbi from "../gysbi.png";
    import cranes from "../cranes.png";
    import barges from "../barges.png";
    import harbourtugs from "../harbourtugs.png";
    import constructionLogo from "../construction-logo-black.png";
    import brandLogo from "../brand-logo.png";

    export let slideId;

</script>

<div class="w-full h-[300px] bg-white flex justify-center">
    <a href="/transport" class="jv-card w-[14.2%] h-[300px] bg-white  flex justify-center items-center">
        <div >
            <img class="w-[150px] h-[150px]" src={paragonTrasport} alt="jv logos" />
        </div>
    </a>
    <a href="/cranes" class="jv-card w-[14.2%] h-[300px] bg-white flex justify-center items-center">
        <div>
            <img class="w-[150px] h-[40px]" src={cranes} alt="jv logos" />
        </div>
    </a>
    <a href="/barges" class="jv-card w-[14.2%] h-[300px] bg-white flex justify-center items-center">
        <div>
            <img class="w-[150px] h-[150px]" src={barges} alt="jv logos" />
        </div>
    </a>
    <a href="/" class="jv-card w-[14.2%] h-[300px] bg-white flex justify-center items-center">
        <div>
            <img class="w-[150px] h-[150px]" src={brandLogo} alt="jv logos" />
        </div>
    </a>
    <a href="https://www.gysbi.gy/" target="_blank" class="jv-card w-[14.2%] h-[300px] bg-white flex justify-center items-center">
        <div>
            <img class="w-[150px] h-[150px]" src={gysbi} alt="jv logos" />
        </div>
    </a>
    <a href="/harbourtugs" class="jv-card w-[14.2%] h-[300px] bg-white  flex justify-center items-center">
        <div>
            <img class="w-[150px] h-[150px]" src={harbourtugs} alt="jv logos" />
        </div>
    </a>
    <a href="/construction" class="jv-card w-[14.2%] h-[300px] bg-white flex justify-center items-center">
        <div>
            <img class="w-[150px] h-[150px]" src={constructionLogo} alt="jv logos" />
        </div>
    </a>
    
</div>