import FaqSection from '@/components/faqs';
import FeaturesSection from '@/components/home/homefeatures';
import HomeUserRolesSection from '@/components/home/rolerSelection';
import Layout from '@/components/layout';

function Index() {
  return (
    <Layout>
      <div className="flex flex-col gap-3">
        <FeaturesSection />
        <HomeUserRolesSection />
        <div className='py-12'>
          <FaqSection />
        </div>
      </div>
    </Layout>
  );
}

export default Index;
