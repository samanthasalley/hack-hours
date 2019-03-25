/**
 * Every email consists of a local name and a domain name, separated by the @ sign.
 * 
 * For example, in alice@leetcode.com, alice is the local name, and leetcode.com is the domain name.
 * 
 * Besides lowercase letters, these emails may contain '.'s or '+'s.
 * 
 * If you add periods ('.') between some characters in the local name part of an email address, 
 *  mail sent there will be forwarded to the same  * address without dots in the local name.  
 * For example, "alice.z@leetcode.com" and "alicez@leetcode.com" forward to the same email address.   
 *  * (Note that this rule does not apply for domain names.)
 * 
 * If you add a plus ('+') in the local name, everything after the first plus sign will be ignored. 
 *  This allows certain emails to be filtered,  * for example m.y+name@email.com will be forwarded to my@email.com.  
 *  (Again, this rule does not apply for domain names.)
 * 
 * It is possible to use both of these rules at the same time.
 * 
 * Given a list of emails, we send one email to each address in the list.  How many different addresses actually receive mails? 
 * 
 * 
 * Example 1:
 * 
 * Input: ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]
 * Output: 2
 * Explanation: "testemail@leetcode.com" and "testemail@lee.tcode.com" actually receive mails
 *  
 * 
 * Note:
 * 
 * 1 <= emails[i].length <= 100
 * 1 <= emails.length <= 100
 * Each emails[i] contains exactly one '@' character.
 */

/**
 * @param {string[]} emails
 * @return {number}
 */
const numUniqueEmails = emails => {
  // create counter -> init 0
  let counter = 0;
  // create email cache -> { email: bool }
  const emailCache = {};

  // create helper function for email parsing
  const parseEmail = email => {
    // create parsed email variable -> empty string
    let parsed = '';
    // split string at '+'
    const splitEmail = email.split('+');
    // concat parsed email var with split string at pos 0 (anything after the first '+' is ignored)
    parsed += splitEmail[0];
    // replace all '.' in parsed email var with empty string ('.' are just for vanity so are considered ignorable characters)
    parsed = parsed.replace(/\./g, '');
    // return parsed email variable
    return parsed;
  }

  // iterate through emails
  for (let i = 0; i < emails.length; i++) {
    // split string at '@'
    const splitEmail = emails[i].split('@');
    // parse email (split string pos 0) and combine with domain, readding the @
    const parsedEmail = `${parseEmail(splitEmail[0])}@${splitEmail[1]}`;
    // check if new email
    if (!emailCache[parsedEmail]) {
      // add to cache
      emailCache[parsedEmail] = true;
      // increment counter
      counter++;
    }
  }
    
  // return counter
  return counter;
};

onst numUniqueEmailsRefactored = emails => {
  // create counter -> init 0
  let counter = 0;
  // create email cache -> { email: bool }
  const emailCache = {};

  // create helper function for email parsing
  const parseEmail = email => email.split('+')[0].replace(/\./g, '');

  // iterate through emails
  for (let i = 0; i < emails.length; i++) {
    // split string at '@'
    const splitEmail = emails[i].split('@');
    // parse email (split string pos 0) and combine with domain, readding the @
    const parsedEmail = `${parseEmail(splitEmail[0])}@${splitEmail[1]}`;
    // check if new email
    if (!emailCache[parsedEmail]) {
      // add to cache
      emailCache[parsedEmail] = true;
      // increment counter
      counter++;
    }
  }
    
  // return counter
  return counter;
};

// console.log('expect: 2, result: ', numUniqueEmails([
//   "test.email+alex@leetcode.com",
//   "test.e.mail+bob.cathy@leetcode.com",
//   "testemail+david@lee.tcode.com"
// ]));