import React from "react";
import "./LargeCTA.css";
import ButtonWithArrow from "@/app/components/ButtonWithArrow";

interface LargeCTA {}

const LargeCTA: React.FC<LargeCTA> = () => {
  return (
    <div
      className="large-cta"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1569173784625-34f37a1a35ef'",
      }}
    >
      <div className="large-cta__container">
        <div className="large-cta__column">
          <div className="large-cta__title">Take the First Step Toward Healing</div>
          <div className="large-cta__copy">
            <p>
            Grief is a journey that no one should walk alone. At Sharing Memory, we provide a sanctuary of care and understanding to help you heal at your own pace. Whether you need someone to talk to, a community to lean on, or expert medical support to manage the toll of loss, we are here to stand by your side. Take the first step toward rediscovering balance and peace in your life. You are not alone—together, we can navigate this path toward hope.
            </p>
          </div>
          <ButtonWithArrow label="Start Your Journey Today" variant="services" />
        </div>
      </div>
    </div>
  );
};

export default LargeCTA;
