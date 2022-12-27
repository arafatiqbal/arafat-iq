import markdownStyles from "./markdown-styles.module.css";

type Props = {
  content: string;
  gumroadLink?: string;
};

const PostBody = ({ content, gumroadLink }: Props) => {
  const link = gumroadLink;
  debugger;
  return (
    <div className="max-w-2xl mx-auto">
      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <script src="https://gumroad.com/js/gumroad.js"></script>
      {link ? (
        <a className="gumroad-button" href={link}>
          Buy on
        </a>
      ) : (
        <></>
      )}
    </div>
  );
};

export default PostBody;
