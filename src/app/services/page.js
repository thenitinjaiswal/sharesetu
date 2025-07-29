import ServicesGrid from '../../components/ServicesGrid';

export const metadata = {
  title: 'Recovery Services - ShareSetu | IEPF, PF, Insurance Claims',
  description: 'Comprehensive financial recovery services for IEPF, Provident Fund, Insurance, and Mutual Fund claims. Government-certified platform.',
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Services Section */}
      <section className="py-16 px-4">
        <ServicesGrid />
      </section>

      {/* Additional CTA Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Start Your Recovery?</h3>
          <p className="text-gray-600 mb-6">
            Our expert team is ready to help you recover your unclaimed assets
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
             href="https://wa.me/918765610216" target="_blank"
              className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Get Started Now
            </a>
            <a
              href="tel:+919999999999"
              className="border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Call Expert
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
