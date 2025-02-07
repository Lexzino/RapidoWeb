import React, { useEffect } from "react";
import AOS from "aos";  // Import AOS


export default function AllBlogPosts() {
    useEffect(() => {
        AOS.init({
          duration: 8000, // Animation duration in ms
          easing: "ease-in-out", // Easing function
          once: true, // If true, the animation will only happen once
        });
      }, []);
    // Mock data for blog posts with corresponding images
    const blogPosts = [
        {
            id: 1,
            img: "/images/eberhard.svg",
            authorDate: "Alec Whitten • 1 Jan 2025",
            title: "Bill Walsh leadership lessons",
            description:
                "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
            tags: [
                { label: "Leadership", bgColor: "#F9F5FF", textColor: "#1A4402" },
                { label: "Management", bgColor: "#F9F5FF", textColor: "#1A4402" },
            ],
        },
        {
            id: 2,
            img: "/images/leon.svg",
            authorDate: "Demi WIlkinson • 1 Jan 2025",
            title: "PM mental models",
            description:
                "Mental models are simple expressions of complex processes or relationships.",
            tags: [
                { label: "Product", bgColor: "#F0F9FF", textColor: "#026AA2" },
                { label: "Research", bgColor: "#EEF4FF", textColor: "#FCB83F" },
                { label: "Frameworks", bgColor: "#FFF6ED", textColor: "#C4320A" },
            ],
        },
        {
            id: 3,
            img: "/images/nikolay.svg",
            authorDate: "Candice Wu • 1 Jan 2025",
            title: "What is Wireframing?",
            description:
                "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
            tags: [
                { label: "Design", bgColor: "#F9F5FF", textColor: "#1A4402" },
                { label: "Research", bgColor: "#EEF4FF", textColor: "#FCB83F" },
            ],
        },
        {
            id: 4,
            img: "/images/natali.svg",
            authorDate: "Natali Craig • 1 Jan 2025",
            title: "How collaboration makes us better designers",
            description:
                "Collaboration can make our teams stronger, and our individual designs better.",
            tags: [
                { label: "Design", bgColor: "#F9F5FF", textColor: "#1A4402" },
                { label: "Research", bgColor: "#EEF4FF", textColor: "#FCB83F"  },
            ],
        },
        {
            id: 5,
            img: "/images/drew.svg",
            authorDate: "Drew Cano • 1 Jan 2025",
            title: "Our top 10 Javascript frameworks to use",
            description:
                "JavaScript frameworks make development easy with extensive features and functionalities.",
            tags: [
                { label: "Software Development", bgColor: "#ECFDF3", textColor: "#027A48" },
                { label: "Tools", bgColor: "#FDF2FA", textColor: "#C11574" },
                { label: "SaaS", bgColor: "#FFF1F3", textColor: "#C01048" },
            ],
        },
        {
            id: 6,
            img: "/images/soundtrap.svg",
            authorDate: "Orlando Diggs • 1 Jan 2025",
            title: "Podcast: Creating a better CX Community",
            description:
                "Starting a community doesn’t need to be complicated, but how do you get started?",
            tags: [
                { label: "Podccasts", bgColor: "#F9F5FF", textColor: "#1A4402" },
                { label: "Customer Success", bgColor: "#F9F5FF", textColor: "#1A4402"},
            ],
        },
    ];
    const totalPages = 10; // Total number of pages for pagination
    const currentPage = 1; // Assume the current page is 1 for now
    const maxPageNumbersToShow = 5; // Maximum number of page numbers to display before showing ellipsis

    const generatePageNumbers = () => {
        const pageNumbers = [];

        // If the total pages are less than or equal to max, show all pages
        if (totalPages <= maxPageNumbersToShow) {
            for (let i = 1; i <= totalPages; i++) {
                pageNumbers.push(i);
            }
        } else {
            if (currentPage <= maxPageNumbersToShow - 2) {
                // If we are near the start, show the first few pages and last pages
                for (let i = 1; i <= maxPageNumbersToShow - 1; i++) {
                    pageNumbers.push(i);
                }
                pageNumbers.push("...");
                pageNumbers.push(totalPages);
            } else if (currentPage >= totalPages - (maxPageNumbersToShow - 2)) {
                // If we are near the end, show the last few pages and first pages
                pageNumbers.push(1);
                pageNumbers.push("...");
                for (let i = totalPages - (maxPageNumbersToShow - 2); i <= totalPages; i++) {
                    pageNumbers.push(i);
                }
            } else {
                // In the middle, show first, last, and current page group
                pageNumbers.push(1);
                pageNumbers.push("...");
                for (let i = currentPage - 1; i <= currentPage + 1; i++) {
                    pageNumbers.push(i);
                }
                pageNumbers.push("...");
                pageNumbers.push(totalPages);
            }
        }

        return pageNumbers;
    };

    return (
        <div className="w-full max-w-screen-xl mx-auto py-8 px-6">
            {/* Header */}
            <h2 className="text-2xl font-medium text-[#1A4402] mb-6">All Blog Posts</h2>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogPosts.map((post) => (
                    <div key={post.id} className="flex flex-col">
                        {/* Image */}
                        <img
                            src={post.img}
                            alt={post.title}
                            className="w-full h-[228px] object-cover mb-4"
                        />

                        {/* Author and Date */}
                        <p className="text-[#1A4402] text-sm mb-2">{post.authorDate}</p>

                        {/* Title */}
                        <h3 className="text-xl font-semibold text-[#1A1A1A] mb-2">
                            {post.title}
                        </h3>

                        {/* Description */}
                        <p className="text-[#667085] text-[16px] mb-4">{post.description}</p>

                        {/* Tags */}
                        <div className="flex flex-wrap space-x-2 text-sm">
                            {post.tags.map((tag, index) => (
                                <button
                                    key={index}
                                    className="px-2 py-1 rounded-2xl border-none cursor-pointer hover:underline"
                                    style={{
                                        backgroundColor: tag.bgColor,
                                        color: tag.textColor,
                                    }}
                                >
                                    {tag.label}
                                </button>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-14 w-full border-t-2 border-[#EAECF0]"></div>

           {/* Pagination */}
           <div className="flex items-center justify-center mt-10 space-x-2">
                {/* Previous Arrow */}
                <button className="flex items-center justify-center w-8 h-8 rounded-full bg-[#F2F4F7] text-[#667085] hover:bg-[#D9D9D9]">
                    ←
                </button>

                {/* Page Numbers */}
                {generatePageNumbers().map((page, index) => (
                    <button
                        key={index}
                        className={`flex items-center justify-center w-8 h-8 rounded-full ${
                            page === currentPage
                                ? "bg-[#1A4402] text-white"
                                : page === "..."
                                ? "text-[#667085]"
                                : "bg-[#F2F4F7] text-[#667085] hover:bg-[#D9D9D9]"
                        }`}
                    >
                        {page}
                    </button>
                ))}

                {/* Next Arrow */}
                <button className="flex items-center justify-center w-8 h-8 rounded-full bg-[#F2F4F7] text-[#667085] hover:bg-[#D9D9D9]">
                    →
                </button>
            </div>
        </div>
    );
}