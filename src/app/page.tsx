import Hero from "@/app/components/Hero";
import ContentColumn from "@/app/components/ContentColumn";
import LargeCTA from "@/app/components/LargeCTA";
import Card from "@/app/components/Card";

const hero = [
  {
    _id: "e3092w",
    text: "Professional Support: Expert medical and emotional care.",
    image: "https://images.unsplash.com/photo-1573743338941-39db12ef9b64",
  },
  {
    _id: "x23wq1",
    text: "Personalized Healing: Tailored services to meet your unique needs.",
    image: "https://images.unsplash.com/photo-1573554394544-930a4cf6fc66",
  },
  {
    _id: "z321o",
    text: "Empathy & Understanding: A place where you're truly heard.",
    image: "https://images.unsplash.com/photo-1572295727871-7638149ea3d7",
  },
  {
    _id: "3e421e",
    text: "Guiding Through Grief: Helping you find hope and strength.",
    image: "https://images.unsplash.com/photo-1571847490051-491c12ff6540",
  },
];

const educations = [
  {
    _id: "9wwyt",
    text: "Our expert-led workshops offer practical tools and insights to help individuals and families cope with the emotional, physical, and mental challenges of grief. Topics include stress management, emotional resilience, and communication during difficult times.",
    image: "https://raw.githubusercontent.com/imoralescs/images/refs/heads/main/sharing-memory/nixcko_I_have_this_webpage_description_At_Sharing_Memory_we_are_49ca3939-c97e-4785-807a-63f045d0b2bb.webp",
    title: "Workshops on Coping Strategies",
  },
  {
    _id: "9ery2",
    text: "We provide dedicated sessions for families, helping them come together, communicate effectively, and support one another in the process of healing. These programs include group activities, family therapy, and resource sharing.",
    image: "https://raw.githubusercontent.com/imoralescs/images/refs/heads/main/sharing-memory/nixcko_I_have_this_webpage_description_At_Sharing_Memory_we_are_55108f62-6a73-4d2c-8177-2780f0e3e71d.webp",
    title: "Family Support Programs",
  },
  {
    _id: "9say8",
    text: "Our mindfulness courses teach techniques like meditation, breathing exercises, and stress reduction strategies to help individuals maintain mental clarity and emotional stability in their healing journey.",
    image: "https://raw.githubusercontent.com/imoralescs/images/refs/heads/main/sharing-memory/nixcko_I_have_this_webpage_description_At_Sharing_Memory_we_are_81ebbe35-5d00-46f0-80b8-90d94370bdb5.webp",
    title: "Mindfulness Training",
  },
  {
    _id: "qt5yt",
    text: "Accessible anytime, our online courses offer in-depth resources, step-by-step guidance, and interactive modules on managing grief. From understanding the stages of grief to rebuilding routines and personal goals, these courses provide comprehensive support tailored to your pace.",
    image: "https://raw.githubusercontent.com/imoralescs/images/refs/heads/main/sharing-memory/nixcko_I_have_this_webpage_description_At_Sharing_Memory_we_are_ed2b0697-a967-40cc-94a4-6a13188d66c1.webp",
    title: "Online Courses",
  },
];

const services = [
  {
    _id: "9wwyt",
    text: "Sessions with certified therapists specializing in loss and trauma.",
    image: "https://raw.githubusercontent.com/imoralescs/images/refs/heads/main/sharing-memory/nixcko_supporting_individuals_and_families_through_the_challeng_fd837451-a5e6-4f2c-8858-469509c1812e.webp",
    title: "Grief Counseling",
  },
  {
    _id: "9ery2",
    text: "Physical and mental health check-ups for individuals coping with grief.",
    image: "https://raw.githubusercontent.com/imoralescs/images/refs/heads/main/sharing-memory/nixcko_Our_compassionate_team_offers_medical_care_emotional_gui_eff2592c-4b15-4b7d-8123-3603d5c2c76c.webp",
    title: "Health Monitoring",
  },
  {
    _id: "9say8",
    text: "Community gatherings for shared healing experiences.",
    image: "https://raw.githubusercontent.com/imoralescs/images/refs/heads/main/sharing-memory/nixcko_Our_compassionate_team_offers_medical_care_emotional_gui_a8f7eeac-8b28-4262-a28e-610dc262df33.webp",
    title: "Support Groups",
  },
  {
    _id: "qt5yt",
    text: "Immediate assistance for stress-related health issues.",
    image: "https://raw.githubusercontent.com/imoralescs/images/refs/heads/main/sharing-memory/nixcko_Our_compassionate_team_offers_medical_care_emotional_gui_488c8fba-d806-40e8-8a99-029f2b1f8e3b.webp",
    title: "Emergency Care",
  },
];

export default function Home() {
  return (
    <div>
      <main>
        <Hero slides={hero} />
        <ContentColumn
          title="Sharing Memory"
          text="At Sharing Memory, we understand the profound impact of losing someone dear. Our mission is to provide holistic support—blending medical care, emotional guidance, and educational resources to help you navigate this challenging time. Whether you seek one-on-one counseling, health check-ups, or a supportive community, we’re here for you. Together, we’ll foster a path toward healing, hope, and a renewed sense of peace."
        />
        <LargeCTA />
        <div className="education">
          <h2 className="education__header">Education</h2>
          <div className="education__container">
            {educations.map(({ _id, text, image, title }) => {
              return (
                <a className="education__item" href="#" key={_id}>
                  <Card
                    title={title}
                    image={image}
                    text={text}
                    variant="type-a"
                  />
                </a>
              );
            })}
          </div>
        </div>
        <div className="services">
          <h2 className="services__header">Services</h2>
          <div className="services__container">
            {services.map(({ _id, text, image, title }) => {
              return (
                <a className="services__item" href="#" key={_id}>
                  <Card
                    title={title}
                    image={image}
                    text={text}
                    variant="type-b"
                  />
                </a>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
