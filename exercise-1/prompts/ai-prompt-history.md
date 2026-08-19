# AI Prompt History — Exercise 1
## WCB Medical & Travel Expense Request

### Purpose

This document records the AI-assisted development prompts used while implementing Exercise 1.

The objective was to create a browser-based HTML, CSS, and JavaScript implementation that reproduces the structure and visual presentation of the provided WCB Medical & Travel Expense Request reference document while supporting dynamic data entry and report generation.

---

## Prompt 1 — Requirement Analysis

I am implementing Exercise 1 of a frontend development assignment using HTML, CSS, and JavaScript.

The requirement is to create a web-based version of the provided WCB Medical & Travel Expense Request reference PDF.

Please analyse the reference document carefully and identify:

- The major sections and their hierarchy
- Header and footer requirements
- Logo placement and sizing
- Claim and worker information that should be dynamic
- Form fields that should accept user input
- Expense categories represented in the document
- Data that should be treated as dynamic
- Table structures and column requirements
- Calculated values and totals
- Page numbering requirements
- Any assumptions required where the PDF does not explicitly define behaviour

Do not unnecessarily redesign the document. The implementation should remain visually close to the reference document while adding appropriate browser-based interaction.

---

## Prompt 2 — UI and Layout Implementation

Based on the analysed requirements, help me implement the Exercise 1 interface using only:

- HTML
- CSS
- Vanilla JavaScript

The page should visually follow the provided WCB Medical & Travel Expense Request document.

Pay particular attention to:

- WCB logo placement
- Header alignment
- Typography
- Borders and spacing
- Section hierarchy
- Form layout
- Table layout
- Footer structure
- Page numbers
- Print-friendly presentation

Keep the implementation maintainable and organized into separate HTML, CSS, and JavaScript files.

Do not introduce unnecessary frameworks or libraries.

---

## Prompt 3 — Dynamic Data Behaviour

The assignment requires the solution to demonstrate dynamic behaviour.

Implement the JavaScript so that:

- Worker information can be entered dynamically
- Claim information is reflected in the generated report
- Expense entries can be added dynamically
- Multiple entries can be displayed
- Empty sections are handled gracefully
- Entries can be removed
- Amounts are calculated dynamically
- Section totals are updated based on entered data
- The final report reflects the current form data
- Different datasets can be demonstrated during the presentation

The solution should not depend on hard-coded report rows.

---

## Prompt 4 — Validation and User Experience

Review the Exercise 1 implementation for practical browser behaviour.

Add appropriate client-side validation so required information cannot be submitted incorrectly.

The implementation should:

- Identify missing required fields
- Focus the relevant field when validation fails
- Prevent incomplete expense entries
- Display clear success/error feedback
- Allow users to add multiple records
- Allow users to delete records
- Avoid losing previously entered records unnecessarily

Keep the existing application logic intact wherever it already satisfies the requirement.

---

## Prompt 5 — Report Generation

Review the report-generation portion of Exercise 1.

The generated report must represent the data entered by the user rather than static sample data.

Ensure that:

- Worker details appear in the report
- Claim number appears wherever required
- Expense tables contain the entered records
- Currency values are formatted consistently
- Dates are displayed consistently
- Totals are calculated from the actual dataset
- Empty datasets are handled appropriately
- The report can demonstrate both one-record and multiple-record scenarios

Do not change working functionality unless it is necessary to satisfy the assignment requirement.

---

## Prompt 6 — Final Requirement Review

Perform a final requirements review of Exercise 1 against the assignment criteria.

Check specifically for:

- PDF-like visual structure
- Logo
- Header
- Footer
- Page numbering
- Dynamic data
- Dynamic tables
- Calculations
- Multiple data records
- Validation
- Browser functionality
- Print/report presentation
- Maintainable HTML/CSS/JavaScript structure

Identify only genuine gaps and recommend minimal changes rather than unnecessarily rewriting working functionality.

---

## Development Principle

AI assistance was used as a development and review aid. The generated suggestions were reviewed, integrated, and tested in the browser. The final implementation was validated against the assignment requirements and the supplied reference document.