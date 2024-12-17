<script>
    import briefcase from "$lib/assets/briefcase-solid.svg";
    import location from "$lib/assets/location-dot-solid.svg";

    export let jobDetails;
    export let innerWidth;

    let job = jobDetails.form;

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
<div class="job-card flex flex-col p-10 w-10/12 max-[1415px]:w-11/12 gap-4 rounded-lg border-2 mb-5 shadow-md hover:shadow-lg duration-200 hover:border-[#96b9ea]">
    <div class="job-header flex flex-row max-[1415px]:flex-col justify-between items-start">
        <div class="flex flex-row items-center gap-8">
            {#if innerWidth > 1415}
            <div class="job-icon">
                <img src={briefcase} alt="" width="40px" height="40px">
            </div>
            {/if}
            
            <div class="job-details flex flex-col gap-1">
                <div class="job-title text-2xl raleway-medium">
                    {job.title}
                </div>
                <div class="job-subtitle flex flex-row max-[1415px]:flex-col gap-4 items-center max-[1415px]:items-start max-[1415px]:gap-1">
                    <div class="company text-sm text-[#848484] raleway-light">{job.company}</div>
                    <div class="{job.type == "Full-Time" ? "full-time-badge" : "part-time-badge"} type text-xs p-2 w-20 rounded-lg  text-center">Full-time</div>
                </div>
            </div>
        </div>
        
        <div class="job-location flex flex-row gap-2 items-center max-[1415px]:mt-5">
            <div class="location-icon">
                <img src={location} alt="" width="15px" height="15px">
            </div>
            <div class="location text-sm text-[#848484]">
                {job.location}
            </div>
        </div>
    </div>
    <div class="job-details raleway-regular">
        {job.description}
    </div>
    {#if detailsToggle}
        <div class="more-job">
            <div class="more-section flex flex-col items-center">
                <div class="more-title text-xl mt-2 mb-1 raleway-medium w-full">Responsibilities:</div>
                <ul class="list-disc text-base raleway-regular w-[95%]">
                    {#each job.responsibilities as responsibility}
                        <li>{responsibility}</li>
                    {/each}
                </ul>
            </div>
            <div class="more-section flex flex-col items-center">
                <div class="more-title text-xl mt-2 mb-1 raleway-medium w-full">Requirements:</div>
                <ul class="list-disc text-base raleway-regular w-[95%]">
                    {#each job.requirements as requirement}
                        <li>{requirement}</li>
                    {/each}
                </ul>
            </div>
        </div>
    {/if}
    <div class="job-footer flex justify-between">
        <button class="see-more p-2 rounded-md hover:text-[#659bff] duration-150" on:click={() => toggleMore()}>
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