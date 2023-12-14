import { Record } from 'immutable';

// do I really want markup or plain text?! or even markdown!

/*
example post data
 const post = {
            title: 'my title',
            description: 'lets combine tile gaming and bloggging',
            content: '<p>is markup <a href="http://google.com">cool</a>?</p>'
            blogpost_type: "common",
            slug: 'roguelike',
            user_account_id: "af826374-e02f-43a9-a53c-6d3e4529f698",
        };
        */

const PostModel = Record({
  title: '',
  description: '',
  content: '',
  blogpost_type: '',
  slug: '',
  user_account_id: '',
  status: '',
});

export default PostModel;
