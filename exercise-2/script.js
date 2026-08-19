/* =========================================================
   WORKER PROGRESS REPORT
   EXERCISE 2
========================================================= */


/* =========================================================
   HELPER FUNCTIONS
========================================================= */

function getValue(id) {

    const element = document.getElementById(id);

    if (!element) {
        return "";
    }

    return element.value.trim();

}


function formatDate(dateString) {

    if (!dateString) {
        return "-";
    }

    const date = new Date(dateString + "T00:00:00");

    if (Number.isNaN(date.getTime())) {
        return dateString;
    }

    return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
    });

}


function formatSubmissionDate(date) {

    return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
    }) + " " +
    date.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit"
    });

}


function output(id, value) {

    const element = document.getElementById(id);

    if (element) {

        element.textContent =
            value || "-";

    }

}


/* =========================================================
   SUCCESS MESSAGE
========================================================= */

function showMessage(message) {

    const messageBox =
        document.getElementById("successMessage");

    if (!messageBox) {
        return;
    }

    messageBox.textContent = message;

    messageBox.classList.add("show");

    setTimeout(() => {

        messageBox.classList.remove("show");

    }, 3000);

}


/* =========================================================
   GENERATE REPORT
========================================================= */

const generateButton =
    document.getElementById("generateBtn");

if (generateButton) {

    generateButton.addEventListener(
        "click",
        generateReport
    );

}


