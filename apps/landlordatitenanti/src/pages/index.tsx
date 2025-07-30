import FaqSection from '@/components/faqs';
import AboutSection from '@/components/home/homeabout';
import FeaturesSection from '@/components/home/homefeatures';
import { PropertiesShowcase } from '@/components/home/propertiesShowcase';
import HomeUserRolesSection from '@/components/home/rolerSelection';
import Layout from '@/components/layout';

function Index() {
  return (
    <Layout>
      <div className="flex flex-col gap-3">
        <AboutSection />
        <FeaturesSection />
        <PropertiesShowcase />
        <HomeUserRolesSection />
        <div className="py-12">
          <FaqSection />
        </div>
      </div>
    </Layout>
  );
}

export default Index;
