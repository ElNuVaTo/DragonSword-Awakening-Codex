import { NavLink } from "react-router-dom";

const LinkCard = ({ to, text, img }) => {
  return (
    <NavLink to={to}>
      {({ isActive }) => (
        <div className="relative flex w-max items-center gap-1.5 px-1 py-1.5">
          <img
            src={img}
            alt=""
            draggable={false}
            className="size-6 shrink-0 object-contain"
          />

          <p className="whitespace-nowrap text-[0.625rem] font-medium uppercase tracking-[0.15em] text-white/70">
            {text}
          </p>

          <span className="absolute inset-x-0 bottom-0 flex h-px items-center justify-center">
            <span
              className={`absolute size-1 rotate-45 ${
                isActive ? "bg-[#f1d46a]" : "bg-[#777363]"
              }`}
            />

            <span
              className={`h-px w-full ${
                isActive
                  ? "bg-[#d9bd5c]"
                  : "rounded-full bg-[#5f5c50]"
              }`}
            />
          </span>
        </div>
      )}
    </NavLink>
  );
};

export default LinkCard;