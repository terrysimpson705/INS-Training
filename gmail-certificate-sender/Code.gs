/* INS Market certificate sender. Paste into a project owned by
 * insmarket.training@gmail.com. No Gmail password is used or stored.
 * Configure ALLOWED_ORIGINS and TURNSTILE_SECRET_KEY in Script Properties.
 */
var INS_SENDER = 'insmarket.training@gmail.com';
var INS_COPY = 'terry@thedavisgroup.ca';
var INS_COURSE = 'INS Market Operations Manual Training';

// Run this function once in the editor to approve Google permissions.
// It checks the account and quota; it does not send an email.
function authorizeSender() {
  insCheckOwner_();
  console.log('Sender confirmed: ' + INS_SENDER);
  console.log('Remaining daily recipient quota: ' + MailApp.getRemainingDailyQuota());
}

function doGet() {
  return HtmlService.createHtmlOutput('<!doctype html><html><body><p>INS Market certificate sender. Certificates are submitted from the training course.</p></body></html>');
}

function doPost(e) {
  var input, origin, nonce;
  try {
    if (!e || !e.parameter || typeof e.parameter.payload !== 'string' || e.parameter.payload.length > 750000) throw Error('Invalid request');
    input = JSON.parse(e.parameter.payload);
    var properties = PropertiesService.getScriptProperties();
    var allowed = (properties.getProperty('ALLOWED_ORIGINS') || '').split(',').map(function (x) { return x.trim(); });
    origin = input.origin;
    nonce = input.nonce;
    if (typeof origin !== 'string' || !/^https:\/\/[a-zA-Z0-9.-]+(?::\d+)?$/.test(origin) || allowed.indexOf(origin) < 0 || typeof nonce !== 'string' || !/^[a-f0-9]{64}$/.test(nonce)) throw Error('Origin not configured');
    insCheckOwner_();
    if (input.event && input.event !== 'sign_on' && input.event !== 'certificate') throw Error('Invalid event');
    var signOn = input.event === 'sign_on';
    var data = signOn ? insValidateSignOn_(input) : insValidate_(input);
    var secret = properties.getProperty('TURNSTILE_SECRET_KEY');
    if (!secret) return insReply_(origin, nonce, { accepted: false, uncertain: false, error: 'The email verification service is not configured.' });
    if (typeof input.turnstile_token !== 'string' || !input.turnstile_token || input.turnstile_token.length > 2048) return insReply_(origin, nonce, { accepted: false, uncertain: false, error: 'Complete the email verification check.' });
    var verification = UrlFetchApp.fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'post', contentType: 'application/json', muteHttpExceptions: true,
      payload: JSON.stringify({ secret: secret, response: input.turnstile_token })
    });
    if (verification.getResponseCode() !== 200) return insReply_(origin, nonce, { accepted: false, uncertain: false, error: 'Email verification is temporarily unavailable.' });
    var verified = JSON.parse(verification.getContentText());
    var hostname = origin.slice(8).split(':')[0];
    if (!verified.success || verified.hostname !== hostname || verified.action !== (signOn ? 'sign_on' : 'certificate')) return insReply_(origin, nonce, { accepted: false, uncertain: false, error: 'Email verification expired. Please try again.' });
    var result = insSubmit_(data, properties);
    return insReply_(origin, nonce, result);
  } catch (error) {
    // Never reflect posted data, keys or internal errors into a response.
    if (origin && nonce && /^[a-f0-9]{64}$/.test(nonce)) {
      var configured = (PropertiesService.getScriptProperties().getProperty('ALLOWED_ORIGINS') || '').split(',').map(function (x) { return x.trim(); });
      if (configured.indexOf(origin) >= 0) return insReply_(origin, nonce, { accepted: false, uncertain: true, error: 'The training email could not be confirmed. You can continue training or contact Terry.' });
    }
    return HtmlService.createHtmlOutput('<!doctype html><html><body><p>This certificate request is not permitted or the sender is not configured.</p></body></html>');
  }
}

function insCheckOwner_() {
  var actual = Session.getEffectiveUser().getEmail().toLowerCase().replace(/\./g, '');
  if (actual !== INS_SENDER.replace(/\./g, '')) throw Error('Deploy under the INS training account');
}

