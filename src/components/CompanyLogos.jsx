import { companyLogos, textD } from "../constants";

const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/50">Especial agradecimiento a</h5>
      <ul className="flex flex-wrap justify-center gap-60">
        {companyLogos.map((logo, index) => {
          const data = textD[index];
          return (
            <li
              className="flex flex-col items-center text-center"
              key={index}
            >
              <a href={data?.url || "#"} target="_blank" rel="noopener noreferrer">
                <img
                  src={logo}
                  width={80}
                  height={80}
                  className="rounded-xl"
                  alt={data?.name || "Company Logo"}
                />
              </a>
              <span className="mt-3 text-lg text-white">{data?.name || "Unknown"}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CompanyLogos;

