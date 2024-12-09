<script>
    import brandLogo from "$lib/assets/brand-logo.png";
    import textLogo from "$lib/assets/text-logo.png";
    import facebookIcon from "$lib/assets/icons8-facebook.svg";
    import instagramIcon from "$lib/assets/icons8-instagram.svg";
    import linkedinIcon from "$lib/assets/icons8-linkedin.svg";
    import tiktokIcon from "$lib/assets/icons8-tiktok.svg";
</script>

<div class="footer h-[320px] bg-[#EDEBE5]">
    <div class="footer-top flex flex-row gap-4 p-10">
        <div class="site-info w-1/4">
            <div class="site-name flex flex-row w-full">
                <img src={brandLogo} alt="Muneshwers Shipping" class="object-cover w-[150px] h-[100px]">
                <img src={textLogo} alt="Muneshwers Shipping" class="object-cover w-[200px] h-[100px]">
            </div>
            <div class="site-tagline playfair-display-regular text-[18px] ml-4 mt-2">
                Offering solutions, not excuses...
            </div>
            
        </div>
        <div class="social-media h-2/3 w-1/4 flex flex-col gap-4 raleway-light" >
                <a href="https://www.facebook.com/profile.php?id=100087564355386" target="_blank" class="social-link flex flex-row items-center gap-2">
                    <img src={facebookIcon} alt="Muneshwers Shipping" class="object-cover w-[30px] h-[30px]">
                    <div class="social-name">Muneshwers Shipping</div>
                </a>
                <a href="https://www.instagram.com/muneshwersshipping/" target="_blank" class="social-link flex flex-row items-center gap-2">
                    <img src={instagramIcon} alt="Muneshwers Shipping" class="object-cover w-[30px] h-[30px]">
                    <div class="social-name">@muneshwersshipping</div>
                </a>
                <a href="https://www.tiktok.com/@muneshwersshipping/" target="_blank" class="social-link flex flex-row items-center gap-2 ">
                    <img src={tiktokIcon} alt="Muneshwers Shipping" class="object-cover w-[30px] h-[30px]">
                    <div class="social-name">@muneshwersshipping</div>
                </a>
                <a href="https://www.linkedin.com/company/muneshwers-limited/" target="_blank" class="social-link flex flex-row items-center gap-2">
                    <img src={linkedinIcon} alt="Muneshwers Shipping" class="object-cover w-[30px] h-[30px]">
                    <div class="social-name">Muneshwers Limited</div>
                </a>
            </div>
        <div class="footer-section w-1/4">
            <div class="footer-section-title poppins-medium text-2xl">
                Address
            </div>
            <div class="footer-section-info poppins-light mt-4">
                45-47 Water Street, Georgetown, Guyana
            </div>
        </div>
        <div class="footer-section w-1/4">
                <div class="footer-section-title poppins-medium text-2xl">
                    Contact Info
                </div>
                <div class="footer-section-info poppins-light mt-4 flex flex-col gap-4">
                    <div class="info-number">
                        +592-227-7417/18
                    </div>
                    <div class="info-email">
                        info@muneshwers.com
                    </div>
                </div>
            </div>
        
    </div>
    <div class="footer-bottom border-[#5c5c5c7a] border-t-2 p-5 flex justify-center items-center raleway-light">
        Copyright © 2024 Muneshwers Ltd
    </div>
</div>