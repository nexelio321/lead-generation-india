document.addEventListener("DOMContentLoaded", function () {
    async function checkLocation() {
        try {
            const response = await fetch("https://ipapi.co/json/");
            const data = await response.json();

            if (data.country !== "IN") {
                alert("Sorry, this tool is only available in India.");
                document.getElementById("leadForm").style.display = "none";
            }
        } catch (error) {
            console.error("Error fetching location:", error);
        }
    }

    checkLocation();

    document.getElementById("leadForm").addEventListener("submit", function (e) {
        e.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const niche = document.getElementById("niche").value;
        const location = document.getElementById("location").value;

        console.log(`Lead Captured: ${name}, ${email}, ${niche}, ${location}`);
        alert("Thank you! We will contact you soon.");
    });
});