function generateReport() {

    const workerName =
        getValue("workerName");

    const claimNumber =
        getValue("claimNumber");

    const reportDate =
        getValue("reportDate");

    const workerAppId =
        getValue("workerAppId");


    /* ---------------------------------------------------------
       BASIC VALIDATION
    --------------------------------------------------------- */

    if (!workerName) {

        alert("Please enter Worker Name.");

        document
            .getElementById("workerName")
            .focus();

        return;

    }


    if (!claimNumber) {

        alert("Please enter Claim Number.");

        document
            .getElementById("claimNumber")
            .focus();

        return;

    }


    if (!reportDate) {

        alert("Please enter Report Date.");

        document
            .getElementById("reportDate")
            .focus();

        return;

    }


    /* ---------------------------------------------------------
       WORKER / CLAIM
    --------------------------------------------------------- */

    output(
        "claimNumberOutput",
        claimNumber
    );


    output(
        "claimNumberOutput2",
        claimNumber
    );


    output(
        "claimNumberOutput3",
        claimNumber
    );


    output(
        "signatureClaimNumber",
        claimNumber
    );


    output(
        "signatureWorkerName",
        workerName
    );


    output(
        "reportDateOutput",
        formatDate(reportDate)
    );


    output(
        "signatureDate",
        formatDate(reportDate)
    );


    /* ---------------------------------------------------------
       RETURN TO WORK
    --------------------------------------------------------- */

    output(
        "returnStatusOutput",
        getValue("returnStatus")
    );


    output(
        "returnDateOutput",
        formatDate(
            getValue("returnDate")
        )
    );


    output(
        "expectedReturnDateOutput",
        formatDate(
            getValue("expectedReturnDate")
        )
    );


    output(
        "workDutiesOutput",
        getValue("workDuties")
    );


    output(
        "missedWorkOutput",
        getValue("missedWork")
    );


    output(
        "returnConcernsOutput",
        getValue("returnConcerns")
    );


    output(
        "employerContactOutput",
        getValue("employerContact")
    );


    output(
        "employerContactDateOutput",
        formatDate(
            getValue("employerContactDate")
        )
    );


    output(
        "returnProgressOutput",
        getValue("returnProgress")
    );


    output(
        "workingStatusOutput",
        getValue("workingStatus")
    );


    /* ---------------------------------------------------------
       RECOVERY
    --------------------------------------------------------- */

    output(
        "recoveryStatusOutput",
        getValue("recoveryStatus")
    );


    output(
        "recoveryCommentsOutput",
        getValue("recoveryComments")
    );


    /* ---------------------------------------------------------
       PAIN
    --------------------------------------------------------- */

    output(
        "painRatingOutput",
        getValue("painRating")
    );


    /* ---------------------------------------------------------
       MEDICAL TREATMENT
    --------------------------------------------------------- */

    output(
        "treatmentStatusOutput",
        getValue("treatmentStatus")
    );


    output(
        "medicalProviderTypeOutput",
        getValue("medicalProviderType")
    );


    output(
        "medicalProviderNameOutput",
        getValue("medicalProviderName")
    );


    output(
        "lastTreatmentDateOutput",
        formatDate(
            getValue("lastTreatmentDate")
        )
    );


    output(
        "lastProviderOutput",
        getValue("medicalProviderName")
    );


    output(
        "physioFrequencyOutput",
        getValue("physioFrequency")
    );


    output(
        "nextTreatmentOutput",
        getValue("nextTreatment")
    );


    /* ---------------------------------------------------------
       HOME EXERCISES
    --------------------------------------------------------- */

    output(
        "exerciseStatusOutput",
        getValue("exerciseStatus")
    );


    output(
        "exerciseListOutput",
        getValue("exerciseList")
    );


    /* ---------------------------------------------------------
       OTHER INFORMATION
    --------------------------------------------------------- */

    output(
        "additionalInformationOutput",
        getValue("additionalInformation")
    );


    /* ---------------------------------------------------------
       MEDICATION
    --------------------------------------------------------- */

    output(
        "medicationStatusOutput",
        getValue("medicationStatus")
    );


    output(
        "medicationNameOutput",
        getValue("medicationName")
    );


    /* ---------------------------------------------------------
       WORKER APP ID
    --------------------------------------------------------- */

    output(
        "workerAppIdFooter1",
        workerAppId
    );


    output(
        "workerAppIdFooter2",
        workerAppId
    );


    output(
        "workerAppIdFooter3",
        workerAppId
    );


    /* ---------------------------------------------------------
       SUBMISSION DATE
    --------------------------------------------------------- */

    const now = new Date();

    const submissionDate =
        formatSubmissionDate(now);


    output(
        "submittedDate1",
        submissionDate
    );


    output(
        "submittedDate2",
        submissionDate
    );


    output(
        "submittedDate3",
        submissionDate
    );


    /* ---------------------------------------------------------
       SHOW REPORT
    --------------------------------------------------------- */

    const report =
        document.getElementById("report");

    if (report) {

        report.classList.add("visible");

    }


    showMessage(
        "Worker Progress Report generated successfully."
    );


    /* ---------------------------------------------------------
       SCROLL TO REPORT
       
       This happens ONLY when the user clicks
       Generate Report.
       
       It will NOT happen while entering data.
    --------------------------------------------------------- */

    setTimeout(() => {

        if (report) {

            report.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    }, 100);

}


/* =========================================================
   RESET
========================================================= */

const resetButton =
    document.getElementById("resetBtn");

if (resetButton) {

    resetButton.addEventListener(
        "click",
        resetForm
    );

}


function resetForm() {

    const confirmed =
        confirm(
            "Are you sure you want to reset the report?"
        );


    if (!confirmed) {
        return;
    }


    document
        .querySelectorAll(
            ".form-panel input, .form-panel select, .form-panel textarea"
        )
        .forEach(element => {

            element.value = "";

        });


    const report =
        document.getElementById("report");

    if (report) {

        report.classList.remove("visible");

    }


    showMessage(
        "Form has been reset."
    );

}


/* =========================================================
   IMPORTANT
   NO LIVE REPORT GENERATION WHILE ENTERING DATA
========================================================= */

/*
   The previous version had this:

   document
       .querySelectorAll(...)
       .forEach(element => {
           element.addEventListener("change", () => {
               generateReport();
           });
       });

   That caused the page to automatically generate the
   report and scroll down whenever a field was changed.

   It has intentionally been removed.

   The user now enters ALL information first and then
   clicks "Generate Report".
*/


/* =========================================================
   END OF EXERCISE 2 JAVASCRIPT
========================================================= */