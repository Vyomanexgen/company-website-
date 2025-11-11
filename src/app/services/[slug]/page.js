//import { servicesDetailData } from "../../../lib/servicesData";

// //import { servicesDetailData } from "@/lib/servicesData";

// export default async function ServiceDetailPage({ params }) {
//   const { slug } = await params; // ✅ Unwrap Promise

//   const service = servicesDetailData[slug];

//   if (!service) {
//     return (
//       <div className="pt-32 text-center text-red-300">
//         Service Not Found
//       </div>
//     );
//   }

//   return (
//     <div className="pt-32 pb-16 px-6 max-w-5xl mx-auto text-gray-200">
//       <h1 className="text-4xl font-bold mb-4">{service.title}</h1>
//       <p className="text-lg text-gray-400 mb-8">{service.subtitle}</p>

//       <h2 className="text-2xl font-semibold mb-4">Overview</h2>
//       <p className="text-gray-300 mb-8">{service.overview}</p>

//       <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
//       <ul className="list-disc list-inside space-y-3 text-gray-300">
//         {service.features.map((f, i) => (
//           <li key={i}>{f}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }


import Navbar from "@/app/components/Navbar"; 
// --- FIX IS ON THIS LINE ---
import ServiceDetailClient from "./ServiceDetailClient"; // Removed the {} braces
// --- END OF FIX ---
import { servicesDetailData } from "@/lib/servicesData";

export async function generateStaticParams() {
  return Object.keys(servicesDetailData).map((slug) => ({ slug }));
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = servicesDetailData[slug];

  if (!service) {
    return (
      <div className="pt-32 text-center text-red-300">
        Service Not Found
      </div>
    );
  }

  return (
    <>
      <Navbar /> {/* ✅ Navbar now included */}
      <ServiceDetailClient service={service} />
    </>
  );
}