function insValidate_(input) {
  function text(key, max) {
    var value = input[key];
    if (typeof value !== 'string' || !value.trim() || value.length > max || /[\x00-\x1f\x7f]/.test(value)) throw Error('Invalid certificate field');
    return value.trim();
  }
  var data = {
    to_email: text('to_email', 254), franchisee_name: text('franchisee_name', 150),
    store_name: text('store_name', 180), store_number: text('store_number', 40),
    completion_date: text('completion_date', 60), certificate_number: text('certificate_number', 40)
  };
  if (!/^[A-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Z0-9](?:[A-Z0-9.-]*[A-Z0-9])?\.[A-Z]{2,63}$/i.test(data.to_email)) throw Error('Invalid recipient');
  if (!/^INS-\d{8}-[A-F0-9]{12}$/.test(data.certificate_number) || input.idempotency_key !== data.certificate_number) throw Error('Invalid certificate number');
  if (typeof input.certificate_file !== 'string' || input.certificate_file.length > 680000 || !/^JVBER[A-Za-z0-9+/]*={0,2}$/.test(input.certificate_file) || input.certificate_file.length % 4) throw Error('Invalid PDF');
  var bytes = Utilities.base64Decode(input.certificate_file);
  if (bytes.length < 100 || String.fromCharCode.apply(null, bytes.slice(0, 5)) !== '%PDF-') throw Error('Invalid PDF');
  data.attachment = Utilities.newBlob(bytes, 'application/pdf', 'INS-Market-Certificate-' + data.certificate_number + '.pdf');
  return data;
}

function insValidateSignOn_(input) {
  function text(key, max) {
    var value = input[key];
    if (typeof value !== 'string' || !value.trim() || value.length > max || /[\x00-\x1f\x7f]/.test(value)) throw Error('Invalid start field');
    return value.trim();
  }
  var data = {event:'sign_on',to_email:text('to_email',254),franchisee_name:text('franchisee_name',150),store_name:text('store_name',180),store_number:text('store_number',40),course_edition:text('course_edition',80),started_at:text('started_at',40)};
  if (!/^[A-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Z0-9](?:[A-Z0-9.-]*[A-Z0-9])?\.[A-Z]{2,63}$/i.test(data.to_email)) throw Error('Invalid email');
  if (['operations-manual-2026-v2','operations-manual-2026-v3'].indexOf(data.course_edition) < 0 || !/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/.test(data.started_at) || isNaN(Date.parse(data.started_at))) throw Error('Invalid start event');
  return data;
}

function insSignOnMessage_(data) {
  var received = Utilities.formatDate(new Date(), 'America/Toronto', 'yyyy-MM-dd HH:mm:ss z');
  return {
    to:INS_COPY,name:'INS Market Training',replyTo:INS_COPY,
    subject:'INS Market training started - ' + data.franchisee_name + ' - Store ' + data.store_number,
    body:'A learner has signed on and started ' + INS_COURSE + '.\n\n' +
      'Franchisee: ' + data.franchisee_name + '\nEmail: ' + data.to_email +
      '\nStore: ' + data.store_name + '\nStore number: ' + data.store_number +
      '\nStarted (learner device, UTC): ' + data.started_at + '\nNotification received (Toronto): ' + received +
      '\n\nYou will receive the completion certificate when this learner finishes all course requirements and submits the certificate email.'
  };
}

function insHash_(value) {
  return Utilities.base64EncodeWebSafe(Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, value, Utilities.Charset.UTF_8)).replace(/=+$/, '');
}

