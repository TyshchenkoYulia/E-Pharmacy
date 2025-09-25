interface Review {
  name: string;
  photo: string;
  testimonial: string;
}

const reviews: Review[] = [
  {
    name: "Maria Tkachuk",
    photo: "https://i.imgur.com/hz6bZkb.png",
    testimonial:
      "I recently used this medical platform to book an appointment with a specialist, and I was impressed by how easy and user-friendly the process was. Highly recommended!",
  },
  {
    name: "Sergey Rybachok",
    photo: "https://i.imgur.com/FHMKqK5.png",
    testimonial:
      "I had a great experience using this medical platform to access my health records. This platform is a game-changer for managing my healthcare needs.",
  },
  {
    name: "Natalia Chatuk",
    photo: "https://i.imgur.com/UYCE7Rr.png",
    testimonial:
      "I recently had a virtual appointment with my doctor through this medical platform, and I was pleasantly surprised by how seamless the experience was.",
  },
];

export default function ReviewsItem() {
  const visibilityClasses = [
    "flex",
    "hidden tablet:flex",
    "hidden desktop:flex",
  ];

  return (
    <section
      className="mt-[64px] tablet:mt-[88px] px-4 flex justify-center 
    gap-[16px] desktop:gap-[28px]"
    >
      {reviews.map((review, idx) => (
        <div
          key={idx}
          className={`${visibilityClasses[idx]} relative flex flex-col items-center min-w-[280px]`}
        >
          {/* Фото */}
          <img
            src={review.photo}
            alt={review.name}
            className="absolute top-[-24px] left-1/2 -translate-x-1/2 w-16 h-16 
            rounded-full object-cover border-2 border-whitePrimary shadow-md"
          />

          {/* Картка */}
          <div className="bg-whitePrimary rounded-[27px] shadow-lg w-[280px] h-[232px] p-6 flex flex-col items-center justify-center text-center">
            <h3 className="font-bold text-[20px] leading-[30px] mt-8">
              {review.name}
            </h3>
            <p className="text-[16px] leading-[20px] text-secondaryText mt-4">
              {review.testimonial}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}
