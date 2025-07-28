'use client';

import { useParams } from 'next/navigation';
import ServiceBlock from '@/app/components/ui/ServiceBlock';

export default function ServicePage() {
  const { service } = useParams();
  
  // Map URL-friendly service names to the ones used in services.json
  const serviceNameMap = {
    'implementation': 'SAP Implementation Services',
    'rollout': 'SAP Roll Out Services',
    'support': 'SAP Support Services',
    'upgrade': 'SAP Upgrade Services',
    'integration': 'SAP Integration Services',
    'migration': 'SAP Migration Services',
    'automation': 'SAP Automation Services',
    'testing': 'SAP Testing Services'
  };

  return (
    <div className="relative min-h-*">

        <div className="">
          <ServiceBlock serviceName={serviceNameMap[service] || service} />
      </div>
    </div>
  );
}
