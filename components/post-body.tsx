import markdownStyles from "./markdown-styles.module.css";

type Props = {
  content: string;
  gumroadLink?: string;
};

const PostBody = ({ content, gumroadLink }: Props) => {
  return (
    <div className="max-w-2xl mx-auto">
      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <script src="https://gumroad.com/js/gumroad.js"></script>
      {gumroadLink ? (
        <a className="gumroad-button" href={gumroadLink}>
          Buy on
        </a>
      ) : (
        <></>
      )}
    </div>
  );
};

export default PostBody;
