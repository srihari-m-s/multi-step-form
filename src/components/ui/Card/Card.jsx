export default function Card({ heading, para, children }) {
  return (
    <div className="space-y-4">
      {heading ? (
        <h1 className="text-marine_blue text-2xl font-primary_bold">
          {heading}
        </h1>
      ) : (
        ""
      )}
      {para ? <p className="text-cool_gray break-words">{para}</p> : ""}

      {/* Children */}
      {children}
    </div>
  );
}
