import { getWindow, getNavigator, getDocument } from '../server-side-util';

export function email(branch, email) {
  const emailTo = '';
  const subject = branch.title;
  let body = branch.link;
  const via = '\n\n\n\n\n via porthole';
  body += via;
  const emailLoc =
    'mailto:' + emailTo + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
  const screenWindow = getWindow();
  screenWindow?.open(emailLoc, '_blank', 'noopener');
}
export function tweet(branch) {
  const rawTitle = branch.title;
  const aboutText = rawTitle.length > 80 ? rawTitle.substring(0, 80) + ' ...' : rawTitle;
  //var shareWindowURL = 'http://twitter.com/share?url=' + tweetObj.link + '&amp;text=' + escape(aboutText);
  //var statusWindowURL = 'http://twitter.com/home?status=' + aboutText + " " + escape(tweetObj.link);
  //var shareWindowURL = 'http://twitter.com/share?url=' + encodeURIComponent(tweetObj.link) + '&amp;text=' + encodeURIComponent(aboutText);
  const tweet = encodeURIComponent(aboutText) + ' ' + encodeURIComponent(branch.link);

  // const statusWindowURL = 'http://twitter.com/home?status=' + tweet;
  const statusWindowURL = `https://twitter.com/intent/tweet?text=${tweet}`;
  const screenWindow = getWindow();
  if (!screenWindow) return null;
  screenWindow?.open(
    statusWindowURL,
    'twitterwindow',
    'height=380, width=550, top=' +
      (screenWindow?.innerHeight / 2 - 225) +
      ', left=' +
      screenWindow?.innerWidth / 2 +
      ', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0'
  );
}
