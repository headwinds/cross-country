### Notes to Self

[Export Google Gmail as JSON with Anyquery](https://www.perplexity.ai/search/with-gmail-it-is-possible-to-e-3QbcpP8URumQtG7e8GR11A#1)


This proves it works and should return 1 email
```
anyquery -q "SELECT * FROM gmail_imap_emails LIMIT 1" 
```

+--------+-----------+-----------+-------------+-----------+-----------+-----------+-----------+-----+------------+-----------+-------+--------+
|  uid   |  subject  |  sent_at  | received_at |   _from   |    to     | reply_to  |    cc     | bcc | message_id |   flags   | size  | folder |
+--------+-----------+-----------+-------------+-----------+-----------+-----------+-----------+-----+------------+-----------+-------+--------+
| 247024 | Re: Happy | 2024-03-1 | 2024-03-1   | [{"email" | [{"email" | [{"email" | [{"email" | []  | <55F19BC7  | ["\\Seen" | 16242 | INBOX  |
|        |  Birthday | 8T12      | 8T16        | :"barby@t | :"brandon | :"barby@t | :"robby@t |     | -8E97-481  | ]         |       |        |

I still haven't replied... one day!



```
anyquery -q "SELECT * FROM gmail_imap_emails LIMIT 200" --json > all_emails.json
```

When using zsh on a mac we need to be careful to escape reserved words like to and from - also for gmail, the column name is _from which I discovered from the first query getting 1 email

```
anyquery -q 'SELECT * FROM gmail_imap_emails WHERE `to` = `_from` LIMIT 100' --json > emails_sent_to_self.json
```

So this is close but I'm missing the contents of the email!!!

### Custom Commit

Motivation: I tend to attempt to solve problem by jumping into code and raising a PR which can be preceived as a threat instead of an exploration.

Reflection: Code that offends can also be used to protect. I need more guard rails before I push; in fact before I commit!

Questons to ask myself before committing?

- will anyone deem this solution a hack? Does it smell like a hack?!
- Did you ask anyone to take a moment and act as a sounding board to talk through problem
- Did you book a meeting to discuss it?
- again, is this code a threat to anyone; think carefully as much as you think it fire, what are some ways it could burn you?!!!
- is it less than 200 lines?

This folder has a hidden .git folder so shift-command-. to reveal it

- [Perplexity convo](https://www.perplexity.ai/search/i-want-to-a-write-custom-git-c-FYki.Te7Q0qi1j2noCOQ2g#0)
