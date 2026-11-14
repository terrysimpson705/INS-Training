# Connect insmarket.training@gmail.com to the INS training

**For this existing working setup, follow ../UPDATE-EMAIL-NOTIFICATIONS.md instead of creating a new project. Update Code.gs and deploy a new version of the existing deployment, then upload index.html.** The instructions below are retained for initial setup reference.

The Gmail account has been created. This setup lets Google host the sender while the course stays on GitHub Pages. Certificates come from **INS Market Training <insmarket.training@gmail.com>**, go to the franchisee’s entered email, and copy **terry@thedavisgroup.ca**. Replies also go to Terry. No company DNS access or Resend account is needed for this route.

## 1. Create the Google script

1. Sign into **insmarket.training@gmail.com**. Check the account avatar before creating the project.
2. Open [Google Apps Script](https://script.google.com/home/start) and choose **New project**.
3. Name it **INS Market Certificate Sender**.
4. Open the supplied **Code.gs** file. Copy its complete contents and replace the starter code in the project’s **Code.gs**. Save.
5. Click **Project Settings** (gear), then enable **Show appsscript.json manifest file in editor**.
6. Return to the editor, open **appsscript.json**, and replace its contents with the supplied **appsscript.json**. Save.

## 2. Approve sending permission

In the function selector above the code, choose **authorizeSender**, then click **Run**. Choose **insmarket.training@gmail.com** and review Google’s permission request for this project.

The supplied manifest requests permission to send email, call the verification service and check the account’s email address. It does not request access to read your Gmail inbox. The authorization function checks the account and daily quota; it sends no email. The execution log should report the correct sender.

## 3. Add the free verification check

The publicly accessible sender uses a verification check to limit automated abuse. This is a free Cloudflare Turnstile widget; Google still hosts and sends the certificates.

1. Sign up for or sign into [Cloudflare](https://dash.cloudflare.com/) and open **Turnstile**.
2. Choose **Add widget** and name it **INS Market Training**.
3. Under hostname management, add the actual course hostname, such as **YOUR-ACCOUNT.github.io**, without `https://` or a repository path. This does not require moving the domain to Cloudflare or editing company DNS.
4. Select **Managed** mode and create the widget. Pre-clearance is not needed.
5. Keep its **site key** and **secret key**. The site key is public; the secret stays in Google’s Script Properties below.

If you have not published the course yet, create the script now and complete this step once your GitHub Pages address is available.

## 4. Set the script’s private configuration

In Apps Script, open **Project Settings → Script Properties → Add script property**. Add these two properties:

| Property | Value |
|---|---|
| `ALLOWED_ORIGINS` | Your actual course origin, such as `https://YOUR-ACCOUNT.github.io` |
| `TURNSTILE_SECRET_KEY` | The widget’s secret key from step 3 |

Save the properties. The origin has no repository path or trailing slash. For example, a course at `https://myaccount.github.io/ins-training/` uses `https://myaccount.github.io` here and `myaccount.github.io` in the widget.

Keep the Google script project private. Only its deployment endpoint is public. No Gmail password, Google access token or verification secret belongs in the HTML or GitHub repository.

## 5. Deploy the sender

1. In Apps Script, select **Deploy → New deployment**.
2. Choose deployment type **Web app**.
3. Set **Execute as: Me — insmarket.training@gmail.com**.
4. Set **Who has access: Anyone** so franchisees can submit without signing into your account.
5. Click **Deploy** and complete any remaining authorization.
6. Copy the **Web app URL**, ending in **/exec**. Use this published URL, not the editor URL or a `/dev` test URL.

After changing the script in future, use **Deploy → Manage deployments → Edit → New version → Deploy** to update the existing endpoint.

## 6. Connect the course

You can send Codex these three public values to finish the HTML configuration:

- The Google Web app URL ending in `/exec`.
- The Turnstile **site key**.
- Your published GitHub Pages course URL.

Keep the Turnstile **secret key** in Script Properties. Do not send a password or secret key in chat.

Alternatively, run this in the learner package folder:

```sh
python configure-email.py --service gmail --endpoint https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec --site-key YOUR_PUBLIC_SITE_KEY
```

Upload the rebuilt `index.html` to GitHub Pages. Actual deployment and public site-key settings are supplied and email submission is enabled in the latest HTML. The separate standalone HTML and delivery ZIP must also be refreshed if you distribute them after configuration; the script rebuilds the package’s `index.html`.

## 7. Check one live completion

Complete an authorized test through the published HTTPS course. After completion and verification, confirm the learner and Terry receive a readable PDF with the correct name and store details. The PDF download continues to work offline. Local `file:` previews cannot use this hosted email sender.

No live messages have been sent during development. The browser and server tests use simulated Google services, including Google’s nested response frame. Actual Google deployment, permission and delivery behaviour must be checked with the live account.

## Limits and records

Google currently allows personal accounts to send to 100 recipients per quota day through Apps Script, subject to its other limits. This sender caps itself at 90 recipient reservations per UTC date, normally up to 45 certificates with a Terry copy, and checks Google’s remaining quota before sending. Two new certificate IDs per learner address per UTC date are allowed. Other Apps Script usage in the account also consumes quota.

The script records certificate ID, identity hash, internal receipt number, status and timestamp in Script Properties. It retains accepted IDs to prevent duplicates across refreshes or different browsers. It does not store raw names, email addresses, quiz answers or PDF attachments there; the certificate is passed to Google for emailing. Rate counters contain hashed email identifiers and expire after 35 days when new submissions arrive.

If a sending result is uncertain, the script reserves the ID and requires Terry to investigate rather than automatically sending again. The `gas-…` receipt is an internal submission receipt, not a Gmail message ID or proof of inbox delivery. Google’s Script Properties storage limit applies; storage errors fail without deliberately retrying an ambiguous send.

Completion is based on the course’s learner-controlled browser record. The script checks attachment size and PDF signature; it does not independently grade results or inspect the PDF’s contents. Only the course’s fixed email message and recipients are used.

## Official references

- [Google web app deployment and execution account](https://developers.google.com/apps-script/guides/web)
- [Google manifest settings](https://developers.google.com/apps-script/concepts/manifests)
- [Script Properties](https://developers.google.com/apps-script/guides/properties)
- [Sending attachments and CC](https://developers.google.com/apps-script/reference/mail/mail-app)
- [Google sending quotas](https://developers.google.com/apps-script/guides/services/quotas)
- [Creating a Turnstile widget](https://developers.cloudflare.com/turnstile/get-started/widget-management/dashboard/)
