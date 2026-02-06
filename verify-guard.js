(function () {
    const steps = ["verify1.html", "verify2.html", "verify3.html", "index.html"];
    const required = Number(window.VERIFY_REQUIRED_STEP ?? 0);

    let step = Number(localStorage.getItem("step"));
    if (!localStorage.getItem("step") || Number.isNaN(step)) {
        step = 0;
        localStorage.setItem("step", "0");
    }

    const currentPage = location.pathname.split("/").pop() || "index.html";

    if (step >= 3) {
        if (currentPage !== "index.html") {
            window.location.href = "index.html";
        }
        return;
    }

    if (step !== required) {
        const target = steps[step] || "verify1.html";
        if (currentPage !== target) {
            window.location.href = target;
        }
    }
})();
