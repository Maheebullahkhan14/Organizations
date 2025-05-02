import { heroBanner, aboutBanner, heroArrowIcon, team01, team02, team03, team04, tickIcon, circulartxt, service01, service02, service03, service04, membersBanner, mainLogo, phoneIcon, contactArrowIcon, whiteArrowIcon } from "../assets";
import "../../education_organization/education_org.css"
import { Link } from "react-router-dom";
const Education_organization_app = () => {
  return (
    <div className="font-sans text-gray-800 education-app-cover">
      <Header />
      <Hero />
      <About />
      <Services />
      <MembershipBenefits />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export const Header = () => {
  return (
    <div className="flex justify-between items-center px-6 py-4">
      {/* Logo */}
      <div className="ml-5">
        <img src={mainLogo} alt="Logo" className="h-16 object-contain" />
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-6 font-semibold header-nav">
        <a href="#Home" className="text-gray-800 hover:text-teal-500">
          Home
        </a>
        <a href="#About" className="text-gray-800 hover:text-teal-500">
          About Us
        </a>
        <a href="#Services" className="text-gray-800 hover:text-teal-500">
          Our Services
        </a>
        <a href="#Membership" className="text-gray-800 hover:text-teal-500">
          Membership Benefits
        </a>
      </div>

      {/* Contact Us Button */}
      <a href="#" className="flex items-center  transition contact-header-btn">
        <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full">
          <img src={phoneIcon} alt="Phone Icon" className="w-5 h-5" />
        </div>
        <span className="text-sm font-medium ml-2">Contact Us</span>
      </a>
    </div>
  )
}

// components/Hero.js
export const Hero = () => {
  return (
    <section className="hero-section px-4 py-8 md:py-14 bg-gray-50">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between">

        <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center">
          <div className="text-center md:text-left ">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 leading-tight">
              Empowering Education.<br />
              Supporting Institutions.<br />
              Uplifting Educators.
            </h1>
            <p className="text-gray-600 max-w-md mx-auto md:mx-0 mb-6 text-sm sm:text-base">
              Join the movement that’s transforming India’s education ecosystem.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-4">
              <button className="bg-green-500 flex flex-row items-center hover:bg-green-600 text-white px-6 py-2 rounded-full text-sm sm:text-base become-mem-btn">
                Become a Member
                <img src={whiteArrowIcon} alt="Logo" className="h-8 ml-3 object-contain" />

              </button>
              <div className="text-left flex flex-col items-center md:items-start">
                {/* <img src={arrowIcon} alt="arrow" className="w-12 h-auto" /> */}
                <p className="text-gray-500 text-xs mt-1 text-center md:text-left">
                  Educated more than<br />thousand people
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-arrow-icon-box">
          <img src={heroArrowIcon} alt="" />
        </div>
        <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center">
          <img src={heroBanner} alt="Hero visual" className="w-full max-w-md" />
        </div>
      </div>
    </section>

  );
}

// components/About.js
export const About = () => {
  return (
    <section className="mt-40 relative px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">

        {/* Left Image Part */}
        <div className="w-full md:w-1/2 relative">
          <img
            src={aboutBanner}
            alt="Group Study"
            className="w-full rounded-xl"
          />

          {/* Round Text Badge */}
          <div className="absolute top-0 p-3 left-1/2 -translate-y-1/2 ml-20 w-40 h-40 rounded-full bg-[#3E8D5A] flex items-center justify-center">
            <img src={circulartxt} alt="Badge" className="custom-rotate" />
          </div>

          {/* Vision Box */}
          <div className="absolute left-18 -bottom-6 w-[250px] bg-[#ebefed] rounded-4xl shadow px-6 py-5">
            <h6 className="text-lg font-bold mb-2">Our Vision</h6>
            <p className="text-sm leading-relaxed">
              To elevate Indian education to global standards by empowering every stakeholder — institutions, educators, and students.
            </p>
          </div>
        </div>

        {/* Right Text Part */}
        <div className="w-full md:w-1/2 mt-10 md:mt-0">
          <h4 className="text-3xl font-bold mb-4">
            <span className="text-green-600">//</span> About Us
          </h4>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            We are a dedicated education rights organization committed to supporting schools, colleges, universities, and educators across India. Our mission is to protect the rights of educational institutions, enhance the skills of teachers, support student development, and ensure access to government and international opportunities.
          </p>

          {/* Mission Box */}
          <div className="bg-[#ebefed] rounded-3xl shadow p-6">
            <h6 className="text-xl font-bold mb-3">Our Mission</h6>
            <ul className="space-y-3 text-base">
              {[
                "Ensure legal protection and support",
                "Promote skill development for teachers and students",
                "Foster collaboration and recognition in the education sector",
                "Bridge institutions with government schemes and international opportunities",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <img
                    src={tickIcon}
                    alt="Checkmark"
                    className="w-5 h-5 mr-4 mt-1"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <hr className="border-t mt-20 border-gray-300" />
    </section>


  );
}

// components/Services.js
export const Services = () => {
  return (
    <section className="py-12 px-5 bg-white">
      <h4 className="text-4xl font-bold text-center mb-12">
        <span className="text-green-600">//</span> Our Services
      </h4>

      <div className="max-w-6xl mx-auto space-y-12">
        {[
          {
            number: "01.",
            title: ["Legal & Rights", "Support"],
            points: [
              "Full legal assistance to member schools, colleges, universities, and teachers",
              "Resolution of disputes through Rights Arbitrators",
              "Government-related certifications and compliance support",
            ],
            icon: service01,
          },
          {
            number: "02.",
            title: ["Institutional", "Development"],
            points: [
              "Expansion support for infrastructure and operations",
              "Building development and low-cost vehicle procurement",
              "Financial assistance through banks and NBFCs",
              "Collaboration with campus maintenance and development firms",
            ],
            icon: service02,
          },
          {
            number: "03.",
            title: ["Teacher", "Empowerment"],
            points: [
              "Global recognition and awards for talented educators",
              "Skill enhancement and new technology workshops",
              "Training in competitive exam preparation (SRO, UPSC, CDS)",
              "International educator visits to raise academic standards",
              "Recruitment support for teaching and non-teaching staff",
            ],
            icon: service03,
          },
          {
            number: "04.",
            title: ["Student", "Advancement"],
            points: [
              "Career guidance through talent identification programs",
              "Skill-based training and placement support",
              "Educational tours with safety measures",
              "Higher education awareness and support for studying abroad",
              "POSCO Act awareness for student protection",
            ],
            icon: service04,
          },
        ].map((service, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center custom-border pb-8"
          >
            <div className="md:col-span-1 text-3xl font-bold">{service.number}</div>
            <div className="md:col-span-4 font-semibold text-3xl font-[Pragati_Narrow]">
              {service.title.map((line, i) => (
                <h3 key={i}>{line}</h3>
              ))}
            </div>
            <div className="md:col-span-6 text-gray-700 text-lg space-y-4">
              <ul className="list-disc pl-5">
                {service.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
            <div className="md:col-span-1 text-center">
              <img src={service.icon} alt="icon" className="w-12 mx-auto" />
            </div>
          </div>
        ))}
      </div>
    </section>

  );
}

// components/MembershipBenefits.js
export const MembershipBenefits = () => {
  return (
    <section className="py-12 bg-white max-w-6xl mx-auto">
      <div className="container mx-auto px-5">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="lg:w-1/2">
            <h4 className="text-4xl font-bold mb-6 text-left">
              <span className="text-green-600">// </span>Membership Benefits
            </h4>
            <h2 className="text-xl font-medium mb-6 font-[Poppins]">
              Become a member and unlock the following
            </h2>

            <ul className="space-y-4 text-lg text-gray-700">
              {[
                "Legal protection for institutions and educators",
                "Opportunities to participate in central/state government projects",
                "Insurance coverage and claims processing",
                "Awards, recognition, and skill training programs",
                "International exposure and student placement support",
                "Access to special funding, vehicle, and infrastructure plans",
                "Participation in competitive and developmental programs",
                "Collaboration with top national and international educators",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <img
                    src={tickIcon}
                    alt="check"
                    className="w-6 h-6 mt-1"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Button */}
            <a
              href="#"
              className="mt-8 inline-flex items-center gap-3 bg-[#3E8D5A] rounded-full w-fit py-2 px-2"
            >
              <div className="bg-white text-green-800 font-semibold px-4 py-1 rounded-full text-lg">
                Join as Member Now
              </div>
              <img
                src={whiteArrowIcon}
                alt="arrow"
                className="w-8 h-8"
              />
            </a>
          </div>

          {/* Right Image */}
          <div className="lg:w-1/2 text-center">
            <img
              src={membersBanner}
              alt="Graduate Student"
              className="rounded-3xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>

  );
}

// components/Team.js
export const Team = () => {
  return (
    <section className="team-section px-4 py-12 md:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Our Team</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          <div className="text-center text-sm mx-3">
            <div className="team-banner-box">
              <img src={team01} alt="" />
            </div>
          </div>
          <div className="text-center text-sm mx-3">
            <div className="team-banner-box">
              <img src={team02} alt="" />
            </div>
          </div>
          <div className="text-center text-sm mx-3">
            <div className="team-banner-box">
              <img src={team03} alt="" />
            </div>
          </div>
          <div className="text-center text-sm mx-3">
            <div className="team-banner-box">
              <img src={team04} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// components/Contact.js
export const Contact = () => {
  return (
    <section className="py-12 bg-white max-w-6xl mx-auto">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <h4 className="text-4xl font-bold mb-6 text-left">
            <span className="text-green-600">// </span>Contact Us
          </h4>
          <h1 className="text-5xl font-bold mb-4">
            We're here<br /><span className="text-green-700">to help.</span>
          </h1>
          <p className="text-gray-600 mb-6">
            Whether you're a teacher, professor, school, or university — reach
            out to us for support, membership, or collaboration.
          </p>
          <img
            src={contactArrowIcon}
            alt="Arrow"
            className="w-full max-w-xl footer-contact-arrow"
          />
        </div>

        {/* Right Form */}
        <div>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Full Name"
                className="border border-gray-300 rounded-md px-4 py-3 w-full form-control-custom"
              />
              <input
                type="email"
                placeholder="E-mail address"
                className="border border-gray-300 rounded-md px-4 py-3 w-full form-control-custom"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="border border-gray-300 rounded-md px-4 py-3 w-full form-control-custom"
            />
            <textarea
              rows="6"
              placeholder="Message"
              className="border border-gray-300 rounded-md px-4 py-3 w-full form-control-custom"
            ></textarea>
            <div className="flex items-center gap-3">
              <button
                type="submit"
                className="bg-[#3E8D5A] text-white px-6 py-2 rounded-full hover:bg-green-700 transition"
              >
                Send Message
              </button>
              <div className="text-green-600 text-2xl">
                <i className="bi bi-chevron-right"></i>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>

  );
}



export const Footer = () => {
  return (
    <footer className="footer-section bg-[#3E8D5A] text-white px-4 py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
        <div>
          <h6 className="text-5xl font-semibold">Take first Step For <br /> Education</h6>
          <div className="mt-2 flex items-center flex-wrap gap-2 mt-12" >
            <input type="email" placeholder="Enter email" className="custom-footer-input" />
            <button className="bg-white text-black rounded-[15px] px-4 py-1 -ml-24">Subscribe</button>
          </div>
        </div>

        <div className="text-lg">
          <h6>Or Reach us at</h6>
          <p>Email: support@educationrights.org</p>
          <p>Phone: +91-XXXXXXXXXX</p>
          <p>Address: [Your Office Address]</p>
          <div className="mt-18">Follow us on <br />{' '}
            <Link to="#">Facebook</Link> |{' '}
            <Link to="#">Instagram</Link> |{' '}
            <Link to="#">LinkedIn</Link> |{' '}
            <Link to="#">YouTube</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}



export default Education_organization_app