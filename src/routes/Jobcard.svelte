<script>
    import briefcase from "../briefcase-solid.svg";
    import location from "../location-dot-solid.svg";

    export let jobDetails;

    let jobTest = {
        title: "Hauler Driver",
        company: "Muneshwers Shipping",
        type: "Full-time",
        location: "Water Street, Georgetown",
    }
</script>
<div class="job-card flex flex-col p-10 w-10/12 gap-3 rounded-lg border-0 mb-5 cursor-pointer shadow-md hover:shadow-lg duration-200">
    <div class="job-header flex flex-row justify-between items-start">
        <div class="flex flex-row items-center gap-8">
            <div class="job-icon">
                <img src={briefcase} alt="" width="40px" height="40px">
            </div>
            <div class="job-details flex flex-col gap-1">
                <div class="job-title text-2xl">
                    {jobDetails.title}
                </div>
                <div class="job-subtitle flex flex-row gap-4 items-center">
                    <div class="company text-sm text-[#848484]">{jobDetails.company}</div>
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
    <div class="job-footer">
        1. Apply now
    </div>
</div>