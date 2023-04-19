import { Create, Edit, useTranslate } from "react-admin";

import { BlogPostCommentForm } from "../component";

const BlogPostCommentTitle = ({ record }) => {
  const translate = useTranslate();
  const prefix = translate("resources.blog-post-comments.name", {
    smart_count: 1,
  });
  return `${prefix} (${record?.id})`;
};
const BlogPostCommentCreate = (props) => (
  <Create {...props}>
    <BlogPostCommentForm create />
  </Create>
);

const BlogPostCommentEdit = (props) => (
  <Edit {...props} title={<BlogPostCommentTitle />}>
    <BlogPostCommentForm />
  </Edit>
);

const config = {
  create: BlogPostCommentCreate,
  edit: BlogPostCommentEdit,
};

export default config;
