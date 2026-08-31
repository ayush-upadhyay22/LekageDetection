import TechnologyCard from "./TechnologyCard";
import { technologies } from "../lib/data/technologies";

export default function TechnologyGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
      {technologies.map((item) => (
        <TechnologyCard key={item.id} name={item.name} body={item.body} />
      ))}
    </div>
  );
}
