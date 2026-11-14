# Gmail certificate delivery

**November 14 update:** start alerts now use this same sender. Update the existing Code.gs and Web app deployment before uploading index.html. See [UPDATE-EMAIL-NOTIFICATIONS.md](UPDATE-EMAIL-NOTIFICATIONS.md).

The selected sender is **insmarket.training@gmail.com**, displayed as **INS Market Training**. Each certificate goes to the email the franchisee entered at the beginning, with a fixed copy and reply address of **terry@thedavisgroup.ca**.

**The latest index.html has Gmail submission enabled using the supplied deployment URL and public verification site key. Upload it to GitHub Pages to activate this version.** No emails have been sent during development.

The included **gmail-certificate-sender** folder contains **START-HERE.md**, the complete **Code.gs** and the limited-permission **appsscript.json**. Follow that guide to connect the Gmail account. Google hosts the sender. A free Cloudflare Turnstile check protects the public form. Company DNS access and a Resend account are not needed for this route.

The supplied deployment and public widget key are already configured. To change those settings later, use public values:

```sh
python configure-email.py --service gmail --endpoint https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec --site-key YOUR_PUBLIC_SITE_KEY
```

This rebuilds `index.html`; upload it to GitHub Pages. To disable sending, run `python configure-email.py --disable`. A local file preview can download the PDF but cannot submit live email through this sender.

The Google account owner must approve the script and deploy it to execute as **insmarket.training@gmail.com**, with **Anyone** access. Private verification secrets stay in Google Script Properties. No Gmail password is used by the HTML.

Simulated tests covered the personalized PDF, fixed copy, nested Google response frame, completion/verification gate, browser persistence, duplicate prevention, uncertainty and mobile layout. The owner confirmed that live email delivery worked in the earlier edition. Expansion checks use simulated services; the same deployed sender is preserved.

The congratulations page reports **submitted for email** after the script confirms submission. That is not a guarantee of inbox delivery. The PDF download works offline. Completion remains based on the learner-controlled course record.

Resend remains an optional alternative in the separate **INS-Market-Certificate-Sender** package and requires its own verified sending domain. To configure that option use `--service resend` explicitly with its HTTPS `/certificate` endpoint and public widget site key.

Official references: [Google web apps](https://developers.google.com/apps-script/guides/web), [MailApp](https://developers.google.com/apps-script/reference/mail/mail-app), [sending quotas](https://developers.google.com/apps-script/guides/services/quotas).

Current course origin: `https://terrysimpson705.github.io`. This origin passed a no-send server diagnostic. The Cloudflare widget must allow hostname `terrysimpson705.github.io`. The owner has confirmed successful live delivery in the earlier edition; the expanded edition preserves the same connection.
