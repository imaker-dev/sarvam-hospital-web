import { getServiceDetails } from '@/app/data/services';
import ServiceDetailsPage from '@/app/views/service-details/service-details-page'

const Page = async({params}) => {
    const { slug } = await params;
    const data = getServiceDetails(slug);

    if(!data) return;
  return <ServiceDetailsPage data={data}/>
}

export default Page
