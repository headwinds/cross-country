# Email

experimenting with Python and the Gmail API to better manage emails that I sent to myself.

The "share with" functionality is challenging to build and with the approach, I can use gmail as a tank and pump content in and out of it.

emails.json is from Python

## Anyquery

I used [anyquery](https://anyquery.dev/) and a nice interaction on their [discussion board](https://github.com/julien040/anyquery/discussions/15)

emails_sent_to_self.json is from anyquery before they made the update to include the body.

### Notes to Self

[Export Google Gmail as JSON with Anyquery](https://www.perplexity.ai/search/with-gmail-it-is-possible-to-e-3QbcpP8URumQtG7e8GR11A#1)

This proves it works and should return 1 email

```
anyquery -q "SELECT * FROM gmail_imap_emails LIMIT 1"
```

+--------+-----------+-----------+-------------+-----------+-----------+-----------+-----------+-----+------------+-----------+-------+--------+
| uid | subject | sent_at | received_at | \_from | to | reply_to | cc | bcc | message_id | flags | size | folder |
+--------+-----------+-----------+-------------+-----------+-----------+-----------+-----------+-----+------------+-----------+-------+--------+
| 247024 | Re: Happy | 2024-03-1 | 2024-03-1 | [{"email" | [{"email" | [{"email" | [{"email" | [] | <55F19BC7 | ["\\Seen" | 16242 | INBOX |
| | Birthday | 8T12 | 8T16 | :"barby@t | :"brandon | :"barby@t | :"robby@t | | -8E97-481 | ] | | |

I still haven't replied... one day!

```
anyquery -q "SELECT * FROM gmail_imap_emails LIMIT 200" --json > all_emails.json
```

When using zsh on a mac we need to be careful to escape reserved words like to and from - also for gmail, the column name is \_from which I discovered from the first query getting 1 email

```
anyquery -q 'SELECT * FROM gmail_imap_emails WHERE `to` = `_from` LIMIT 100' --json > emails_sent_to_self.json
```

So this is close but I'm missing the contents of the email!!!

**[update](https://github.com/julien040/anyquery/discussions/15)**
