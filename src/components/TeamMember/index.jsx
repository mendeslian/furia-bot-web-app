export default function TeamMember({ image, name, role, description }) {
  return (
    <article className="w-110 bg-neutral-900 flex flex-col justify-center items-center gap-4 rounded-md py-4 px-8 duration-300 hover:scale-101 border-2 border-transparent hover:border-yellow-500 hover:shadow-2xl sm:flex-row sm:h-60 sm:items-start">
      <img
        src={image}
        alt={name}
        draggable={false}
        className="w-40 h-40 select-none rounded-full"
      />
      <div className="flex flex-col h-full items-center justify-center gap-2 sm:items-start">
        <h3 className="text-xl font-bold text-neutral-100 tracking-wide">
          {name}
        </h3>
        <div className="flex items-center justify-center gap-2 flex-wrap">
          {role.map((role, index) => (
            <span
              key={index}
              className="text-yellow-500 text-xs font-semibold bg-neutral-800 px-2 rounded-full flex items-center justify-center h-5 tracking-wider"
            >
              {role}
            </span>
          ))}
        </div>
        <p className="text-sm font-semibold text-neutral-400 text-center sm:text-left">
          {description}
        </p>
      </div>
    </article>
  );
}
