
import { 
  Wrench, 

  Truck, 
  ShieldCheck, 
  AlertCircle,
  ChevronRight,
 
} from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-8 border-b-4 border-gray-100 hover:border-yellow-400 transition-all duration-300 group shadow-sm hover:shadow-xl">
    <div className="bg-gray-50 w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-yellow-400 transition-colors duration-300">
      <Icon size={32} className="text-blue-900 group-hover:text-white" strokeWidth={1.5} />
    </div>
    <h3 className="text-xl font-bold text-blue-900 mb-3">{title}</h3>
    <p className="text-gray-600 text-sm leading-relaxed mb-6">{description}</p>
    <div className="flex items-center gap-2 text-blue-900 text-xs font-bold uppercase group-hover:gap-4 transition-all">
      Read More <ChevronRight size={14} className="text-yellow-400" />
    </div>
  </div>
);

const Services = () => (
  <section id="services" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-blue-900 font-black text-4xl uppercase tracking-tighter mb-4">Our Services</h2>
        <div className="w-20 h-1.5 bg-yellow-400 mx-auto"></div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <ServiceCard 
          icon={ShieldCheck} 
          title="Preventative" 
          description="Systematic checks and quality part replacements to prevent major mechanical failure."
        />
        <ServiceCard 
          icon={AlertCircle} 
          title="Breakdown" 
          description="Rapid emergency response units for on-the-road assistance and quick recovery."
        />
        <ServiceCard 
          icon={Wrench} 
          title="Scheduled" 
          description="Comprehensive repairs, component fitments, and full mechanical maintenance programs."
        />
        <ServiceCard 
          icon={Truck} 
          title="Carrying" 
          description="Safe transport and logistics for vehicles requiring deep workshop intervention."
        />
      </div>
    </div>
  </section>
);

export default Services;