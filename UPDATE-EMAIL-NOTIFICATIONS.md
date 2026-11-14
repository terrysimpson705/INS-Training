# Start and completion email update — six-hour edition

This update extends the Gmail setup that already works. The supplied sender accepts both the previous and six-hour course editions. Keep the existing account, Web app URL, Script Properties and Cloudflare widget.

1. Open `gmail-certificate-sender/Copy-Google-Script.html` and copy the complete updated script into **Code.gs** in the existing INS Google Apps Script project. Save it.
2. Choose **Deploy → Manage deployments → Edit (pencil) → New version → Deploy** on the existing Web app deployment. Keep its current URL and access settings. No new account, secret or deployment URL is needed.
3. Upload this folder's **index.html** to the existing **INS-Training** GitHub repository, replacing its current index.html. Update the Google sender before uploading the HTML.

Google deployment instructions: https://developers.google.com/apps-script/concepts/deployments

When a learner saves their name, email, store name and store number and begins training, the course automatically requests a start email to **terry@thedavisgroup.ca** after the existing verification check succeeds. The email includes those details and a start timestamp. If verification needs interaction, the course displays it. The learner can continue training while notification is pending.

One start alert is sent per learner email, store number and course edition. Refreshing, returning, editing the name, using another device or retrying an acknowledged request does not send another start email. An already-saved profile is not silently reported as a new start on page load; saving its details explicitly starts the notification process. A failed request can be retried from the course. Unconfirmed sends remain reserved on the server so they cannot accidentally send twice.

Completion uses the existing process: after all nine modules are complete and certificate verification succeeds, the PDF certificate is emailed to the learner with a copy to Terry. Start and completion requests use separate duplicate records and verification actions, and share the sender's total daily recipient budget.

The sender fixes Terry's notification address on the server. No private credentials are in the HTML. The Google script and the hosted HTML must both be updated to activate start emails. Local file/localhost previews can show the course but cannot send through the production sender.

Validation used mocked Google and verification services, including start delivery, completion certificate generation, retry, duplicate prevention and failure cases. No live emails were sent and the live Google/GitHub deployments were not changed.

To rebuild after editing the source:

```sh
python editable-source/build.py
```
