import React from 'react';

import {
  LongTextField,
  ReferenceListField,
} from 'ra-friendsofbabba';
import { DateField } from 'react-admin';

const BlogPostCommentsField = (props) => (
  <ReferenceListField
    {...props}
    reference="blog-post-comments"
    target="blog_post_id"
  >
    <LongTextField source="comment_text" />
    <DateField source="created" showTime />
  </ReferenceListField>
);

export default BlogPostCommentsField;