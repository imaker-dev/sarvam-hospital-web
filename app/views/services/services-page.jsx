import React from "react";
import PageHeader from "../layouts/page-header";
import { getServices } from "@/app/data/services";
import ServiceCard from "./components/service-card";
import PageWrapper from "../layouts/page-wrapper";

const ServicesPage = () => {
  const services = getServices();

  return (
    <div>
      <PageHeader title={"Our Services"} highlight={"Services"} />
      <PageWrapper>
        <div className="grid grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </PageWrapper>
    </div>
  );
};

export default ServicesPage;
