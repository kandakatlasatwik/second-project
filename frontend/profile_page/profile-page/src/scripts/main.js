const profileData = {
    name: "John Doe",
    bio: "Web Developer and Designer",
    socialLinks: {
        twitter: "https://twitter.com/johndoe",
        linkedin: "https://linkedin.com/in/johndoe",
        github: "https://github.com/johndoe"
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const nameElement = document.getElementById('profile-name');
    const bioElement = document.getElementById('profile-bio');
    const socialLinksElement = document.getElementById('social-links');

    nameElement.textContent = profileData.name;
    bioElement.textContent = profileData.bio;

    for (const [platform, url] of Object.entries(profileData.socialLinks)) {
        const link = document.createElement('a');
        link.href = url;
        link.textContent = platform.charAt(0).toUpperCase() + platform.slice(1);
        link.target = "_blank";
        link.className = "social-link";
        socialLinksElement.appendChild(link);
    }
});