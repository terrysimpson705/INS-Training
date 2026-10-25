# INS Market interactive owner and manager training

Open `index.html` in a current Edge, Chrome, Firefox or Safari browser. No installation, server, login or internet connection is needed for the course itself. External official-reference links need internet.

- 9 modules, 57 reading sections, 18 workplace scenarios, 9 practical labs and 117 scored questions.
- Original Modules 1 and 2 are combined, with 15 questions. Every module has 12–15 questions.
- Planned duration: 120 minutes. Reading, calculation, feedback and discussion time form part of the plan. Actual time varies. The timer does not force a wait.
- To complete a module, mark every reading reviewed, complete both scenarios and its practical lab, and pass the knowledge check with at least 80%. A 12-question module needs 10 correct; a 15-question module needs 12 correct.
- Feedback explains each answer. Retakes are available and the best quiz result is retained.
- The completion record unlocks after all nine modules are complete. Use Print / save completion record to print or use the browser’s Save as PDF option.
- The record is for this course. INS practical certification and AGCO-approved training are separate.

## Saved progress and moving between computers

Progress, optional learner/store details and action notes stay in the current browser profile. There is no automatic report to Head Office and no central LMS or cross-device synchronization. Browser storage can be cleared and `file:` storage behaviour varies by browser.

Use Progress & completion record → Export progress backup. On the other computer, open the same course and import that JSON backup. Import replaces the local record after confirmation. Export before moving from a local file to a GitHub Pages URL because they use separate storage origins. Keep individual backups when multiple learners share a browser.

The active timer pauses when the page is hidden, manually paused or idle for 90 seconds. Results summaries include active time, attempts and action notes. A results backup is editable and self-reported, not a secure or proctored credential.

## Upload to GitHub Pages

1. Create or open the repository where you want this course.
2. Upload `index.html` to the repository root. This one file contains the complete course, styles, code, photos, forms and source library. Keep the filename `index.html` for the home page.
3. Commit the file. You can optionally also upload the README and facilitator/source notes for maintainers.
4. In the repository, open Settings → Pages. Use Deploy from a branch, choose the branch and `/ (root)`, then save. GitHub’s available controls depend on the repository/account configuration.
5. Open the Pages URL GitHub supplies and test Start training, a practical lab and a knowledge check.

No build command, package manager, API key, database or server is required. The file also works under a repository subpath because its content is embedded and navigation uses URL hashes. GitHub repository preview displays HTML source; use the Pages URL to run the course.

The training includes internal operating details and fee schedules. Choose hosting and visibility appropriate to your INS audience. Ordinary GitHub Pages does not add a learner login or centrally protect the course.

## Content and maintenance

`SOURCE-COVERAGE.csv` maps every one of the attached manual’s 107 slides to the course. The in-course Source library preserves source text and selected visuals with descriptions for image-only pages. Earlier reviewed INS modules provide company, communication, financial, compliance, service, operations, merchandising, staff and supplier material. The linked work-computer chat contributed historical case/unit-cost examples.

`FACILITATOR-NOTES.md` lists known source conflicts, corrections and the pacing plan. Do not remove the food-safety correction or silently combine separate audit-fee schedules. Use current official resources and Operations direction for live requirements.

Default/shared access codes, store camera identifiers and camera live-view screenshots are excluded from the portable file. Store-specific access remains with the authorized trainer/administrator. The public logo is the red INS Market asset used by the official site header, checked October 25, 2026. Store photographs and technical images come from the supplied/earlier INS material and are included for this requested INS training use.

For edits, use `editable-source/`: change `training-data.json`, `app.js` or `style.css`, then run `python build.py` in that folder to rebuild the root `index.html`. The JSON contains the embedded images, so it is larger than a typical text file. No third-party Python packages are needed for that rebuild. Keep a backup before editing.

GitHub’s current publishing instructions: [Configure the Pages publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site). The optional `.nojekyll` file is included for straightforward static hosting.
