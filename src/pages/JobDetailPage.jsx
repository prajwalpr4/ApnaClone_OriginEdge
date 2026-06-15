import { useParams } from 'react-router-dom';
import { useJob } from '../hooks/useJob';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import JobHeader from '../components/job/JobHeader';
import JobDescription from '../components/job/JobDescription';
import FAQAccordion from '../components/job/FAQAccordion';
import RelatedJobCard from '../components/related/RelatedJobCard';
import SidebarPromo from '../components/job/SidebarPromo';

const JobDetailPage = () => {
  const { id } = useParams();
  const { job, relatedJobs, loading } = useJob(id);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col bg-[#f8f9fa]">
        <Header />
        <main className="flex-1 max-w-[1280px] w-full mx-auto px-4 py-12 flex justify-center items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-primary"></div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!job) {
    return (
      <div className="min-h-screen flex flex-col bg-[#f8f9fa]">
        <Header />
        <main className="flex-1 max-w-[1280px] w-full mx-auto px-4 py-12 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Job Not Found</h2>
          <p className="text-gray-600 mb-6">The job you are looking for does not exist or has been removed.</p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#f8f9fa] font-sans">
      <Header />

      <main className="flex-1 max-w-[1280px] w-full mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-12 gap-8 relative">
        {/* Left + Center Content */}
        <div className="lg:col-span-8 space-y-0">
          <JobHeader job={job} />
          <JobDescription job={job} />
          
          {/* Related Jobs Section */}
          {relatedJobs && relatedJobs.length > 0 && (
            <div className="mt-8 bg-white rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-gray-200 p-5 mb-6">
              <h2 className="text-[18px] font-bold text-gray-900 mb-5">Similar jobs you can apply for</h2>
              <div className="flex flex-col gap-0">
                {relatedJobs.map((relatedJob) => (
                  <RelatedJobCard key={relatedJob.id} job={relatedJob} />
                ))}
              </div>
            </div>
          )}

          {/* FAQs Section */}
          <FAQAccordion />
        </div>

        {/* Right Sidebar Desktop & Tablet */}
        <div className="col-span-1 lg:col-span-4">
          <SidebarPromo />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default JobDetailPage;
