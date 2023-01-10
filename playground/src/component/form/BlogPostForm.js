import {
  Component,
  DateTimeInput,
  ReferenceAutocompleteInput,
  useSaveMutation,
} from "ra-friendsofbabba";
import { SimpleForm, required, useRedirect } from "react-admin";

import BlogPostCommentsField from "../field/BlogPostCommentsField";
import React from "react";

const BlogPostForm = ({ create = false, ...props }) => {
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
    >
      <Component
        sorry="Oops! No data to display for now"
        source="blog_post_comments"
        component="BlogPostCommentsField"
        components={{ BlogPostCommentsField }}
        addLabel={false}
        fullWidth
      />
      <ReferenceAutocompleteInput source="author_id" />
      <DateTimeInput source="published" validate={required()} />
    </SimpleForm>
  );
};
export default BlogPostForm;
