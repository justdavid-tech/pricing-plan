 const buttons = document.querySelectorAll(".get-started-btn");
      const formModal = document.getElementById("formModal");
      const closeFormBtn = document.getElementById("closeFormBtn");
      const selectedPlanInput = document.getElementById("selectedPlanInput");
      const planDropdown = document.getElementById("planDropdown");
      const getStartedForm = document.getElementById("getStartedForm");

      // Open form modal with selected plan
      buttons.forEach((button) => {
        button.addEventListener("click", () => {
          const plan = button.getAttribute("data-plan");
          selectedPlanInput.value = plan; // hidden input for backend
          planDropdown.value = plan; // pre-fill dropdown
          formModal.classList.remove("hidden");
        });
      });

      // Close modal
      closeFormBtn.addEventListener("click", () => {
        formModal.classList.add("hidden");
      });

      // Handle form submission
      getStartedForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const formData = new FormData(getStartedForm);
        const data = Object.fromEntries(formData.entries());
        console.log("Form Data:", data);

        if (!selectedPlanInput) {
          console.error(
            "❌ selectedPlanInput is null! Did you set it when clicking a plan?"
          );
          return;
        }

        Swal.fire({
          title: `Thanks ${data.name}!`,
          text: `You selected the ${selectedPlanInput.value} plan. We'll contact you soon.`,
          icon: "success",
          confirmButtonText: "Okay",
        });

        formModal.classList.add("hidden");
        getStartedForm.reset();
      });