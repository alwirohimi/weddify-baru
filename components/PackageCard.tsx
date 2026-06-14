import { Package } from "../data/siteData";

export default function PackageCard({ name, price, features }: Package) {
  return (
    <div className="p-8 border rounded-2xl shadow-lg hover:border-stone-900 transition">
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-2xl font-bold my-4">{price}</p>
      <ul className="space-y-2">
        {features.map((f, i) => (
          <li key={i} className="text-sm text-stone-600">✓ {f}</li>
        ))}
      </ul>
    </div>
  );
}