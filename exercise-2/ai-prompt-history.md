# AI Prompt History — Exercise 2
## WCB Worker Progress Report

### Purpose

This document records the AI-assisted development prompts used while implementing Exercise 2.

The objective was to create a browser-based HTML, CSS, and JavaScript implementation based on the supplied WCB Worker Progress Report reference document, while preserving the document's structure and supporting dynamic report generation.

---

## Prompt 1 — Requirement and Document Analysis

I am implementing Exercise 2 of a frontend development assignment using HTML, CSS, and JavaScript.

The supplied reference document is a WCB Worker Progress Report.

Please analyse the reference document and identify:

- Header structure
- WCB logo placement
- Report title and subtitle
- Worker information fields
- Return-to-work information
- Recovery information
- Pain-related information
- Medical treatment information
- Home exercise information
- Medication information
- Additional information
- Signature information
- Footer information
- Page numbering
- Any repeated claim/worker identifiers
- Which fields should be dynamic
- Which values should be generated automatically
- Which information should appear in the final report

Also identify assumptions where the reference document does not explicitly specify interactive behaviour.

The implementation should reproduce the reference document's visual hierarchy as closely as practical rather than introducing an unrelated UI design.

---

## Prompt 2 — Frontend Architecture

Design a clean implementation architecture for Exercise 2 using:

- Semantic HTML
- CSS
- Vanilla JavaScript

Use separate files for:

- index.html
- style.css
- script.js

The HTML should provide the document structure and input fields.

The CSS should handle:

- Layout
- Typography
- Borders
- Spacing
- Header
- Sections
- Footer
- Print/report styling

The JavaScript should handle:

- Reading form data
- Validation
- Dynamic report generation
- Date formatting
- Reset functionality
- User feedback

Avoid frameworks and unnecessary dependencies.

---

## Prompt 3 — Dynamic Form-to-Report Mapping

Implement a reliable mapping between the Exercise 2 form fields and the corresponding generated report fields.

The report should dynamically reflect values entered by the user for:

- Worker name
- Claim number
- Report date
- Worker application ID
- Return-to-work status
- Return-to-work dates
- Work duties
- Missed time
- Concerns about returning to work
- Employer contact information
- Recovery information
- Pain information
- Medical treatment
- Treatment provider information
- Home exercises
- Medication
- Additional information

Dates should be formatted consistently for the generated report.

If a field is empty and is not required, handle it gracefully rather than displaying broken or undefined values.

---

## Prompt 4 — Submission Behaviour

The assignment requires the final report to be generated after the user has entered the required information.

Review the interaction flow so that entering or changing form data does not unexpectedly navigate the user to the generated report.

The preferred behaviour is:

1. User enters the required information.
2. User remains on the form while entering information.
3. User reviews the information.
4. User explicitly selects the Generate Report action.
5. The report is generated using the latest form values.
6. The generated report becomes visible.
7. The page may then move to the generated report so the result can be reviewed.

Do not automatically regenerate or scroll to the report on every field change.

---

## Prompt 5 — Dynamic Demonstration Requirements

The assignment requires the solution to demonstrate dynamic behaviour in the browser.

Review Exercise 2 so that the final demonstration can show:

- One dataset being entered
- The generated report reflecting that dataset
- A different dataset being entered
- The generated report changing accordingly
- Different optional fields being populated or left empty
- Dates changing dynamically
- Worker and claim information changing dynamically

The report should never rely on hard-coded sample output for the final result.

---

## Prompt 6 — Validation and Reset

Review the form validation and reset behaviour.

Required information should be validated before report generation.

Validation should:

- Identify missing required fields
- Show a clear message
- Focus the appropriate input
- Prevent generation of an incomplete report

The reset functionality should:

- Ask for confirmation
- Clear entered form values
- Hide the previously generated report
- Restore the application to its initial state
- Provide clear user feedback

Do not modify unrelated working functionality.

---

## Prompt 7 — PDF-Style Presentation Review

Review the generated Exercise 2 report against the supplied reference document.

Check:

- WCB logo
- Header
- Title
- Typography
- Section ordering
- Section headings
- Borders
- Spacing
- Alignment
- Footer
- Worker/claim identifiers
- Signature area
- Page numbers
- Print-friendly layout

The goal is visual similarity to the supplied document while keeping the implementation responsive and functional in a browser.

Recommend only changes that materially improve compliance with the reference document or assignment requirements.

---

## Prompt 8 — Final Assignment Compliance Review

Perform a final review of Exercise 2 against the complete assignment requirements.

Verify:

- HTML/CSS/JavaScript implementation
- Dynamic data
- PDF-style layout
- Image/logo
- Header
- Footer
- Page numbers
- Report generation
- Form validation
- Reset functionality
- Multiple datasets
- Browser demonstration readiness
- Code organization
- Maintainability
- AI prompt-history documentation

Identify any remaining requirement gaps and prioritize fixes based on importance.

---

## Development Principle

AI assistance was used as a development, implementation, debugging, and review aid. Suggestions were reviewed and tested in the browser before being incorporated into the project.

The final implementation was evaluated against both the assignment requirements and the supplied reference document.