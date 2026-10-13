import React from "react";
import PageHeader from "../layouts/page-header";
import FaqSection from "./components/faq-section";

const FaqPage = () => {
  return (
    <>
      <PageHeader title="Frequently Asked Questions" highlight="Questions" />
      <FaqSection />
    </>
  );
};

export default FaqPage;
