/* =========================================================
   APPLICATION DATA
========================================================= */

const expenseData = {

    prescriptions: [],

    otcDrugs: [],

    medicalSupplies: [],

    parking: [],

    mileage: [],

    transportation: []

};


const completedSections = new Set();


/* =========================================================
   HELPER FUNCTIONS
========================================================= */

function getValue(id) {

    return document.getElementById(id).value.trim();

}


function getNumber(id) {

    return parseFloat(document.getElementById(id).value) || 0;

}


function escapeHTML(value) {

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


function formatMoney(amount) {

    return new Intl.NumberFormat("en-CA", {

        style: "currency",

        currency: "CAD"

    }).format(amount || 0);

}


function formatDate(dateString) {

    if (!dateString) {

        return "-";

    }

    const parts = dateString.split("-");

    if (parts.length !== 3) {

        return dateString;

    }

    return `${parts[1]}/${parts[2]}/${parts[0]}`;

}


function showMessage(message) {

    const messageBox =
        document.getElementById("successMessage");

    messageBox.textContent = message;

    messageBox.classList.add("show");

    setTimeout(() => {

        messageBox.classList.remove("show");

    }, 3500);

}


/* =========================================================
   VALIDATION
========================================================= */

function validateFields(fields) {

    for (const field of fields) {

        const element =
            document.getElementById(field.id);

        if (!element.value.trim()) {

            alert(`Please enter ${field.name}.`);

            element.focus();

            return false;

        }

    }

    return true;

}


/* =========================================================
   PROGRESS
========================================================= */

function updateProgress() {

    const completed =
        completedSections.size;

    const total = 7;

    const percentage =
        (completed / total) * 100;

    document.getElementById("progressText")
        .textContent = `${completed} / ${total}`;

    document.getElementById("progressBar")
        .style.width = `${percentage}%`;

}


/* =========================================================
   STATUS
========================================================= */

function updateStatus(statusId, hasEntries) {

    const element =
        document.getElementById(statusId);

    if (!element) {

        return;

    }

    if (hasEntries) {

        element.textContent = "Entries added";

        element.classList.remove("pending");

        element.classList.add("complete");

    } else {

        element.textContent = "No entries";

        element.classList.remove("complete");

        element.classList.add("pending");

    }

}


/* =========================================================
   WORKER INFORMATION
========================================================= */

function submitWorkerInformation() {

    const workerName =
        getValue("workerName");

    const claimNumber =
        getValue("claimNumber");


    if (!workerName || !claimNumber) {

        alert(
            "Please enter both Worker Name and Claim Number."
        );

        return;

    }


    document.getElementById("headerClaimNumber")
        .textContent = claimNumber;

    document.getElementById("displayClaimNumber")
        .textContent = claimNumber;

    document.getElementById("displayWorkerName")
        .textContent = workerName;


    completedSections.add("worker");

    const status =
        document.getElementById("workerStatus");

    status.textContent = "Complete";

    status.classList.remove("pending");

    status.classList.add("complete");


    updateProgress();

    showMessage(
        "Worker information saved successfully."
    );

}


/* =========================================================
   PRESCRIPTION DRUGS
========================================================= */

document
    .getElementById("addPrescriptionBtn")
    .addEventListener("click", addPrescription);


function addPrescription() {

    const valid = validateFields([

        {
            id: "drugName",
            name: "Drug Name"
        },

        {
            id: "prescriptionDate",
            name: "Prescription Date"
        },

        {
            id: "prescriptionPurchaseDate",
            name: "Date Purchased"
        },

        {
            id: "prescriptionProvider",
            name: "Healthcare Provider Name"
        },

        {
            id: "prescriptionAmount",
            name: "Paid Amount"
        }

    ]);


    if (!valid) {

        return;

    }


    const entry = {

        drugName: getValue("drugName"),

        prescriptionDate:
            getValue("prescriptionDate"),

        purchaseDate:
            getValue("prescriptionPurchaseDate"),

        provider:
            getValue("prescriptionProvider"),

        amount:
            getNumber("prescriptionAmount")

    };


    expenseData.prescriptions.push(entry);

    renderEntries("prescriptions");

    clearFields([

        "drugName",
        "prescriptionDate",
        "prescriptionPurchaseDate",
        "prescriptionProvider",
        "prescriptionAmount"

    ]);


    showMessage("Prescription added.");

}


/* =========================================================
   OTC DRUGS
========================================================= */

document
    .getElementById("addOTCBtn")
    .addEventListener("click", addOTCDrug);


function addOTCDrug() {

    const valid = validateFields([

        {
            id: "otcDrugName",
            name: "Drug Name"
        },

        {
            id: "otcDate",
            name: "Date Purchased"
        },

        {
            id: "otcAmount",
            name: "Paid Amount"
        },

        {
            id: "otcSeller",
            name: "Seller's Name"
        },

        {
            id: "otcReason",
            name: "Reason for Purchasing"
        }

    ]);


    if (!valid) {

        return;

    }


    expenseData.otcDrugs.push({

        drugName:
            getValue("otcDrugName"),

        date:
            getValue("otcDate"),

        amount:
            getNumber("otcAmount"),

        seller:
            getValue("otcSeller"),

        reason:
            getValue("otcReason")

    });


    renderEntries("otcDrugs");

    clearFields([

        "otcDrugName",
        "otcDate",
        "otcAmount",
        "otcSeller",
        "otcReason"

    ]);


    showMessage("OTC drug added.");

}


/* =========================================================
   MEDICAL SUPPLIES
========================================================= */

document
    .getElementById("addSupplyBtn")
    .addEventListener("click", addMedicalSupply);


function addMedicalSupply() {

    const valid = validateFields([

        {
            id: "supplyItem",
            name: "Item Purchased"
        },

        {
            id: "supplyDate",
            name: "Date Purchased"
        },

        {
            id: "supplyPrescribed",
            name: "Was this Prescribed?"
        },

        {
            id: "supplyProvider",
            name: "Healthcare Provider Name"
        },

        {
            id: "supplyAmount",
            name: "Paid Amount"
        },

        {
            id: "supplySeller",
            name: "Seller's Name"
        }

    ]);


    if (!valid) {

        return;

    }


    expenseData.medicalSupplies.push({

        item:
            getValue("supplyItem"),

        date:
            getValue("supplyDate"),

        prescribed:
            getValue("supplyPrescribed"),

        provider:
            getValue("supplyProvider"),

        amount:
            getNumber("supplyAmount"),

        seller:
            getValue("supplySeller")

    });


    renderEntries("medicalSupplies");

    clearFields([

        "supplyItem",
        "supplyDate",
        "supplyPrescribed",
        "supplyProvider",
        "supplyAmount",
        "supplySeller"

    ]);


    showMessage("Medical supply added.");

}


/* =========================================================
   PARKING
========================================================= */

document
    .getElementById("addParkingBtn")
    .addEventListener("click", addParking);


function addParking() {

    const valid = validateFields([

        {
            id: "parkingAddress",
            name: "Healthcare Provider / Medical Facility Address"
        },

        {
            id: "parkingDate",
            name: "Date"
        },

        {
            id: "parkingAmount",
            name: "Paid Amount"
        },

        {
            id: "meterUsed",
            name: "Meter Used?"
        }

    ]);


    if (!valid) {

        return;

    }


    expenseData.parking.push({

        address:
            getValue("parkingAddress"),

        date:
            getValue("parkingDate"),

        amount:
            getNumber("parkingAmount"),

        meterUsed:
            getValue("meterUsed"),

        meterNumber:
            getValue("meterNumber") || "-"

    });


    renderEntries("parking");

    clearFields([

        "parkingAddress",
        "parkingDate",
        "parkingAmount",
        "meterUsed",
        "meterNumber"

    ]);


    showMessage("Parking expense added.");

}


/* =========================================================
   MILEAGE
========================================================= */

document
    .getElementById("addMileageBtn")
    .addEventListener("click", addMileage);


function addMileage() {

    const valid = validateFields([

        {
            id: "mileageDate",
            name: "Appointment Date"
        },

        {
            id: "providerAddress",
            name: "Healthcare Provider / Medical Facility Address"
        },

        {
            id: "workplaceAddress",
            name: "Workplace Address"
        },

        {
            id: "kilometers",
            name: "Number of km"
        }

    ]);


    if (!valid) {

        return;

    }


    expenseData.mileage.push({

        date:
            getValue("mileageDate"),

        providerAddress:
            getValue("providerAddress"),

        workplaceAddress:
            getValue("workplaceAddress"),

        kilometers:
            getNumber("kilometers")

    });


    renderEntries("mileage");

    clearFields([

        "mileageDate",
        "providerAddress",
        "workplaceAddress",
        "kilometers"

    ]);


    showMessage("Mileage entry added.");

}


/* =========================================================
   TRANSPORTATION
========================================================= */

document
    .getElementById("addTransportBtn")
    .addEventListener("click", addTransportation);


function addTransportation() {

    const valid = validateFields([

        {
            id: "transportDate",
            name: "Appointment Date"
        },

        {
            id: "transportProvider",
            name: "Healthcare Provider / Medical Facility Address"
        },

        {
            id: "transportType",
            name: "Bus or Taxi"
        },

        {
            id: "transportFare",
            name: "Total Fare Paid"
        }

    ]);


    if (!valid) {

        return;

    }


    expenseData.transportation.push({

        date:
            getValue("transportDate"),

        startingPoint:
            getValue("startingPoint") || "-",

        provider:
            getValue("transportProvider"),

        type:
            getValue("transportType"),

        fare:
            getNumber("transportFare")

    });


    renderEntries("transportation");

    clearFields([

        "transportDate",
        "startingPoint",
        "transportProvider",
        "transportType",
        "transportFare"

    ]);


    showMessage("Transportation expense added.");

}


/* =========================================================
   CLEAR FORM FIELDS
========================================================= */

function clearFields(ids) {

    ids.forEach(id => {

        const element =
            document.getElementById(id);

        if (element) {

            element.value = "";

        }

    });

}


/* =========================================================
   RENDER ENTRY CARDS
========================================================= */

function renderEntries(type) {

    const containerMap = {

        prescriptions: "prescriptionEntries",

        otcDrugs: "otcEntries",

        medicalSupplies: "supplyEntries",

        parking: "parkingEntries",

        mileage: "mileageEntries",

        transportation: "transportEntries"

    };


    const statusMap = {

        prescriptions: "prescriptionStatus",

        otcDrugs: "otcStatus",

        medicalSupplies: "supplyStatus",

        parking: "parkingStatus",

        mileage: "mileageStatus",

        transportation: "transportStatus"

    };


    const container =
        document.getElementById(
            containerMap[type]
        );


    const entries =
        expenseData[type];


    if (!entries.length) {

        container.innerHTML = `

            <div class="entries-empty">

                No entries added yet.

            </div>

        `;

        updateStatus(
            statusMap[type],
            false
        );

        return;

    }


    container.innerHTML = entries
        .map((entry, index) => {

            return `

                <div class="entry-card">

                    <div class="entry-info">

                        ${createEntrySummary(
                            type,
                            entry
                        )}

                    </div>


                    <button
                        type="button"
                        class="delete-entry"
                        onclick="deleteEntry('${type}', ${index})"
                    >
                        Delete
                    </button>

                </div>

            `;

        })
        .join("");


    updateStatus(
        statusMap[type],
        true
    );

}


/* =========================================================
   ENTRY SUMMARY
========================================================= */

function createEntrySummary(type, entry) {

    switch (type) {

        case "prescriptions":

            return `

                <strong>
                    ${escapeHTML(entry.drugName)}
                </strong>

                <span>
                    ${formatMoney(entry.amount)}
                </span>

                <small>
                    Purchased: ${formatDate(entry.purchaseDate)}
                </small>

                <small>
                    Provider: ${escapeHTML(entry.provider)}
                </small>

            `;


        case "otcDrugs":

            return `

                <strong>
                    ${escapeHTML(entry.drugName)}
                </strong>

                <span>
                    ${formatMoney(entry.amount)}
                </span>

                <small>
                    Seller: ${escapeHTML(entry.seller)}
                </small>

                <small>
                    ${escapeHTML(entry.reason)}
                </small>

            `;


        case "medicalSupplies":

            return `

                <strong>
                    ${escapeHTML(entry.item)}
                </strong>

                <span>
                    ${formatMoney(entry.amount)}
                </span>

                <small>
                    Prescribed: ${escapeHTML(entry.prescribed)}
                </small>

                <small>
                    Seller: ${escapeHTML(entry.seller)}
                </small>

            `;


        case "parking":

            return `

                <strong>
                    ${escapeHTML(entry.address)}
                </strong>

                <span>
                    ${formatMoney(entry.amount)}
                </span>

                <small>
                    Date: ${formatDate(entry.date)}
                </small>

                <small>
                    Meter: ${escapeHTML(entry.meterUsed)}
                </small>

            `;


        case "mileage":

            return `

                <strong>
                    ${formatDate(entry.date)}
                </strong>

                <span>
                    ${entry.kilometers} km
                </span>

                <small>
                    Provider: ${escapeHTML(entry.providerAddress)}
                </small>

                <small>
                    Workplace: ${escapeHTML(entry.workplaceAddress)}
                </small>

            `;


        case "transportation":

            return `

                <strong>
                    ${escapeHTML(entry.type)}
                </strong>

                <span>
                    ${formatMoney(entry.fare)}
                </span>

                <small>
                    Date: ${formatDate(entry.date)}
                </small>

                <small>
                    Provider: ${escapeHTML(entry.provider)}
                </small>

            `;

        default:

            return "";

    }

}


/* =========================================================
   DELETE ENTRY
========================================================= */

function deleteEntry(type, index) {

    expenseData[type].splice(index, 1);

    renderEntries(type);

    completedSections.delete(type);

    updateProgress();

    showMessage("Entry deleted.");

}


/* =========================================================
   SUBMIT EXPENSE SECTION
========================================================= */

function submitExpenseSection(type) {

    if (!expenseData[type].length) {

        alert(
            "Please add at least one entry before submitting this section."
        );

        return;

    }


    completedSections.add(type);

    updateProgress();

    showMessage(
        "Section submitted successfully."
    );

}


/* =========================================================
   TOTAL CALCULATIONS
========================================================= */

function calculateTotals() {

    const prescriptionTotal =
        expenseData.prescriptions.reduce(
            (sum, item) => sum + item.amount,
            0
        );


    const otcTotal =
        expenseData.otcDrugs.reduce(
            (sum, item) => sum + item.amount,
            0
        );


    const suppliesTotal =
        expenseData.medicalSupplies.reduce(
            (sum, item) => sum + item.amount,
            0
        );


    const parkingTotal =
        expenseData.parking.reduce(
            (sum, item) => sum + item.amount,
            0
        );


    const transportTotal =
        expenseData.transportation.reduce(
            (sum, item) => sum + item.fare,
            0
        );


    const total =
        prescriptionTotal +
        otcTotal +
        suppliesTotal +
        parkingTotal +
        transportTotal;


    return {

        prescriptionTotal,

        otcTotal,

        suppliesTotal,

        parkingTotal,

        transportTotal,

        total

    };

}


/* =========================================================
   REPORT TABLE HELPERS
========================================================= */

function createTableRows(entries, rowFunction) {

    if (!entries.length) {

        return `

            <tr class="empty-report-row">

                <td colspan="10">
                    No expenses reported.
                </td>

            </tr>

        `;

    }


    return entries
        .map(rowFunction)
        .join("");

}


/* =========================================================
   GENERATE REPORT
========================================================= */

document
    .getElementById("generateBtn")
    .addEventListener("click", generateReport);


function generateReport() {

    const workerName =
        getValue("workerName");

    const claimNumber =
        getValue("claimNumber");


    if (!workerName || !claimNumber) {

        alert(
            "Please save the Worker Information before generating the report."
        );

        document
            .getElementById("workerName")
            .focus();

        return;

    }


    document.getElementById("headerClaimNumber")
        .textContent = claimNumber;

    document.getElementById("displayClaimNumber")
        .textContent = claimNumber;

    document.getElementById("displayWorkerName")
        .textContent = workerName;


    renderReportTables();


    const totals =
        calculateTotals();


    document.getElementById("totalAmount1")
        .textContent =
        formatMoney(totals.total);


    document.getElementById("totalAmount2")
        .textContent =
        formatMoney(totals.total);


    document.getElementById("summaryPrescription")
        .textContent =
        formatMoney(totals.prescriptionTotal);


    document.getElementById("summaryOTC")
        .textContent =
        formatMoney(totals.otcTotal);


    document.getElementById("summarySupplies")
        .textContent =
        formatMoney(totals.suppliesTotal);


    document.getElementById("summaryParking")
        .textContent =
        formatMoney(totals.parkingTotal);


    document.getElementById("summaryTransport")
        .textContent =
        formatMoney(totals.transportTotal);


    const now =
        new Date();


    const submittedDate =
        now.toLocaleDateString(
            "en-CA",
            {
                year: "numeric",
                month: "long",
                day: "numeric"
            }
        );


    document.getElementById("submittedDate1")
        .textContent =
        `Submitted: ${submittedDate}`;


    document.getElementById("submittedDate2")
        .textContent =
        `Submitted: ${submittedDate}`;


    document
        .getElementById("report")
        .classList.add("visible");


    document
        .getElementById("printBtn")
        .disabled = false;


    document
        .getElementById("report")
        .scrollIntoView({
            behavior: "smooth"
        });


    showMessage(
        "Report generated successfully."
    );

}


/* =========================================================
   RENDER REPORT TABLES
========================================================= */

function renderReportTables() {


    /* PRESCRIPTIONS */

    document.getElementById("prescriptionTable")
        .innerHTML =
        createTableRows(
            expenseData.prescriptions,
            entry => `

                <tr>

                    <td>
                        ${escapeHTML(entry.drugName)}
                    </td>

                    <td>
                        ${formatDate(entry.prescriptionDate)}
                    </td>

                    <td>
                        ${formatDate(entry.purchaseDate)}
                    </td>

                    <td>
                        ${escapeHTML(entry.provider)}
                    </td>

                    <td>
                        ${formatMoney(entry.amount)}
                    </td>

                </tr>

            `
        );


    /* OTC */

    document.getElementById("otcTable")
        .innerHTML =
        createTableRows(
            expenseData.otcDrugs,
            entry => `

                <tr>

                    <td>
                        ${escapeHTML(entry.drugName)}
                    </td>

                    <td>
                        ${formatDate(entry.date)}
                    </td>

                    <td>
                        ${formatMoney(entry.amount)}
                    </td>

                    <td>
                        ${escapeHTML(entry.seller)}
                    </td>

                    <td>
                        ${escapeHTML(entry.reason)}
                    </td>

                </tr>

            `
        );


    /* MEDICAL SUPPLIES */

    document.getElementById("suppliesTable")
        .innerHTML =
        createTableRows(
            expenseData.medicalSupplies,
            entry => `

                <tr>

                    <td>
                        ${escapeHTML(entry.item)}
                    </td>

                    <td>
                        ${formatDate(entry.date)}
                    </td>

                    <td>
                        ${escapeHTML(entry.prescribed)}
                    </td>

                    <td>
                        ${escapeHTML(entry.provider)}
                    </td>

                    <td>
                        ${formatMoney(entry.amount)}
                    </td>

                    <td>
                        ${escapeHTML(entry.seller)}
                    </td>

                </tr>

            `
        );


    /* PARKING */

    document.getElementById("parkingTable")
        .innerHTML =
        createTableRows(
            expenseData.parking,
            entry => `

                <tr>

                    <td>
                        ${escapeHTML(entry.address)}
                    </td>

                    <td>
                        ${formatDate(entry.date)}
                    </td>

                    <td>
                        ${formatMoney(entry.amount)}
                    </td>

                    <td>
                        ${escapeHTML(entry.meterUsed)}
                    </td>

                    <td>
                        ${escapeHTML(entry.meterNumber)}
                    </td>

                </tr>

            `
        );

        /* MILEAGE */

document.getElementById("mileageTable")
    .innerHTML =
    createTableRows(
        expenseData.mileage,
        entry => `

            <tr>

                <td>
                    ${formatDate(entry.date)}
                </td>

                <td>
                    ${escapeHTML(entry.providerAddress)}
                </td>

                <td>
                    ${escapeHTML(entry.workplaceAddress)}
                </td>

                <td>
                    ${entry.kilometers} km
                </td>

            </tr>

        `
    );


/* TRANSPORTATION */

document.getElementById("transportTable")
    .innerHTML =
    createTableRows(
        expenseData.transportation,
        entry => `

            <tr>

                <td>
                    ${formatDate(entry.date)}
                </td>

                <td>
                    ${escapeHTML(entry.startingPoint)}
                </td>

                <td>
                    ${escapeHTML(entry.provider)}
                </td>

                <td>
                    ${escapeHTML(entry.type)}
                </td>

                <td>
                    ${formatMoney(entry.fare)}
                </td>

            </tr>

        `
    );

}


    