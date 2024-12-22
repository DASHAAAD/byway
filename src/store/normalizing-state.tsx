import categoryImg from "@/image/astrology.png";
import courseImg from "@/image/card.png";

export const normalizingArr = [
  {
    category: {
      byId: {
        1: {
          id: "category1",
          label: "Astrology",
          description: "11 Courses",
          cover: categoryImg,
        },
        2: {
          id: "category2",
          label: "Astrology",
          description: "11 Courses",
          cover: categoryImg,
        },
        3: {
          id: "category3",
          label: "Astrology",
          description: "11 Courses",
          cover: categoryImg,
        },
        4: {
          id: "category4",
          label: "Astrology",
          description: "11 Courses",
          cover: categoryImg,
        },
      },
    },
    course: {
      byId: {
        1: {
          id: "course1",
          title: "Beginner’s Guide to Design",
          description: "By Ronald Richards",
          cover: courseImg,
          price: "$149.9",
        },
        2: {
          id: "course2",
          title: "Beginner’s Guide to Design",
          description: "By Ronald Richards",
          cover: courseImg,
          price: "$149.9",
        },
        3: {
          id: "course3",
          title: "Beginner’s Guide to Design",
          description: "By Ronald Richards",
          cover: courseImg,
          price: "$149.9",
        },
        4: {
          id: "course4",
          title: "Beginner’s Guide to Design",
          description: "By Ronald Richards",
          cover: courseImg,
          price: "$149.9",
        },
      },
    },
    review: {
      byId: {
        1: {
          id: "review1",
          content:
            "I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding.",
          createdAt: "22nd March, 2024",
        },
        2: {
          id: "review2",
          content:
            "I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding.",
          createdAt: "22nd March, 2024",
        },
        3: {
          id: "review3",
          content:
            "I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding.",
          createdAt: "22nd March, 2024",
        },
      },
    },
    user: {
      1: {
        id: "user1",
        email: "",
        name: "",
        headline: "",
        description: "",
        socials: [],
      },
    },
  },
];
