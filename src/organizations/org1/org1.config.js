import { help01, help02, help03, whyMatter01, whyMatter02, whyMatter03 } from "./assets";

const org1Config = {
    HerocardsData: [
        {
            title: "Become a Volunteer",
            description: "Service to others is the rent you pay for your room here on Earth",
            btnText: "Join Now",
            bgImage: "https://source.unsplash.com/400x300/?volunteer",
        },
        {
            title: "News & Updates",
            description: "Subscribe for updates, events, and impact stories. Stay informed with us.",
            btnText: "Check Now",
            bgImage: "https://source.unsplash.com/400x300/?news",
        },
        {
            title: "Make Donation",
            description: "It’s not how much we give but how much love we put into giving.",
            btnText: "Join Now",
            bgImage: "https://source.unsplash.com/400x300/?donation",
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
            bg: "#FBEFE7",
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
            bg: "#E7EEFB",
            img: whyMatter03,
        },
    ]
};

export default org1Config;
