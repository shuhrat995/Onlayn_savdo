function initAccountPage() {
    if (!document.querySelector(".profile-form")) return;
    if (document.body.dataset.accountInited === "1") return;
    document.body.dataset.accountInited = "1";

    const profileForm = document.querySelector(".profile-form");
    const passwordSection = document.querySelector(".pass-table");

    if (!profileForm || !passwordSection) return;

    const profileInputs = profileForm.querySelectorAll(".form-grid input");
    const passwordInputs = passwordSection.querySelectorAll('input[type="password"]');
    const newPassword = passwordInputs[1];
    const confirmPassword = passwordInputs[2];
    const saveBtn = profileForm.querySelector(".save-btn");
    const cancelBtn = profileForm.querySelector(".cancel-btn");

    loadSavedProfile();

    profileInputs.forEach((input) => {
        input.addEventListener("blur", () => validateInput(input));
    });

    confirmPassword?.addEventListener("input", () => {
        if (newPassword?.value && confirmPassword.value !== newPassword.value) {
            showError(confirmPassword, "Passwords do not match");
        } else {
            removeError(confirmPassword);
        }
    });

    saveBtn?.addEventListener("click", (event) => {
        event.preventDefault();

        let isValid = true;
        profileInputs.forEach((input) => {
            if (!validateInput(input)) isValid = false;
        });

        if (newPassword?.value && confirmPassword?.value !== newPassword.value) {
            showError(confirmPassword, "Passwords do not match");
            isValid = false;
        }

        if (!isValid) {
            showNotification("Please fill the highlighted fields.", "error");
            return;
        }

        const profileData = {
            firstName: document.getElementById("first-name")?.value || "",
            lastName: document.getElementById("last-name")?.value || "",
            email: document.getElementById("email")?.value || "",
            address: document.getElementById("address")?.value || ""
        };

        localStorage.setItem("userProfile", JSON.stringify(profileData));
        showNotification("Profile saved successfully.", "success");
    });

    cancelBtn?.addEventListener("click", () => {
        loadSavedProfile();
        [...profileInputs, ...passwordInputs].forEach((input) => {
            input.style.borderColor = "";
            removeError(input);
        });
        passwordInputs.forEach((input) => {
            input.value = "";
        });
    });

    function validateInput(input) {
        const value = input.value.trim();

        if (!value) {
            showError(input, "This field is required");
            return false;
        }

        if (input.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
            showError(input, "Enter a valid email");
            return false;
        }

        removeError(input);
        return true;
    }

    function showError(input, message) {
        removeError(input);
        input.style.borderColor = "#db4444";

        const error = document.createElement("span");
        error.className = "error-message";
        error.textContent = message;
        input.parentElement.appendChild(error);
    }

    function removeError(input) {
        input.style.borderColor = "";
        const error = input.parentElement?.querySelector(".error-message");
        error?.remove();
    }

    function loadSavedProfile() {
        const savedProfile = localStorage.getItem("userProfile");
        if (!savedProfile) return;

        const data = JSON.parse(savedProfile);
        document.getElementById("first-name").value = data.firstName || "";
        document.getElementById("last-name").value = data.lastName || "";
        document.getElementById("email").value = data.email || "";
        document.getElementById("address").value = data.address || "";
    }

    function showNotification(message, type) {
        document.querySelector(".notification")?.remove();

        const notification = document.createElement("div");
        notification.className = `notification ${type}`;
        notification.textContent = message;
        document.body.appendChild(notification);

        setTimeout(() => notification.remove(), 3000);
    }
}

document.addEventListener("DOMContentLoaded", initAccountPage);
window.addEventListener("codex:route-change", () => {
    document.body.dataset.accountInited = "0";
    initAccountPage();
});
