import React from "react";
import HeroBanner from "@/app/components/HeroBanner";

export default function Home() {
  return (
    <>
      <HeroBanner
        title="Grief Counseling"
        content="Grief counseling is at the heart of our services, designed to provide a safe space for individuals to process their emotions and begin the healing journey. Our licensed therapists specialize in grief and trauma, offering empathetic and tailored support to meet your unique needs."
        imageUrl="https://raw.githubusercontent.com/imoralescs/images/refs/heads/main/sharing-memory/nixcko_supporting_individuals_and_families_through_the_challeng_fd837451-a5e6-4f2c-8858-469509c1812e.webp"
      />
      <HeroBanner
        title="Health and Wellness Monitoring"
        content="Grieving can take a significant toll on both your mental and physical health. Our health and wellness monitoring services focus on addressing the often-overlooked physical effects of grief, such as fatigue, stress-related illnesses, and changes in appetite or sleep patterns. "
        imageUrl="https://raw.githubusercontent.com/imoralescs/images/refs/heads/main/sharing-memory/nixcko_Our_compassionate_team_offers_medical_care_emotional_gui_eff2592c-4b15-4b7d-8123-3603d5c2c76c.webp"
        isImageRight={false}
      />
      <HeroBanner
        title="Support Groups"
        content="Support groups provide a community of understanding and empathy for those navigating the difficult journey of grief. These gatherings offer a space where individuals can share their stories, listen to others, and find solace in knowing they are not alone. "
        imageUrl="https://raw.githubusercontent.com/imoralescs/images/refs/heads/main/sharing-memory/nixcko_Our_compassionate_team_offers_medical_care_emotional_gui_488c8fba-d806-40e8-8a99-029f2b1f8e3b.webp"
      />
      <HeroBanner
        title="24/7 Emergency Support"
        content="Grief can sometimes feel overwhelming, and moments of crisis can arise unexpectedly. Our 24/7 emergency support service is here to ensure that you are never alone during those times. Whether you're experiencing a panic attack, acute stress, or an emotional breakdown, our team is available around the clock to provide immediate assistance."
        imageUrl="https://raw.githubusercontent.com/imoralescs/images/refs/heads/main/sharing-memory/nixcko_Our_compassionate_team_offers_medical_care_emotional_gui_a8f7eeac-8b28-4262-a28e-610dc262df33.webp"
        isImageRight={false}
      />
    </>
  );
}
