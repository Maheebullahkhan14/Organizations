import { help01, help02, help03, whyMatter01, whyMatter02, whyMatter03, OrgLogo, heroCard01, heroCardIcon01, heroCardIcon02, heroCardIcon03 , testimonial_01 , testimonial_02 , testimonial_03 } from "./assets";

const org1Config = {
    logo: OrgLogo,
    HerocardsData: [
        {
            icon: heroCardIcon01,
            title: "Become a Volunteer",
            description: "Service to others is the rent you pay for your room here on Earth",
            btnText: "Join Now",
            bgImage: heroCard01,
        },
        {
            icon: heroCardIcon02,
            title: "News & Updates",
            description: "Subscribe for updates, events, and impact stories. Stay informed with us.",
            btnText: "Check Now",
            bgImage: heroCard01,
        },
        {
            icon: heroCardIcon03,
            title: "Make Donation",
            description: "It’s not how much we give but how much love we put into giving.",
            btnText: "Join Now",
            bgImage: heroCard01,
        },
    ],
    helpItems: [
        {
            title: "Volunteer",
            desc: "Join our programs and make an impact.",
            img: help01, // Replace with your actual image path
            cta: "Join Us Today",
        },
        {
            title: "Donate",
            desc: "Support our initiatives to build a better future for youth.",
            img: help02,
            cta: "Donate Now",
        },
        {
            title: "Raise Awareness",
            desc: "Share our mission and amplify youth voices.",
            img: help03,
            cta: "Spread the Word",
        },
    ],
    whyMatterItems: [
        {
            title: "Access to Education",
            desc: "We work to bridge this gap with resources and scholarships.",
            bg: "#F9EADE",
            img: whyMatter01,
        },
        {
            title: "Mental Health Support",
            desc: "Youth mental health issues are rising. Our programs provide guidance, counseling, and awareness.",
            bg: "rgba(0,0,0,0.3)",
            img: whyMatter02,
        },
        {
            title: "Amplifying Youth Voices",
            desc: "We empower youth to be decision-makers through advocacy.",
            bg: "#E5EEFF",
            img: whyMatter03,
        },
    ],
    testimonialData: [
        {
            image: testimonial_01,
            name: "Aditi, 19",
            title: "Meet young changemakers who have transformed their lives with our support.",
            desc: "Overcame barriers to education and now mentors other girls.",
            rating: 5,
        },
        {
            image: testimonial_02,
            name: "Riya, 20",
            title: "From struggle to success with guidance and education.",
            desc: "Now leading community youth projects.",
            rating: 5,
        },
        {
            image: testimonial_03,
            name: "Arjun, 21",
            title: "Turning dreams into reality with support and hope.",
            desc: "Built his own small startup and mentors others.",
            rating: 5,
        },
        {
            image: "https://randomuser.me/api/portraits/men/32.jpg",
            name: "Aditi, 19",
            title: "Meet young changemakers who have transformed their lives with our support.",
            desc: "Overcame barriers to education and now mentors other girls.",
            rating: 5,
        },
        {
            image: "https://randomuser.me/api/portraits/women/45.jpg",
            name: "Riya, 20",
            title: "From struggle to success with guidance and education.",
            desc: "Now leading community youth projects.",
            rating: 5,
        },
        {
            image: "https://randomuser.me/api/portraits/men/65.jpg",
            name: "Arjun, 21",
            title: "Turning dreams into reality with support and hope.",
            desc: "Built his own small startup and mentors others.",
            rating: 5,
        },
    ]
};

export default org1Config;
