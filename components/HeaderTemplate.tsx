const HeaderTemplate = ({
  type = "title",
  title,
  subtext,
  user,
}: HeaderTemplateProps) => {
  return (
    <div className="header-template">
      <h1 className="header-template-title">
        {title}
        {type === "greeting" && (
          <span className="text-primary-100">&nbsp;{user}</span> // Using the accent color
        )}
      </h1>
      <p className="header-template-subtext">{subtext}</p>
    </div>
  );
};

export default HeaderTemplate;
