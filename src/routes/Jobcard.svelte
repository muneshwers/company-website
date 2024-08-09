<script>
    import briefcase from "../briefcase-solid.svg";
    import location from "$lib/assets/location-dot-solid.svg";

    export let jobDetails;

    let jobTest = {
        title: "Hauler Driver",
        company: "Muneshwers Shipping",
        type: "Full-time",
        location: "Water Street, Georgetown",
    }
    let detailsToggle = false;
    let buttonName = "See More";


    $: toggleDetails = {
        buttonName: "See More",
        toggleCheck: false,
        toggle: function() {
            if (!this.toggleCheck) {
                this.toggleCheck = true;
                this.buttonName = "See Less";
                console.log("Toggle is false, now true!");
                return
            }
            this.toggleCheck = false;
            this.buttonName = "See More";
            console.log("Toggle is true, now false!");
            return
        }
    }

    const toggleMore = () => {
        if(!detailsToggle) {
            buttonName = "See Less";
            detailsToggle = true;
            return
        }
        buttonName = "See More";
        detailsToggle = false;
    }
</script>
<div class="job-card flex flex-col p-10 w-10/12 gap-4 rounded-lg border-0 mb-5 shadow-md hover:shadow-lg duration-200">
    <div class="job-header flex flex-row justify-between items-start">
        <div class="flex flex-row items-center gap-8">
            <div class="job-icon">
                <img src={briefcase} alt="" width="40px" height="40px">
            </div>
            <div class="job-details flex flex-col gap-1">
                <div class="job-title text-2xl raleway-medium">
                    {jobDetails.title}
                </div>
                <div class="job-subtitle flex flex-row gap-4 items-center">
                    <div class="company text-sm text-[#848484] raleway-light">{jobDetails.company}</div>
                    <div class="{jobDetails.type == "Full-time" ? "full-time-badge" : "part-time-badge"} type text-xs p-2 w-20 rounded-lg  text-center">Full-time</div>
                </div>
            </div>
        </div>
        
        <div class="job-location flex flex-row gap-2 items-center">
            <div class="location-icon">
                <img src={location} alt="" width="15px" height="15px">
            </div>
            <div class="location text-sm text-[#848484]">
                {jobDetails.location}
            </div>
        </div>
    </div>
    <div class="job-details raleway-regular">
        {jobDetails.description}
    </div>
    {#if detailsToggle}
        <div class="more-job">
            <div class="more-section">
                <div class="more-title text-xl mt-2 mb-1 raleway-medium">Responsibilities:</div>
                <ul class="list-disc text-base raleway-regular">
                    {#each jobDetails.responsibilities as responsibility}
                        <li>{responsibility}</li>
                    {/each}
                </ul>
            </div>
            <div class="more-section">
                <div class="more-title text-xl mt-2 mb-1 raleway-medium">Requirements:</div>
                <ul class="list-disc text-base raleway-regular">
                    {#each jobDetails.requirements as requirement}
                        <li>{requirement}</li>
                    {/each}
                </ul>
            </div>
        </div>
    {/if}
    <div class="job-footer flex justify-between">
        <button class="see-more p-2 rounded-md" on:click={() => toggleMore()}>
            {buttonName}
        </button>
        <div class="absolute"></div>
        <div class="relative flex ">
            <div class="animate-ping absolute inline-flex h-full w-full rounded-md bg-[#0f3f86] opacity-20"></div>
            <a href="/careers/apply">
                <button class="relative inline-flex rounded-md bg-[#0f3f86] hover:bg-[#3a66a9] hover:duration-150 w-[80px] p-3 items-center justify-center text-white">Apply</button>
            </a>
            
        </div>
    </div>
</div>