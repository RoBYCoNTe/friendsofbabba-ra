import { Create, Edit, useTranslate } from "react-admin";

import { BlogPostForm } from "../component";

const BlogPostTitle = ({ record }) => {
  const translate = useTranslate();
  const prefix = translate("resources.blog-posts.name", {
    smart_count: 1,
  });
  return `${prefix} (${record?.id})`;
};
const BlogPostCreate = (props) => (
  <Create {...props}>
    <BlogPostForm create />
  </Create>
);

const BlogPostEdit = (props) => (
  <Edit {...props} title={<BlogPostTitle />}>
    <BlogPostForm />
  </Edit>
);

const config = {
  create: BlogPostCreate,
  edit: BlogPostEdit,
};

export default config;
