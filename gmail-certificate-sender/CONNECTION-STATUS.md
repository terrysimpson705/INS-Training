# Connection status — November 14, 2026

The existing live completion email was previously confirmed working by the owner. This local update supports start notifications for the six-hour edition using the same Gmail sender, endpoint and public widget key. The supplied sender accepts both operations-manual-2026-v2 and operations-manual-2026-v3. It has not been uploaded or deployed.

**Required:** update Code.gs in the existing Google project, deploy a new version of its current Web app deployment, then upload the revised course index.html to GitHub. See ../UPDATE-EMAIL-NOTIFICATIONS.md. Do not create another Google account or change the current private Script Properties.

Course: https://terrysimpson705.github.io/INS-Training/

Script Property ALLOWED_ORIGINS: https://terrysimpson705.github.io

Cloudflare widget hostname: terrysimpson705.github.io

Start alerts go only to terry@thedavisgroup.ca. Completion certificates still go to the learner with Terry copied. No live emails were sent during development. Mocked sender and browser checks passed for start, completion, validation, retries, duplicate prevention and interrupted submissions.
