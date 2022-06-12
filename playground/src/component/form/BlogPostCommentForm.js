import { ReferenceToolbar, useSaveMutation } from "ra-friendsofbabba";
import { SimpleForm, TextInput, useRedirect } from "react-admin";

import React from "react";

const BlogPostComment = ({ create = false, ...props }) => {
  const redirect = useRedirect();
  const save = useSaveMutation({
    ...props,
    onSuccess: (_, values) => redirect(`/blog-posts/${values.blog_post_id}`),
  });

  return (
    <SimpleForm
      {...props}
      save={save}
      initialValues={{
        ...props?.record,
      }}
      toolbar={
        <ReferenceToolbar
          backTab={0}
          backReferenceTarget="blog_post_id"
          backReference="blog-posts"
        />
      }
    >
      <TextInput source="comment_text" fullWidth multiline />
    </SimpleForm>
  );
};
export default BlogPostComment;
