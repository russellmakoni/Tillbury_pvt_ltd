import { 
  
  CheckCircle, 

  Award,
  Zap,
  Tag,
  Users
} from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Award,
      title: "Skilled Technicians",
      text: "Highly experienced and certified mechanical experts specialized in commercial fleet maintenance."
    },
    {
      icon: Zap,
      title: "Rapid Response",
      text: "Minimizing downtime with our optimized dispatch system and 24/7 mobile assistance units."
    },
    {
      icon: Tag,
      title: "Competitive Pricing",
      text: "Premium technical services and genuine parts at industry-leading rates that protect your margins."
    },
    {
      icon: Users,
      title: "Personalized Service",
      text: "Custom maintenance plans tailored specifically to your vehicle types and operational demands."
    }
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-gray-50 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-900/5 rounded-full -mr-32 -mt-32"></div>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-yellow-400 font-black text-xs uppercase tracking-widest block mb-4">The Tilbury Advantage</span>
            <h2 className="text-blue-900 font-black text-4xl lg:text-5xl uppercase tracking-tighter leading-none mb-8">
              Why Choose Us For Your Fleet?
            </h2>
            <p className="text-gray-600 mb-10 leading-relaxed max-w-lg">
              We understand that every hour your vehicle is off the road is an hour of lost revenue. Our technical framework is built to ensure maximum reliability and safety.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center">
                  <CheckCircle size={14} className="text-blue-900" />
                </div>
                <span className="text-blue-900 font-bold text-sm uppercase tracking-tight">Standardized Quality Control</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center">
                  <CheckCircle size={14} className="text-blue-900" />
                </div>
                <span className="text-blue-900 font-bold text-sm uppercase tracking-tight">Cross-Border Support Network</span>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {reasons.map((item, idx) => (
              <div key={idx} className="bg-white p-8 border-l-4 border-yellow-400 shadow-sm hover:shadow-md transition-all group">
                <item.icon className="text-blue-900 mb-4 group-hover:scale-110 transition-transform" size={32} strokeWidth={1.5} />
                <h4 className="text-blue-900 font-black text-sm uppercase mb-2 tracking-tight">{item.title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed font-medium">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default WhyChooseUs;