function insSubmit_(data, properties) {
  var lock = LockService.getScriptLock();
  if (!lock.tryLock(10000)) return { accepted: false, uncertain: false, error: 'The certificate sender is busy. Try again shortly.' };
  try {
    var signOn = data.event === 'sign_on';
    var key = signOn ? 'sign-on:' + insHash_(JSON.stringify([data.course_edition, data.to_email.toLowerCase(), data.store_number.toLowerCase()])) : 'certificate:' + data.certificate_number;
    var identity = signOn ? key : insHash_(JSON.stringify([data.to_email, data.franchisee_name, data.store_name, data.store_number, data.completion_date, data.certificate_number]));
    var stored = properties.getProperty(key), record = stored ? JSON.parse(stored) : null;
    if (record) {
      if (record.identity !== identity) return { accepted: false, uncertain: false, error: 'Certificate details differ from the earlier submission. Contact Terry.' };
      if (record.status === 'submitted') return { accepted: true, messageId: record.receipt };
      return { accepted: false, uncertain: true, error: 'An earlier submission needs checking by Terry. Another email has not been sent.' };
    }
    var day = Utilities.formatDate(new Date(), 'UTC', 'yyyy-MM-dd');
    if (properties.getProperty('LAST_COUNTER_CLEANUP') !== day) {
      insCleanCounters_(properties);
      properties.setProperty('LAST_COUNTER_CLEANUP', day);
    }
    var counterKey = 'day:' + day;
    var used = Number(properties.getProperty(counterKey) || 0);
    var recipientKey = 'recipient:' + day + ':' + (signOn ? 'sign-on:' : '') + insHash_(data.to_email.toLowerCase());
    var recipientUsed = Number(properties.getProperty(recipientKey) || 0);
    var cost = signOn || data.to_email.toLowerCase() === INS_COPY ? 1 : 2;
    if (used + cost > 90 || recipientUsed >= 2 || MailApp.getRemainingDailyQuota() < cost) return { accepted: false, uncertain: false, error: 'The daily training email limit has been reached. Try again later; you can continue training and download a completed certificate.' };
    // Reserve before calling MailApp. If Google times out, retries will require
    // manual investigation instead of potentially sending a duplicate.
    record = { identity: identity, status: 'sending', at: new Date().toISOString(), receipt: 'gas-' + Utilities.getUuid() };
    var changes = {}; changes[key] = JSON.stringify(record); changes[counterKey] = String(used + cost); changes[recipientKey] = String(recipientUsed + 1);
    properties.setProperties(changes, false);
    var options = signOn ? insSignOnMessage_(data) : insMessage_(data);
    try {
      MailApp.sendEmail(options);
      record.status = 'submitted';
      properties.setProperty(key, JSON.stringify(record));
      return { accepted: true, messageId: record.receipt };
    } catch (error) {
      // Keep the reserved sending record. Google may have accepted the email.
      return { accepted: false, uncertain: true, error: 'Google has not confirmed the email. Check the training account and contact Terry before resending.' };
    }
  } finally { lock.releaseLock(); }
}

function insMessage_(data) {
  var rows = [['Franchisee', data.franchisee_name], ['Store', data.store_name], ['Store number', data.store_number], ['Completed', data.completion_date], ['Certificate', data.certificate_number]];
  var options = {
    to: data.to_email, name: 'INS Market Training', replyTo: INS_COPY,
    subject: 'INS Market course certificate - ' + data.franchisee_name + ' - Store ' + data.store_number,
    body: 'Congratulations, ' + data.franchisee_name + '!\n\nYou have passed ' + INS_COURSE + '. Your PDF certificate is attached.\n\n' + rows.map(function (r) { return r[0] + ': ' + r[1]; }).join('\n') + '\n\nA copy has been sent to ' + INS_COPY + '.\nReply if your details need correcting.\n\nThis records completion of the online course. INS practical certification and required external training are separate.',
    attachments: [data.attachment]
  };
  if (data.to_email.toLowerCase() !== INS_COPY) options.cc = INS_COPY;
  return options;
}

function insReply_(origin, nonce, result) {
  result.type = 'ins-certificate-delivery'; result.nonce = nonce;
  var encoded = JSON.stringify({ origin: origin, result: result }).replace(/</g, '\\u003c').replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029');
  // Google serves HtmlService inside its own frame. Notify only ancestors at
  // the configured course origin. The random nonce binds this to one request.
  var content = '<!doctype html><html><head><meta charset="utf-8"></head><body><script>var reply=' + encoded + ';var ancestor=window;for(var i=0;i<10;i++){if(ancestor===ancestor.parent)break;ancestor=ancestor.parent;ancestor.postMessage(reply.result,reply.origin);}</script><p>Certificate email request processed. Return to the training course.</p></body></html>';
  return HtmlService.createHtmlOutput(content).setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function insCleanCounters_(properties) {
  var all = properties.getProperties();
  var cutoff = Utilities.formatDate(new Date(Date.now() - 35 * 86400000), 'UTC', 'yyyy-MM-dd');
  Object.keys(all).forEach(function (key) {
    var date = /^(?:day|recipient):(\d{4}-\d{2}-\d{2})/.exec(key);
    if (date && date[1] < cutoff) properties.deleteProperty(key);
  });
}

// Optional manual maintenance. Normal submissions also clean old counters
// once a day. Certificate duplicate records are retained. Sends no email.
function cleanOldRateCounters() {
  insCheckOwner_();
  var lock = LockService.getScriptLock();
  if (!lock.tryLock(10000)) return;
  try {
    insCleanCounters_(PropertiesService.getScriptProperties());
  } finally { lock.releaseLock(); }
}
